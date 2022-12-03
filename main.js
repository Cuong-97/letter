const modal = document.querySelector('.js_modal');


// click bên ngoài modal vẫn có thể đóng
modal.addEventListener('click', function(){
    modal.classList.remove('close');
});