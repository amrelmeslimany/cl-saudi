$(document).ready(() => {
    /* variabls */
    const navbar_top = $(".navbar"),
        card_sec_1 = $("#sec-1 .top .card"),
        icon_social_sec_2 = $("#sec-2 .icon-social img"),
        txt_social_sec_2 = $("#sec-2 .txt-social"),
        prg_social_sec_2 = $("#sec-2 .explain"),
        box_sec_5 = $("#sec-5 .box .inner"),
        form_login = $(".form-header"),
        link_logout = $(".logout"),
        navbar_right_inner = $(".navbar-right"),
        bar_list_inner = $(".open-list"),
        collapse_buttons_funds = $(".present-paying .button-present button"),
        collapse_boxes_funds = $(".present-paying .collapse"),
        collapse_boxes_funds_2 = $(".techinical-sup .tech-box  .collapse"),
        collapse_buttons_funds_2 = $(".techinical-sup .tech-box  .button-present button"),
        form_support_select = $(".techinical-sup .form-support #subject"),
        form_support_select_order = $(".techinical-sup .form-support .order"),
        form_support_select_payment = $(".techinical-sup .form-support .payment"),
        news_navbar = $(".nav-new"),
        news_filter_list = $(".box-of-news .filter ul li"),
        news_share_btn = $(".box-of-news .news .edit-js-share"),
        news_inputs_opinion = $(".box-of-news .footer-post .opinion"),
        obj_social = [{
                headSocial: "فيس بوك",
                pragrapgh: `أفضل منصة لبناء قاعدة جماهيرية من كافة أرجاء الوطن العربي ملايين الأشخاص يستخدموا الفيس بوك بشكل يومي
                ونوفر لك العديد من الخدمات مثل( معجبين للصفحات ، لايكات للمنشورات ، مشاهدات ، متابعين للصفحات ، تعليقات ..... إلخ )`
            },
            {
                headSocial: "تويتر",
                pragrapgh: `يعتبر من أفضل شبكات التواصل الإجتماعي لمشاركة الآراء وطرح المواضيع ونوفر لك العديد من الخدمات مثل ( متابعين ، رتويت ، لايكات ، تعليقات ، تصويت .... إلخ )`
            },
            {
                headSocial: "يوتيوب",
                pragrapgh: `أفضل منصه لنشر وترويج الفديوهات ملايين الأشخاص يستخدموا يوتيوب بشكل يومي من كافة دول العالم ومن جميع الأعمار أسهل وأسرع طريقة لنشر الفديوهات ومشاركتها مع الآخرين
                ونوفر لك العديد من الخدمات مثل ( مشتركين ، لايكات ، مشاهدات ، تعليقات ..... إلخ )`
            },
            {
                headSocial: "انستجرام",
                pragrapgh: `أفضل منصة للتسويق يمكنك نشر منتجاتك بكل سهوله عن طريق الصور والنص على منصة instagram ونوفر لك العديد من الخدمات لتساعدك في بيع منتجاتك أو إشهار حسابك أو حسابات عملائك مثل ( متابعين ، لايكات ، مشاهدات ، تعليقات ، تصويت ، مشاهدات البث Live ، مشاهدات ستوري ، إنطباعات ، زوار للملف الشخصي .... إلخ )`
            },
            {
                headSocial: "تيك توك",
                pragrapgh: `أفضل منصة للتسليه والمرح ومشاركة الآخرين مواهبك وإبداعاتك يحظئ بشعبية واسعة جداً في السعودية ودول الخليج 
                ونوفر لك العديد من الخدمات مثل ( متابعين ، لايكات ، مشاهدات ..... إلخ )`
            },
            {
                headSocial: "سناب شات",
                pragrapgh: `أفضل منصة لنشر منتجاتك عن طريق الفديوهات بشكل مباشر مع الأشخاص سناب شات يحظئ بشعبية واسعة في السعودية ودول الخليج
                ونوفر لك العديد من الخدمات مثل ( متابعين ، مشاهدات ..... إلخ )`
            },
        ];
    let mx_height = 0,
        mx_height_2 = 0;
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
        /* News NAVBAR */
        changeNavNews();
    });
    /* Window Load */
    /* FNC For Height */
    (function makeHeight() {
        card_sec_1.each(function() {
            if ($(this).innerHeight() > mx_height) {
                mx_height = $(this).innerHeight();
            }
            $(this).css({
                height: mx_height + "px"
            });
        });
        /* Make Height Equals Sec 5 */
        box_sec_5.each(function() {
            if ($(this).innerHeight() > mx_height_2) {
                mx_height_2 = $(this).innerHeight();
            }
            $(this).css({
                height: mx_height_2 + "px"
            });
        });
        /* Any img Not Draggable */
        $("img").each(function() {
            $(this).attr("draggable", false);
        });

    }())
    /* When Hover and Click on icon Social*/
    icon_social_sec_2.each(function() {
        /* Change Content When click on Social Icon */
        $(this).on("click", () => {
            /* ADD Arrow */
            $(this).parent().siblings().find("i").remove();
            $(this).parent().find("i").remove();
            $(this).parent(".icon-social").append(`<i class="fas fa-arrow-down light-arrow"></i>`);
            /* Change Content */
            obj_social.forEach(e_obj_1 => {
                if ($(this).attr("alt") === e_obj_1["headSocial"]) {
                    txt_social_sec_2.html('');
                    txt_social_sec_2.html(e_obj_1["headSocial"]);
                    prg_social_sec_2.html('');
                    prg_social_sec_2.html(e_obj_1["pragrapgh"]);
                }

            });
        });
    });
    /* Swiper */
    let swiper = new Swiper('.crs-1', {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: '.crs-1 .swiper-pagination',
            clickable: true,
        },
        // Responsive breakpoints   
        breakpoints: {

            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            }

        }
    });
    /* Animation GSAP */

    gsap.fromTo("h1.intro-head", { translateY: -90, opacity: 0 }, { ease: "bounce", translateY: 0, opacity: 1, duration: 2 });
    gsap.fromTo(".an-g-1", { translateX: 90, opacity: 0 }, { delay: 2, translateX: 0, opacity: 1, duration: 2, stagger: 0.2 });
    gsap.to("#svg-1", { duration: 2, translateX: 0, opacity: 1 });
    /* Open and Close Inner Sidebar inner pages */
    bar_list_inner.on("click", () => {
        navbar_right_inner.slideToggle(200);
    });
    /* Edit Collapsing */
    // Add funds page
    collapseEdit(collapse_buttons_funds, collapse_boxes_funds);
    // Technical Page
    collapseEdit(collapse_buttons_funds_2, collapse_boxes_funds_2);

    function collapseEdit(buttons, boxes) {
        buttons.each(function() {
            $(this).on("click", (e) => {
                e.preventDefault();
                // coll.siblings("buttons").removeClass("active");
                let children_buttons = $(this).parent().children();
                children_buttons.each(function() {
                    $(this).removeClass("active")
                })
                e.target.classList.add("active");
                boxes.siblings(".collapse").removeClass("show");
            })
        });
    }
    /* When Value of Select in Section of Tecchnical Support */
    form_support_select.on("change", () => {
        if (form_support_select.val() === "order") {
            form_support_select_order.show(200);
            form_support_select_payment.hide(100);
        } else if (form_support_select.val() === "payment") {
            form_support_select_order.hide(100);
            form_support_select_payment.show(200);
        } else if (form_support_select.val() === "other") {
            form_support_select_order.hide(100);
            form_support_select_payment.hide(100);
        }
    });
    /* Open Icons Social When Click btn Share */
    news_share_btn.each(function() {
        /* news_box_social.slideToggle(200); */
        $(this).on("click", function() {
            $(this).next("ul").slideToggle(200);
        });
    });
    /* Change NAVBAR FOR NEWS */
    function changeNavNews() {
        if ($(this).scrollTop() >= 25) {
            /* CHANGE NAVBAR */
            news_navbar.css({
                paddingBottom: 0,
                height: `45px`,
                zIndex: 7,
                maxHeight: "45px",
                boxShadow: "rgb(34 34 34 / 22%) 0px 2px 5px"
            }, 200);
        } else if ($(this).scrollTop() <= 25) {
            news_navbar.attr("style", "");
            news_navbar.css({
                paddingBottom: "100px",
                height: `auto`,
                maxHeight: `initial`,
                zIndex: 5
            });
        }
    }
    /*  ADD Active Class on List of Filter */
    news_filter_list.each(function() {
        $(this).on("click", () => {
            let childs = $(this).parent().children();
            childs.each(function() {
                $(this).removeClass("active");
            });
            $(this).addClass("active");
        });
    });
    /* Input Message For opinion */
    news_inputs_opinion.each(function() {

        $(this).on("keyup", (e) => {
            e.stopPropagation();
            if ($(this).val() !== "") {
                $(this).parent().find(".like-unlike .fa-paper-plane").show(500);
            } else {
                $(this).parent().find(".like-unlike .fa-paper-plane").hide(500);
            }
        });
        /* Full Like & Unlike */
        $(this).parent().find(".like-unlike i").not(".fa-paper-plane").each(function() {
            $(this).on("click", function() {
                if ($(this).siblings().hasClass("act")) {
                    $(this).siblings().removeClass("act");
                    $(this).toggleClass("act");
                } else {
                    $(this).toggleClass("act");
                }
            });
        });
    });
});