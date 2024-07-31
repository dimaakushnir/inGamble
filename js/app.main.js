let body = document.querySelector('body');

// Dinamic adaptive
let da_elements = document.querySelectorAll('[data-da]');
let parents_original = [];
let attr_elements = [];
let attr_element = [];
let match_media = [];

for (let item of da_elements) {
    let parentChildren = item.parentElement.children;
    for (let i = 0; i < parentChildren.length; i++) {
        if (parentChildren[i] == item) {
            parents_original.push({
                'parent': item.parentElement,
                'index': i
            })
        }
    }
}

for (let item of da_elements) {
    attr_elements.push(item.dataset.da);
}

for (let i = 0; i < attr_elements.length; i++) {
    match_media.push(window.matchMedia("(max-width:" + attr_elements[i].split(', ')[2] + "px)"));
    match_media[i].addEventListener('change', dinamic_adapt);
}

function dinamic_adapt() {
    for (let i = 0; i < match_media.length; i++) {
        if (match_media[i].matches) {
            attr_element = attr_elements[i].split(', ');
            document.querySelector(`.${attr_element[0]}`).insertBefore(da_elements[i], document.querySelector(`.${attr_element[0]}`).children[attr_element[1]]);
        } else {
            parents_original[i].parent.insertBefore(da_elements[i], parents_original[i].parent.children[parents_original[i].index]);
        }
    }
}
dinamic_adapt();


// IBG
let ibg = document.querySelectorAll('.ibg');

if (ibg) {
    for (let item of ibg) {
        let ibgImg = item.querySelector('img');
        let ibgImgSrc = ibgImg.getAttribute('src');
        item.style.backgroundImage = `url(${ibgImgSrc})`;
    }
}