background = {
  canvas: null,
  context: null,
  time_per_frame: 60, // milliseconds
};

var star_matrix = [];
var num_stars = 72;

function on_ready(){
  background.canvas = document.getElementById("canvas");
  background.context = background.canvas.getContext("2d");

  // Init starts position
  for ( i = 0; i < num_stars; i++ ){
    star_matrix[i] = [
      int_rand(background.canvas.width), // x
      int_rand(background.canvas.height), // y
      int_rand(255) // alpha
    ];
  }

  render_loop(); // 40 fps
}

function int_rand(max){
  return Math.round(Math.random() * max);
}

function render_loop(){
  for ( i = 0; i < num_stars; i++ ){
    x = star_matrix[i][0];
    y = star_matrix[i][1];
    a = star_matrix[i][2];
    put_pixel(x, y, 55, 255, 55, a );

    var coin = int_rand(2);
    star_matrix[i][0] = coin == 1 ? star_matrix[i][0] += 0.1 : star_matrix[i][0] -= 0.1;
    var coin = int_rand(2);
    star_matrix[i][1] = coin == 1 ? star_matrix[i][1] += 0.1 : star_matrix[i][1] -= 0.1;
    var coin = int_rand(2);
    star_matrix[i][2] = coin == 1 ? star_matrix[i][2] += 0.1 : star_matrix[i][2] -= 0.1;
  }

  setTimeout( function(){
    clear_canvas();
    render_loop();
  }, background.time_per_frame );
}

function clear_canvas(){
  background.context.clearRect(0, 0, background.canvas.width, background.canvas.height);
}

function put_pixel(x, y, r, g, b, a){
  //console.log("Putting pixel at:", x, y );
  var id = background.context.createImageData(1,1); // only do this once per page
  var d  = id.data;                        // only do this once per page
  d[0]   = r;
  d[1]   = g;
  d[2]   = b;
  d[3]   = a;
  background.context.putImageData( id, x, y );

  background.context.fillStyle = "rgba("+r+","+g+","+b+","+(a/255)+")";
  background.context.fillRect( x, y, 1, 1 );
}

setTimeout( on_ready, 100 );
