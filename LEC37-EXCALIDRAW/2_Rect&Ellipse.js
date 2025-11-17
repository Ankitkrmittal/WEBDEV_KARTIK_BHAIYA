const canvas = document.querySelector('#mycanvas');
const pen = canvas.getContext('2d');
const dpr = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();

canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
pen.scale(dpr,dpr);

pen.beginPath();
pen.strokeStyle = 'red'
pen.lineWidth=5;
pen.strokeRect(50,60,400,400);
pen.stroke();


//now for circle or ellipse
pen.beginPath();
pen.lineWidth=6;
pen.ellipse(350, 350, 200, 100, 0, 0, Math.PI * 2)
pen.strokeStyle = 'black';
pen.stroke();