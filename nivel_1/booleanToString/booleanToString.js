/* Olá alquimista, você passou no seu primeiro teste, fácil né?
Agora vamos deixar as coisas mais difíceis, quer dizer, mais divertidas!

---

O função abaixo recebe um Boolean (boleano) para passar neste desafio você deve fazer nossa função retornar uma string!
Por exemplo, nossa função deve retornar "Sim" caso o boleando seja True e "Não" caso seja falso!

*** 🚨 NÃO EXCLUA O PARÂMETRO BOOL DA FUNÇÃO 🚨 ***

*/

function boolToWorld(bool) {
    /* seu código aqui */
    if (bool == true) {
        return "Sim";
    } else {
        return "Não";
    }

}

module.exports = boolToWorld;


/* Material de referencia: 

- Wikipedia: https://pt.wikipedia.org/wiki/Boolean
- CodeWars: https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript/65f383f2bcee79313eec41a7
- Documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Boolean

*/