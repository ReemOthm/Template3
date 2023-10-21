let scroller = document.getElementById('scroller');
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', function (){
    let scrollTop = this.document.documentElement.scrollTop;
    scroller.style.width = `${(scrollTop / height) * 100}%`;
});