const canvas = document.querySelector('#mycanvas');
const pen = canvas.getContext('2d');

const dpr = window.devicePixelRatio || 1;
const rect = canvas.getBoundingClientRect();

canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
pen.scale(dpr,dpr);


pen.beginPath();
pen.moveTo(50,50);
pen.lineWidth =10;
pen.lineTo(300,300);
pen.stroke();