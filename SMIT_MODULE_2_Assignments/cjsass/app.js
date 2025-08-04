let {AdditionMassage,AdditionFunction}=require('./modules/add.js');
let {SubtractionMassage,SubtractionFunction}=require('./modules/sub.js');
let {MultiplicationMassage,MultiplicationFunction}=require('./modules/mul.js');
let {DivisonMassage,DivisonFunction}=require('./modules/div.js');


console.log(AdditionMassage);
AdditionFunction(5,10);
 
console.log(SubtractionMassage);
SubtractionFunction(10,5);

console.log(MultiplicationMassage);
MultiplicationFunction(5,5);

console.log(DivisonMassage);
DivisonFunction(5,5);

console.log("All operations completed successfully.");