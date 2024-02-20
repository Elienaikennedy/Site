const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const denis = document.querySelector('.denis')
const pipePosition = (pipe.offsetLeft / window.innerWidth) * 100; // Coordenada relativa
const marioLeft = (mario.offsetLeft / window.innerWidth) * 100; // Coordenada relativa







let intervalId;  // Variável global para armazenar o ID do intervalo
let score = 0;




document.addEventListener('DOMContentLoaded', function () {
    const shouldShowGameboard = localStorage.getItem('showGameboard');
    
    if (shouldShowGameboard === 'true') {
        showGameboard();
        incrementScore(); // Inicia a lógica do Score
        playBackgroundMusic();
    }
});


const jumpSound = document.getElementById('jumpSound');
const collisionSound = document.getElementById('collisionSound');
const levelcompleto = document.getElementById('levelcompleto');
const fasequiz = document.getElementById('fasequiz');
const backgroundMusic = document.getElementById('backgroundMusic')
const backgroundMusic2 = document.getElementById('backgroundMusic2')



// Função para tocar o som de pulo com volume ajustável
function playJumpSound() {
    jumpSound.currentTime = 0; // Reinicia o som para poder tocá-lo repetidamente
    jumpSound.volume = 0.2 ; // Ajusta o volume (0.0 a 1.0, sendo 1.0 o volume máximo)
    jumpSound.play();
}
function playBackgroundMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
    backgroundMusic.currentTime = -10;
}
function playBackgroundMusic2() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic2.play();
    backgroundMusic.currentTime = -10;
}

// Função para pausar a música
function pauseBackgroundMusic() {
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.pause();
}

function pauseBackgroundMusic2() {
    const pauseBackgroundMusic2 = document.getElementById('backgroundMusic');
    backgroundMusic2.pause();
    backgroundMusic2.currentTime = -10;
}

function Fasequiz() {
    setTimeout(() => {
        fasequiz.currentTime = Infinity; // Reinicia o som para poder tocá-lo repetidamente
        fasequiz.volume = 0.3; // Ajusta o volume (0.0 a 1.0, sendo 1.0 o volume máximo)
        fasequiz.play();
    }, 6000); // Atraso de 6 segundos (6000 milissegundos)
}



function pauseCollisionSound() {
    const backgroundMusic = document.getElementById('collisionSound');
    collisionSound.pause();
}

function playCollisionSound() {
    collisionSound.currentTime = 0;
    collisionSound.volume = 0.5; // Ajuste o volume conforme necessário
    collisionSound.play();
}

function Levelcompleto() {
    levelcompleto.currentTime = 0; // Reinicia o som para poder tocá-lo repetidamente
    levelcompleto.volume = 0.4 ; // Ajusta o volume (0.0 a 1.0, sendo 1.0 o volume máximo)
    levelcompleto.play();
}



function showGameboard() {
    const gameboard = document.getElementById('gameboard');
    gameboard.style.display = 'block';
    localStorage.setItem('showGameboard', 'true');
    checkCollision() 
}
function showGameboard2() {
    const gameboard2 = document.getElementById('gameboard2');
    gameboard2.style.display = 'block';
    localStorage.setItem('showGameboard2', 'true');
   
}


    
    // Função para esconder a gameboard
    function hideGameboard() {
        document.getElementById('gameboard').style.display = 'none';
        localStorage.setItem('showGameboard', 'false');
        // Limpar o intervalo quando a gameboard for ocultada
        clearInterval(intervalId);
        pauseBackgroundMusic();
    }
     // Função para esconder a gameboard
     function hideGameboard2() {
        document.getElementById('gameboard2').style.display = 'none';
        localStorage.setItem('showGameboard2', 'false');
        // Limpar o intervalo quando a gameboard for ocultada
        clearInterval(intervalId);
     
    }


    function resetCount() {
        // Salva o estado atual do jogo, se necessário
        // Redefine o jogo
        hideGameboard();
        showGameboard();
        score = 0;
        updateScoreDisplay();
    
        // Restaura o estado do jogo salvo, se disponível
        const estadoSalvo = localStorage.getItem('estadoJogo');
        if (estadoSalvo) {
            const estadoJogo = JSON.parse(estadoSalvo);
            score = estadoJogo.pontuacao;
            // Restaura a posição do Mario
            mario.style.left = `${estadoJogo.posicaoMario}px`;
            // Restaura a posição do cano
            pipe.style.left = `${estadoJogo.posicaoCano}px`;
            // Adicione mais propriedades conforme necessário
        }
    
        // Reinicia qualquer lógica de jogo necessária
        playBackgroundMusic();
    }
    
    


const resetButton = document.querySelector('.reiniciar');
resetButton.addEventListener('click', resetCount);
    

    // Adicionando evento de clique ao botão "JOGO MARIO" para mostrar a gameboard
    document.getElementById('missaoBtn').addEventListener('click', function(event) {
    event.preventDefault();
    showGameboard2();
    backgroundMusic2.play();
    
});

document.addEventListener('DOMContentLoaded', function () {
    const gameboard2 = document.getElementById('gameboard2');
    const botaoMacaco = document.createElement('button');
    botaoMacaco.textContent = 'Começar';
    botaoMacaco.classList.add('macaco');
    botaoMacaco.id = 'botaoMacaco';
    gameboard2.appendChild(botaoMacaco);
    
    
    
});

document.addEventListener('DOMContentLoaded', function () {
    const botaoMacaco = document.getElementById('botaoMacaco');
    const gameboard2 = document.getElementById('gameboard2');

    // Adiciona um evento de clique ao botão Macaco
    botaoMacaco.addEventListener('click', function() {
        pauseBackgroundMusic2()
        showGameboard(); // Exibe a gameboard
        playBackgroundMusic(); // Reproduz a música de fundo
        hideGameboard2(); // Esconde a gameboard2
        incrementScore(); // Inicia a contagem dos pontos
        updateScoreDisplay();
        
        

    });
    
     // Adiciona um elemento <p> com texto dentro da gameboard2
     const texto = document.createElement('p');
     texto.classList.add("texto");
     texto.textContent = 'Aperte (espaço) para pular ';
     gameboard2.appendChild(texto);

     const texto2 = document.createElement('p');
     texto2.classList.add("texto2");
     texto2.textContent = 'Bem vindo ao JOGO, chegue na proxima Fase.';
     gameboard2.appendChild(texto2);


     const didy = document.querySelector('.didy');
     didy.classList.add('didy');
     gameboard2.appendChild(didy);

     const dk = document.querySelector('.dk');
     dk.classList.add('dk');
     gameboard2.appendChild(dk);

const fechar5 = document.createElement('fechar5');
fechar5.textContent = 'Fechar'; // Adicione o texto 'Fechar' ao botão
fechar5.classList.add('fechar5')
// Adicionar um evento de clique ao botão
fechar5.addEventListener('click', function() {
    hideGameboard2(); // Chama a função para esconder a gameboard2
});

// Adicionar o botão de fechar à sua gameboard2
document.getElementById('gameboard2').appendChild(fechar5);

     
    
});





function createScoreElement() {
    const scoreElement = document.createElement('div');
    scoreElement.classList.add('score');
    scoreElement.textContent = 'Score: 0';
    document.getElementById('gameboard').appendChild(scoreElement);
}


function updateScore() {
    const scoreElement = document.querySelector('.score');
    if (scoreElement) {
        scoreElement.textContent = 'Score: ' + score;
    }
}

// Função para incrementar a primeira contagem
function incrementScore() {
    intervalId = setInterval(() => {
        score++;
        updateScore(); // Atualiza o Score
        checkCollision(); // Verifica colisão
        // Adicione o restante da sua lógica aqui...

    }, 100);
}

function checkCollision() {
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const pipePosition = pipe.offsetLeft;

    if (pipePosition <= 135 && pipePosition > 0 && marioPosition < 80) {
        // Colisão detectada, parar o intervalo e reproduzir som de colisão
        clearInterval(intervalId);
        playCollisionSound();
    }
}


function clearGameboard() {
    // Salva o estado do jogo
    const estadoJogo = {
        pontuacao: score,
        posicaoMario: mario.offsetLeft,
        posicaoCano: pipe.offsetLeft,
        // Adicione mais propriedades conforme necessário
    };
    localStorage.setItem('estadoJogo', JSON.stringify(estadoJogo));

    setTimeout(() => {
        // Remove todos os elementos do quadro de jogo, exceto o Mario e o cano
        const quadroJogo = document.getElementById('gameboard');
        const elementosFilhos = Array.from(quadroJogo.children);
        elementosFilhos.forEach(elemento => {
            if (elemento !== mario && elemento !== pipe) {
                quadroJogo.removeChild(elemento);
            }
        });

        // Redefine outros valores e elementos conforme necessário para um novo jogo
        quadroJogo.style.backgroundImage = "url('iamgens/3b4e1643-0972-4736-a7c0-15d00c16ba9b.jpg')";
        pipe.style.animation = 'pipeMove 2s linear infinite';

        // Chama a função para mostrar o quiz
        mostrarQuiz();

        // Chama a função Fasequiz após um atraso de 1 segundo
        setTimeout(Fasequiz, 1000);

    }, 0);
}




// Função para aplicar o salto
const jump = () => {
    console.log('Jump!'); // Adicione para verificar se a função está sendo chamada
    mario.classList.add('jump');
    playJumpSound(); // Toca o som de pulo
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};




const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const gameboardWidth = window.innerWidth;

    

// Declare uma variável global para armazenar a URL da imagem original do cano
let originalPipeImageSrc = 'iamgens/Boss_Lakitu_SMW3D.webp';

// Dentro da função onde você altera a imagem do cano quando o score atinge 50
if (score >= 110 && !pipe.imageChanged) {
    // Altera a imagem do cano
    pipe.src = 'iamgens/pipe-xuxu.gif';
    pipe.style.width = '5vw';
    
    // Adapte aqui os novos comandos ou lógica necessária para o novo comportamento do cano
    // ...
   
    // Marca que a imagem do cano foi alterada
    pipe.imageChanged = true;
}

// Dentro da função onde você reverte a imagem do cano quando o score atinge 100
if (score >= 199) {
    // Reverte a imagem do cano para a original
    pipe.src = originalPipeImageSrc;
    pipe.style.width = '7vw';
    
    // Adapte aqui para reverter outras mudanças feitas no comportamento do cano, se houver

    // Marca que a imagem do cano foi revertida para a original
    pipe.imageChanged = false;
}


 // Verifica se o score atingiu 50 e a imagem do cano ainda não foi alterada
    if (score >= 309  && !pipe.imageChanged) {
        // Altera a imagem do cano
        pipe.src = 'iamgens/porta-do-mario-certa.gif';
        pipe.style.width = '30vh ';

        // Adapte aqui os novos comandos ou lógica necessária para o novo comportamento do cano
        // ...

        pipe.imageChanged = true; // Marca que a imagem do cano foi alterada
    }

    // Lógica de colisão com o cano
    if (pipePosition <= 135 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'; // Interrompe a animação do cano
            pipe.style.left = `${pipePosition}px`; // Define a posição do cano

            mario.style.animation = 'none'; // Interrompe a animação do cano
            mario.style.bottom = `${marioPosition}px`;


            
        // Se o score não atingiu 500, executa a lógica de colisão
        if (score < 309 ) {
           

            mario.src = 'iamgens/game-over-certo.gif';
            mario.style.width = '120px';

            backgroundMusic.pause(); 

        } else {
            // Se o score atingiu 500, execute uma ação diferente, se necessário
            // Adicione aqui qualquer lógica desejada para o score igual ou superior a 500
            clearGameboard()
            backgroundMusic.pause();
            levelcompleto.play(); 
            collisionSound.pause();
           
            
           


        }

        // Dentro do loop principal


    }
}, 0);








let isJumping = false;

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isJumping) {
        jump();
        isJumping = true;

        
        // Defina um intervalo de tempo para evitar chamadas repetitivas
        setTimeout(() => {
            isJumping = false;
        }, 500); // Defina o tempo desejado (500 milissegundos neste exemplo)

        
    }
});

let perguntasQuiz = [
    {
        pergunta: 'COMPLETE O QUIZ E FAÇA 5 PONTOS',
        opcoes: [ 'COMERÇAR'],
        respostaCorreta: 2  // Índice da opção correta no array de opções
        
    },
    {
        pergunta: 'Qual das seguintes opções é uma linguagem de marcação frequentemente usada para representar e trocar dados de forma estruturada??',
        opcoes: ['XML', 'Speed Contábil', 'Speed Fiscal', 'Speed Contribuição'],
        respostaCorreta: 0  // Índice da opção correta no array de opções
    },
    {
        pergunta: 'Qual ferramenta é utilizada para automação e agilização dos processos fiscais em uma empresa?',
        opcoes: ['Speed Contábil', 'Speed Fiscal', 'XML', 'Speed Contribuição'],
        respostaCorreta: 1
    },
    {
        pergunta: 'Qual ferramenta é utilizada para simplificar e otimizar o cumprimento das obrigações fiscais relacionadas às contribuições sociais??',
        opcoes: ['Speed Contábil', 'XML', 'Speed Fiscal', 'Speed Contribuição'],
        respostaCorreta: 3
    },
    // Adicione mais perguntas abaixo
    {
        pergunta: 'Qual ferramenta é utilizada para facilitar a escrituração contábil das empresas?',
        opcoes: ['Speed Fiscal', 'Speed Contribuição', 'Speed Contábil', 'XML'],
        respostaCorreta: 2
    },
    {
        pergunta: 'O que representa o XML?',
        opcoes: ['Extended Markup Language', 'Extensible Markup Language', 'Extended Media Language', 'Extensible Media Language'],
        respostaCorreta: 1
    },
    
    
];

let pontuacao = 0;  // Pontuação do jogador
let indicePerguntaAtual = 0;  // Índice da pergunta atual



function mostrarProximaPergunta() {
    indicePerguntaAtual++;

    if (indicePerguntaAtual < perguntasQuiz.length) {
        limparGameboard(); // Limpar a gameboard antes de exibir a próxima pergunta
        exibirPerguntaAtual(); // Exibir a próxima pergunta
    } else {
        limparGameboard(); // Limpar a gameboard antes de exibir a pontuação final
        exibirPontuacaoFinal();
    }
}

// Adicione estas funções ao seu código

function mostrarQuiz() {
    jogoEstado = 'quiz';
    limparGameboard(); // Limpe a gameboard antes de exibir o quiz

    // Adicione lógica para exibir as perguntas e opções do quiz na gameboard
    exibirPerguntaAtual();
}

function exibirPerguntaAtual() {
    const perguntaAtual = perguntasQuiz[indicePerguntaAtual];

    // Crie elementos HTML para exibir a pergunta atual e as opções
    const perguntaElemento = document.createElement('div');
    perguntaElemento.textContent = perguntaAtual.pergunta;
    perguntaElemento.classList.add('pergunta');

    const opcoesElemento = document.createElement('div');
    opcoesElemento.classList.add('opcoes');

    perguntaAtual.opcoes.forEach((opcao, indice) => {
        const opcaoElemento = document.createElement('div');
        opcaoElemento.textContent = opcao;
        opcaoElemento.classList.add('opcao');
        opcaoElemento.addEventListener('click', () => handleAnswer(indice));
        opcoesElemento.appendChild(opcaoElemento);
    });

    // Adicione os elementos ao gameboard
    document.getElementById('gameboard').appendChild(perguntaElemento);
    document.getElementById('gameboard').appendChild(opcoesElemento);
}

function limparGameboard() {
    // Limpe todos os elementos dentro da gameboard
    const gameboard = document.getElementById('gameboard');
    while (gameboard.firstChild) {
        gameboard.removeChild(gameboard.firstChild);
    }
}

function handleAnswer(indiceOpcaoSelecionada) {
    verificarResposta(indiceOpcaoSelecionada);
    
    // Avança para a próxima pergunta
    indicePerguntaAtual++;
    limparGameboard();
    

    // Exibe a próxima pergunta ou a pontuação final
    if (indicePerguntaAtual < perguntasQuiz.length) {
        exibirPerguntaAtual();
        
    } else {
        exibirPontuacaoFinal();
    }
}




function resetGame() {
    pontuacao = 0; // Reseta a pontuação
    indicePerguntaAtual = 0; // Reinicia o índice da pergunta atual
    mostrarQuiz(); // Mostra o quiz novamente
}




function proximaFase() {
    limparGameboard()

    const textfinal = document.createElement('p')
    textfinal.textContent = 'Parabéns, baixe esse arquivo abaixo e receba o seu troféu'
    textfinal.classList.add('textofinal')

    const gameboard = document.getElementById('gameboard');
    gameboard.appendChild(textfinal)
    
   
    criarLinkPDF()
    const fechar6 = document.createElement('fechar6');
    fechar6.textContent = 'Fechar'; // Adicione o texto 'Fechar' ao botão
    fechar6.classList.add('fechar6')
    // Adicionar um evento de clique ao botão
    fechar6.addEventListener('click', function() {
        hideGameboard(); // Chama a função para esconder a gameboard
        location.reload();
    });
    // Adicionar o botão de fechar à sua gameboard
document.getElementById('gameboard').appendChild(fechar6);   

}

function criarLinkPDF() {
    // Cria um elemento <a> para o link
    const link = document.createElement('a');
    link.id = 'linkPDF';
    
    // Define o texto do link
    link.textContent = 'Baixar PDF';
    
    // Define o atributo href do link como o conteúdo do arquivo PDF
    link.href = 'https://drive.google.com/uc?export=download&id=1mtF1xcsBX1Kkl2V_RqacRasgQ8Y9abzT';
    
    // Define o atributo download para que o navegador baixe o arquivo quando o link for clicado
    link.download = 'TROFÉU.pdf';
    
    // Adiciona o link à gameboard
    const gameboard = document.getElementById('gameboard');
    gameboard.appendChild(link);


    link.style.fontSize = '8vh'
    link.style.position = 'absolute';
    link.style.top = '50%';
    link.style.left = '50%';
    link.style.transform = 'translate(-50%, -50%)';
    link.style.color = 'Black'

}



function exibirPontuacaoFinal() {
    const pontuacaoElemento = document.createElement('div');
    pontuacaoElemento.textContent = 'Pontuação Final: ' + pontuacao;
    pontuacaoElemento.classList.add('pontuacao-final');

    // Adiciona o elemento ao gameboard
    document.getElementById('gameboard').appendChild(pontuacaoElemento);

    if (pontuacao === 5) {
        const proximaFaseBtn = document.createElement('button');
        proximaFaseBtn.textContent = 'Próxima Fase';
        proximaFaseBtn.classList.add('proxima-fase-btn');
        proximaFaseBtn.addEventListener('click', proximaFase);
        document.getElementById('gameboard').appendChild(proximaFaseBtn);
    } else if (pontuacao < 5) {
        const reiniciarBtn = document.createElement('button');
        reiniciarBtn.textContent = 'Tente Novamente';
        reiniciarBtn.classList.add('reiniciar-btn');
        reiniciarBtn.addEventListener('click', resetGame); // Adiciona evento de clique
        document.getElementById('gameboard').appendChild(reiniciarBtn);
    }
}




function verificarResposta(indiceOpcaoSelecionada) {
    // Verificar se a opção selecionada está correta
    if (indiceOpcaoSelecionada === perguntasQuiz[indicePerguntaAtual].respostaCorreta) {
        pontuacao++;
    }
}




