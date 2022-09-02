const buttonAugmenterNombreArticle = document.querySelector('#augmenterNombreArticle');
const buttonReduireNombreArticle = document.querySelector('#reduireNombreArticle');
const affichageNombreArticle = document.querySelector('#affichageNombreArticle');

const affichagePrix = document.querySelector('#prix');

let nombreChoisiArticle = 0;
let prix = 10000;

console.log(affichagePrix)

affichageNombreArticle.innerHTML = `Nombre choisi : ${nombreChoisiArticle}`;
affichagePrix.innerHTML = `Le prix s'élève à ${prix} fcfa`;

buttonAugmenterNombreArticle.addEventListener('click', () => {
    if (nombreChoisiArticle >= 0) {
        nombreChoisiArticle++;
        prix = 10000 * nombreChoisiArticle;
    }
    affichageNombreArticle.innerHTML = `Nombre choisi : ${nombreChoisiArticle}`;
    affichagePrix.innerHTML = `Le prix s'élève à ${prix} fcfa`;
});

buttonReduireNombreArticle.addEventListener('click', () => {
    if (nombreChoisiArticle === 0) {
        return
    }
    nombreChoisiArticle--
    prix = 10000 * nombreChoisiArticle;
    affichageNombreArticle.innerHTML = `Nombre choisi : ${nombreChoisiArticle}`;
    affichagePrix.innerHTML = `Le prix s'élève à ${prix} fcfa`;

   
});