let scroller = document.getElementById('scroller');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', function (){
    let scrollTop = this.document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`;
});


let up = document.getElementById('up');
window.addEventListener("scroll", function (){
    this.scrollY >= 80 ? up.classList.add("show") : up.classList.remove("show")
})
up.addEventListener('click', function(){
    window.scrollTo({
        top: 0, behavior: "smooth"
    })
})

let section = document.querySelector(".skills")
let progress = document.querySelectorAll(".prog span")
window.addEventListener("scroll", function (){
    if(window.scrollY >= section.offsetTop){
        progress.forEach(span=>{
            span.style.width = span.parentElement.dataset.progress
        })
    }
})

let statsSection = document.querySelector(".stats")
let numbers = document.querySelectorAll(".stats .number")
let started = false
window.addEventListener("scroll", function(){
    if(window.scrollY >= statsSection.offsetTop){
        if(!started){
            numbers.forEach((num)=> startCount(num))
        }
        started = true
    }
})

function startCount(el){
    let goal = el.dataset.num 
    let count = setInterval(()=>{
        el.textContent++
        if(el.textContent == goal){
            clearInterval(count)
        }
    },2000 / goal)
}

let countDown = new Date("April 3, 2025 23:59:59").getTime()

let counter = setInterval(()=>{
    let dateNow = new Date().getTime()
    let diff = countDown - dateNow
    let days = Math.floor(diff / (1000 * 60 * 60 * 24))
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60 ))
    let seconds = Math.floor((diff % (1000 * 60)) / 1000)

    document.querySelector(".days").innerHTML = days
    document.querySelector(".hours").innerHTML = hours
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds

    if(diff < 0) clearInterval(counter)
}, 1000)