function dayTime() {
    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    document.querySelector(".day").innerHTML = `${date}/${month}/${year}`;

    let hour = now.getHours();
    let min = now.getMinutes();
    document.querySelector(".time").innerHTML = `${hour}:${min}`;
};

setInterval(dayTime, 1000);