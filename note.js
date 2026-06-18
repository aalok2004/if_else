var amount=1234;
var note=0;
var tat = 0;

var reminder = 0;
if(amount>500){
    reminder = amount%500;
    note=amount/500;
    
    console.log("500:",parseInt(note));
    tat=tat+note;
}
console.log(tat);
if(reminder>200){
    note=reminder/200;
    reminder = reminder%200;
    
    console.log("200:",parseInt(note));
    tat=tat+note;
}
console.log(tat);
if(reminder>100){
    note=reminder/100;
    reminder = reminder%100;
    
    console.log("100:",parseInt(note));
    tat=tat+note;
}
console.log(tat);
if(reminder>50){
    note=reminder/50;
     reminder = reminder%50;
     
    console.log("50:",parseInt(note));
    tat=tat+note;
}
console.log(tat);
if(reminder>20){
    note=reminder/20;
    reminder = reminder%20;
   
    console.log("20:",parseInt(note));
    tat=tat+note;
}
console.log(tat);
if(reminder>10){
    note=reminder/10;
     reminder = reminder%10;
     
    console.log("10:",parseInt(note));
    tat=tat+note;
    

}
console.log(tat);
if(reminder>5){
    note=reminder/5;
    reminder =reminder%5;
    
    console.log("5:",parseInt(note));
    tat=tat+note;
    
}
console.log(tat);
if(reminder>2){
    note=reminder/2;
    reminder = reminder%2;
    
    console.log("2:",parseInt(note));
    tat=tat+note;
}
console.log(tat);
if(reminder>1){
    note=reminder/1;
    reminder = reminder%1;
    
    console.log("1:",parseInt(note));
    tat=tat+note;
}
console.log(parseInt(tat));