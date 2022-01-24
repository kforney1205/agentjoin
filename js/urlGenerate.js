
function urlGen(f){
   var i1 = 'urlSeg1';
   var i2 = f.intranet.value;
   var i3 = 'urlSef';
   f.action = i1 + i2 + i3;
   return true;
}