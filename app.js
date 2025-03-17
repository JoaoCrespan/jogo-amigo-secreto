let listaAmigos = [];

function adicionarNomes() {
    let nomeAmigo = document.getElementById('nomeAmigo').value;

    if (nomeAmigo && !listaAmigos.includes(nomeAmigo)) {
        listaAmigos.push(nomeAmigo);
        atualizarLista();
        document.getElementById('nomeAmigo').value = '';
    } else {
        alert('Nome inválido');
    }
}

function atualizarLista() {
    let lista = document.getElementById('lista');
    lista.innerHTML = '';

    for (let i = 0; i < listaAmigos.length; i++) {
        lista.innerHTML += '<li>' + listaAmigos[i] + '</li>';
    }
}
function sortearAmigo() {

    if (listaAmigos.length < 2) {
        alert('Número mínimo de 2 participantes.');
        return;
        
    }

    let nomesSorteados = [];
    let resultado = [];

    for (let amigoParticipante of listaAmigos) {
        let amigoSecreto;
        
        do {
            let nomeAleatorio = Math.floor(Math.random() * listaAmigos.length);
            amigoSecreto = listaAmigos[nomeAleatorio];
        } while (amigoSecreto === amigoParticipante || nomesSorteados.includes(amigoSecreto));

        nomesSorteados.push(amigoSecreto);
        resultado.push(`${amigoParticipante} tirou ${amigoSecreto}`);
    }

    alert(resultado.join('\n'));
}