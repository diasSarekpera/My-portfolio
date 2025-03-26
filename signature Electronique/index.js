const zoneSigner = document.getElementById("signatureZone");
const clear = document.getElementById("clear");
const genarate = document.getElementById("genarate");

let trace = zoneSigner.getContext("2d");
let started = false;


zoneSigner.addEventListener("mousedown", (e) => {
    started = true;
    trace.beginPath();
    trace.moveTo(e.offsetX, e.offsetY);
})

zoneSigner.addEventListener("mousemove", (e) => {
    if(started){
        trace.lineTo(e.offsetX, e.offsetY);
        trace.stroke();
    }
})

zoneSigner.addEventListener("mouseup", (e) => {
    started = false;
})

clear.addEventListener("click", () =>{
    trace.clearRect(0, 0, zoneSigner.width, zoneSigner.height);
})

genarate.addEventListener("click", () =>{
    print();
})