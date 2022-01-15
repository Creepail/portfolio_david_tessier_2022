let learn_more = document.querySelector('button')

const info = document.querySelector('.about_me_title')

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

console.log(info.scrollTop)
console.log(info.scrollLeft)

learn_more.addEventListener("click", function(){
    window.scrollTo({
        top: getOffset(info).top,
        left: getOffset(info).left,
        behavior: 'smooth'
    });
})

window.addEventListener('scroll', function(){
    console.log(window.scrollY)
})


