// Dropdown
let dropdowns = document.querySelectorAll('.dropdown');

if (dropdowns) {
    dropdowns.forEach(function (dropdown) {
        let dropdown_btn = dropdown.querySelector('.dropdown__btn');
        let dropdown_list = dropdown.querySelector('.dropdown__list');
        let dropdown_items = dropdown.querySelectorAll('.dropdown__list-item');
        let dropdown_input_hidden = dropdown.querySelector('.dropdown__input-hidden');

        if (dropdown_btn) {
            dropdown_btn.addEventListener('click', function (event) {
                event.preventDefault();

                dropdown.classList.toggle('active');
            })

            if (dropdown_items) {
                dropdown_items.forEach(function (dropdown_item) {
                    dropdown_item.addEventListener('click', function (event) {
                        let dropdown_item_icon = dropdown_item.querySelector('.list-item-dropdown-language-header__icon');

                        if (dropdown_btn) {
                            // dropdown_btn.textContent = dropdown_item.textContent;

                            dropdown_items.forEach(function (item) {
                                item.classList.remove('active');
                            })

                            dropdown_item.classList.add('active');

                            if (dropdown_item_icon) {
                                dropdown_btn.innerHTML = dropdown_item_icon.innerHTML;
                            }
                        }

                        if (dropdown_input_hidden) {
                            dropdown_input_hidden.value = dropdown_item.dataset.dropdown;
                        }

                        dropdown.classList.remove('active');
                    })
                })
            }
        }
    })
}

// Submenu
let links_submenu = document.querySelectorAll('.link-submenu');

if (links_submenu) {
    links_submenu.forEach(function (link_submenu) {
        link_submenu.addEventListener('click', function (event) {
            event.preventDefault();

            if (document.documentElement.clientWidth > 1355.98) {
                link_submenu.classList.toggle('active');
                if (link_submenu.nextElementSibling.classList.contains('submenu-header')) {
                    link_submenu.nextElementSibling.classList.toggle('active');
                }
            }
        })

        document.addEventListener('click', function (e) {
            if (document.documentElement.clientWidth > 1355.98) {
                if (link_submenu.nextElementSibling.classList.contains('submenu-header') && !document.querySelector('.menu-header__item_submenu').contains(e.target)) {
                    link_submenu.classList.remove('active');
                    link_submenu.nextElementSibling.classList.remove('active');
                }
            }
        });
    })

    document.addEventListener("DOMContentLoaded", function () {
        $(document).ready(function () {
            $('.link-submenu').click(function () {
                if (document.documentElement.clientWidth <= 1355.98) {
                    $(this).toggleClass('active');
                    $(this).next().slideToggle(400);
                }
            });
        });
    });
}

// Form Input
let form_inputs = document.querySelectorAll('.form-item__input');
let form_input_delete_icons = document.querySelectorAll('.form-item__icon_delete');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;

if (form_inputs) {
    form_inputs.forEach(function (form_input) {
        form_input.addEventListener('focus', function (event) {
            form_input.parentElement.classList.add('focus');
            form_input.parentElement.classList.remove('error');
            form_input.parentElement.classList.remove('confirmed');
        })

        form_input.addEventListener('blur', function (event) {
            if (form_input.value != '') {
                form_input.parentElement.classList.add('filled');
            } else {
                form_input.parentElement.classList.remove('filled');
            }

            form_input.parentElement.classList.remove('focus');

            if (form_input.classList.contains('input-email') && form_input.classList.contains('required')) {
                setTimeout(function () {
                    if (emailRegex.test(form_input.value)) {
                        form_input.parentElement.classList.remove('error');
                        form_input.parentElement.classList.add('confirmed');
                    } else if (!emailRegex.test(form_input.value) && form_input.value != '') {
                        form_input.parentElement.classList.add('error');
                        form_input.parentElement.classList.remove('confirmed');
                    }
                }, 100)
            }
        })

        form_input.addEventListener('input', function (event) {
            if (form_input.value != '') {
                form_input.parentElement.classList.add('filled');
            } else {
                form_input.parentElement.classList.remove('filled');
            }
        })
    })
}

if (form_input_delete_icons) {
    form_input_delete_icons.forEach(function (form_input_delete_icon) {
        form_input_delete_icon.addEventListener('click', function (event) {
            event.preventDefault();

            let form_item = form_input_delete_icon.parentElement;
            let form_input;

            if (form_item) {
                form_input = form_item.querySelector('.form-item__input');

                form_item.classList.remove('filled');
                form_item.classList.remove('focus');
                form_item.classList.remove('error');
                form_item.classList.remove('confirmed');
            }

            if (form_input) {
                form_input.value = '';
            }
        })
    })
}

// Filer Open
let filter_open_btn = document.querySelector('.title-filters-sidebar-gamble__btn');
let filter_open_delete = document.querySelector('.title-filters-sidebar-gamble__btn-delete');
let sidebar_gamble = document.querySelector('.sidebar-gamble');
let header = document.querySelector('.header');
let gamble_body = document.querySelector('.gamble__body');
let footer = document.querySelector('.footer');
let main = document.querySelector('main');

if (filter_open_btn && sidebar_gamble && header && main) {
    filter_open_btn.addEventListener('click', function (event) {
        event.preventDefault();

        if (document.documentElement.clientWidth > 650.98) {
            filter_open_btn.classList.toggle('active');
            sidebar_gamble.classList.toggle('active');
            header.classList.toggle('resize');
            footer.classList.toggle('resize');
            main.classList.toggle('resize');

        } else {
            sidebar_gamble.classList.add('active');
            header.classList.add('resize');
            footer.classList.add('resize');
            main.classList.add('resize');

            if (gamble_body) {
                gamble_body.classList.add('hide');
            }
        }

        let titles_form_filter_item = document.querySelectorAll('.title-item-form-filters');

        if (titles_form_filter_item && !sidebar_gamble.classList.contains('active')) {
            titles_form_filter_item.forEach(function (title_form_filter_item) {

                // document.addEventListener("DOMContentLoaded", function () {
                //     $(document).ready(function () {

                $('.title-item-form-filters').removeClass('active');
                $('.title-item-form-filters').parent().removeClass('active');
                $('.title-item-form-filters').next().slideUp(400);
                $('.title-item-form-filters').next().removeClass('active');

                //     });
                // });
            })
        }
    })
}

if (filter_open_delete && sidebar_gamble && header) {
    filter_open_delete.addEventListener('click', function (event) {
        event.preventDefault();

        sidebar_gamble.classList.remove('active');
        header.classList.remove('resize');
        footer.classList.remove('resize');
        main.classList.remove('resize');

        if (gamble_body) {
            gamble_body.classList.remove('hide');
        }
    })
}

// Burger
let burger = document.querySelector('.header__burger');
let mobile_header = document.querySelector('.mobile-header');

if (burger) {
    burger.addEventListener('click', function (event) {
        event.preventDefault();

        burger.classList.toggle('active');
        mobile_header.classList.toggle('active');
        body.classList.toggle('lock');
    })
}

// Filter Items
if (document.querySelector('.title-item-form-filters')) {

    document.addEventListener("DOMContentLoaded", function () {
        $(document).ready(function () {
            $('.title-item-form-filters').click(function () {
                if ($('.sidebar-gamble').hasClass('active')) {
                    $(this).toggleClass('active');
                    $(this).parent().toggleClass('active');
                    $(this).next().slideToggle(400);
                    $(this).next().toggleClass('active');
                }
            });
        });
    });
}

// Input Range
let form_ranges_few = document.querySelectorAll('.range-form-filter_few');
let form_ranges_only = document.querySelectorAll('.range-form-filter_only');

if (form_ranges_few) {
    form_ranges_few.forEach(function (form_range_few) {
        let rangeInputs = form_range_few.querySelectorAll('.input-range input');
        let priceInputs = form_range_few.querySelectorAll('.field__input');
        let progress = form_range_few.querySelector('.slider-range__progress');

        if (priceInputs) {
            priceInputs.forEach(function (priceInput) {
                priceInput.addEventListener('input', function (event) {
                    // Тільки числа
                    let value = event.target.value;
                    event.target.value = value.replace(/[^0-9]/g, '');

                    let minVal = parseInt(priceInputs[0].value);
                    let maxVal = parseInt(priceInputs[1].value);
                    let priceGap = 1;

                    if (event.target.className === "field__input field__input_min") {
                        if (minVal < rangeInputs[0].min) {
                            priceInputs[0].value = rangeInputs[0].min;
                        } else if (minVal >= maxVal) {
                            priceInputs[0].value = maxVal;
                            rangeInputs[0].value = priceInputs[0].value;
                            progress.style.left = (100 / (rangeInputs[0].max - rangeInputs[0].min)) * (minVal - rangeInputs[0].min) + "%";
                        }
                    } else if (event.target.className === "field__input field__input_max") {
                        if (maxVal > rangeInputs[1].max) {
                            priceInputs[1].value = rangeInputs[1].max;
                            maxVal = rangeInputs[1].max;
                            rangeInputs[1].value = priceInputs[1].value;
                            progress.style.right = (100 / (rangeInputs[1].min - rangeInputs[1].max)) * (maxVal - rangeInputs[1].max) + "%";
                        } else if (maxVal <= minVal) {
                            priceInputs[1].value = minVal;
                            rangeInputs[1].value = priceInputs[1].value;
                            progress.style.right = (100 / (rangeInputs[1].min - rangeInputs[1].max)) * (maxVal - rangeInputs[1].max) + "%";
                        }
                    }

                    if (maxVal - minVal >= priceGap) {
                        if (event.target.className === "field__input field__input_min" && minVal >= rangeInputs[0].min && minVal <= rangeInputs[0].max) {
                            rangeInputs[0].value = minVal;
                            progress.style.left = (100 / (rangeInputs[0].max - rangeInputs[0].min)) * (minVal - rangeInputs[0].min) + "%";
                        } else if (event.target.className === "field__input field__input_max" && maxVal <= rangeInputs[1].max && maxVal >= rangeInputs[1].min) {
                            rangeInputs[1].value = maxVal;
                            progress.style.right = (100 / (rangeInputs[1].min - rangeInputs[1].max)) * (maxVal - rangeInputs[1].max) + "%";
                        }
                    }
                })
            })
        }

        if (rangeInputs) {
            rangeInputs.forEach(function (rangeInput) {
                let minVal = parseInt(rangeInputs[0].value);
                let maxVal = parseInt(rangeInputs[1].value);
                let priceGap = 1;

                progress.style.left = (100 / (rangeInputs[0].max - rangeInputs[0].min)) * (minVal - rangeInputs[0].min) + "%";
                progress.style.right = (100 / (rangeInputs[1].min - rangeInputs[1].max)) * (maxVal - rangeInputs[1].max) + "%";

                rangeInput.addEventListener('input', function (event) {
                    minVal = parseInt(rangeInputs[0].value);
                    maxVal = parseInt(rangeInputs[1].value);

                    if (maxVal - minVal < priceGap) {
                        if (event.target.className === "input-range__min") {
                            rangeInputs[0].value = maxVal;
                            priceInputs[0].value = maxVal;
                            progress.style.left = (100 / (rangeInputs[0].max - rangeInputs[0].min)) * (minVal - rangeInputs[0].min) + "%";
                        } else {
                            rangeInputs[1].value = minVal;
                            priceInputs[1].value = minVal;
                            progress.style.right = (100 / (rangeInputs[1].min - rangeInputs[1].max)) * (maxVal - rangeInputs[1].max) + "%";
                        }
                    } else {
                        priceInputs[0].value = minVal;
                        priceInputs[1].value = maxVal;
                        progress.style.left = (100 / (rangeInputs[0].max - rangeInputs[0].min)) * (minVal - rangeInputs[0].min) + "%";
                        progress.style.right = (100 / (rangeInputs[1].min - rangeInputs[1].max)) * (maxVal - rangeInputs[1].max) + "%";
                    }
                })
            })
        }
    })
}

if (form_ranges_only) {
    form_ranges_only.forEach(function (form_range_only) {
        let rangeInput = form_range_only.querySelector('.input-range input');
        let priceInput = form_range_only.querySelector('.field__input');
        let progress = form_range_only.querySelector('.slider-range__progress');

        if (priceInput) {
            priceInput.addEventListener('input', function (event) {
                let inputVal = parseInt(priceInput.value.replace(/,/g, ''));

                if (inputVal < rangeInput.min) {
                    priceInput.value = rangeInput.min;
                    inputVal = rangeInput.min;
                    progress.style.right = (100 / (rangeInput.min - rangeInput.max)) * (inputVal - rangeInput.max) + "%";
                    rangeInput.value = rangeInput.min;
                } else if (inputVal > rangeInput.max) {
                    priceInput.value = rangeInput.max;
                    inputVal = rangeInput.max;
                    progress.style.right = (100 / (rangeInput.min - rangeInput.max)) * (inputVal - rangeInput.max) + "%";
                    rangeInput.value = rangeInput.max;
                }

                if (inputVal >= rangeInput.min && inputVal <= rangeInput.max) {
                    rangeInput.value = inputVal;
                    progress.style.right = (100 / (rangeInput.min - rangeInput.max)) * (inputVal - rangeInput.max) + "%";
                }

                if (inputVal >= rangeInput.min && inputVal <= rangeInput.max) {
                    rangeInput.value = inputVal;
                    progress.style.right = (100 / (rangeInput.min - rangeInput.max)) * (inputVal - rangeInput.max) + "%";
                }
            })

            document.addEventListener("DOMContentLoaded", function () {
                $(document).ready(function () {
                    function discharge() {
                        $(priceInput).val(String($(priceInput).val().replace(/[^0-9.]/g, '')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    }

                    discharge();

                    $('.field__input_only').keyup(function () {
                        discharge();
                    });
                });
            });
        }

        if (rangeInput) {
            let inputVal = parseInt(rangeInput.value);

            progress.style.right = (100 / (rangeInput.min - rangeInput.max)) * (inputVal - rangeInput.max) + "%";

            rangeInput.addEventListener('input', function (event) {
                let inputVal = parseInt(rangeInput.value);

                priceInput.value = inputVal;

                $(priceInput).val(String($(priceInput).val().replace(/[^0-9.]/g, '')).replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                progress.style.right = (100 / (rangeInput.min - rangeInput.max)) * (inputVal - rangeInput.max) + "%";
            })
        }
    })
}

// Form Filter Items
if (document.querySelector('.title-form-filter')) {
    document.addEventListener("DOMContentLoaded", function () {
        $(document).ready(function () {
            $('.title-form-filter').click(function () {
                $(this).toggleClass('active');
                $(this).next().toggleClass('active');
                $(this).next().slideToggle(400);
            });
        });
    });
}

// Filter Tags
let filter_tags = document.querySelectorAll('.slide-filter-tags-gamble__btn');

if (filter_tags) {
    filter_tags.forEach(function (filter_tag) {
        filter_tag.addEventListener('click', function (event) {
            event.preventDefault();
        })
    })
}

// Form Filter Input Search
let form_filter_search_inputs = document.querySelectorAll('.form-filter__search-input');

if (form_filter_search_inputs) {
    form_filter_search_inputs.forEach(function (form_filter_search_input) {
        let form_filter_body = form_filter_search_input.parentElement.closest('.form-filter__body');

        if (form_filter_body) {
            let form_filter_inputs = form_filter_body.querySelectorAll('.form-filter__input');

            form_filter_search_input.addEventListener('input', function (event) {

                if (form_filter_inputs) {
                    form_filter_inputs.forEach(function (form_filter_input) {
                        if (form_filter_search_input.value == '') {
                            form_filter_input.parentElement.style.display = 'block';
                        } else {
                            let value_lenght = form_filter_search_input.value.length;

                            if (form_filter_input.value.toLowerCase().slice(0, value_lenght) == form_filter_search_input.value.toLowerCase()) {
                                form_filter_input.parentElement.style.display = 'block';
                            } else {
                                form_filter_input.parentElement.style.display = 'none';
                            }
                        }
                    })
                }
            })
        }
    })
}

// Sidebar Title Icons
let sidebar_title_icons = document.querySelectorAll('.title-item-form-filters__icon');

if (sidebar_title_icons) {
    sidebar_title_icons.forEach(function (sidebar_title_icon) {
        sidebar_title_icon.addEventListener('click', function (event) {
            event.preventDefault();

            if (!sidebar_gamble.classList.contains('active')) {
                filter_open_btn.classList.toggle('active');
                sidebar_gamble.classList.toggle('active');
                header.classList.toggle('resize');
                footer.classList.toggle('resize');
                main.classList.toggle('resize');
            }
        })
    })
}