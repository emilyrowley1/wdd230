function toggleMenu() {
    const menu = document.querySelector('#menu');
    menu.addEventListener('click', () => {
        const nav = document.querySelector('.navigation');
        nav.classList.toggle("responsive");
    })
}

function getDate(){
    const today = new Date();
    var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        var weekday = weekdays[today.getDay()];
    const day = today.getDate()
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    
    const month = months[today.getMonth()];
    const year = today.getFullYear();

    document.querySelector('.date').innerHTML = `${weekday}, ${day} ${month} ${year}`;
}

function copyright(){
    const date = new Date().getFullYear();
    document.querySelector("#copyright").innerHTML = "&copy" + date + " Santaquin Chamber";
}

function lastModified(){
    const modified = document.lastModified;
    document.querySelector("#lastmodification").innerHTML = "Last Modification " + modified;
}

function chamberInvite(){
    const invite = document.createElement("div");
    const node = document.createTextNode("🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.");
    invite.appendChild(node);
    document.querySelector(".date").appendChild(invite); 

}

function main()
{
    getDate();
    toggleMenu();
    copyright();
    lastModified();

    const today = new Date().getDay();
    if (today == 1 || today == 2){
        chamberInvite();
    }


}

main();