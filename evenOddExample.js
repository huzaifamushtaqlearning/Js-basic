for (let b = 1; b <= 10; b++) {
    if (b % 2 === 0) {
        document.write(b + " is Even<br>"); // Agar b ko 2 se divide karte waqt remainder 0 ho, to woh Even hai
    } else {
        document.write(b + " is Odd<br>"); // Agar b ko 2 se divide karte waqt remainder 1 ho, to woh Odd hai
    }
}
