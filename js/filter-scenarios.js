let filter_selected_title = document.querySelector('.title-filter-selected');
let filter_selected_body = document.querySelector('.filter-selected__body');
let filter_selected_back = document.querySelector('.top-filter-selected__back');
let filter_main_title = document.querySelector('.title-filters-sidebar-gamble__text');


if (filter_selected_title && filter_selected_body) {
    filter_selected_title.addEventListener('click', function (event) {
        event.preventDefault();

        filter_selected_body.classList.add('active');

        if (filter_main_title) {
            filter_main_title.classList.add('selected');
            filter_main_title.innerHTML = filter_selected_title.innerHTML;
        }
    })
}

if (filter_selected_back && filter_selected_body) {
    filter_selected_back.addEventListener('click', function (event) {
        event.preventDefault();

        filter_selected_body.classList.remove('active');

        if (filter_main_title) {
            filter_main_title.classList.remove('selected');
            filter_main_title.innerHTML = 'Filters';
        }
    })
}


function filterHide() {
    let filter_selected_btns_columns = document.querySelectorAll('.filter-selected__btns-column');
    let filter_selected_btns = document.querySelector('.filter-selected__btns');

    if (filter_selected_btns_columns) {
        if (window.innerWidth >= 651) {
            filter_selected_btns_columns.forEach(function (filter_selected_btns_column) {

                filter_selected_btns_column.classList.remove('show-hide');
                filter_selected_btns_column.classList.remove('show');
                filter_selected_btns_column.classList.remove('hide');

                if (filter_selected_btns_column.getBoundingClientRect().top > 240) {
                    filter_selected_btns_column.classList.add('hide');
                    filter_selected_btns_column.classList.remove('show');
                } else {
                    filter_selected_btns_column.classList.remove('hide');
                    filter_selected_btns_column.classList.add('show');
                }

                if (document.querySelector('.filter-selected__btns-column.hide')) {
                    filter_selected_btns.classList.add('hide');
                } else {
                    filter_selected_btns.classList.remove('hide');
                }

            })
            let show_columns = document.querySelectorAll('.filter-selected__btns-column.show');

            if (show_columns) {
                show_columns[`${show_columns.length - 1}`].classList.add('show-hide');
            }
        }
    }
}

filterHide();

window.addEventListener('resize', filterHide);

if (document.querySelector('.title-filters-sidebar-gamble__btn')) {
    document.querySelector('.title-filters-sidebar-gamble__btn').addEventListener('click', function () {
        setTimeout(function () {
            filterHide();
        }, 10);
    });
}