console.log("frontend loaded");

const liveCountEl = document.getElementById("liveCount");

const socket = io("https://live-users-backend.onrender.com", {
  transports: ["websocket", "polling"]
});

socket.on("connect", () => {
  console.log("connected ✅", socket.id);
});

socket.on("liveUsers", (count) => {
  console.log("liveUsers:", count);
  if (liveCountEl) liveCountEl.textContent = count;
});

socket.on("connect_error", (err) => {
  console.log("connect error ❌", err.message);
});
