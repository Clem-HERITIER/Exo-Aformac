var entier = entierAleatoire(1, 100);

var userNumber = Number(prompt("Entrer un nombre entre 1 et 100 : "));

var tab = [];

tab.push(userNumber);

while(userNumber != entier)
{
    if(userNumber > entier)
    {
        userNumber = Number(prompt("Saisissez un nombre plus petit :"));
    }

    else
    {
        userNumber = Number(prompt("Saisissez un nombre plus grand :"));
    }

    tab.push(userNumber);
}


alert("Bravo, vous avez trouvé le nombre mystère en : " + tab.length + " tentatives !");

for( i = 0; i < tab.length; i++)
{
    console.log(tab[i]);
}

//Function

function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}