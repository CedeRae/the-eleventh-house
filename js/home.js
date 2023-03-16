const productContainers = [...document.querySelectorAll('.container')];
const nxtBtn = [...document.querySelectorAll('.right')];
const preBtn = [...document.querySelectorAll('.left')];

productContainers.forEach((item,  i) => {
    let containerDimentions = item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
});