(() => {
    "use strict";

    const translations = {
        pt: {
            skipLink: "Pular para o conteúdo",
            siteDescription: "Projetos de arquitetura, interiores e paisagismo de Leticia Camienski.",
            switchToEnglish: "Mudar idioma para inglês",
            switchToPortuguese: "Mudar idioma para português",
            homeLabel: "Leticia Camienski, página inicial",
            profession: "Técnica em Edificações",
            mainNavigation: "Navegação principal",
            projects: "Projetos",
            about: "Sobre",
            contact: "Contato",
            featuredProjects: "Projetos em destaque",
            heroCasaAlt: "Perspectiva arquitetônica do projeto Casa Iguaçu",
            heroPinhaAlt: "Perspectiva arquitetônica do projeto Pinha 870",
            heroTransbordarAlt: "Perspectiva paisagística do projeto Transbordar",
            heroDotLabel: "Mostrar {name}",
            heroTitle: "Técnica em Edificações",
            heroLede: "Projetos desenvolvidos em arquitetura, urbanismo e interiores.",
            exploreProject: "Explorar projeto",
            discoverProjects: "Descubra os projetos",
            previousProject: "Projeto anterior",
            nextProject: "Próximo projeto",
            playSlideshow: "Iniciar apresentação",
            pauseSlideshow: "Pausar apresentação",
            chooseFeaturedProject: "Escolher projeto em destaque",
            workSelection: "Seleção de trabalhos",
            projectsHeading: "Projetos desenvolvidos.",
            projectsIntro: "Uma seleção de estudos e trabalhos em arquitetura, urbanismo, interiores e paisagismo.",
            aboutEyebrow: "Um pouco sobre mim",
            bimSpecialist: "Especialista em BIM",
            aboutQuote: "“Sempre melhorando e encontrando formas de fazer certo e rápido.”",
            aboutParagraphOne: "Sou Técnica em Edificações, Modeladora BIM e graduanda do 10º período de Arquitetura e Urbanismo. Atuo com foco em modelagem, documentação técnica e compatibilização de projetos multidisciplinares em BIM.",
            aboutParagraphTwo: "Tenho experiência em projetos estruturais, arquitetônicos e de instalações, dominando ferramentas como Revit, AutoCAD e Navisworks. Também desenvolvo automações com Dynamo e PyRevit para otimizar processos e padronizar entregas.",
            resumeView: "Ver currículo",
            resumeDownload: "Baixar currículo",
            contactEyebrow: "Vamos conversar?",
            contactHeading: "Boas ideias começam<br>com uma conversa.",
            contactCta: "Entre em contato",
            footerProfession: "Técnica em Edificações · Especialista em BIM",
            emailLink: "E-mail ↗",
            siteCreditPrefix: "Site criado por",
            creatorLinkedInLabel: "Kevin Douglas no LinkedIn",
            projectImages: "Imagens do projeto",
            projectNotFound: "Este projeto não foi encontrado.",
            backToProjects: "Voltar para os projetos",
            imageViewer: "Visualização da imagem",
            closeImage: "Fechar imagem",
            imageControls: "Controles da imagem",
            zoomLevel: "Nível de zoom",
            resetZoom: "Redefinir zoom",
            fitImage: "Ajustar",
            previousImage: "Imagem anterior",
            nextImage: "Próxima imagem",
            projectPageTitle: "Projeto | Leticia Camienski",
            projectNotFoundTitle: "Projeto não encontrado | Leticia Camienski",
            portfolioCategory: "Portfólio · Projeto",
            portfolio: "Portfólio",
            missingProjectTitle: "Projeto não encontrado",
            projectCardLabel: "Ver projeto {name}",
            projectImageAlt: "Imagem de apresentação do projeto {name}",
            galleryImageLabel: "Ampliar imagem {index} de {count} do projeto {name}",
            galleryImageAlt: "{name} — imagem {index}"
        },
        en: {
            skipLink: "Skip to content",
            siteDescription: "Architecture, interior design, and landscape projects by Leticia Camienski.",
            switchToEnglish: "Switch language to English",
            switchToPortuguese: "Switch language to Portuguese",
            homeLabel: "Leticia Camienski, home page",
            profession: "Building Technician",
            mainNavigation: "Main navigation",
            projects: "Projects",
            about: "About",
            contact: "Contact",
            featuredProjects: "Featured projects",
            heroCasaAlt: "Architectural rendering of the Iguaçu House project",
            heroPinhaAlt: "Architectural rendering of the Pinha 870 project",
            heroTransbordarAlt: "Landscape rendering of the Transbordar project",
            heroDotLabel: "Show {name}",
            heroTitle: "Building Technician",
            heroLede: "Projects in architecture, urban design, and interiors.",
            exploreProject: "Explore project",
            discoverProjects: "Discover the projects",
            previousProject: "Previous project",
            nextProject: "Next project",
            playSlideshow: "Play slideshow",
            pauseSlideshow: "Pause slideshow",
            chooseFeaturedProject: "Choose a featured project",
            workSelection: "Selected work",
            projectsHeading: "Selected projects.",
            projectsIntro: "A selection of studies and work in architecture, urban design, interiors, and landscape design.",
            aboutEyebrow: "About me",
            bimSpecialist: "BIM Specialist",
            aboutQuote: "“Always improving and finding ways to work accurately and efficiently.”",
            aboutParagraphOne: "I am a Building Technician, BIM Modeler, and 10th-semester undergraduate student in Architecture and Urbanism. My work focuses on BIM modeling, technical documentation, and coordination of multidisciplinary projects.",
            aboutParagraphTwo: "I have experience with structural, architectural, and building systems projects, using tools such as Revit, AutoCAD, and Navisworks. I also develop automations with Dynamo and PyRevit to optimize workflows and standardize deliverables.",
            resumeView: "View résumé",
            resumeDownload: "Download résumé",
            contactEyebrow: "Let’s talk",
            contactHeading: "Great ideas begin<br>with a conversation.",
            contactCta: "Get in touch",
            footerProfession: "Building Technician · BIM Specialist",
            emailLink: "Email ↗",
            siteCreditPrefix: "Website by",
            creatorLinkedInLabel: "Kevin Douglas on LinkedIn",
            projectImages: "Project images",
            projectNotFound: "This project could not be found.",
            backToProjects: "Back to projects",
            imageViewer: "Image viewer",
            closeImage: "Close image",
            imageControls: "Image controls",
            zoomLevel: "Zoom level",
            resetZoom: "Reset zoom",
            fitImage: "Fit",
            previousImage: "Previous image",
            nextImage: "Next image",
            projectPageTitle: "Project | Leticia Camienski",
            projectNotFoundTitle: "Project not found | Leticia Camienski",
            portfolioCategory: "Portfolio · Project",
            portfolio: "Portfolio",
            missingProjectTitle: "Project not found",
            projectCardLabel: "View {name} project",
            projectImageAlt: "Cover image for the {name} project",
            galleryImageLabel: "Enlarge image {index} of {count} from the {name} project",
            galleryImageAlt: "{name} — image {index}"
        }
    };
    let language = localStorage.getItem("portfolio-language") === "en" ? "en" : "pt";
    let refreshHeroLanguage = () => {};
    let refreshProjectLanguage = () => {};

    function translate(key, values = {}) {
        return (translations[language][key] || key).replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
    }

    function applyStaticTranslations() {
        document.documentElement.lang = language === "en" ? "en" : "pt-BR";
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            element.innerHTML = translate(element.dataset.i18n);
        });
        document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
            element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
        });
        document.querySelectorAll("[data-i18n-content]").forEach((element) => {
            element.setAttribute("content", translate(element.dataset.i18nContent));
        });
        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            element.alt = translate(element.dataset.i18nAlt);
        });
        const subject = language === "en" ? "Portfolio inquiry" : "Contato pelo portfólio";
        const gmailUrl = new URL("https://mail.google.com/mail/");
        gmailUrl.searchParams.set("view", "cm");
        gmailUrl.searchParams.set("fs", "1");
        gmailUrl.searchParams.set("to", "levecmar@hotmail.com");
        gmailUrl.searchParams.set("su", subject);
        document.querySelectorAll("[data-gmail-contact]").forEach((link) => {
            link.href = gmailUrl.toString();
        });
        document.querySelectorAll("[data-resume-pt][data-resume-en]").forEach((link) => {
            link.href = language === "en" ? link.dataset.resumeEn : link.dataset.resumePt;
        });
        document.querySelectorAll("[data-language-toggle]").forEach((button) => {
            const nextLanguage = language === "pt" ? "en" : "pt";
            button.textContent = nextLanguage.toUpperCase();
            button.setAttribute("aria-label", translate(nextLanguage === "en" ? "switchToEnglish" : "switchToPortuguese"));
            button.setAttribute("aria-pressed", String(language === "en"));
        });
        document.title = document.getElementById("gallery")
            ? translate("projectPageTitle")
            : "Leticia Camienski | " + (language === "en" ? "Selected Projects" : "Projetos desenvolvidos");
    }

    const projects = [
        {
            id: "casa-iguacu",
            name: "Casa Iguaçu",
            nameEn: "Iguaçu House",
            category: "Habitação multifamiliar",
            categoryEn: "Multifamily housing",
            credit: "Coautoria",
            creditEn: "Collaborative project",
            description: "Estudo desenvolvido no 5º período de Arquitetura e Urbanismo. Projeto residencial pensado em torno de uma galeria iluminada no térreo.",
            descriptionEn: "A fifth-semester Architecture and Urbanism study. A residential project organized around a naturally lit ground-floor gallery.",
            cover: "assets/projects/casa-iguacu/02.webp",
            count: 26
        },
        {
            id: "rajadao",
            name: "Sala Rajadão",
            nameEn: "Rajadão Room",
            category: "Interiores",
            categoryEn: "Interior design",
            credit: "Coautoria",
            creditEn: "Collaborative project",
            description: "Estudo de interiores realizado no 4º período para o Ateliê Vertical. Sala pensada como um laboratório modular de arquitetura.",
            descriptionEn: "An interior design study developed in the fourth semester for Ateliê Vertical. The room was conceived as a modular architecture laboratory.",
            cover: "assets/projects/rajadao/08.webp",
            count: 10,
            excludedImages: [2, 3, 4]
        },
        {
            id: "leao-do-norte",
            name: "Pavilhão Leão do Norte",
            nameEn: "North Lion Pavilion",
            category: "Arquitetura simbólica",
            categoryEn: "Symbolic architecture",
            credit: "Autoral",
            creditEn: "Independent project",
            description: "Estudo de um centro comunitário desenvolvido no 3º período, com conceito de arquitetura simbólica.",
            descriptionEn: "A third-semester study for a community center, developed around the concept of symbolic architecture.",
            cover: "assets/projects/leao-do-norte/01.webp",
            count: 23,
            excludedImages: [7, 8, 9, 10]
        },
        {
            id: "transbordar",
            name: "Transbordar",
            nameEn: "Transbordar",
            category: "Paisagismo e espaço público",
            categoryEn: "Landscape and public space",
            credit: "Coautoria",
            creditEn: "Collaborative project",
            description: "Estudo de requalificação urbana com paisagismo, realizado no Ateliê Vertical do 5º período.",
            descriptionEn: "An urban renewal and landscape design study developed for Ateliê Vertical in the fifth semester.",
            cover: "assets/projects/transbordar/06.webp",
            count: 24
        },
        {
            id: "pinha-870",
            name: "Pinha 870",
            nameEn: "Pinha 870",
            category: "Projeto comercial",
            categoryEn: "Commercial project",
            credit: "Coautoria",
            creditEn: "Collaborative project",
            description: "Estudo de projeto comercial desenvolvido no 4º período.",
            descriptionEn: "A commercial design study developed in the fourth semester.",
            cover: "assets/projects/pinha-870/02.webp",
            count: 12
        }
    ];
    const projectById = new Map(projects.map((project) => [project.id, project]));

    function projectName(project) {
        return language === "en" ? project.nameEn : project.name;
    }

    function projectCategory(project) {
        return language === "en" ? project.categoryEn : project.category;
    }

    function projectCredit(project) {
        return language === "en" ? project.creditEn : project.credit;
    }

    function projectDescription(project) {
        return language === "en" ? project.descriptionEn : project.description;
    }

    function makeElement(tag, className, text) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text !== undefined) element.textContent = text;
        return element;
    }

    function projectUrl(project) {
        return `projeto.html?id=${encodeURIComponent(project.id)}`;
    }

    function renderProjectCards() {
        const grid = document.getElementById("projects-grid");
        if (!grid) return;

        projects.forEach((project, index) => {
            const link = makeElement("a", "project-card");
            link.href = projectUrl(project);
            link.dataset.projectId = project.id;
            link.dataset.reveal = "";
            link.setAttribute("aria-label", translate("projectCardLabel", { name: projectName(project) }));

            const imageWrap = makeElement("div", "project-card-image-wrap");
            const image = makeElement("img", "project-card-image");
            image.src = project.cover;
            image.alt = translate("projectImageAlt", { name: projectName(project) });
            image.loading = "lazy";
            image.decoding = "async";
            const number = makeElement("span", "project-number", String(index + 1).padStart(2, "0"));
            imageWrap.append(image, number);

            const info = makeElement("div", "project-card-info");
            const titleGroup = makeElement("div", "");
            titleGroup.append(makeElement("h3", "", projectName(project)), makeElement("p", "project-card-category", `${projectCategory(project)} · ${projectCredit(project)}`));
            info.append(titleGroup, makeElement("span", "project-card-arrow", "↗"));
            link.append(imageWrap, info);
            grid.append(link);
        });
    }

    function setupReveal() {
        if (!("IntersectionObserver" in window)) return;
        document.documentElement.classList.add("reveal-ready");
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                currentObserver.unobserve(entry.target);
            });
        }, { threshold: 0.12 });
        document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    }

    function setupHeader() {
        const header = document.getElementById("site-header");
        const hero = document.getElementById("inicio");
        if (!header || !hero || !("IntersectionObserver" in window)) return;
        const observer = new IntersectionObserver(([entry]) => {
            header.classList.toggle("is-scrolled", !entry.isIntersecting);
        }, { threshold: 0.08 });
        observer.observe(hero);
    }

    function setupHeroSlider() {
        const container = document.getElementById("hero-slides");
        if (!container) return;

        const slides = Array.from(container.querySelectorAll(".hero-slide"));
        const dots = Array.from(document.querySelectorAll(".hero-dot"));
        const kicker = document.getElementById("hero-kicker");
        const link = document.getElementById("hero-link");
        const current = document.getElementById("hero-current");
        const playbackControl = document.getElementById("hero-toggle");
        const progress = document.getElementById("hero-progress-bar")?.parentElement;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const interval = 7000;
        let activeIndex = 0;
        let timer = 0;
        let userPaused = false;
        let focusPaused = false;
        let motionOverride = false;

        function isPaused() {
            return userPaused || focusPaused || document.hidden || (reducedMotion.matches && !motionOverride);
        }

        function updatePlaybackControl() {
            if (!playbackControl) return;
            const paused = isPaused();
            playbackControl.textContent = paused ? "▶" : "Ⅱ";
            playbackControl.setAttribute("aria-label", translate(paused ? "playSlideshow" : "pauseSlideshow"));
        }

        function showSlide(index) {
            activeIndex = (index + slides.length) % slides.length;
            const slide = slides[activeIndex];
            const project = projectById.get(slide.dataset.project);
            if (!project) return;

            const image = slide.querySelector("img");
            if (image && image.dataset.src && !image.hasAttribute("src")) {
                image.src = image.dataset.src;
                delete image.dataset.src;
            }
            slides.forEach((item, itemIndex) => {
                const active = itemIndex === activeIndex;
                item.classList.toggle("is-active", active);
                item.setAttribute("aria-hidden", String(!active));
            });
            dots.forEach((dot, itemIndex) => {
                const active = itemIndex === activeIndex;
                dot.classList.toggle("is-active", active);
                dot.setAttribute("aria-pressed", String(active));
            });
            const slideKicker = language === "en" ? slide.dataset.kickerEn : slide.dataset.kicker;
            if (kicker) kicker.textContent = `${slideKicker} · ${projectName(project)}`;
            if (link) link.href = projectUrl(project);
            if (current) current.textContent = String(activeIndex + 1).padStart(2, "0");
            dots.forEach((dot) => {
                const dotProject = projectById.get(slides[Number(dot.dataset.index)]?.dataset.project);
                if (dotProject) dot.setAttribute("aria-label", translate("heroDotLabel", { name: projectName(dotProject) }));
            });
        }

        function startTimer() {
            window.clearInterval(timer);
            updatePlaybackControl();
            if (isPaused() || slides.length < 2) return;
            const animateProgress = () => {
                if (!progress) return;
                progress.classList.remove("is-running");
                void progress.offsetWidth;
                progress.classList.add("is-running");
            };
            animateProgress();
            timer = window.setInterval(() => {
                showSlide(activeIndex + 1);
                animateProgress();
            }, interval);
        }

        function navigateManually(index) {
            userPaused = false;
            focusPaused = false;
            showSlide(index);
            startTimer();
        }

        document.getElementById("hero-previous")?.addEventListener("click", () => {
            navigateManually(activeIndex - 1);
        });
        document.getElementById("hero-next")?.addEventListener("click", () => {
            navigateManually(activeIndex + 1);
        });
        dots.forEach((dot) => dot.addEventListener("click", () => {
            navigateManually(Number(dot.dataset.index));
        }));
        const hero = container.closest(".hero");
        playbackControl?.addEventListener("click", () => {
            if (isPaused()) {
                userPaused = false;
                focusPaused = false;
                motionOverride = true;
            } else {
                userPaused = true;
            }
            startTimer();
        });
        hero?.addEventListener("focusin", (event) => {
            if (event.target === playbackControl) return;
            focusPaused = true;
            startTimer();
        });
        hero?.addEventListener("focusout", (event) => {
            if (!hero.contains(event.relatedTarget)) {
                focusPaused = false;
                startTimer();
            }
        });
        document.addEventListener("visibilitychange", startTimer);
        reducedMotion.addEventListener?.("change", startTimer);

        refreshHeroLanguage = () => {
            showSlide(activeIndex);
            updatePlaybackControl();
        };
        showSlide(0);
        startTimer();
    }

    function setupProjectPage() {
        const gallery = document.getElementById("gallery");
        if (!gallery) return;

        const params = new URLSearchParams(window.location.search);
        const project = projectById.get(params.get("id"));
        const notFound = document.getElementById("project-not-found");
        const category = document.getElementById("project-category");
        const title = document.getElementById("project-title");
        const description = document.getElementById("project-description");
        const credit = document.getElementById("project-credit");
        if (!project) {
            refreshProjectLanguage = () => {
                category.textContent = translate("portfolio");
                title.textContent = translate("missingProjectTitle");
                description.textContent = "";
                credit.textContent = "";
                notFound.hidden = false;
                document.title = translate("projectNotFoundTitle");
            };
            refreshProjectLanguage();
            return;
        }

        function refreshContent() {
            category.textContent = `${projectCategory(project)} · ${translate("portfolio")}`;
            title.textContent = projectName(project);
            description.textContent = projectDescription(project);
            credit.textContent = projectCredit(project);
            document.title = `${projectName(project)} | Leticia Camienski`;
        }
        refreshProjectLanguage = refreshContent;
        refreshContent();

        const imageNumbers = Array.from({ length: project.count }, (_, index) => index + 1)
            .filter((imageNumber) => !project.excludedImages?.includes(imageNumber));
        const imageButtons = [];
        imageNumbers.forEach((imageNumber, index) => {
            const imagePath = `assets/projects/${project.id}/${String(imageNumber).padStart(2, "0")}.webp`;
            const button = makeElement("button", "gallery-item");
            button.type = "button";
            button.setAttribute("aria-label", translate("galleryImageLabel", {
                index: index + 1,
                count: imageNumbers.length,
                name: projectName(project)
            }));
            const image = makeElement("img");
            image.src = imagePath;
            image.alt = translate("galleryImageAlt", {
                index: String(index + 1).padStart(2, "0"),
                name: projectName(project)
            });
            image.loading = index < 2 ? "eager" : "lazy";
            image.decoding = "async";
            const caption = makeElement("figcaption", "", `${String(index + 1).padStart(2, "0")} / ${String(imageNumbers.length).padStart(2, "0")}`);
            button.append(image, caption);
            gallery.append(button);
            imageButtons.push({ button, image });
        });

        const dialog = document.getElementById("lightbox");
        const enlarged = document.getElementById("lightbox-image");
        const count = document.getElementById("lightbox-count");
        const zoomSlider = document.getElementById("lightbox-zoom");
        const zoomValue = document.getElementById("lightbox-zoom-value");
        const zoomReset = document.getElementById("lightbox-zoom-reset");
        let activeImage = 0;
        let zoomLevel = 1;
        let offsetX = 0;
        let offsetY = 0;
        let dragStart = null;

        function clampPan() {
            if (!enlarged.naturalWidth || !enlarged.naturalHeight) return;
            const fit = Math.min(
                enlarged.clientWidth / enlarged.naturalWidth,
                enlarged.clientHeight / enlarged.naturalHeight
            );
            const maxX = Math.max(0, (enlarged.naturalWidth * fit * zoomLevel - enlarged.clientWidth) / 2);
            const maxY = Math.max(0, (enlarged.naturalHeight * fit * zoomLevel - enlarged.clientHeight) / 2);
            offsetX = Math.max(-maxX, Math.min(maxX, offsetX));
            offsetY = Math.max(-maxY, Math.min(maxY, offsetY));
        }

        function updateZoom() {
            clampPan();
            enlarged.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0) scale(${zoomLevel})`;
            enlarged.classList.toggle("is-zoomed", zoomLevel > 1);
            zoomSlider.value = String(zoomLevel);
            zoomValue.value = `${Math.round(zoomLevel * 100)}%`;
        }

        function setZoom(value) {
            const nextZoom = Math.max(Number(zoomSlider.min), Math.min(Number(zoomSlider.max), Number(value)));
            if (nextZoom === 1) {
                offsetX = 0;
                offsetY = 0;
            } else if (zoomLevel > 1 && nextZoom !== zoomLevel) {
                const ratio = nextZoom / zoomLevel;
                offsetX *= ratio;
                offsetY *= ratio;
            }
            zoomLevel = nextZoom;
            updateZoom();
        }

        function showImage(index) {
            activeImage = (index + imageButtons.length) % imageButtons.length;
            const selected = imageButtons[activeImage].image;
            enlarged.src = selected.src;
            enlarged.alt = selected.alt;
            count.textContent = `${String(activeImage + 1).padStart(2, "0")} / ${String(imageButtons.length).padStart(2, "0")}`;
            setZoom(1);
        }

        const updateGalleryLanguage = refreshProjectLanguage;
        refreshProjectLanguage = () => {
            updateGalleryLanguage();
            imageButtons.forEach(({ button, image }, index) => {
                button.setAttribute("aria-label", translate("galleryImageLabel", {
                    index: index + 1,
                    count: imageButtons.length,
                    name: projectName(project)
                }));
                image.alt = translate("galleryImageAlt", {
                    index: String(index + 1).padStart(2, "0"),
                    name: projectName(project)
                });
            });
            if (dialog.open) enlarged.alt = imageButtons[activeImage].image.alt;
        };
        refreshProjectLanguage();

        imageButtons.forEach(({ button }, index) => {
            button.addEventListener("click", () => {
                showImage(index);
                dialog.showModal();
            });
        });
        zoomSlider.addEventListener("input", () => setZoom(zoomSlider.value));
        zoomReset.addEventListener("click", () => setZoom(1));
        enlarged.addEventListener("dblclick", () => setZoom(zoomLevel === 1 ? 2 : 1));
        enlarged.addEventListener("dragstart", (event) => event.preventDefault());
        enlarged.addEventListener("pointerdown", (event) => {
            if (zoomLevel <= 1 || (event.pointerType === "mouse" && event.button !== 0)) return;
            event.preventDefault();
            dragStart = { x: event.clientX - offsetX, y: event.clientY - offsetY };
            enlarged.setPointerCapture(event.pointerId);
        });
        enlarged.addEventListener("pointermove", (event) => {
            if (!dragStart) return;
            const fit = Math.min(
                enlarged.clientWidth / enlarged.naturalWidth,
                enlarged.clientHeight / enlarged.naturalHeight
            );
            const maxX = Math.max(0, (enlarged.naturalWidth * fit * zoomLevel - enlarged.clientWidth) / 2);
            const maxY = Math.max(0, (enlarged.naturalHeight * fit * zoomLevel - enlarged.clientHeight) / 2);
            offsetX = Math.max(-maxX, Math.min(maxX, event.clientX - dragStart.x));
            offsetY = Math.max(-maxY, Math.min(maxY, event.clientY - dragStart.y));
            updateZoom();
        });
        enlarged.addEventListener("pointerup", () => { dragStart = null; });
        enlarged.addEventListener("pointercancel", () => { dragStart = null; });
        document.getElementById("lightbox-close").addEventListener("click", () => dialog.close());
        document.getElementById("lightbox-previous").addEventListener("click", () => showImage(activeImage - 1));
        document.getElementById("lightbox-next").addEventListener("click", () => showImage(activeImage + 1));
        dialog.addEventListener("click", (event) => {
            if (event.target === dialog) dialog.close();
        });
        dialog.addEventListener("keydown", (event) => {
            if (event.target === zoomSlider) return;
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                showImage(activeImage - 1);
            }
            if (event.key === "ArrowRight") {
                event.preventDefault();
                showImage(activeImage + 1);
            }
            if (event.key === "+" || event.key === "=") setZoom(zoomLevel + 0.1);
            if (event.key === "-") setZoom(zoomLevel - 0.1);
        });
    }

    function setupYear() {
        document.querySelectorAll("#current-year").forEach((element) => {
            element.textContent = String(new Date().getFullYear());
        });
    }

    function refreshProjectCards() {
        document.querySelectorAll(".project-card[data-project-id]").forEach((card) => {
            const project = projectById.get(card.dataset.projectId);
            if (!project) return;
            card.setAttribute("aria-label", translate("projectCardLabel", { name: projectName(project) }));
            card.querySelector("h3").textContent = projectName(project);
            card.querySelector(".project-card-category").textContent = `${projectCategory(project)} · ${projectCredit(project)}`;
            card.querySelector("img").alt = translate("projectImageAlt", { name: projectName(project) });
        });
    }

    function setupLanguageToggle() {
        document.querySelectorAll("[data-language-toggle]").forEach((button) => {
            button.addEventListener("click", () => {
                language = language === "pt" ? "en" : "pt";
                localStorage.setItem("portfolio-language", language);
                applyStaticTranslations();
                refreshProjectCards();
                refreshHeroLanguage();
                refreshProjectLanguage();
            });
        });
    }

    applyStaticTranslations();
    renderProjectCards();
    setupReveal();
    setupHeader();
    setupHeroSlider();
    setupProjectPage();
    setupYear();
    setupLanguageToggle();
})();
