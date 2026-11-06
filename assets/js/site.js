(() => {
    "use strict";

    const projects = [
        {
            id: "casa-iguacu",
            name: "Casa Iguaçu",
            category: "Habitação multifamiliar",
            credit: "Coautoria",
            description: "Estudo desenvolvido no 5º período de Arquitetura e Urbanismo. Projeto residencial pensado em torno de uma galeria iluminada no térreo.",
            cover: "assets/projects/casa-iguacu/02.webp",
            count: 26
        },
        {
            id: "rajadao",
            name: "Sala Rajadão",
            category: "Interiores",
            credit: "Coautoria",
            description: "Estudo de interiores realizado no 4º período para o Ateliê Vertical. Sala pensada como um laboratório modular de arquitetura.",
            cover: "assets/projects/rajadao/08.webp",
            count: 10,
            excludedImages: [2, 3, 4]
        },
        {
            id: "leao-do-norte",
            name: "Pavilhão Leão do Norte",
            category: "Arquitetura simbólica",
            credit: "Autoral",
            description: "Estudo de um centro comunitário desenvolvido no 3º período, com conceito de arquitetura simbólica.",
            cover: "assets/projects/leao-do-norte/01.webp",
            count: 23,
            excludedImages: [7, 8, 9, 10]
        },
        {
            id: "transbordar",
            name: "Transbordar",
            category: "Paisagismo e espaço público",
            credit: "Coautoria",
            description: "Estudo de requalificação urbana com paisagismo, realizado no Ateliê Vertical do 5º período.",
            cover: "assets/projects/transbordar/06.webp",
            count: 24
        },
        {
            id: "pinha-870",
            name: "Pinha 870",
            category: "Projeto comercial",
            credit: "Coautoria",
            description: "Estudo de projeto comercial desenvolvido no 4º período.",
            cover: "assets/projects/pinha-870/02.webp",
            count: 12
        }
    ];
    const projectById = new Map(projects.map((project) => [project.id, project]));

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
            link.dataset.reveal = "";
            link.setAttribute("aria-label", `Ver projeto ${project.name}`);

            const imageWrap = makeElement("div", "project-card-image-wrap");
            const image = makeElement("img", "project-card-image");
            image.src = project.cover;
            image.alt = `Imagem de apresentação do projeto ${project.name}`;
            image.loading = "lazy";
            image.decoding = "async";
            const number = makeElement("span", "project-number", String(index + 1).padStart(2, "0"));
            imageWrap.append(image, number);

            const info = makeElement("div", "project-card-info");
            const titleGroup = makeElement("div", "");
            titleGroup.append(makeElement("h3", "", project.name), makeElement("p", "project-card-category", `${project.category} · ${project.credit}`));
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
        const progress = document.getElementById("hero-progress-bar")?.parentElement;
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        const interval = 7000;
        let activeIndex = 0;
        let timer = 0;
        let paused = false;

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
            if (kicker) kicker.textContent = `${slide.dataset.kicker} · ${project.name}`;
            if (link) link.href = projectUrl(project);
            if (current) current.textContent = String(activeIndex + 1).padStart(2, "0");
        }

        function startTimer() {
            window.clearInterval(timer);
            if (reducedMotion.matches || paused || document.hidden || slides.length < 2) return;
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
            paused = false;
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
        hero?.addEventListener("mouseenter", () => { paused = true; window.clearInterval(timer); });
        hero?.addEventListener("mouseleave", () => { paused = false; startTimer(); });
        hero?.addEventListener("focusin", () => { paused = true; window.clearInterval(timer); });
        hero?.addEventListener("focusout", (event) => {
            if (!hero.contains(event.relatedTarget)) {
                paused = false;
                startTimer();
            }
        });
        document.addEventListener("visibilitychange", startTimer);
        reducedMotion.addEventListener?.("change", startTimer);

        showSlide(0);
        startTimer();
    }

    function setupProjectPage() {
        const gallery = document.getElementById("gallery");
        if (!gallery) return;

        const params = new URLSearchParams(window.location.search);
        const project = projectById.get(params.get("id"));
        const notFound = document.getElementById("project-not-found");
        if (!project) {
            document.getElementById("project-category").textContent = "Portfólio";
            document.getElementById("project-title").textContent = "Projeto não encontrado";
            document.getElementById("project-description").textContent = "";
            document.getElementById("project-credit").textContent = "";
            notFound.hidden = false;
            document.title = "Projeto não encontrado | Leticia Camienski";
            return;
        }

        document.getElementById("project-category").textContent = project.category;
        document.getElementById("project-title").textContent = project.name;
        document.getElementById("project-description").textContent = project.description;
        document.getElementById("project-credit").textContent = project.credit;
        document.title = `${project.name} | Leticia Camienski`;

        const imageNumbers = Array.from({ length: project.count }, (_, index) => index + 1)
            .filter((imageNumber) => !project.excludedImages?.includes(imageNumber));
        const imageButtons = [];
        imageNumbers.forEach((imageNumber, index) => {
            const imagePath = `assets/projects/${project.id}/${String(imageNumber).padStart(2, "0")}.webp`;
            const button = makeElement("button", "gallery-item");
            button.type = "button";
            button.setAttribute("aria-label", `Ampliar imagem ${index + 1} de ${imageNumbers.length} do projeto ${project.name}`);
            const image = makeElement("img");
            image.src = imagePath;
            image.alt = `${project.name} — imagem ${String(index + 1).padStart(2, "0")}`;
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

    renderProjectCards();
    setupReveal();
    setupHeader();
    setupHeroSlider();
    setupProjectPage();
    setupYear();
})();
