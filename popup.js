const timeElement = document.getElementById("time");
const nameElement = document.getElementById("name");

 const currentTime = new Date().toLocaleTimeString();

 timeElement.textContent = `Time is current: ${currentTime}`;

 chrome.action.setBadgeText({
     text: "",
 }, () => {
     console.log("Finished set Badge ID")
 });

 chrome.storage.sync.get(["name"], (res) => {
    const name = res.name ?? "???"
     nameElement.textContent = `Hi, ${res.name}!`
 })