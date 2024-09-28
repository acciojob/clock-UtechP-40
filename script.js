//your JS code here. If required.
let timer = document.querySelector("#timer");
let i = 0;
setInterval(()=>{
    // i=i+1;
    let date = new Date();
    let zone;
    if(date.getHours>=12){
        zone = "PM"
    }else{
        zone = "AM"
    }
   
    timer.innerText = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${zone}`;
},1000)