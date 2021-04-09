function ditBonjour() {
    alert("Bonjour");

}

ditBonjour();
//aditionner deux nombres

function aditionne(number1, number2) {
    alert(number1 + number2);
}

aditionne(3, 2);



function aditionne(number1, number2) {
    alert(Number(number1) + Number(number2));
}


var a = prompt("votre nombre 1")
var b = prompt("votre nombre 2")

aditionne(a, b);



function aditionne(number1, number2) 
{
    var add = (Number(number1) + Number(number2));
    add += 30;
    return add;
}


var a = prompt("votre numero1");
var b = prompt("votre numero2");
var c = aditionne(a,b);

console.log(c);

//la portée d'une variable . Elle est supprimée dès qu'on est sortie de function : alert (add)

function aditionne(number1, number2) 
{
    var add = (Number(number1) + Number(number2));
    add += 30;
    alert(add);
    return add;
    
}


var a = prompt("votre numero1");
var b = prompt("votre numero2");
var c = aditionne(a,b);

console.log(c);


var bjr = 'hello';

function modifieBjr(){
  bjr = 'salut';  
}

alert(bjr);
modifieBjr();
alert(bjr);


function multiply(number1,number2)
{
 return number1*number2;  
    
}


var a = 3;
var b = 4;

var result = multiply(a,b);
console.log(result);





function multiply(number1,number2,number3)
{
    
 var resultMultiply = number1*number2*number3; 
 return  resultMultiply*2;
    
}


var a = 5;
var b = 6;
var result = multiply(a,b,a);


console.log(result);

