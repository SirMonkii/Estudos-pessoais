const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Qnts kgs tu pesa?", function (Kilos){
  {console.log();}
  console.log(`Ah, ent tu pesa ${Kilos}kgs`);
  {console.log();}
  if (Kilos >= 70){
    console.log("Vc tem um peso ok");
    console.log("https://www.youtube.com/watch?v=1Mcdh2Vf2Xk&t=6s");
  } 
  else{
    console.log("Vc tem um peso abaixo da média");
    console.log("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRC3ZpprJQJ6tovvB3h9cO1ihFJSYtpP1_zln3anZeQbN1ml7-PdFVzvP-PaejDa9ya8&usqp=CAU");
  }
  {console.log();}
  rl.close();
});