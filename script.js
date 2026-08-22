let btn = document.getElementById("btn");
let box = document.querySelector(".box");

btn.addEventListener("click", () =>{
    box.style.backgroundColor = "green";
})
btn.addEventListener("dblclick", () =>{
    box.style.backgroundColor = "red";
})
btn.addEventListener("mouseover", () =>{
    box.style.backgroundColor = "blue";
    box.style.height = "500px";
    box.style.width = "500px";
})
btn.addEventListener("mouseout", () =>{
    box.style.backgroundColor = "red";
    box.style.height = "300px";
    box.style.width = "300px";
})