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
        'page.title': 'Alexander Ozhereliev | Fullstack & AI Engineer',
        'page.desc': 'Alexander Ozhereliev — Fullstack & AI Engineer. Python, FastAPI, React, TypeScript, LLM, RAG, ML/DL. Personal projects and custom software development.',
        'skip': 'Skip to work experience',
        'theme.label': 'Color theme',
        'lang.label': 'Resume language',
        'ctrl.light': 'Light',
        'ctrl.dark': 'Dark',
        'ctrl.ru': 'RU',
        'ctrl.print': 'Print / PDF',
        'name': 'Alexander Ozhereliev',
        'city': 'Kurgan',
        'lead1': 'I develop web applications with Python/FastAPI backends and React/TypeScript frontends. I design APIs and data models, connect interfaces to server-side logic, and support service deployment.',
        'lead.ai': 'I work with LLMs and RAG, prepare data, and train ML/DL models. I integrate AI into services for data retrieval, video analysis, and speech processing.',
        'lead2': 'Alongside my primary role, I lead my own projects and take on custom development work. I write code, define the architecture, and coordinate contributors. After launch, I continue developing and maintaining the services.',
        'work.format': 'Remote work',
        'contacts.title': 'Contacts',
        'contact.phone': 'Phone',
        'contact.project': 'Project',
        'contact.studio': 'Studio',
        'sec.exp.title': 'Work Experience',
        'job1.title': 'Lead Python Backend Engineer',
        'job1.company': 'IC8',
        'job1.period': 'February 2024 — Present',
        'job1.li1': 'Develop and maintain Python and FastAPI backend services, implementing server-side logic for enterprise systems and data processing.',
        'job1.li2': 'Design APIs and data models, implement business logic, and integrate external systems. Work with PostgreSQL, Redis, and Kafka.',
        'job1.li3': 'Develop SQL and PL/SQL logic for an enterprise WMS: data schemas, packages, procedures, and functions. Optimize queries and indexes, and maintain database changes.',
        'job1.li4': 'Automate reporting and contribute to ETL processes for data processing and transfer.',
        'job1.li5': 'Automate testing and CI/CD. Maintain production environments and investigate issues that arise while services are running.',
        'job3.title': 'Project Creator / Fullstack Developer',
        'job3.period': 'January 2026 — Present',
        'job4.company': 'Freelance',
        'job4.period': 'January 2025 — March 2025',
        'job4.li1': 'Built AI pipelines for speech processing: recognition, entity extraction, and conversion of the results into structured data.',
        'job4.li2': 'Worked with Whisper, Hugging Face Transformers, and PyTorch. Configured post-processing and result validation for use in services.',
        'job5.title': 'System Administrator',
        'job5.company': 'ConsultantPlus',
        'job5.period': 'October 2022 — February 2024',
        'job5.li1': 'Maintained Linux and Windows Server infrastructure. Worked with VLAN, DHCP, DNS, routing, and firewalls.',
        'job5.li2': 'Configured backups and monitoring. Contributed to ETL migration and CRM data synchronization.',
        'sec.proj.title': 'My Projects',
        'projects.intro': 'I created these projects and lead their development. I define the architecture, write code, and coordinate contributors. I am responsible for component integration and ongoing development.',
        'proj1.type': 'Gaming Platform',
        'proj1.desc': 'A Minecraft project connecting a web portal and admin panel with a desktop launcher, game server, and custom mods.',
        'proj1.li1': 'Design authentication, user and role management, the store, and launcher APIs. Coordinate how the website, launcher, and server components interact.',
        'proj1.li2': 'Manage service deployment to k3s through Helm and GitHub Actions. Configure client updates and S3-compatible file storage.',
        'proj2.type': 'Video Analytics / Computer Vision',
        'proj2.desc': 'A system for evaluating outdoor advertising visibility from video. It detects and tracks advertising structures, classifies brands, and calculates route-level metrics.',
        'proj2.li1': 'Lead backend, ML pipeline, and web interface development. Align video-processing APIs and result formats between the compute layer and the interface.',
        'proj2.li2': 'Separate APIs from compute workers, manage the task queue, and transfer video through MinIO. Connect processing results to the map and reports in the web interface.',
        'proj2.li3': 'Review annotations and brand recognition with Qwen3-VL running through llama.cpp.',
        'proj3.type': 'Booking Service',
        'proj3.desc': 'An intercity trip booking service. Passengers choose trips on the website, while dispatchers manage routes, departures, and reservations in a separate interface.',
        'proj3.li1': 'Design the backend and interfaces. Model segment-based seat inventory, calculate stop-to-stop fares, and define the booking lifecycle.',
        'proj3.li2': 'Ensure booking idempotency: a repeated request does not create another reservation. Prevent concurrent seat overselling so parallel requests cannot sell the same seat twice.',
        'proj3.li3': 'Develop phone verification and SMS provider integration.',
        'proj4.type': 'Gamification / VK Bot',
        'proj4.desc': 'A VK gamification platform. Users complete tasks, earn points, gain levels, and unlock achievements. A referral system lets them invite new participants, and the reward store lets them exchange points for prizes.',
        'proj4.li1': 'Lead development of the VK callback server and admin panel. Project contributors use the panel to manage content and award prizes.',
        'proj4.li2': 'Connect VK event processing to balance updates and transaction history. Develop business logic and administrative tools.',
        'projects.additional': 'Additional Projects',
        'proj5.desc': 'An integration service that receives webhooks from Tilda and queues jobs in PostgreSQL. A background process transfers files to Nextcloud through WebDAV. Configure retries for failed transfers and deduplication.',
        'proj6.desc': 'A video-based queue monitoring service that detects and tracks people, measures zone occupancy, and sends Telegram notifications.',
        'services.title': 'Custom Software Development',
        'services.backend': 'Build web applications: backends, frontends, APIs, databases, and admin interfaces. Connect user workflows to server-side logic.',
        'services.integrations': 'Integrate external APIs, build bots, and automate data exchange. Use background processes for long-running tasks.',
        'services.ai': 'Integrate LLMs and RAG into AI services, and develop ML/DL pipelines for video and speech processing.',
        'sec.edu.title': 'Education & Work Preferences',
        'edu.university': 'Kurgan State University',
        'edu.degree': 'Higher Education, Faculty of Transport Systems',
        'edu.note': 'High-Voltage Power Engineering and Electrical Engineering · 2020',
        'edu.li1': 'English — B1.',
        'edu.li2': 'Work remotely. Available for business travel.',
        'edu.li3': "Category B driver's license.",
        'sec.skills.title': 'Skills',
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
    const themeSwitch = document.getElementById('theme-switch');
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

    function applyTheme(theme) {
        finishCipher();
        document.documentElement.dataset.theme = theme;
        document.body.dataset.theme = theme;
        selectButton(themeSwitch, theme);
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
        updateSwitch(themeSwitch);
        currentLanguage = lang;
    }

    themeSwitch.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            applyTheme(button.dataset.value);
            savePreference('resume-theme', button.dataset.value);
        });
    });
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
        updateSwitch(themeSwitch);
        updateSwitch(langSwitch);
    });
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) finishCipher();
    });

    applyTheme(readPreference('resume-theme') === 'paper' ? 'paper' : 'graphite');
    applyLang(readPreference('resume-lang') === 'en' ? 'en' : 'ru');
    animateText(cipherTarget);
    requestAnimationFrame(() => document.documentElement.classList.add('is-theme-ready'));
})();
