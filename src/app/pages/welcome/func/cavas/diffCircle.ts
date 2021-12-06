export default function diffCircle(){
    const WIDTH = 600;
    const HEIGHT = 600;
    let radius = 0;
    const canvas = document.createElement('canvas')
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    const ctx = canvas.getContext("2d")
    ctx.globalAlpha = 0.95;
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}