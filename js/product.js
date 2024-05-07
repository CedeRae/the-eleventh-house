
//toggle image carousel
const productImages = document.querySelectorAll(".product-images img");
const productSlide = document.querySelector(".image-carousel");

let activeSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeSlide].classList.remove('active');
        item.classList.add('active');
        productSlide.style.backgroundImage = `url('${item.src}')`;
        activeSlide = i;
    })
});

//toggle size button
const sizeBtns = document.querySelectorAll('.size-selection');
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
});

const colorBtns = document.querySelectorAll('.color-selection');
let checkedClr = 0;

colorBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        colorBtns[checkedClr].classList.remove('check');
        item.classList.add('check');
        checkedClr = i;
    })
})