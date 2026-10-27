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
        'page.title': 'Alexander Ozhereliev | Team Lead / AI Engineer',
        'page.desc': 'Alexander Ozhereliev — Team Lead / AI Engineer. Technical team leadership, architecture, Python/FastAPI, React/Next.js, LLMs, ASR, and computer vision.',
        'skip': 'Skip to work experience',
        'lang.label': 'Resume language',
        'ctrl.ru': 'RU',
        'ctrl.print': 'Print / PDF',
        'name': 'Alexander Ozhereliev',
        'city': 'Tyumen',
        'lead1': 'I lead AI service and web application development: plan team work, choose technologies, and design architecture. I continue coding alongside the developers, building Python/FastAPI backends and React/Next.js and TypeScript frontends.',
        'lead.ai': 'I build solutions for speech recognition and analysis, document processing, and computer vision. I integrate LLMs/VLMs and RAG, and optimize inference with NVIDIA Triton and TensorRT.',
        'lead2': 'I develop my own gaming platform, AiNoCraft, and VoidLabs, my custom development practice. I take projects from requirements and architecture through deployment and maintenance.',
        'work.format': 'Remote work',
        'contacts.title': 'Contacts',
        'contact.phone': 'Phone',
        'contact.project': 'Project',
        'contact.studio': 'Studio',
        'sec.exp.title': 'Work Experience',
        'job1.title': 'Team Lead / AI Engineer',
        'job1.company': 'IC8',
        'job1.period': 'October 2022 — Present',
        'job1.growth': 'Technical Support → Backend Developer → AI Engineer. As the AI practice grew, I took on technical team leadership. I now serve as the development department lead while continuing to code alongside the team.',
        'job1.leadership': 'Plan development work: break down and estimate tasks, allocate work, and align requirements with other teams.',
        'job1.architecture': 'Choose technologies and design service interactions. Covered for the system architect, ensuring consistent technical decisions.',
        'job1.li1': 'Build AI services and fullstack applications alongside the team: Python/FastAPI backends, React/Next.js and TypeScript frontends, and neural network integrations.',
        'job1.li2': 'Design APIs and data models, implement business logic, and integrate external systems. Work with PostgreSQL, Redis, and Kafka.',
        'job1.li3': 'Previously worked on an enterprise WMS: SQL/PL/SQL, data schemas, packages and procedures, query optimization, reporting, and ETL.',
        'job1.li5': 'Deploy services with Docker and contribute to Kubernetes migration. Work with CI/CD, monitoring, logging, and access control.',
        'job1.speech.title': 'Call Center Speech Analytics',
        'job1.speech.desc': 'An ASR and LLM system for phone call analysis: topics and reasons for calling, sales-script evaluation, transcript search, and reporting.',
        'job1.speech.li1': 'Separate the API, audio processing, and ASR into services. Implement a job queue, retries on failure, audio storage in MinIO, and result storage in PostgreSQL.',
        'job1.speech.li2': 'Integrate GigaAM with GPU inference through Triton / TensorRT, Silero VAD speech detection, and speaker diarization. Connect transcripts to LLM analysis and call evaluation.',
        'job1.speech.li3': 'Develop the Next.js, React, and TypeScript interface: transcript search, call review, dashboards, quality evaluation, and administration.',
        'job1.llm.title': 'Enterprise LLM Platform',
        'job1.llm.desc': 'Develop AI infrastructure for internal services: deploy LLMs/VLMs, integrate models through APIs, and optimize GPU utilization.',
        'job3.title': 'Project Creator / Fullstack Developer',
        'job3.period': 'January 2026 — Present',
        'sec.proj.title': 'VoidLabs Projects',
        'projects.intro': 'Develop VoidLabs, my custom development practice for web services, AI solutions, bots, and integrations. Define architecture, write code, and coordinate project contributors.',
        'proj1.desc': 'Created and continue developing a Minecraft gaming platform: a web portal, user accounts, an admin panel, a desktop launcher, a game server, and custom mods.',
        'proj1.role': 'Responsible for architecture, core development, and contributor coordination. Align the web application, launcher, and game components.',
        'proj1.li1': 'Design authentication, user and role management, the store, and launcher APIs.',
        'proj1.li2': 'Manage k3s deployment through Helm and GitHub Actions, client updates, and S3-compatible file storage.',
        'proj2.title': 'AI Ad — Outdoor Advertising Video Analytics',
        'proj2.desc': 'Developed and deployed a video analytics system to production: advertising detection and tracking, brand classification, and geolocation. Results are available on a map, in charts, and in reports.',
        'proj2.li1': 'Lead backend, ML pipeline, and interface development. Align video-processing APIs and result formats across components.',
        'proj2.li2': 'Separate APIs from compute workers, manage the task queue, and transfer video through MinIO.',
        'proj2.li3': 'Use Qwen3-VL through llama.cpp to review annotations and brand recognition.',
        'proj3.type': 'Booking Service',
        'proj3.desc': 'An intercity trip booking service. Passengers choose trips on the website, while dispatchers manage routes, departures, and reservations in a separate interface.',
        'proj3.li1': 'Design the backend and interfaces. Model segment-based seat inventory, calculate stop-to-stop fares, and define the booking lifecycle.',
        'proj3.li2': 'Ensure booking idempotency: a repeated request does not create another reservation. Prevent concurrent seat overselling so parallel requests cannot sell the same seat twice.',
        'proj3.li3': 'Develop phone verification and SMS provider integration.',
        'proj4.type': 'Gamification / VK Bot',
        'proj4.desc': 'A VK gamification platform. Users complete tasks, earn points, gain levels, and unlock achievements. A referral system lets them invite new participants, and the reward store lets them exchange points for prizes.',
        'proj4.li1': 'Lead development of the VK callback server and admin panel. Project contributors use the panel to manage content and award prizes.',
        'proj4.li2': 'Connect VK event processing to balance updates and transaction history. Develop business logic and administrative tools.',
        'sec.edu.title': 'Education & Work Preferences',
        'edu.university': 'Kurgan State University',
        'edu.degree': 'Higher Education, Faculty of Transport Systems',
        'edu.note': 'High-Voltage Power Engineering and Electrical Engineering · 2020',
        'edu.certificate': 'Data Scientist Certificate · 2022',
        'edu.li1': 'English — B1.',
        'edu.li2': 'Work remotely. Available for business travel.',
        'edu.li3': "Category B driver's license.",
        'sec.skills.title': 'Skills',
        'skill.lead.title': 'Technical Leadership',
        'skill.lead.stack': 'Team leadership, planning, task breakdown and estimation, software architecture.',
        'skill.lead.desc': 'Set technical direction, coordinate developers, and align decisions across teams while continuing to contribute code.',
        'skill.backend.title': 'Backend & Architecture',
        'skill.backend.desc': 'Design layered architecture and API contracts. Move long-running tasks to background workers and account for operation idempotency.',
        'skill.frontend.desc': 'Develop web interfaces, user accounts, and admin panels. Connect them to APIs and server-side access rules.',
        'skill.llm.desc': 'Work with context and data retrieval, and integrate language and multimodal models into services. Use AI tools for software development.',
        'skill.data.title': 'Databases',
        'skill.data.desc': 'Design data models and transactions. Optimize SQL queries and indexes, and contribute to ETL processes.',
        'skill.integrations.title': 'Integrations & Security',
        'skill.integrations.desc': 'Configure authentication, session management, and access control. Integrate external APIs and coordinate data exchange between services.',
        'skill.devops.title': 'Infrastructure & Testing',
        'skill.devops.desc': 'Configure CI/CD, migrations, and integration tests. Work with monitoring and backups.',
        'skill.ai.desc': 'Prepare data and train models. Work with video analytics, detection and tracking, and speech processing.',
        'skill.extra.title': 'Desktop & Game Systems',
        'skill.extra.desc': 'Develop desktop clients and launchers, write game mods, and connect them to server-side services.',
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
