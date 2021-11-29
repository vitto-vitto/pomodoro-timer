const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");
const timerElement = document.getElementById("timer");
 

function updateTimeElements(){
    chrome.storage.local.get(["timer"], (res) => {
        const time = res.timer ?? 0;
        timerElement.textContent = `Timer at ${time} seconds`
    })
    const currentTime = new Date().toLocaleTimeString()
     timeElement.textContent = `Time is current: ${currentTime}`;
}

updateTimeElements()
setInterval(updateTimeElements, 1000)

 chrome.storage.sync.get(["name"], (res) => {
    const name = res.name ?? "???"
     nameElement.textContent = `Hi, ${res.name}!`
 })