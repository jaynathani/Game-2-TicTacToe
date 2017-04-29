var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var canX = document.getElementById("canvasX");
var ctxX = canX.getContext("2d");
var canO = document.getElementById("canvasO");
var ctxO = canO.getContext("2d");

var x1, y1, x2, y2;
var oRadius = canvas.width/6;
var count=9;
var boxesX = [];
var boxesO = [];
var stat = [];
for(i=0;i<3;i++){
  stat[i] = [];
  for(j=0;j<3;j++){
    stat[i][j] = 0;
  }
}
for(r=0;r<3;r++){
  boxesX[r] = []; boxesO[r] = [];
  for(c=0;c<3;c++){
    boxesX[r][c] = {x: c*canvas.width/3, y: r*canvas.height/3, status: 0};
    boxesO[r][c] = {x: (c*canvas.width/3) + canvas.width/6, y: (r*canvas.height/3) + canvas.height/6, status: 0};
  }
}

function drawLine(){
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2)
  ctx.stroke();
  ctx.closePath();
}
x1 = canvas.width/3; y1 = 0; x2 = canvas.width/3; y2 = canvas.height; drawLine(); //vertical line 1
x1 = (canvas.width*2)/3; y1 = 0; x2 = (canvas.width*2)/3; y2 = canvas.height; drawLine(); //vertical line 2
x1 = 0; y1 = canvas.height/3; x2 = canvas.width; y2 = canvas.height/3; drawLine(); //horizontal line 1
x1 = 0; y1 = (canvas.height*2)/3; x2 = canvas.width; y2 = (canvas.height*2)/3; drawLine(); //horizontal line 2

function drawX(){
  x2 = x1 + canvas.width/3;
  y2 = y1 + canvas.width/3;
  drawLine();
  x2 = x1;
  x1 = x1 + canvas.width/3;
  y2 = y1 + canvas.width/3;
  drawLine();
}
x1 = 0; y1 = 0; x2 = canX.width; y2 = canX.height;
ctxO.beginPath();
ctxO.moveTo(x1,y1);
ctxO.lineTo(x2,y2);
ctxO.stroke();
ctxO.closePath();

x1 = canX.width; y1 = 0; x2 = 0; y2 = canX.height;
ctxO.beginPath();
ctxO.moveTo(x1,y1);
ctxO.lineTo(x2,y2);
ctxO.stroke();
ctxO.closePath();

x1 = canO.width/2; y1 = canO.height/2;
ctxX.beginPath();
ctxX.arc(x1,y1,canO.width/2,0,Math.PI*2);
ctxX.stroke();
ctxX.closePath();

function drawO(){
  ctx.beginPath();
  ctx.arc(x1, y1, oRadius, 0, Math.PI*2);
  ctx.stroke();
  ctx.closePath();
}
function checkRepeat(){

  for(r=0;r<3;r++){
    for(c=0;c<3;c++){
      var bX = boxesX[r][c]; var bO = boxesO[r][c];
      if(bX.x == x1 && bX.y == y1){
        if(bX.status == 0 && stat[r][c] == 0){
          bX.status = 1;
          drawX();
          setTimeout(function(){checkWinX();}, 100); //0.1 seconds delay
          count--;
          stat[r][c] = 1;
          break;
        }else{
          alert("Please select an empty box");
        }
      }
      if(bO.x == x1 && bO.y == y1){
        if(bO.status == 0 && stat[r][c] == 0){
          bO.status = 1;
          drawO();
          setTimeout(function(){checkWinY();}, 100); //0.1 seconds delay
          count--;
          stat[r][c] = 1;
          break;
        }else{
          alert("Please select an empty box");
        }
      }
    }
  }
}
function checkWinX(){
  if(boxesX[0][0].status == 1 && boxesX[0][1].status == 1 && boxesX[0][2].status == 1){alert("Player 1 wins!"); document.location.reload();}
  if(boxesX[1][0].status == 1 && boxesX[1][1].status == 1 && boxesX[1][2].status == 1){alert("Player 1 wins!"); document.location.reload();}
  if(boxesX[2][0].status == 1 && boxesX[2][1].status == 1 && boxesX[2][2].status == 1){alert("Player 1 wins!"); document.location.reload();}
  if(boxesX[0][0].status == 1 && boxesX[1][0].status == 1 && boxesX[2][0].status == 1){alert("Player 1 wins!"); document.location.reload();}
  if(boxesX[0][1].status == 1 && boxesX[1][1].status == 1 && boxesX[2][1].status == 1){alert("Player 1 wins!"); document.location.reload();}
  if(boxesX[0][2].status == 1 && boxesX[1][2].status == 1 && boxesX[2][2].status == 1){alert("Player 1 wins!"); document.location.reload();}
  if(boxesX[2][0].status == 1 && boxesX[1][1].status == 1 && boxesX[0][2].status == 1){alert("Player 1 wins!"); document.location.reload();}
  if(boxesX[0][0].status == 1 && boxesX[1][1].status == 1 && boxesX[2][2].status == 1){alert("Player 1 wins!"); document.location.reload();}
}
function checkWinY(){
  if(boxesO[0][0].status == 1 && boxesO[0][1].status == 1 && boxesO[0][2].status == 1){alert("Player 2 wins!"); document.location.reload();}
  if(boxesO[1][0].status == 1 && boxesO[1][1].status == 1 && boxesO[1][2].status == 1){alert("Player 2 wins!"); document.location.reload();}
  if(boxesO[2][0].status == 1 && boxesO[2][1].status == 1 && boxesO[2][2].status == 1){alert("Player 2 wins!"); document.location.reload();}
  if(boxesO[0][0].status == 1 && boxesO[1][0].status == 1 && boxesO[2][0].status == 1){alert("Player 2 wins!"); document.location.reload();}
  if(boxesO[0][1].status == 1 && boxesO[1][1].status == 1 && boxesO[2][1].status == 1){alert("Player 2 wins!"); document.location.reload();}
  if(boxesO[0][2].status == 1 && boxesO[1][2].status == 1 && boxesO[2][2].status == 1){alert("Player 2 wins!"); document.location.reload();}
  if(boxesO[2][0].status == 1 && boxesO[1][1].status == 1 && boxesO[0][2].status == 1){alert("Player 2 wins!"); document.location.reload();}
  if(boxesO[0][0].status == 1 && boxesO[1][1].status == 1 && boxesO[2][2].status == 1){alert("Player 2 wins!"); document.location.reload();}
}

document.addEventListener("click", clickHandler, false);
function clickHandler(e){
  var x = e.clientX - canvas.offsetLeft;
  var y = e.clientY;

  if(x > 0 && x < canvas.width/3 && y > 0 && y < canvas.height/3){
    x1 = 0; y1 = 0;
    if(count != 0){
      if(count % 2 != 0){checkRepeat();}
      else{x1=x1+canvas.width/6; y1=y1+canvas.height/6; checkRepeat();}
    }else{alert("Game over");document.location.reload();}
  }
  else if(x > canvas.width/3 && x < (canvas.width*2)/3 && y > 0 && y < canvas.height/3){
    x1 = canvas.width/3; y1 = 0;
    if(count != 0){
      if(count % 2 != 0){checkRepeat();}
      else{x1=x1+canvas.width/6; y1=y1+canvas.height/6; checkRepeat();}
    }else{alert("Game over");document.location.reload();}
  }
  else if(x > (canvas.width*2)/3 && x < canvas.width && y > 0 && y < canvas.height/3){
    x1 = (canvas.width*2)/3; y1 = 0;
    if(count != 0){
      if(count % 2 != 0){checkRepeat();}
      else{x1=x1+canvas.width/6; y1=y1+canvas.height/6; checkRepeat();}
    }else{alert("Game over");document.location.reload();}
  }
  else if(x > 0 && x < canvas.width/3 && y > canvas.height/3 && y < (canvas.height*2)/3){
    x1 = 0; y1 = canvas.height/3;
    if(count != 0){
      if(count % 2 != 0){ 1;checkRepeat();}
      else{x1=x1+canvas.width/6; y1=y1+canvas.height/6; checkRepeat();}
    }else{alert("Game over");document.location.reload();}
  }
  else if(x > canvas.width/3 && x < (canvas.width*2)/3 && y > canvas.height/3 && y < (canvas.height*2)/3){
    x1 = canvas.width/3; y1 = canvas.height/3;
    if(count != 0){
      if(count % 2 != 0){ checkRepeat();}
      else{x1=x1+canvas.width/6; y1=y1+canvas.height/6;  checkRepeat();}
    }else{alert("Game over");document.location.reload();}
  }
  else if(x > (canvas.width*2)/3 && x < canvas.width && y > canvas.height/3 && y < (canvas.height*2)/3){
    x1 = (canvas.width*2)/3; y1 = canvas.height/3;
    if(count != 0){
      if(count % 2 != 0){ checkRepeat();}
      else{x1=x1+canvas.width/6; y1=y1+canvas.height/6;  checkRepeat();}
    }else{alert("Game over");document.location.reload();}
  }
  else if(x > 0 && x < canvas.width/3 && y > (canvas.height*2)/3 && y < canvas.height){
    x1 = 0; y1 = (canvas.height*2)/3;
    if(count != 0){
      if(count % 2 != 0){ checkRepeat();}
      else{x1=x1+canvas.width/6; y1=y1+canvas.height/6;  checkRepeat();}
    }else{alert("Game over");document.location.reload();}
  }
  else if(x > canvas.width/3 && x < (canvas.width*2)/3 && y > (canvas.height*2)/3 && y < canvas.height){
    x1 = canvas.width/3; y1 = (canvas.height*2)/3;
    if(count != 0){
      if(count % 2 != 0){checkRepeat();}
      else{ x1=x1+canvas.width/6; y1=y1+canvas.height/6; checkRepeat();}
    }else{alert("Game over");document.location.reload();}
  }
  else if(x > (canvas.width*2)/3 && x < canvas.width && y > (canvas.height*2)/3 && y < canvas.height){
    x1 = (canvas.width*2)/3; y1 = (canvas.height*2)/3;
    if(count != 0){
      if(count % 2 != 0){checkRepeat();}
      else{ x1=x1+canvas.width/6; y1=y1+canvas.height/6; checkRepeat();}
    }else{alert("Game over");document.location.reload();}
  }

}
