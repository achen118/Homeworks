document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('myCanvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = "rgb(102, 153, 255)";
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(250, 250, 240, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgb(204, 204, 255)";
  ctx.fillStyle = "rgb(204, 102, 153)";
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(250, 250, 50, 0, Math.PI * 2, true); // Outer circle,
  ctx.moveTo(285, 250);
  ctx.arc(250, 250, 35, 0, Math.PI, false);  // Mouth (clockwise)
  ctx.moveTo(240, 240);
  ctx.arc(235, 240, 5, 0, Math.PI * 2, true);  // Left eye
  ctx.moveTo(270, 240);
  ctx.arc(265, 240, 5, 0, Math.PI * 2, true);  // Right eye
  ctx.stroke();
});
