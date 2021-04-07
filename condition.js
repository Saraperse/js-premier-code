// condition-base JS

if(condition)
{
   console.log("execute ce code"); 
}

else if(condition2)
{
  console.log("condition1 n'est pas vrai mais la 2 l'est");    
}

else 
{
  console.log("alors execute ce code là");   
}

// ex.


var speed = 90;
if (speed < 80) {
    console.log("tu roules à la bonne vitesse");
} else if (speed < 100) {
    console.log("tu descends");
} else {

    console.log("c'est dangereux");
}

//switch

var favoriteColor = "green";
switch (favoriteColor)
    {
    
    case ("pink"):
    console.log("C'est parfait ! ");
            break;
    
    case ("red"):
    console.log("Superbe! ");
            break;
    
    default : 
    console.log("rien trouvé! ");  

    
        
        
}


