let learn_more = document.querySelector('button')

const info = document.querySelector('.about_me_title')

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

learn_more.addEventListener("click", function(){
    window.scrollTo({
        top: getOffset(info).top,
        left: getOffset(info).left,
        behavior: 'smooth'
    });
})

let skills = document.querySelector('.title_skill')
let skills_name = document.querySelectorAll('.skills_name')



window.addEventListener('scroll', function(){
    let i = getOffset(skills).top - 100
    if(window.scrollY >= i){
        skills_name.forEach(element => {
            element.classList.add('active_skill')
        });
    }
})


// header

let header_btn = document.querySelectorAll('.header_scroll')
let project = document.querySelector('.project')


header_btn[0].addEventListener("click", function(){
    window.scrollTo({
        top: getOffset(skills).top,
        left: getOffset(skills).left,
        behavior: 'smooth'
    });
})

header_btn[1].addEventListener("click", function(){
    window.scrollTo({
        top: getOffset(info).top,
        left: getOffset(info).left,
        behavior: 'smooth'
    });
})

header_btn[2].addEventListener("click", function(){
    window.scrollTo({
        top: getOffset(project).top,
        left: getOffset(project).left,
        behavior: 'smooth'
    });
})


// footer


let footer_btn = document.querySelectorAll('.footer_scroll')

footer_btn[0].addEventListener("click", function(){
    window.scrollTo({
        top: getOffset(skills).top,
        left: getOffset(skills).left,
        behavior: 'smooth'
    });
})

footer_btn[1].addEventListener("click", function(){
    window.scrollTo({
        top: getOffset(info).top,
        left: getOffset(info).left,
        behavior: 'smooth'
    });
})

footer_btn[2].addEventListener("click", function(){
    window.scrollTo({
        top: getOffset(project).top,
        left: getOffset(project).left,
        behavior: 'smooth'
    });
})


function bubblespawn(a){
        
        let i = 0

    while(i != a){

        let bubble = document.createElement("div")
        bubble.classList.add('bubble')

        let randomcolor = Math.floor(Math.random() * 3) + 1;

        if(randomcolor == 1){
            bubble.style.backgroundColor = 'var(--pink-neon)'
           

        } else if(randomcolor == 2) {
            bubble.style.backgroundColor = 'var(--blue-neon)'
        } else {
            bubble.style.backgroundColor = 'var(--purple-neon)'
        }

        let randomSize = Math.floor(Math.random() * 50) + 1;
        let randomLeft = Math.floor(Math.random() * 90) + 1;
        let randomTop = Math.floor(Math.random() * 90) + 1;

        bubble.style.width = randomSize + 'px'
        bubble.style.height = randomSize + 'px'

        bubble.style.left = randomLeft + '%'
        bubble.style.top = randomTop + '%'

        bubble.addEventListener("animationend", function(){
            bubble.remove()
        },false)

        
        let body = document.querySelector('body')
        body.appendChild(bubble)
        i+=1
    }

    setTimeout(function() {
        bubblespawn(a)
    }, 1000);
}

bubblespawn(5)