document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {

        if (document.querySelector('.iwild-casino-bonuses__swiper')) {
            // Iwild Casino Bonuses
            const swiperIwildCasinoBonuses = new Swiper('.iwild-casino-bonuses__swiper', {
                // slidesPerView: 5,
                slidesPerView: 'auto',
                spaceBetween: 20,

                pagination: {
                    el: ".iwild-casino-bonuses__pagination",
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

        if (document.querySelector('.iwild-casino-bonuses-tabs__swiper')) {
            // Iwild Casino Bonuses Tabs
            const swiperIwildCasinoBonusesTabs = new Swiper('.iwild-casino-bonuses-tabs__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 40,

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        spaceBetween: 24,
                    },
                    // when window width is >= 320px
                    480.98: {
                        spaceBetween: 40,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 40,
                    }
                }
            });
        }

        if (document.querySelector('.iwild-casino-promo__swiper')) {
            // Iwild Casino Promo
            const swiperIwildCasinoPromo = new Swiper('.iwild-casino-promo__swiper', {
                slidesPerView: 4,
                spaceBetween: 20,

                pagination: {
                    el: ".iwild-casino-promo__pagination",
                    clickable: true,
                },

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: "auto",
                        spaceBetween: 16
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                    // when window width is >= 480px
                    1650.98: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    // when window width is >= 640px
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                }
            });
        }

        if (document.querySelector('.stake-sister-casinos-review__swiper')) {
            // Stake Sister Casinos Review Slider
            const swiperStakeSisterCasinosReview = new Swiper('.stake-sister-casinos-review__swiper', {
                // slidesPerView: 5,
                slidesPerView: 'auto',
                spaceBetween: 16,

                pagination: {
                    el: ".stake-sister-casinos-review__pagination",
                    clickable: true,
                },
            });
        }

        if (document.querySelector('.other-сasinos-review__swiper')) {
            // Iwild Casino Bonuses
            const swiperIwildCasinoBonuses = new Swiper('.other-сasinos-review__swiper', {
                // slidesPerView: 5,
                slidesPerView: 'auto',
                spaceBetween: 20,

                // Navigation arrows
                navigation: {
                    nextEl: '.other-сasinos-review-navigation-btn_next',
                    prevEl: '.other-сasinos-review-navigation-btn_prev',
                },
            });
        }

        if (document.querySelector('.slider-mob-other-сasinos-review__swiper')) {
            // Iwild Casino Bonuses
            const swiperIwildCasinoBonuses = new Swiper('.slider-mob-other-сasinos-review__swiper', {
                // slidesPerView: 5,
                slidesPerView: 'auto',
                spaceBetween: 16,

                pagination: {
                    el: ".slider-mob-other-сasinos-review__pagination",
                    clickable: true,
                },
            });
        }

        if (document.querySelector('.info-review__tabs__swiper')) {
            // Iwild Casino Bonuses Tabs
            const swiperIwildCasinoBonusesTabs = new Swiper('.info-review__tabs__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 40,

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        spaceBetween: 24,
                    },
                    // when window width is >= 320px
                    480.98: {
                        spaceBetween: 40,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 40,
                    }
                }
            });
        }
    });
});


// Tabs
let tabs = document.querySelectorAll('.tabs');

if (tabs) {
    tabs.forEach(function (tabs_block) {
        let tabs_btns = tabs_block.querySelectorAll('.slide-tabs__btn');

        let tabs_container = tabs_block.parentElement.closest('.tabs-container');
        let tabs_body_blocks;

        if (tabs_container) {
            tabs_body_blocks = tabs_container.querySelectorAll('.tabs-block');
        }

        if (tabs_btns) {
            tabs_btns.forEach(function (tabs_btn) {
                tabs_btn.addEventListener('click', function (event) {
                    event.preventDefault();

                    tabs_btns.forEach(function (btn) {
                        btn.classList.remove('active');

                    })

                    tabs_btn.classList.add('active');

                    if (tabs_body_blocks) {
                        tabs_body_blocks.forEach(function (tabs_body_block) {
                            if (tabs_btn.dataset.filter == tabs_body_block.dataset.filter) {
                                tabs_body_block.classList.add('active');
                            } else {
                                tabs_body_block.classList.remove('active');
                            }
                        })
                    }
                })
            })
        }
    })

}

// Info Popup
let info_popup_open_btns = document.querySelectorAll('.info-popup-open');

if (info_popup_open_btns) {
    info_popup_open_btns.forEach(function (info_popup_open_btn) {
        let info_popup_parent = info_popup_open_btn.parentElement.closest('.top-block-info-review');
        let info_popup;
        let info_popup_btn_close;

        if (info_popup_parent) {
            info_popup = info_popup_parent.querySelector('.popup-item-content-bonus-information');

            if (info_popup) {
                info_popup_btn_close = info_popup.querySelector('.info-popup-close');
            }
        }

        if (info_popup_parent) {
            info_popup_open_btn.addEventListener('click', function (event) {
                event.preventDefault();

                let info_popups = document.querySelectorAll('.popup-item-content-bonus-information');

                if (info_popups) {
                    info_popups.forEach(function (item) {
                        item.classList.remove('active');
                    })
                }

                if (info_popup) {
                    info_popup.classList.add('active');
                }
            })
        }

        if (info_popup_btn_close) {
            info_popup_btn_close.addEventListener('click', function (event) {
                event.preventDefault();

                if (info_popup) {
                    info_popup.classList.remove('active');
                }
            })
        }
    })
}


// Popup Consultation
let popup_review = document.querySelector('.popup-review');
let popup_review_btn = document.querySelector('.popup-review-btn')

if (popup_review_btn) {
    popup_review_btn.addEventListener('click', function (event) {
        event.preventDefault();

        if (popup_review) {
            body.classList.add('lock');
            popup_review.classList.add('open');

            setTimeout(function (event) {
                popup_review.classList.add('close');
            }, 300);
        }
    })
}

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});