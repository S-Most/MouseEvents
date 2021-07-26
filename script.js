const cirkel = document.querySelector(".cirkel")
const btn = document.querySelector("button")
const mijnBody = document.querySelector(".nieuweCirkels")

// console.log(cirkel)

cirkel.style.backgroundColor = "red"

// cirkel.addEventListener("click", function(){
//     cirkel.style.backgroundColor = "green"
// })

// cirkel.addEventListener("mouseover", function(e){
//     console.log(e)
//     // cirkel.style.backgroundColor = "yellow"
// })

function maakCirkel(){
    const mijnCirkel = document.createElement("div");
    mijnCirkel.classList.add("cirkel")
    console.log(mijnCirkel)
    mijnBody.append(mijnCirkel)
}

btn.addEventListener("click", maakCirkel)

document.addEventListener("mousemove", function(event){
    // console.log(event.pageX, event.pageY)

    cirkel.style.transform = "translate("+event.pageX+"px ,"+event.pageY+"px)"
    console.log("translate("+event.pageX+","+event.pageY+")")
})

