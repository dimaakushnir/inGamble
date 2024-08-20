document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {

        if (document.querySelector('.more-staket-simple-bonus__swiper')) {
            // More Stake Slider
            const swiperMoreStake = new Swiper('.more-staket-simple-bonus__swiper', {
                // slidesPerView: 5,
                slidesPerView: 'auto',
                spaceBetween: 20,

                pagination: {
                    el: ".more-staket-simple-bonus__pagination",
                    clickable: true,
                },

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        // slidesPerView: "auto",
                        spaceBetween: 16
                    },
                    // when window width is >= 480px
                    1650.98: {
                        // slidesPerView: 5,
                        spaceBetween: 20
                    },
                    // when window width is >= 640px
                    1920: {
                        // slidesPerView: 5,
                        spaceBetween: 20
                    }
                }
            });
        }

        if (document.querySelector('.other-best-reload-simple-bonus__swiper')) {
            // Other Best Reload Slider
            const swiperOtherBestReload = new Swiper('.other-best-reload-simple-bonus__swiper', {
                // slidesPerView: 5,
                slidesPerView: 'auto',
                spaceBetween: 20,

                pagination: {
                    el: ".other-best-reload-simple-bonus__pagination",
                    clickable: true,
                },

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        // slidesPerView: "auto",
                        spaceBetween: 16
                    },
                    // when window width is >= 480px
                    1650.98: {
                        // slidesPerView: 5,
                        spaceBetween: 20
                    },
                    // when window width is >= 640px
                    1920: {
                        // slidesPerView: 5,
                        spaceBetween: 20
                    }
                }
            });
        }

        // Information Loyaltie Items
        if (document.querySelector('.top-item-information-loyaltie') && document.querySelector('.inner-information-loyaltie')) {
            $('.top-item-information-loyaltie').click(function () {
                $(this).toggleClass('active');
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(400);
            });
        }

        // Information Loyaltie Inner Items
        if (document.querySelector('.top-item-inner-information-loyaltie') && document.querySelector('.item-inner-information-loyaltie__body')) {
            $('.top-item-inner-information-loyaltie').click(function () {
                $(this).toggleClass('active');
                $(this).parent().toggleClass('active');
                $(this).next().slideToggle(400);
            });
        }

    });
});
