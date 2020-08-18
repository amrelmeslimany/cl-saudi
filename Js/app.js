$(document).ready(() => {
    /* variabls */
    const navbar_top = $(".navbar");
    /* Make background when scroll */
    $(window).on("scroll", () => {
        /* Change Background */
        if ($(this).scrollTop() > navbar_top.innerHeight()) {
            navbar_top.css({
                backgroundColor: "#99B898",
                transition: "0.3s",
                boxShadow: "rgb(34 34 34 / 22%) 0px 2px 5px"
            });
        } else {
            navbar_top.css({
                background: "initial",
                boxShadow: "none"
            });
        }
        /* console.log($(this).scrollTop()); */
    });
});