
function urlGen(f){
   var i1 = 'https://kforney1205.github.io/kiosk?conference=mp';
   var i2 = document.getElementById('videoID').value;
   f.action = i1 + i2;
   return true;
}