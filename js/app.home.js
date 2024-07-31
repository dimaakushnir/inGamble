document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {

        if (document.querySelector('.filter-tags-gamble__swiper')) {
            // Filter Tags
            const swiperFilterTags = new Swiper('.filter-tags-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 8,

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        spaceBetween: 4,
                    },
                    // when window width is >= 320px
                    480.98: {
                        spaceBetween: 8,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 8,
                    }
                }
            });
        }

        if (document.querySelector('.todays-hot-gamble__swiper')) {
            // Today's Hot Slider
            const swiperTodaysHot = new Swiper('.todays-hot-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: 'auto',
                spaceBetween: 20,

                pagination: {
                    el: ".todays-hot-gamble__pagination",
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

        if (document.querySelector('.playing-now-gamble__swiper')) {
            // Playing Now Slider
            const swiperPlayingNow = new Swiper('.playing-now-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".playing-now-gamble__pagination",
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

        if (document.querySelector('.welcome-bonus-packs-gamble__swiper')) {
            // Welcome Bonus Packs Slider
            const swiperWelcomeBonusPacks = new Swiper('.welcome-bonus-packs-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".welcome-bonus-packs-gamble__pagination",
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

        if (document.querySelector('.live-casino-bonuses-gamble__swiper')) {
            // Live Casino Bonuses Slider
            const swiperLiveCasinoBonuses = new Swiper('.live-casino-bonuses-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".live-casino-bonuses-gamble__pagination",
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

        if (document.querySelector('.non-sticky-bonuses-gamble__swiper')) {
            // Non-Sticky Bonuses Slider
            const swiperNonStickyBonuses = new Swiper('.non-sticky-bonuses-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".non-sticky-bonuses-gamble__pagination",
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

        if (document.querySelector('.highest-max-bet-bonuses-gamble__swiper')) {
            // Highest Max Bet Bonuses Slider
            const swiperHighestMaxBetBonuses = new Swiper('.highest-max-bet-bonuses-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".highest-max-bet-bonuses-gamble__pagination",
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

        if (document.querySelector('.low-wager-bonuses-gamble__swiper')) {
            // Low Wager Bonuses Slider
            const swiperLowWagerBonuses = new Swiper('.low-wager-bonuses-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".low-wager-bonuses-gamble__pagination",
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

        if (document.querySelector('.low-wager-bonuses-gamble-2__swiper')) {
            // Low Wager Bonuses 2 Slider
            const swiperLowWagerBonuses2 = new Swiper('.low-wager-bonuses-gamble-2__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".low-wager-bonuses-gamble-2__pagination",
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

        if (document.querySelector('.low-wager-bonuses-gamble-3__swiper')) {
            // Low Wager Bonuses 3 Slider
            const swiperLowWagerBonuses3 = new Swiper('.low-wager-bonuses-gamble-3__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".low-wager-bonuses-gamble-3__pagination",
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

        if (document.querySelector('.fastest-payout-casinos-gamble__swiper')) {
            // Fastest Payout Casinos Slider
            const swiperFastestPayoutCasinos = new Swiper('.fastest-payout-casinos-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".fastest-payout-casinos-gamble__pagination",
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

        if (document.querySelector('.new-bonuses-gamble__swiper')) {
            // New Bonuses Slider
            const swiperNewBonuses = new Swiper('.new-bonuses-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".new-bonuses-gamble__pagination",
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

        if (document.querySelector('.safest-casinos-gamble__swiper')) {
            // Safest Casinoss Slider
            const swiperSafestCasinos = new Swiper('.safest-casinos-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".safest-casinos-gamble__pagination",
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

        if (document.querySelector('.popular-bonuses-finland-gamble__swiper')) {
            // Popular Bonuses Finland Slider
            const swiperPopularBonusesFinland = new Swiper('.popular-bonuses-finland-gamble__swiper', {
                // slidesPerView: 5,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".popular-bonuses-finland-gamble__pagination",
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

        if (document.querySelector('.essential-programs-gamble__swiper')) {
            // Essential Programs Gamble Slider
            const swiperEssentialProgramsGamble = new Swiper('.essential-programs-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 20,

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1024.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
                    }
                }
            });
        }

        if (document.querySelector('.vpn-friendly-casinos-gamble__swiper')) {
            // VPN Friendly Casinos Slider
            const swiperVPNFriendlyCasinos = new Swiper('.vpn-friendly-casinos-gamble__swiper', {
                // slidesPerView: 3,
                slidesPerView: "auto",
                spaceBetween: 20,

                pagination: {
                    el: ".vpn-friendly-casinos-gamble__pagination",
                    clickable: true,
                },

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        // slidesPerView: "auto",
                    },
                    // when window width is >= 480px
                    1650.98: {
                        // slidesPerView: 3,
                    },
                    // when window width is >= 640px
                    1920: {
                        // slidesPerView: 3,
                    }
                }
            });
        }

        if (document.querySelector('.highest-max-bet-bonuses-2-gamble__swiper')) {
            // Highest Max Bet Bonuses 2 Slider
            const swiperHighestMaxBetBonuses2 = new Swiper('.highest-max-bet-bonuses-2-gamble__swiper', {
                slidesPerView: 3,
                spaceBetween: 20,

                pagination: {
                    el: ".highest-max-bet-bonuses-2-gamble__pagination",
                    clickable: true,
                },

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        slidesPerView: "auto",
                    },
                    // when window width is >= 480px
                    1650.98: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 640px
                    1920: {
                        slidesPerView: 3,
                    }
                }
            });
        }

        if (document.querySelector('.newly-opened-casinos-gamble__swiper')) {
            // Newly Opened Casinos Slider
            const swiperNewlyOpenedCasinos = new Swiper('.newly-opened-casinos-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 20,
                pagination: {
                    el: ".newly-opened-casinos-gamble__pagination",
                    clickable: true,
                },

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
                    }
                }
            });
        }

        if (document.querySelector('.crypto-casinos-gamble__swiper')) {
            // Crypto Casinos Slider
            const swiperCryptoCasinos = new Swiper('.crypto-casinos-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 20,
                pagination: {
                    el: ".crypto-casinos-gamble__pagination",
                    clickable: true,
                },

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
                    }
                }
            });
        }

        if (document.querySelector('.safest-casino-2-gamble__swiper')) {
            // Safest Casino 2 Slider
            const swiperSafestCasino2 = new Swiper('.safest-casino-2-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 20,

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
                    }
                }
            });
        }

        if (document.querySelector('.safest-casino-2-baner__swiper')) {
            // Safest Casino 2 Baner Slider
            const swiperSafestCasino2Baner = new Swiper('.safest-casino-2-baner__swiper', {
                // Optional parameters
                slidesPerView: 1,
                allowTouchMove: true,
                pagination: {
                    el: ".safest-casino-2-baner__pagination",
                    clickable: true,
                },
            });
        }

        if (document.querySelector('.top-gainers-casinos-gamble__swiper')) {
            // Top Gainers Casinos Slider
            const swiperTopGainersCasinos = new Swiper('.top-gainers-casinos-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 20,

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
                    }
                }
            });
        }

        if (document.querySelector('.top-gainers-casinos-baner__swiper')) {
            // Top Gainers Casinos Baner Slider
            const swiperTopGainersCasinosBaner = new Swiper('.top-gainers-casinos-baner__swiper', {
                // Optional parameters
                slidesPerView: 1,
                allowTouchMove: true,
                pagination: {
                    el: ".top-gainers-casinos-baner__pagination",
                    clickable: true,
                },
            });
        }

        if (document.querySelector('.low-risk-bonuses-gamble__swiper')) {
            // Low Risk Bonuses Slider
            const swiperLowRiskBonuses = new Swiper('.low-risk-bonuses-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 17,
                // spaceBetween: 20,
                pagination: {
                    el: ".low-risk-bonuses-gamble__pagination",
                    clickable: true,
                },

                breakpoints: {
                    // when window width is >= 320px
                    320: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 17,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 17,
                    }
                }
            });
        }

        if (document.querySelector('.top-gainers-casinos-2-gamble__swiper')) {
            // Top Gainers Casinos 2 Slider
            const swiperTopGainersCasinos2 = new Swiper('.top-gainers-casinos-2-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 20,
                pagination: {
                    el: ".top-gainers-casinos-2-gamble__pagination",
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        spaceBetween: 24,
                    },
                    // when window width is >= 320px
                    480.98: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
                    }
                }
            });
        }

        if (document.querySelector('.slider-best-casinos-2024-gamble__swiper')) {
            // Best Casinos 2024 Slider
            const swiperBestCasinos2024 = new Swiper('.slider-best-casinos-2024-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 24,

                breakpoints: {
                    320: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 24,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 24,
                    }
                }
            });
        }

        if (document.querySelector('.payn-play-casinos-gamble__swiper')) {
            // Payn Play Casinos Slider
            const swiperPaynPlayCasinos = new Swiper('.payn-play-casinos-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 20,

                pagination: {
                    el: ".payn-play-casinos-gamble__pagination",
                    clickable: true,
                },

                breakpoints: {
                    320: {
                        spaceBetween: 26,
                    },
                    480: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
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
                spaceBetween: 20,

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
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
                    }
                }
            });
        }

        if (document.querySelector('.slider-best-live-dealer-casinos-gamble__swiper')) {
            // Best Live Dealer Casinos Slider
            const swiperBestLiveDealerCasinos = new Swiper('.slider-best-live-dealer-casinos-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 20,

                pagination: {
                    el: ".slider-best-live-dealer-casinos-gamble__pagination",
                    clickable: true,
                },

                // Navigation arrows
                navigation: {
                    nextEl: '.slider-best-live-dealer-casinos-gamble__btn_next',
                    prevEl: '.slider-best-live-dealer-casinos-gamble__btn_prev',
                },

                breakpoints: {
                    320: {
                        spaceBetween: 16,
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
                    }
                }
            });
        }

        if (document.querySelector('.vpn-friendly-casinos-3-gamble__swiper')) {
            // VPN Friendly Casinos 2 Slider
            const swiperVPNFriendlyCasinos3 = new Swiper('.vpn-friendly-casinos-3-gamble__swiper', {
                // Optional parameters
                slidesPerView: "auto",
                allowTouchMove: true,
                spaceBetween: 20,

                pagination: {
                    el: ".vpn-friendly-casinos-3-gamble__pagination",
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
                    },
                    // when window width is >= 320px
                    1650.98: {
                        spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    1920: {
                        spaceBetween: 20,
                    }
                }
            });
        }

    });
});