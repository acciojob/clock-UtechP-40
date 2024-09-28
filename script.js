// Wrapping the code in an IIFE to avoid global scope pollution
(function() {
    const timer = document.querySelector("#timer");
    let i = 0;

    setInterval(() => {
        const date = new Date();
        let zone;
        if(date.getHours() >= 12) {
            zone = "PM";
        } else {
            zone = "AM";
        }

        // Format the hours for 12-hour clock
        let hours = date.getHours() % 12;
        hours = hours ? hours : 12; // If hours is 0, it should be 12

        timer.innerText = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}, ${hours}:${date.getMinutes()}:${date.getSeconds()} ${zone}`;
    }, 1000);
})();
