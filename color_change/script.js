const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((btn)=>{
    
    // console.log(btn)
btn.addEventListener('click',(e)=>{
    // console.log(e);
    console.log(e.target.id);

    body.style.backgroundColor=e.target.id;

})

    
})




// console.log(button);