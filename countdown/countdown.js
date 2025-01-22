
const timers = new Map([
    ["genshin-update-countdown", new Date("2025-01-31")],
    ["hsr-update-countdown", new Date("2025-02-25")]
]);

function updateCountdown(id) {
    const targetTime = timers.get(id);
    if (!targetTime) {
        console.error("Missing Timer");
        return;
    }

    const element = document.getElementById(id);
    if (element) {
        element.textContent = returnUpdatedTimeText(targetTime);
    } else {
        console.error(`Element with id "${id}" not found.`);
    }
}

function returnUpdatedTimeText(time) {
    const currTime = new Date();
    const timeElapsed = time.getTime() - currTime.getTime();

    const secs = Math.floor((timeElapsed % (1000 * 60)) / 1000);
    const mins = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
    const hrs = Math.floor((timeElapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(timeElapsed / (1000 * 60 * 60 * 24));

    return `${days} days, ${hrs} hours, ${mins} mins, and ${secs} secs.`;
}

updateCountdown("genshin-update-countdown");
updateCountdown("hsr-update-countdown");

setInterval(updateCountdown, 1000, "genshin-update-countdown");
setInterval(updateCountdown, 1000, "hsr-update-countdown");

