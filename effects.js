(() => {
    'use strict';

    const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
    const printPreference = matchMedia('print');
    const pointerPreference = matchMedia('(hover: hover) and (pointer: fine)');
    const scene = document.querySelector('.architecture-scene');
    const portrait = document.querySelector('.portrait');
    const progress = document.querySelector('.reading-progress span');
    const animatedRegions = [scene, portrait].filter(Boolean);
    const visibleRegions = new Set();
    const sceneAnimations = [];
    const pendingReveals = new Set();
    let revealObserver;
    let scrollFrame = 0;
    let pointerFrame = 0;
    let pointerCard;
    let pointerX = 0;
    let pointerY = 0;
    let printing = false;
    const motionAllowed = () => !motionPreference.matches && !printPreference.matches && !printing && !document.hidden;

    if (portrait) {
        const rim = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        rim.classList.add('portrait-rim');
        rim.setAttribute('viewBox', '0 0 240 288');
        rim.setAttribute('aria-hidden', 'true');
        rim.innerHTML = '<rect class="rim-track" x="1" y="1" width="238" height="286" rx="3"/>' +
            '<rect class="rim-streak" x="1" y="1" width="238" height="286" rx="3" pathLength="100"/>' +
            '<rect class="rim-streak rim-streak--second" x="1" y="1" width="238" height="286" rx="3" pathLength="100"/>';
        portrait.append(rim);
    }

    // Trace packets on the actual route so their tails bend with its corners.
    // The orbit satellites keep their precomputed transform animation.
    if (scene && typeof Element.prototype.animate === 'function') {
        scene.querySelectorAll('[data-route]').forEach((packet, index) => {
            const route = document.getElementById(packet.dataset.route);
            const length = route.getTotalLength();
            if (packet.classList.contains('scene-packet')) {
                const layers = [[22, .1, 2], [14, .22, 2], [6, .5, 2], [.01, 1, 5]];
                layers.forEach(([tail, opacity, width]) => {
                    const trace = document.createElementNS('http://www.w3.org/2000/svg', 'use');
                    trace.setAttribute('href', '#' + route.id);
                    trace.setAttribute('stroke', width === 5 ? '#b7ffe7' : '#8affdb');
                    trace.setAttribute('stroke-width', width);
                    trace.setAttribute('stroke-dasharray', `${tail} ${length + 44}`);
                    packet.append(trace);
                    const frames = [0, .125, .875, 1].map(fraction => ({
                        strokeDashoffset: `${tail - fraction * length}px`,
                        opacity: fraction === 0 || fraction === 1 ? 0 : opacity,
                        offset: fraction,
                    }));
                    const animation = trace.animate(frames, {
                        duration: 4600,
                        delay: -index * 920,
                        iterations: Infinity,
                        easing: 'linear',
                    });
                    animation.pause();
                    sceneAnimations.push(animation);
                });
                return;
            }
            const frames = [];
            let previousAngle;
            for (let step = 0; step <= 64; step++) {
                const fraction = step / 64;
                const distance = fraction * length;
                const point = route.getPointAtLength(distance);
                const before = route.getPointAtLength(Math.max(0, distance - .5));
                const after = route.getPointAtLength(Math.min(length, distance + .5));
                let angle = Math.atan2(after.y - before.y, after.x - before.x) * 180 / Math.PI;
                if (previousAngle !== undefined) {
                    while (angle - previousAngle > 180) angle -= 360;
                    while (angle - previousAngle < -180) angle += 360;
                }
                previousAngle = angle;
                frames.push({
                    transform: `translate(${point.x}px, ${point.y}px) rotate(${angle}deg)`,
                    opacity: Math.min(1, fraction * 8, (1 - fraction) * 8),
                    offset: fraction,
                });
            }
            const animation = packet.animate(frames, {
                duration: index < 4 ? 4600 : 18000,
                delay: index < 4 ? -index * 920 : -(index - 4) * 9000,
                iterations: Infinity,
                easing: 'linear',
            });
            animation.pause();
            sceneAnimations.push(animation);
        });
    }

    function syncMotion() {
        const enabled = motionAllowed();
        document.body.classList.toggle('effects-paused', !enabled);
        animatedRegions.forEach(region => {
            region.classList.toggle('is-animating', enabled && visibleRegions.has(region));
        });
        sceneAnimations.forEach(animation => {
            if (enabled && visibleRegions.has(scene)) animation.play();
            else animation.pause();
        });
        if (!enabled) {
            pointerCard?.classList.remove('is-lit');
            cancelAnimationFrame(pointerFrame);
            pointerFrame = 0;
        }
    }

    if ('IntersectionObserver' in window) {
        const regionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) visibleRegions.add(entry.target);
                else visibleRegions.delete(entry.target);
            });
            syncMotion();
        });
        animatedRegions.forEach(region => regionObserver.observe(region));
    } else {
        animatedRegions.forEach(region => visibleRegions.add(region));
    }

    function showAllContent() {
        revealObserver?.disconnect();
        pendingReveals.forEach(element => {
            element.classList.remove('reveal-ready', 'is-revealed');
            element.style.removeProperty('--reveal-delay');
        });
        pendingReveals.clear();
    }

    if (!motionPreference.matches && !printPreference.matches && 'IntersectionObserver' in window) {
        const selector = '.section-heading, .timeline-item__head, .career-growth, .experience-card > .detail-list, ' +
            '.experience-card > .career-path, .subsection-heading, .career-result, .work-project, ' +
            '.project-card, .education-block, .skill-group, .work-preference';
        revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const element = entry.target;
                element.classList.add('is-revealed');
                revealObserver.unobserve(element);
            });
        }, { threshold: .05, rootMargin: '0px 0px -24px 0px' });
        document.querySelectorAll(selector).forEach(element => {
            const siblings = [...element.parentElement.children].filter(child => child.matches(selector));
            element.style.setProperty('--reveal-delay', Math.min(siblings.indexOf(element), 2) * 65 + 'ms');
            element.classList.add('reveal-ready');
            pendingReveals.add(element);
            element.addEventListener('transitionend', event => {
                if (event.target !== element || event.propertyName !== 'opacity' || !element.classList.contains('is-revealed')) return;
                element.classList.remove('reveal-ready', 'is-revealed');
                element.style.removeProperty('--reveal-delay');
                pendingReveals.delete(element);
            });
            revealObserver.observe(element);
        });
    }

    document.querySelectorAll('.work-project, .project-card, .skills-section, .education-block').forEach(card => {
        card.classList.add('has-spotlight');
        card.addEventListener('pointermove', event => {
            if (!motionAllowed() || !pointerPreference.matches || event.pointerType === 'touch') return;
            if (pointerCard !== card) pointerCard?.classList.remove('is-lit');
            pointerCard = card;
            pointerX = event.clientX;
            pointerY = event.clientY;
            card.classList.add('is-lit');
            if (pointerFrame) return;
            pointerFrame = requestAnimationFrame(() => {
                pointerFrame = 0;
                if (!pointerCard?.classList.contains('is-lit')) return;
                const box = pointerCard.getBoundingClientRect();
                pointerCard.style.setProperty('--light-x', pointerX - box.left + 'px');
                pointerCard.style.setProperty('--light-y', pointerY - box.top + 'px');
            });
        }, { passive: true });
        const leave = () => card.classList.remove('is-lit');
        card.addEventListener('pointerleave', leave);
        card.addEventListener('pointercancel', leave);
    });

    function queueProgress() {
        if (!progress || scrollFrame) return;
        scrollFrame = requestAnimationFrame(() => {
            scrollFrame = 0;
            const distance = document.documentElement.scrollHeight - innerHeight;
            const fraction = distance > 0 ? Math.max(0, Math.min(1, scrollY / distance)) : 0;
            progress.style.transform = `scaleX(${fraction})`;
        });
    }

    window.addEventListener('scroll', queueProgress, { passive: true });
    window.addEventListener('resize', queueProgress, { passive: true });
    if ('ResizeObserver' in window) new ResizeObserver(queueProgress).observe(document.querySelector('.resume-document'));
    motionPreference.addEventListener('change', () => {
        if (motionPreference.matches) showAllContent();
        syncMotion();
    });
    printPreference.addEventListener('change', () => {
        if (printPreference.matches) showAllContent();
        syncMotion();
    });
    window.addEventListener('beforeprint', () => {
        printing = true;
        showAllContent();
        syncMotion();
    });
    window.addEventListener('afterprint', () => {
        printing = false;
        syncMotion();
    });
    document.addEventListener('visibilitychange', syncMotion);
    document.addEventListener('focusin', event => {
        const hiddenParent = event.target.closest('.reveal-ready');
        if (hiddenParent) hiddenParent.classList.add('is-revealed');
    });
    syncMotion();
    queueProgress();
})();
