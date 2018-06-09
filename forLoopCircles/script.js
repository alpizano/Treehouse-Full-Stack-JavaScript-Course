var html = '';
var red;
var green;
var blue;
var rgbColor;


function genRando() {
 return Math.floor(Math.random() * 256 ) 
}

for(var i = 0; i < 100; i++) {
  
red = genRando();
green = genRando();
blue = genRando();
rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
html += '<div style="background-color:' + rgbColor + '"></div>';

}

document.write(html);