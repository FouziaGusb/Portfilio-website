let bar= document.getElementById('navbar');

window.onscroll= function(){
    if(scrollY>=200){
        bar.classList.add('sticky')
    }else{
        bar.classList.remove('sticky')
    }
};


