document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.querySelector(".snow-container");

  for (let i = 0; i < 80; i++) {
    const snowflake = document.createElement("div");
    snowflake.className = "snowflake";
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = 3 + Math.random() * 5 + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = 10 + Math.random() * 20 + "px";
    snowflake.innerHTML = "❄";
    snowContainer.appendChild(snowflake);
  }
});