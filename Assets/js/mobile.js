const sidebar=document.querySelector('.side-bar');
const body=document.querySelector('body');
const sidebarBtn=document.querySelector('#menu-bar');
const popupBtn=document.querySelector('#popupBtn');
const popup=document.querySelector('.pop-up');
const hearts=document.querySelectorAll('.fav');

sidebarBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    body.classList.add('body-active');
    sidebar.classList.add('sidebar-active');
})
body.addEventListener('click',()=>{
    sidebar.classList.remove('sidebar-active');
    body.classList.remove('body-active');
})
popupBtn.addEventListener('click',()=>{
    popup.classList.add('popup-active');
    body.style.height='100vh';
    body.style.overflow='hidden';
})

popup.addEventListener('click',()=>{
    popup.classList.remove('popup-active');
    body.style.height='100%';
    body.style.overflowY='scroll';
})
document.addEventListener('DOMContentLoaded',addEvents);
function addEvents(){
    let products=document.querySelectorAll('.product');
    products.forEach((product)=>{
        product.addEventListener('click',()=>{
            const img=product.children[1].src;
            const pName=product.children[2].innerText;
            const ratings=product.children[3].children[0].innerText;
            const price=product.children[4].children[0].innerText;
            const offer=product.children[4].children[1].innerText;
            const productDetails={
                imgsrc:img,
                productName:pName,
                ratings:ratings,
                price:price,
                offer:offer
            };
            updateStorage(productDetails);
        })
    })
}
function updateStorage(value){
    let finalvalue=JSON.stringify(value);
    localStorage.setItem('p-details',finalvalue);
}
hearts.forEach((heart)=>{
    heart.addEventListener('click',(e)=>{
        e.stopImmediatePropagation();
        heart.classList.toggle('active');
    },false)
})