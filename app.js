const navSlide = () => {
    const burger = document.querySelector('.burger_');
    const nav = document.querySelector('.nav_links');
    const navLinks = document.querySelectorAll('.nav_links li');
    const brandHead = document.querySelector('.brand_head');

    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav_active');

    //animate links

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 +0.5}s`;
        }
    });

        //animate burger

        burger.classList.toggle('toggle_');
       
          

 });
 brandHead.classList.toggle('stable');
   
    
    
    

}
navSlide();
