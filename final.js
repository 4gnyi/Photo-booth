// constants
const WIDTH = 1176, HEIGHT = 1470;

// dom elements
const canvas = document.getElementById('finalCanvas'),
      ctx = canvas.getContext('2d'),
      downloadBtn = document.getElementById('downloadBtn'),
      homeBtn = document.getElementById('homeBtn');

// load photo
const finalImage = new Image(), dataURL = localStorage.getItem('photoStrip');
if (dataURL) {
  finalImage.src = dataURL;
  finalImage.onload = drawCanvas;
  localStorage.removeItem('photoStrip');
} else alert("No photo found!");

// draw canvas
function drawCanvas() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.drawImage(finalImage, 0, 0, WIDTH, HEIGHT);
}

// download
downloadBtn.addEventListener('click', () => {
  canvas.toBlob(blob => { const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'photobooth.png'; a.click(); }, 'image/png');
});

// home
homeBtn.addEventListener('click', () => window.location.href = 'index.html');

// logo
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (logo) logo.addEventListener('click', () => window.location.href = 'index.html');
});