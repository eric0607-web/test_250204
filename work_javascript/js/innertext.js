var list = document.querySelectorAll(".list li")

for(var el of list){
    el.addEventlistener("click",e=>{
        console.log(e.currentTarget.innertext);
    })

    
}