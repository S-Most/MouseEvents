myDots = document.querySelectorAll(".dot");
apple = document.querySelector(".apple");
place = document.querySelector(".extraDots");

let colors = ["blue", "green", "yellow", "orange", "red", "purple", ]
amountofDots = 1;

apple.addEventListener("mouseover", createDot);
document.addEventListener("click", createDot);

document.addEventListener("mousemove", function(e){
    myleft = e.pageX + "px";
    mytop = e.pageY + "px";

    myDots.forEach(dot => {
        speed = dot.getAttribute("data-cursor");
        dot.style.transform = "translate("+myleft+"," +mytop+")";
        dot.style.transition = "all " + speed
    })
})

function createDot(){
    myNewDot = document.createElement("div");
    myNewDot.classList.add("dot");
    myNewDot.style.background = colors[amountofDots%6]

    myNewDot.setAttribute("data-cursor",amountofDots / 20 + "s");
    place.append(myNewDot);

    myDots = document.querySelectorAll(".dot");

    amountofDots += 1;
    console.log(myNewDot.getAttribute("data-cursor"))
}