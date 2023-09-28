function init()
{
  var canvas = document.getElementById("canvas");
  if(canvas.getContext)
  {
   ctx = canvas.getContext("2d");
   
   
   ctx.beginPath();
   ctx.moveTo(370, 50); 
   ctx.lineTo(400,0); 
   ctx.lineTo(430, 50); 
   ctx.closePath(); 
   ctx.strokeStyle = "blue";
   ctx.stroke();
   ctx.fillStyle = "blue";
   ctx.fill();

   ctx.beginPath();
   ctx.arc(400, 67, 35, 0, Math.PI * 2);
   ctx.clip();
   ctx.fillStyle = "bluen";
   ctx.fillRect(0, 0, canvas.width, canvas.height);


  }
}
onload=init;
