$(document).ready(() => {
    /* variabls */
    const navbar_top = $(".navbar"),
        card_sec_1 = Array.from($("#sec-1 .top .card")),
        icon_social_sec_2 = Array.from($("#sec-2 .icon-social img")),
        txt_social_sec_2 = $("#sec-2 .txt-social"),
        prg_social_sec_2 = $("#sec-2 .explain"),
        box_sec_5 = [...$("#sec-5 .box .inner")],
        form_login = $(".form-header"),
        link_logout = $(".logout"),
        navbar_right_inner = $(".navbar-right"),
        bar_list_inner = $(".open-list"),
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
    });
    /* Window Load */
    /* FNC For Height */
    (function makeHeight() {
        card_sec_1.forEach(e_1 => {
            if (e_1.offsetHeight > mx_height) {
                mx_height = e_1.offsetHeight;
            }
            e_1.style.height = mx_height + "px";
        });
        /* Make Height Equals Sec 5 */
        box_sec_5.forEach(e_3 => {
            if (e_3.offsetHeight > mx_height_2) {
                mx_height_2 = e_3.offsetHeight;
            }
            e_3.style.minHeight = mx_height_2 + "px";
        });
        /* Any img Not Draggable */
        $("img").each(() => {
            $("img").attr("draggable", false);
        });

    }())
    /* When Hover and Click on icon Social*/
    icon_social_sec_2.forEach((e_2) => {
        /* Change Content When click on Social Icon */
        $(e_2).on("click", () => {
            /* ADD Arrow */
            $(e_2).parent().siblings().find("i").remove();
            $(e_2).parent().find("i").remove();
            $(e_2).parent(".icon-social").append(`<i class="fas fa-arrow-down light-arrow"></i>`);
            /* Change Content */
            obj_social.forEach(e_obj_1 => {
                if ($(e_2).attr("alt") === e_obj_1["headSocial"]) {
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
    /* When Click Submit  */
    form_login.on("submit", (e) => {
        e.preventDefault();
        let page_navigate_to = "new-order.html";
        location.pathname = page_navigate_to;
    });
    link_logout.on("click", (e) => {
        e.preventDefault();
        let page_navigate_to = "home.html";
        location.pathname = page_navigate_to;
    });
});