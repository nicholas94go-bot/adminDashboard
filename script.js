
        const dashboard = document.querySelector(".gridContainer");
        const sidebarToggle = document.querySelector("#sidebar-toggle");

        sidebarToggle.addEventListener("click", () => {
            const isOpen = dashboard.classList.toggle("sidebar-open");
            sidebarToggle.setAttribute("aria-expanded", String(isOpen));
        });

        document.querySelectorAll(".sidebarNav a").forEach((link) => {
            link.addEventListener("click", () => {
                dashboard.classList.remove("sidebar-open");
                sidebarToggle.setAttribute("aria-expanded", "false");
            });
        });
    