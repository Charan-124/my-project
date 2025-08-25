const svg = document.getElementById('canvas');
let drawing = false;
let path = null;
let d = '';


function getPoint(evt) {
const rect = svg.getBoundingClientRect();
const x = evt.clientX - rect.left;
const y = evt.clientY - rect.top;
return {x, y};
}


svg.addEventListener('mousedown', (e) => {
drawing = true;
const p = getPoint(e);
d = `M ${p.x} ${p.y}`;
path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("stroke", "blue");
path.setAttribute("fill", "none");
path.setAttribute("stroke-width", "2");
path.setAttribute("d", d);
svg.appendChild(path);
});


svg.addEventListener('mousemove', (e) => {
if (!drawing) return;
const p = getPoint(e);
d += ` L ${p.x} ${p.y}`;
path.setAttribute("d", d);
});


svg.addEventListener('mouseup', () => {
drawing = false;
});


svg.addEventListener('mouseleave', () => {
drawing = false;
});