var nomes =[];
var idades =[];
var formulario = document.getElementById("formCliente");
var tbody = document.getElementById('tabelaClientes');
nomes = formulario.elements.nomeCliente;
idades = formulario.elements.idadeCliente;

function cadastrar(nomes,idades){
    nomes.push(nomes[i]);
    idades.push(idades[i]);
    return (cadastrar());    
}

function validaNome(nomes){
    for(let i=0;i<nomes.length;i++){
    nomes.indexOf(nomes[i]);
        if(nomes[i]){
            alert("Nome já existe! Adicione outro nome")
        }else{
            cadastrar();

        }

    }
}

function recebeNome(nomes){
    for(let i=0;i<nomes.length;i++){
        validaNome(nomes)
        nomes = nomes.push([i]);
    }
    
}




