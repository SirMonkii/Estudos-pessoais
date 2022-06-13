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
  } 
  else{
    console.log("Que porra de peso eh esse parsa");
  }
  {console.log();}
  rl.close();
});