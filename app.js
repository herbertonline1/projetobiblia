// API https://bible-api.com
async function obterDados() {
    const inputVersiculo = document.getElementById('inputVersiculo').value;
    const url = `https://bible-api.com/${inputVersiculo}?translation=almeida`;
    const versiculo = document.getElementById('versiculo');

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        versiculo.innerHTML = `${data.text} <br> <span style="color: blue;">${data.reference}</span>`;
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        versiculo.innerHTML = 'Erro ao carregar versículo.';
    }
}




// Variavel  para gerar versiculos aleatorios
const versiculoAleatorio = [
    'gênesis 1:1', 'êxodo 3:14', 'levítico 19:18', 'números 6:24-26', 'deuteronômio 6:4-5',
    'josué 1:9', 'juízes 5:31', 'rute 1:16', '1 samuel 16:7', '2 samuel 22:31',
    '1 reis 8:23', '2 reis 17:39', '1 crônicas 16:34', '2 crônicas 7:14', 'esdras 7:10',
    'neemias 8:10', 'ester 4:14', 'jó 19:25', 'salmo 23:1', 'salmo 27:1',
    'salmo 46:10', 'salmo 91:1', 'salmo 119:105', 'provérbios 3:5-6', 'provérbios 16:3',
    'eclesiastes 3:1', 'cantares 2:1', 'isaías 40:31', 'isaías 41:10', 'jeremias 29:11',
    'lamentações 3:22-23', 'ezequiel 36:26', 'daniel 3:17-18', 'oséias 6:6', 'joel 2:28',
    'amós 5:24', 'obadias 1:15', 'jonas 2:2', 'miqueias 6:8', 'naum 1:7',
    'habacuque 3:19', 'sofonias 3:17', 'ageu 2:9', 'zacarias 4:6', 'malaquias 3:10',
    'mateus 5:16', 'mateus 6:33', 'mateus 11:28', 'mateus 28:19-20', 'marcos 12:30-31',
    'lucas 6:31', 'joão 3:16', 'joão 8:32', 'joão 14:6', 'joão 14:27',
    'atos 1:8', 'romanos 3:23', 'romanos 5:8', 'romanos 6:23', 'romanos 8:1',
    'romanos 8:28', 'romanos 12:2', '1 coríntios 6:19-20', '1 coríntios 10:13', '1 coríntios 13:4-7',
    '2 coríntios 5:17', '2 coríntios 12:9', 'gálatas 5:22-23', 'efésios 2:8-9', 'efésios 6:10-11',
    'filipenses 4:6-7', 'filipenses 4:13', 'colossenses 3:23', '1 tessalonicenses 5:16-18', '2 timóteo 1:7',
    'hebreus 11:1', 'hebreus 12:1-2', 'tiago 1:2-3', '1 pedro 5:7', '1 joão 1:9',
    '1 joão 4:18', 'apocalipse 3:20', 'apocalipse 21:4', 'salmo 34:8', 'salmo 37:4',
    'salmo 55:22', 'salmo 118:24', 'provérbios 18:10', 'isaías 26:3', 'isaías 53:5',
    'jeremias 33:3', 'mateus 7:7', 'mateus 11:30', 'joão 10:10', 'joão 15:5',
    'romanos 15:13', '1 coríntios 15:58', '2 coríntios 4:16-18', 'gálatas 6:9', 'filipenses 1:6',
    'colossenses 3:2', '2 timóteo 3:16-17', 'hebreus 4:12', '1 pedro 2:9', '1 joão 5:14-15',
    'salmo 121:1-2', 'provérbios 4:23', 'isaías 55:8-9', 'jeremias 17:7-8', 'mateus 19:26',
    'joão 16:33', 'romanos 12:12', '1 coríntios 2:9', '2 coríntios 5:7', 'efésios 3:20',
    'filipenses 2:3-4', 'colossenses 3:12-14', '1 tessalonicenses 4:16-17', '2 timóteo 4:7-8', 'hebreus 13:5-6',
    'salmo 139:14', 'provérbios 3:7', 'isaías 43:2', 'jeremias 1:5', 'mateus 5:14',
    'joão 15:13', 'romanos 8:38-39', '1 coríntios 13:13', '2 coríntios 1:3-4', 'efésios 4:32',
    'salmo 1:1-2', 'salmo 19:14', 'salmo 27:14', 'salmo 34:17', 'salmo 46:1',
    'salmo 51:10', 'salmo 56:3', 'salmo 62:1', 'salmo 73:26', 'salmo 103:12',
    'salmo 119:11', 'salmo 139:23-24', 'provérbios 1:7', 'provérbios 3:7-8', 'provérbios 4:7',
    'provérbios 9:10', 'provérbios 10:12', 'provérbios 11:25', 'provérbios 12:25', 'provérbios 15:1',
    'provérbios 16:9', 'provérbios 17:22', 'provérbios 18:21', 'provérbios 19:21', 'provérbios 21:2',
    'provérbios 22:6', 'provérbios 27:17', 'eclesiastes 4:9-10', 'eclesiastes 12:13', 'isaías 9:6',
    'isaías 12:2', 'isaías 25:1', 'isaías 26:4', 'isaías 30:21', 'isaías 40:8',
    'isaías 43:1', 'isaías 54:10', 'isaías 55:11', 'isaías 58:11', 'jeremias 1:8',
    'jeremias 17:14', 'jeremias 29:13', 'jeremias 32:17', 'lamentações 3:25', 'ezequiel 36:27',
    'daniel 12:3', 'oséias 2:19-20', 'joel 2:12-13', 'amós 4:13', 'miqueias 7:7',
    'naum 1:3', 'habacuque 2:4', 'sofonias 3:17', 'ageu 1:13', 'zacarias 7:9',
    'malaquias 4:2', 'mateus 4:4', 'mateus 5:9', 'mateus 6:14-15', 'mateus 7:12',
    'mateus 9:37-38', 'mateus 10:32', 'mateus 11:29', 'mateus 16:24', 'mateus 18:20',
    'mateus 22:37-39', 'mateus 24:35', 'mateus 25:40', 'marcos 8:36', 'marcos 10:27',
    'marcos 11:24', 'marcos 16:15', 'lucas 1:37', 'lucas 6:38', 'lucas 12:34',
    'lucas 18:27', 'joão 1:1', 'joão 1:14', 'joão 4:24', 'joão 6:35',
    'joão 8:12', 'joão 10:11', 'joão 11:25', 'joão 13:34-35', 'joão 15:7',
    'joão 17:17', 'atos 2:21', 'atos 4:12', 'atos 16:31', 'romanos 1:16',
    'romanos 5:1', 'romanos 8:18', 'romanos 10:9', 'romanos 12:1', 'romanos 13:10',
    '1 coríntios 1:18', '1 coríntios 2:5', '1 coríntios 3:16', '1 coríntios 10:31', '1 coríntios 15:57',
    '2 coríntios 3:17', '2 coríntios 4:6', '2 coríntios 9:7', 'gálatas 2:20', 'gálatas 3:28',
    'gálatas 6:2', 'efésios 1:7', 'efésios 2:10', 'efésios 3:12', 'efésios 4:1',
    'efésios 5:1-2', 'filipenses 1:21', 'filipenses 2:14-15', 'filipenses 3:14', 'colossenses 1:16',
    'colossenses 2:6-7', 'colossenses 3:1-2', '1 tessalonicenses 4:11-12', '1 tessalonicenses 5:11', '2 tessalonicenses 3:3',
    '1 timóteo 4:12', '1 timóteo 6:12', '2 timóteo 1:8', '2 timóteo 2:15', '2 timóteo 3:14-15',
    'tito 2:11-12', 'hebreus 2:18', 'hebreus 4:16', 'hebreus 10:23', 'hebreus 12:14',
    'hebreus 13:8', 'tiago 1:5', 'tiago 1:12', 'tiago 4:7', '1 pedro 1:3',
    '1 pedro 2:24', '1 pedro 3:15', '1 pedro 4:8', '1 pedro 5:10', '2 pedro 1:3',
    '1 joão 2:1', '1 joão 3:1', '1 joão 4:4', '1 joão 5:3', '2 joão 1:6',
    '3 joão 1:4', 'judas 1:24', 'apocalipse 1:8', 'apocalipse 3:11', 'apocalipse 5:12',
    'apocalipse 7:17', 'apocalipse 12:11', 'apocalipse 19:16', 'apocalipse 21:6', 'apocalipse 22:13'
];
// Função para obter um versículo aleatório por dia
// function obterVersiculoAleatorio() {
//     const index = new Date().getDate() % versiculoAleatorio.length;

   
//     return versiculoAleatorio[index];
    
// }

// -----FUNÇÃO PARA OBTER UM VERSICULO A CADA 5 SEGUNDOS------
function obterVersiculoAleatorio() {
    const index = Math.floor(Math.random() * versiculoAleatorio.length);
    return versiculoAleatorio[index];
}

setInterval(obterVersiculoDoDia, 50000);





async function obterVersiculoDoDia() {
    const versiculoAleatorio = obterVersiculoAleatorio();
    const url1 = `https://bible-api.com/${versiculoAleatorio}?translation=almeida`;
    // const versiculo = document.getElementById('versiculo');

    try {
        const response = await fetch(url1);
        const data = await response.json();
        console.log(data);
        versiculoaleatorio.innerHTML = `${data.text}<br><br>${data.reference}`;
    } catch (error) {
        console.error('Erro ao obter dados:', error);
        versiculoaleatorio.innerHTML = 'Erro ao carregar versículo.';
    }
    
}




// Função para salvar anotações
function salvarAnotacoes() {
    const anotacoes = document.getElementById('anotacoes').value;
    localStorage.setItem('anotacoes', anotacoes);
    alert('Anotações salvas com sucesso!');
}

// Carregar anotações salvas ao carregar a página
window.onload = function() {
    const anotacoesSalvas = localStorage.getItem('anotacoes');
    if (anotacoesSalvas) {
        document.getElementById('anotacoes').value = anotacoesSalvas;
    }
};
// let intervalo = setInterval(obterVersiculoDoDia, 50000);



// Chama a função para obter o versículo do dia ao carregar a página
obterVersiculoDoDia();





