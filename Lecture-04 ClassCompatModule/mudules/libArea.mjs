// libArea.mjs
function areaTriangle(b,h) {
    return (b * h) / 2;
}

function areaCircle(r) {
    return Math.PI * r * r;
}

function areaSqr(w,l) {
    return w * l;
}

function areaRectangle(e,i) {
    return (e + i) * 2;
}

export { areaCircle, areaTriangle, areaSqr, areaRectangle };