//procurar o botao
var botao = document.querySelector("#add-time");
//quando clucar no botao
botao.addEventListener('click',cloneField);
//executar uma acao
function cloneField(){
     //duplicar os campos .  que campos?

    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);

    //limpar  os campos.que campos
    const fields = newFieldContainer.querySelectorAll('input');

    //para cada campo limpar (for)
    for (let field of fields){
       field.value="";
    }

    //colocar na pagina . onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer);

}