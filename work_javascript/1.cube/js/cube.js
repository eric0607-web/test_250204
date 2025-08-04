//아이디 circle을 변수로 저장
const circle = document.querySelector("#circle");
const article = document.querySelectorAll("article");

for(let el of article){
    el.addEventListener("mouseenter", e=>{
        circle.style.animationPlayState="paused";
    });
    
    el.addEventListener("mouseleave", e=>{
        circle.style.animationPlayState="running";
    });
}
