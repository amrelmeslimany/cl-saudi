$(document).ready(() => {
    /* variabls */
    const navbar_top = $(".navbar"),
        card_sec_1 = Array.from($("#sec-1 .top .card")),
        icon_social_sec_2 = Array.from($("#sec-2 .icon-social img")),
        txt_social_sec_2 = $("#sec-2 .txt-social"),
        prg_social_sec_2 = $("#sec-2 .explain"),
        obj_social = [{
                headSocial: "فيس بوك",
                pragrapgh: "و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر ."
            },
            {
                headSocial: "تويتر",
                pragrapgh: `خدماتنا الاقل سعرأ ولكن هي الاعلى جودة والاكثر مصداقية والاقوى ضماناً سعودى سيوبانل افضل مكان يمكنك من خلالة شراء متابعين عرب و خليجيين لحسابك على تويتر سواء كان لديك صفر متابعين او الالاف من المتابعين يمكنك الاعتماد علينا كامل الاعتماد بدون اي خوف على حسابك فنحن نستخدم اضمن الطرق ولدينا فريق من خبراء ومحترفين بهذا المجال - لا تتردد ابدا معنا فنحن نقدم الكثير من الضمانات ومن ضمن هذه الضمانات :

                * ضمان الحصول على الخدمة او استرجاع اموالك`
            },
            {
                headSocial: "يوتيوب",
                pragrapgh: `هل تعلم جيدا مدى قوى الميديا والآله الاعلامية ! هل تخيلت ولو للحظة انه بمقدورك الاعلان عن منتجك باكبر قناه عالميه تحظي بالالاف والملايين من المتابعين والمشاهدين ؟ لك ان تتخيل ان منتجك او سلع موقعك كم شخص سيسعي للحصول عليها؟ يمكنك الان من خلال سعودى سيوبانل الحصول على الالاف من المشاهدات للفيديو الخاص بك على اليوتيوب مما يعزز من قوة ظهور منتجاتك وموقعك بمحركات البحث فى فترة قصيرة , يقدم سعودى سيوبانل افضل واقوى الباقات التي لن تجد لها مثيل بالجوده وكذلك بالسعر

                تذكر دائما، ان رضاء العميل اولى اولوياتنا.`
            },
            {
                headSocial: "انستجرام",
                pragrapgh: `و سأعرض مثال حي لهذا، من منا لم يتحمل جهد بدني شاق إلا من أجل الحصول على ميزة أو فائدة؟ ولكن من لديه الحق أن ينتقد شخص ما أراد أن يشعر بالسعادة التي لا تشوبها عواقب أليمة أو آخر .
                `
            },
        ];
    let mx_height = 0;

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
    $(window).on("load", () => {
            /* Make height For Cards */
            makeHeight();
        })
        /* FNC For Height */
    function makeHeight() {
        card_sec_1.forEach(e_1 => {
            if (e_1.offsetHeight > mx_height) {
                mx_height = e_1.offsetHeight;
            }
            e_1.style.height = mx_height + "px";
        });
        /* Any img Not Draggable */
        $("img").each(() => {
            $("img").attr("draggable", false);
        });
    }
    /* When Hover and Click on icon Social*/
    icon_social_sec_2.forEach((e_2) => {
        // /* Hover  */
        // $(e_2).hover(() => {
        //     $(e_2).parent().siblings().find("i").remove();
        //     if (!$(e_2).prev().is("i")) {
        //         $(e_2).parent(".icon-social").append(`<i class="fas fa-arrow-down light-arrow"></i>`);
        //     } else {
        //         $(e_2).parent().find("i").remove();
        //     }

        // }, () => {
        //     $(e_2).parent().find("i").remove();
        //     $(".fc").append(`<i class="fas fa-arrow-down light-arrow"></i>`);
        // });
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
    var swiper = new Swiper('.crs-1', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.crs-1 .swiper-pagination',
            clickable: true,
        },
        // Responsive breakpoints   
        breakpoints: {


            // when window width is <= 640px     
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            }

        }
    });
});