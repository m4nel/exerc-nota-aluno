function calcule() {
   let Nota1 = document.getElementById("nota1").value;
   let Nota2 = document.getElementById("nota2").value;
const tela = document.getElementById("tela");

let media = (parseInt(Nota1) + parseInt(Nota2)) / 2;

if (media >= 9){
    tela.innerHTML = `Voce teve uma media ${media} sua nota foi A `
}
if ((media >= 8) && (media < 9)) {
    tela.innerHTML = `Voce teve uma media ${media} sua nota foi B `
}

if ((media >= 7) && (media < 8)){
    tela.innerHTML = `Voce teve uma media ${media} sua nota foi C `
}

if ((media >= 6) && (media < 7)) 
{
    tela.innerHTML = `Voce teve uma media ${media} sua nota foi D `
}
  
if ((media >= 5) && (media < 6)) {
    tela.innerHTML = `Voce teve uma media ${media} sua nota foi F `
}

}