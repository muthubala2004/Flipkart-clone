let imgId=0;
const addSwipper = () =>{
    const addContainer=document.querySelector('.ads-container');
    const imags=document.querySelectorAll('.ads-container img');
    console.log(imags);
    setInterval(()=>{
        let imgWidth=imags[0].clientWidth;
        if(imgId>imags.length-1){
            imgId=0;
        }
        addContainer.style.transform= `translateX(-${imgId*imgWidth}px)`;
        imgId++;
    },1500)
}
document.addEventListener('DOMContentLoaded',addSwipper);
const sidebar=document.querySelector('.side-bar');
const body=document.querySelector('body');
const sidebarBtn=document.querySelector('#menu-bar');

sidebarBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    body.classList.add('body-active');
    sidebar.classList.add('sidebar-active');
})
body.addEventListener('click',()=>{
    sidebar.classList.remove('sidebar-active');
    body.classList.remove('body-active');
})