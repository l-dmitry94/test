document.addEventListener("DOMContentLoaded", () => {
    const actionsContainer = document.querySelector(".posts__actions");
    const postsList = document.querySelector(".posts__list");
    const buttons = document.querySelectorAll(".posts__actions-btn");

    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const handleLayoutChange = (e) => {
        if (e.matches) {
            buttons[0].classList.remove("posts__actions-btn--active");
            buttons[1].classList.add("posts__actions-btn--active");
            postsList.classList.add("posts__list--alt");
        } else {
            buttons[1].classList.remove("posts__actions-btn--active");
            buttons[0].classList.add("posts__actions-btn--active");
            postsList.classList.remove("posts__list--alt");
        }
    };

    mediaQuery.addEventListener("change", handleLayoutChange);

    handleLayoutChange(mediaQuery);

    actionsContainer.addEventListener("click", (event) => {
        if (mediaQuery.matches) return;

        const clickedBtn = event.target.closest(".posts__actions-btn");
        if (!clickedBtn || clickedBtn.classList.contains("posts__actions-btn--active")) return;

        buttons.forEach((btn) => btn.classList.remove("posts__actions-btn--active"));
        clickedBtn.classList.add("posts__actions-btn--active");

        const index = Array.from(buttons).indexOf(clickedBtn);
        if (index === 1) {
            postsList.classList.add("posts__list--alt");
        } else {
            postsList.classList.remove("posts__list--alt");
        }
    });
});
