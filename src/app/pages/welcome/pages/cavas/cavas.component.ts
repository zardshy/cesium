import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cavas',
  templateUrl: './cavas.component.html',
  styleUrls: ['./cavas.component.css']
})
export class CavasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let ctx =  this.createCavas()
    this.drawText(ctx)
  }

  createCavas(){
    let root = document.querySelector('#root')
    let cavas = document.createElement('canvas');
    root.appendChild(cavas)
    cavas.width = 300;
    cavas.height = 100;

    const ctx = cavas.getContext('2d');
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,cavas.width,cavas.height);
    return ctx
  }

  drawText(ctx){
    let W = 300;
    let H = 100;
    let fS = 30;
    let T = '这真的是一句话'

    ctx.font = `${fS}px sans-serif`;
    // 测算文字长度
    let tL = ctx.measureText(T)
    // 起始坐标
    let x = (W - tL.width) / 2;
    let y = H/2 + W/fS
    ctx.strokeStyle = 'red'
    ctx.textAlign = 'center'
    ctx.fillStyle = '#FFFAFA';
    // ctx.strokeText(T,150,35,50);
    ctx.fillText(T,150,80,50);
  }


  drawText1(ctx){
    let W = 300;
    let H = 100;
    let T = ['这真的是一句话']
    let fS = Math.round(Math.max(W/T[0].length,H/T[0].length)/ T.length);
    console.log(fS)
    ctx.font = `${fS}px serif`;
    ctx.fillStyle = '#FFFAFA';

    for (let text of T){
      // 测算文字长度
      let tL = ctx.measureText(T)
      // 起始坐标
      let x = (W - tL.width) / 2;
      let y = (H / (T.length+1)) + fS/2
      ctx.fillText(text,x,y,W); 
    }
  }


}
