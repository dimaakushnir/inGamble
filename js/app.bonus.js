// Bonus Information Items
document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        $('.top-item-bonus-information').click(function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle(400);
        });
    });
});


// Info Popup
let info_popup_open_btns = document.querySelectorAll('.info-popup-open');

if (info_popup_open_btns) {
    info_popup_open_btns.forEach(function (info_popup_open_btn) {
        let info_popup_parent = info_popup_open_btn.parentElement.closest('.item-content-bonus-information');
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
                        item.classList.remove('open');
                    })
                }

                if (info_popup) {
                    info_popup.classList.add('active');

                    setTimeout(function (event) {
                        info_popup.classList.add('open');
                    }, 100)
                }
            })
        }

        if (info_popup_btn_close) {
            info_popup_btn_close.addEventListener('click', function (event) {
                event.preventDefault();

                if (info_popup) {
                    info_popup.classList.remove('active');
                    info_popup.classList.remove('open');
                }
            })
        }
    })
}

if (document.querySelector('.popup-item-content-bonus-information')) {
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.popup-item-content-bonus-information')) {
            let popups_bonus = document.querySelectorAll('.popup-item-content-bonus-information');

            if (popups_bonus) {
                popups_bonus.forEach(function (popup_bonus) {
                    if (popup_bonus.classList.contains('open')) {
                        popup_bonus.classList.remove('active');
                        popup_bonus.classList.remove('open');
                    }
                })
            }
        }
    })
}

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

        if (document.querySelector('.vpn-friendly-casinos-2-gamble__swiper')) {
            // VPN Friendly Casinos 2 Slider
            const swiperVPNFriendlyCasinos2 = new Swiper('.vpn-friendly-casinos-2-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 16,

                pagination: {
                    el: ".vpn-friendly-casinos-2-gamble__pagination",
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        spaceBetween: 16,
                    },
                    480: {
                        spaceBetween: 14,
                    },
                    768.98: {
                        spaceBetween: 16,
                    }
                }
            });
        }
    });
});