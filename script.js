const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES button click
yesBtn.addEventListener("click", function() {
    document.querySelector(".card").innerHTML =
        "<h1>YAY!!! 💖</h1><p>You just made my day! 🥰</p>";
});

// Function to move NO button
function moveButton() {
    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// Move when hovered (desktop)
noBtn.addEventListener("mouseover", moveButton);

// Move when touched (mobile)
noBtn.addEventListener("touchstart", moveButton);