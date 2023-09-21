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

//
document.addEventListener('DOMContentLoaded',loadContent);

function loadContent(){
    const img=document.querySelector('.left-side img');
    const pName=document.querySelector('#pname');
    const price=document.querySelector('#price');
    const ratgin=document.querySelector('#rating');
    const offer=document.querySelector('#offer');
    const detail=JSON.parse(localStorage.getItem('p-details'));
    
    img.src=detail.imgsrc;
    pName.innerText=detail.productName;
    price.innerText=detail.price;
    let span=document.createElement('span');
    span.id='offer';
    span.innerText=detail.offer;
    span.style.marginLeft='2rem';
    price.append(span);
    ratgin.innerText=detail.ratings;
}