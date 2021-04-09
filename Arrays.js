//Arrays
//syntaxe de base
//var name = [valeur1, valeur2, valeur3];
//ex
var fruits = ["pomme", "bananes", "orange", "citron"];
console.log(fruits.length);
// il va imprimer à l'écran 4, le nombre de Arrays;
// comment faire pour accéder à un élément ?
var fruits = ["pomme", "bananes", "orange", "citron"];


var fruits = ["pomme", "bananes", "orange", "citron"];
console.log(fruits[1]);



var fruits = ["pomme", "bananes", "orange", "citron"];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//fonction push
//rajouter un élément avec push

var fruits = ["pomme", "bananes", "orange", "citron"];
fruits.push("kiwi");
console.log(fruits);


var fruits = ["pomme", "bananes", "orange", "citron"];
fruits.pop("kiwi");
console.log(fruits);

// on peut le mentionner ou pas ! 


var fruits = ["pomme", "bananes", "orange", "citron"];
fruits.pop();
console.log(fruits);


// fonction slice
var fruits = ["pomme", "bananes", "orange", "citron", "kiwi"];

var a = fruits.slice(2,4);
console.log(a);

//slice marche aussi avec un seul argument

var fruits = ["pomme", "bananes", "orange", "citron", "kiwi"];

var a = fruits.slice(2);
console.log(a);

//Arrays fonctionnent aussi avec strings et Booleans

var a = ["pomme", 15, true];
console.log(a);

//On peut faire des Arrays des Arrays

var a = [[0,1],[5,7,8],[12,18]];

// je veux imprimer le 7 à l'écran;
console.log(a[1][1]);

