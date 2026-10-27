(() => {
    'use strict';

    // The Russian HTML is the source of truth and remains readable without JavaScript.
    const textElements = [...document.querySelectorAll('[data-i18n]')];
    const ariaElements = [...document.querySelectorAll('[data-i18n-aria]')];
    const altElements = [...document.querySelectorAll('[data-i18n-alt]')];
    const metaDescription = document.querySelector('meta[name="description"]');
    const ru = {
        'page.title': document.title,
        'page.desc': metaDescription.content,
    };
    textElements.forEach(element => {
        ru[element.dataset.i18n] = element.textContent.trim();
    });
    ariaElements.forEach(element => {
        ru[element.dataset.i18nAria] = element.getAttribute('aria-label');
    });

    const en = {
        'page.title': 'Alexander Ozhereliev | AI Engineer / Fullstack Developer / Team Lead',
        'page.desc': 'Alexander Ozhereliev — AI Engineer / Fullstack Developer / Team Lead. 3 years of commercial development, leadership of two developers, architecture and AI products.',
        'skip': 'Skip to work experience',
        'lang.label': 'Resume language',
        'ctrl.ru': 'RU',
        'ctrl.print': 'Print / PDF',
        'name': 'Alexander Ozhereliev',
        'city': 'Tyumen',
        'lead1': 'Fullstack and AI developer with 3 years of commercial experience. For the past 4 months, I have served as a Team Lead, managing two developers and guiding AI product architecture and technical development.',
        'lead.ai': 'I continue coding and making key technical decisions: build Python/FastAPI backends, React/Next.js and TypeScript frontends, integrate neural network models, and work on infrastructure.',
        'lead2': 'Develop AiNoCraft, a live gaming platform. Alongside my primary role, I deliver client web services, integrations, and AI solutions.',
        'work.format': 'Remote work',
        'contacts.title': 'Contacts',
        'contact.phone': 'Phone',
        'sec.exp.title': 'Work Experience',
        'job1.title': 'AI Engineer / Fullstack Developer / Team Lead',
        'job1.company': 'IC8',
        'job1.period': 'October 2022 — Present',
        'job1.growth': 'Joined the company in technical support, then moved into backend development. As the AI practice grew, I switched to building services with neural network models and gradually took on architecture, technology choices, and technical team leadership.',
        'job1.leadership': 'Plan, break down, assign, and estimate AI product development tasks.',
        'job1.architecture': 'Design service architecture and choose technologies and technical approaches.',
        'job1.li1': 'Build Python/FastAPI backends and React, Next.js, and TypeScript frontends. Design REST APIs, database structures, and service integrations.',
        'job1.li5': 'Deploy applications with Docker and Kubernetes. Work with CI/CD, monitoring, logging, and access control.',
        'job1.speech.title': 'Speech Analytics System',
        'job1.speech.desc': 'Reworked a phone call recognition and analysis system together with another developer. Split the application into independent services, optimized audio processing, and introduced GigaAM with GPU inference through Triton/TensorRT.',
        'job1.llm.title': 'Enterprise LLM Platform',
        'job1.llm.desc': 'Designed a centralized platform architecture for language and multimodal models. Coordinate its development, integration with internal products, and GPU infrastructure optimization.',
        'job3.title': 'Project Creator / Fullstack Developer',
        'job3.period': 'January 2026 — Present',
        'sec.proj.title': 'Personal Projects & Freelance',
        'projects.intro': 'Alongside my primary role, I build personal projects and deliver web services, integrations, and AI solutions for clients. I work on client projects as an independent developer.',
        'proj1.desc': 'Created and continue developing a Minecraft gaming platform: a web portal, user accounts, an admin panel, a desktop launcher, a game server, and custom mods.',
        'proj1.li1': 'Built a FastAPI backend and React frontend with authentication, user and role management, and a game store.',
        'proj1.li2': 'Connected the web platform, desktop launcher, and game server through APIs.',
        'proj2.title': 'Outdoor Advertising Analytics · Computer Vision',
        'proj2.desc': 'Independently developed and deployed a video analytics system to production. It detects advertising structures, classifies brands using a VLM, geolocates results, and produces route analytics to identify problematic advertising locations.',
        'proj3.type': 'In Development',
        'proj3.desc': 'An intercity trip booking service. Develop the backend and interfaces, segment-based seat inventory, fares, reservations, and phone verification.',
        'proj4.type': 'Launched',
        'proj4.desc': 'A VK gamification platform with tasks, achievements, and rewards. Implemented the callback server, points accounting, referrals, reward store, and administration panel.',
        'sec.edu.title': 'Education & Work Preferences',
        'edu.university': 'Kurgan State University',
        'edu.degree': 'Higher Education, Faculty of Transport Systems',
        'edu.note': 'High-Voltage Power Engineering and Electrical Engineering · 2020',
        'edu.li1': 'English — B1.',
        'edu.li2': 'Work remotely. Available for business travel.',
        'edu.li3': 'Category B driver\'s license.',
        'sec.skills.title': 'Skills',
        'skill.lead.title': 'Leadership & Architecture',
        'skill.lead.stack': 'Team Lead, development management, planning and task breakdown, code review, software architecture.',
        'skill.lead.desc': 'Lead a small team, choose technical approaches, and help developers solve complex problems.',
        'skill.backend.desc': 'Design APIs, database structures, and service interactions.',
        'skill.frontend.desc': 'Build React and Next.js web applications and connect interfaces to server-side logic.',
        'skill.data.title': 'Databases',
        'skill.data.desc': 'Work with relational data, caching, and S3-compatible file storage.',
        'skill.devops.title': 'Infrastructure',
        'skill.devops.desc': 'Deploy and maintain applications, configure CI/CD, monitoring, logging, and access control.',
        'skill.ai.desc': 'Work with LLMs/VLMs, computer vision, speech recognition, and document processing. Optimize inference and GPU utilization.',
        'job1.team': 'Coordinate two developers who primarily work on LLMs. Responsible for planning, task allocation, and technical delivery. Continue writing code, independently implementing components and developing alongside the team.',
        'job1.review': 'Conduct code reviews and help developers solve complex technical problems.',
        'job1.collaboration': 'Work with other teams on requirements and product development planning.',
        'job1.ai': 'Build AI services for computer vision, speech recognition, and document processing. Integrate LLMs/VLMs and design data processing pipelines.',
        'job1.results': 'Within my first 4 months of technical leadership, delivered 3 AI products to production with the team: outdoor advertising video analytics, speech analytics, and an enterprise LLM platform. Designed architecture, coordinated development, and implemented part of the functionality myself.',
        'proj2.metric': 'Processes approximately 4–5 hours of video each week.',
        'job1.speech.metric': 'In load tests, the full pipeline reached approximately 5,000 calls per hour.',
        'job1.speech.status': 'The system is in production and is used to analyze calls, identify conversation topics, and detect customer issues.',
        'job1.llm.models': 'The platform brings together LLMs/VLMs, guardrails, and tools for building AI agents. We are developing agent-based automation for employee workflows.',
        'proj1.team': 'Develop the project with another developer. Responsible for the overall architecture, key technical decisions, development, and infrastructure.',
        'proj1.li3': 'Set up Kubernetes (k3s) deployment using Helm and GitHub Actions.',
        'proj1.li4': 'Develop game client updates, file storage, and interactions with server components.',
        'proj1.status': 'Available to users: they can register, install the client, and play.',
        'projects.goal': 'I prefer products where I can influence architecture, technical decisions, and development organization. I want to grow as a technical leader while continuing hands-on development.',
        'skill.backend.stack': 'Python, FastAPI, REST API, asyncio, SQLAlchemy, Pydantic, Alembic, background tasks, integrations.',
        'skill.devops.stack': 'Linux, Docker, Docker Compose, Kubernetes, Helm, GitLab CI/CD, GitHub Actions, Nginx, monitoring and logging.',
        'job2.title': 'System Administrator',
        'job2.company': 'Teplo Tyumeni — SUENKO branch',
        'job2.period': 'September 2020 — September 2022',
        'job2.li1': 'Administered Windows Server and Linux systems and maintained corporate IT infrastructure.',
        'job2.li2': 'Configured local networks, network equipment, VLANs, DHCP, DNS, and routing.',
        'job2.li3': 'Worked with Active Directory, Group Policy, and access control.',
        'job2.li4': 'Handled monitoring, backups, troubleshooting, and automation of administration tasks.',
        'proj1.type': 'Live Platform',
        'edu.certificate': 'Data Scientist Certificate · 2022',
    };

    const translations = { ru, en };
    const langSwitch = document.getElementById('lang-switch');
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const printPreference = window.matchMedia('print');
    const cipherTarget = document.querySelector('h1');
    const activeCipher = new Map();
    let cipherFrame = 0;
    let lastCipherTick = 0;
    let currentLanguage;

    cipherTarget.classList.add('cipher-target');

    function readPreference(key) {
        try { return localStorage.getItem(key); }
        catch { return null; }
    }

    function savePreference(key, value) {
        try { localStorage.setItem(key, value); }
        catch { /* Controls still work when storage is unavailable. */ }
    }

    function selectButton(group, value) {
        group.querySelectorAll('button').forEach(button => {
            const active = button.dataset.value === value;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        updateSwitch(group);
    }

    function updateSwitch(group) {
        const active = group.querySelector('.is-active');
        group.style.setProperty('--switch-left', active.offsetLeft + 'px');
        group.style.setProperty('--switch-width', active.offsetWidth + 'px');
    }

    function finishCipherEntry(entry) {
        entry.layer.remove();
        entry.source.replaceWith(document.createTextNode(entry.text));
        entry.element.classList.remove('is-deciphering');
        activeCipher.delete(entry.element);
    }

    function finishCipher() {
        cancelAnimationFrame(cipherFrame);
        cipherFrame = 0;
        activeCipher.forEach(finishCipherEntry);
    }

    function cipherSymbol(character) {
        const pool = /\p{Script=Cyrillic}/u.test(character)
            ? '01АБВГДЕЗИКЛМНОПРСТУФХ#%'
            : '01ABCDEFGHJKLMNPRSTUVXYZ#%';
        return pool[Math.floor(Math.random() * pool.length)];
    }

    function updateCipher(now) {
        if (now - lastCipherTick >= 45) {
            lastCipherTick = now;
            activeCipher.forEach(entry => {
                const progress = Math.max(0, Math.min(1, (now - entry.start) / 580));
                if (progress === 1) {
                    finishCipherEntry(entry);
                    return;
                }
                entry.glyphs.forEach((glyph, index) => {
                    const revealed = progress >= 0.1 + (index / entry.glyphs.length) * 0.75;
                    if (revealed) {
                        if (!glyph.revealed) glyph.element.textContent = glyph.character;
                        glyph.revealed = true;
                    } else if (glyph.encrypted) {
                        glyph.element.textContent = cipherSymbol(glyph.character);
                    }
                });
            });
        }
        cipherFrame = activeCipher.size ? requestAnimationFrame(updateCipher) : 0;
    }

    function animateText(element, delay = 0) {
        if (motionPreference.matches || printPreference.matches || document.hidden || activeCipher.has(element)) return;
        const text = element.textContent;
        if (!text.trim()) return;

        const source = document.createElement('span');
        source.className = 'cipher-source';
        source.textContent = text;
        const layer = document.createElement('span');
        layer.className = 'cipher-layer';
        layer.setAttribute('aria-hidden', 'true');
        element.replaceChildren(source, layer);

        // Measure the unchanged source, so symbols cannot shift lines or nearby blocks.
        const origin = layer.getBoundingClientRect();
        const range = document.createRange();
        const fragment = document.createDocumentFragment();
        const glyphs = [];
        let offset = 0;
        for (const character of text) {
            const nextOffset = offset + character.length;
            if (!/\s/u.test(character)) {
                range.setStart(source.firstChild, offset);
                range.setEnd(source.firstChild, nextOffset);
                const rect = range.getBoundingClientRect();
                const glyph = document.createElement('span');
                glyph.className = 'cipher-glyph';
                glyph.style.left = (rect.left - origin.left) + 'px';
                glyph.style.top = (rect.top - origin.top) + 'px';
                glyph.style.width = rect.width + 'px';
                glyph.style.height = rect.height + 'px';
                glyph.style.lineHeight = rect.height + 'px';
                const encrypted = /[\p{L}\p{N}]/u.test(character);
                glyph.textContent = encrypted ? cipherSymbol(character) : character;
                fragment.append(glyph);
                glyphs.push({ element: glyph, character, encrypted, revealed: false });
            }
            offset = nextOffset;
        }
        layer.append(fragment);
        element.classList.add('is-deciphering');
        activeCipher.set(element, { element, text, source, layer, glyphs, start: performance.now() + delay });
        if (!cipherFrame) cipherFrame = requestAnimationFrame(updateCipher);
    }

    function applyLang(lang) {
        if (currentLanguage === lang) return;
        finishCipher();
        const dict = translations[lang];
        document.documentElement.lang = lang;
        document.body.dataset.lang = lang;
        textElements.forEach(element => {
            element.textContent = dict[element.dataset.i18n];
        });
        ariaElements.forEach(element => {
            element.setAttribute('aria-label', dict[element.dataset.i18nAria]);
        });
        altElements.forEach(element => {
            element.alt = dict[element.dataset.i18nAlt];
        });
        document.title = dict['page.title'];
        metaDescription.content = dict['page.desc'];
        selectButton(langSwitch, lang);
        currentLanguage = lang;
    }

    langSwitch.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            applyLang(button.dataset.value);
            savePreference('resume-lang', button.dataset.value);
        });
    });
    document.getElementById('print-button').addEventListener('click', () => {
        finishCipher();
        window.print();
    });
    window.addEventListener('beforeprint', finishCipher);
    printPreference.addEventListener('change', event => {
        if (event.matches) finishCipher();
    });
    motionPreference.addEventListener('change', () => {
        finishCipher();
    });
    window.addEventListener('resize', () => {
        finishCipher();
        updateSwitch(langSwitch);
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) finishCipher();
    });

    applyLang(readPreference('resume-lang') === 'en' ? 'en' : 'ru');
    animateText(cipherTarget);
})();
