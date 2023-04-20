/* 
NOTES: Jangan Lupa Async Function Di Cek Agar Tidak Salah Dalam Implementasi
*/

console.log('javascript ready...')

//! Responsive Navigation BAR 🎉
const showMobileNav = () => {
  var navbar = document.getElementById("navbar");
  navbar.className === "navibar" ? navbar.className += " responsive" : navbar.className = "navibar"
}

//! Notification Bell 
const notification = (pack) => {
    alert('Please click "OK" to continue')
    return new Promise((success, failed) => {
        if (pack != "starterpack") failed("your pack is not starterpack, please read the notes on js file")
        setTimeout(() => {
            success("Notification Success! 👏")
        }, 1200)
    })
}

//! asynchronous trigger for notification bell
async function showPopup(params) {
    try {
        const popup = await notification(params);
        alert(popup)
    } catch (err) {
        alert(err)
    }
}

// Function to toggle mobile navigation bar
 function showMobileNav() {
    var x = document.getElementById("navbar");
    if (x.className === "navibar") {
        x.className += " responsive";
    } else {
        x.className = "navibar";
    }
}


// Script Untuk Jam//
const currentline = () => {
    const element = document.querySelector("h1");

    let date= new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

    //format 12 jam 
    let day
    day = hours <12 ? "AM" : "PM";
    hours = hours >12 ? hours - 12: hours;
    hours = hours == 0 ? (hours = 12) : hours;

    // fungsi if value kurang dari 10
    hours =  hours < 10 ? `0$(hours)` : hours;
    minutes = minutes <10 ? `0$(minutes)`: minutes;
    seconds = seconds <10 ? `0$(seconds)`: seconds;

    element.textContent - `$(hours):$(minutes):$(seconds) $(day)`;

};
currentTime();
setInterval(currentTime, 1000);