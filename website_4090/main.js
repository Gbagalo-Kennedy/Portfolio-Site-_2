var ready = (callback) => {
    if (document.readyState != "loading") {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
};

ready(() => {

    const header = document.querySelector(".header");
    if (header) {
        header.style.height = window.innerHeight + "px";
    }

    window.addEventListener("resize", () => {
        if (header) {
            header.style.height = window.innerHeight + "px";
        }
    });

    setTimeout(() => {
        if (typeof $ !== "undefined" && $("#demo-modal").length) {
            $("#demo-modal").modal("show");
        }
    }, 1000);
});
