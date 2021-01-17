var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var size = 0;
var grow = false;

setInterval(render, 10);
//render()

function render(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (size == 0 || size == canvas.width || size == canvas.height){
    grow = !grow;
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0,0, canvas.width, canvas.height);
  ctx.shadowBlur = 100;
  ctx.shadowColor = "darkgreen";
  ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
  
  if (grow ) {
    size++;
  } else {
    size--;
  }

  console.log(size);
}
