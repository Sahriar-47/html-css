let counter = 0;
let cycles = 0;

function increase() {
    counter++;

    if (counter > 100) {
        cycles++;
        counter = 0;
        updateCycles();
    }

    updateCounter();
}

function decrease() {
    if (counter <= 0) return;
    counter--;
    updateCounter();
}

function reset() {
    counter = 0;
    cycles = 0;
    updateCounter();
    updateCycles();
}

function updateCounter() {
    document.getElementById("counter").innerText = counter;
}

function updateCycles() {
    document.getElementById("cnt").innerText =
        "Number of cycles: " + cycles;
}
