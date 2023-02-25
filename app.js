const touches = [... document.querySelectorAll('.button')] // transformation en tableau en utilisant l'operteur spread 
const listkey = touches.map (touche => touche.dataset.key );
const ecran = document.querySelector('.ecran');


document.addEventListener ('keydown', (e) => {
    const valeur = e.key;
    calculer (valeur)
})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key; 
    calculer (valeur)
})

const calculer = (valeur)=> {
    if (listkey.includes(valeur)){
        switch (valeur){
            case '8':
                ecran.textContent ="";
                break;
            case '13':
                const calcul = eval(ecran.textContent); // evalue deu code js sous forme de chaine de caractere 
                ecran.textContent = calcul;
                break;
                default: 
                const indexKeyCode = listkey.indexOf(valeur);
                const touche = touches[indexKeyCode]; // recuperer  l'index de la touche sur laquelle on appuie  qui correspond aussi a la valeur  du keycode 
                ecran.textContent += touche.innerHTML; // ecran.texContent+ touche.innerHTML
        }
    }
}
window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : '+ e.message)
})
