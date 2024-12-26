//your JS code here. If required.
let Applause = document.getElementById("Applause")
let boo = document.getElementById("boo")
let gasp = document.getElementById("gasp")
let tada = document.getElementById("tada")
let victory = document.getElementById("victory")
let wrong = document.getElementById("wrong")

let stop = document.getElementsByClassName("stop");
stop.addEventListner("click",()=>{
    Applause.pause();
    boo.pause();
    gasp.pause();
    tada.pause();
    victory.pause();
    wrong.pause();
})

let btn = document.getElementsByClassName("btn");

for(button in btn){
    button.addEventListner("click",()=>{
        Applause.play();
    })
}