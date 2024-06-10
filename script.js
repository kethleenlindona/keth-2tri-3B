const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é a sua habilidade mais forte?",
        alternativas: [
            {
                texto: "Compreender as emoções e os relacionamentos interpessoais",
                afirmacao: "Você tem afinidade com áreas de humanas, como psicologia, sociologia, filosofia ou letras. Você se destaca em compreender a mente humana, as relações interpessoais e a cultura."
            },
            {
                texto: "Resolver problemas lógicos e matemáticos",
                afirmacao: "Você tem afinidade com áreas de exatas, como matemática, física, engenharia ou programação. Você se destaca em resolver problemas lógicos, trabalhar com números e aplicar a análise crítica."
            },
            {
                texto: "Observar e entender os processos biológicos e naturais",
                afirmacao: "Você tem afinidade com áreas de biológicas, como biologia, medicina, ecologia ou veterinária. Você se destaca em observar e compreender os processos biológicos, a diversidade da vida e os sistemas naturais."
            }
        ]
    },
    {
        enunciado: "Quando se trata de problemas, você costuma:",
        alternativas: [
            {
                texto: "Analisar diferentes perspectivas e considerar os aspectos emocionais",
                afirmacao: "Exatas."
            },
            {
                texto: "Usar a lógica e a dedução para chegar a uma solução precisa",
                afirmacao: "Humanas."
            },
            {
                texto: "Observar os detalhes e entender as causas e efeitos dos elementos envolvidos",
                afirmacao: "Biológicas."
            }
        ]
    },
    {
        enunciado: "O que você prefere fazer em seu tempo livre?",
        alternativas: [
            {
                texto: "Ler livros, assistir filmes e discutir ideias com outras pessoas",
                afirmacao: "Exatas."
            },
            {
                texto: "Resolver quebra-cabeças, jogos de estratégia ou matemáticos",
                afirmacao: "Humanas."
            },
            {
                texto: "Explorar a natureza, observar animais e entender o funcionamento dos seres vivos",
                afirmacao: "Biológicas."
            }
        ]
    },
    {
        enunciado: "Como você se sente em relação a números?",
        alternativas: [
            {
                texto: "Eles não são a minha praia, prefiro lidar com palavras e conceitos",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Gosto de trabalhar com números e desafios matemáticos",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            },
            {
                texto: "Aprecio a utilidade dos números, mas eles não são minha paixão principal",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "O que você considera mais fascinante?",
        alternativas: [
            {
                texto: "A mente humana, a sociedade e a cultura",
                afirmacao: "Exatas."
            },
            {
                texto: "As leis da física, a lógica e os padrões matemáticos",
                afirmacao: "Humanas."
            },
            {
                texto: "A diversidade da vida, os sistemas biológicos e a ecologia",
                afirmacao: "Biológicas."
            }
        ]
    },
    {
        enunciado: "Você é:",
        alternativas: [
            {
                texto: "Introvertido",
                afirmacao: "Exatas."
            },
            {
                texto: "Extrovertido",
                afirmacao: "Humanas."
            }
        ]
    },
    {
        enunciado: "O que você acha mais interessante em um debate ou discussão?",
        alternativas: [
            {
                texto: "As diferentes opiniões e pontos de vista das pessoas",
                afirmacao: "Exatas."
            },
            {
                texto: "Os argumentos lógicos e racionais apresentados",
                afirmacao: "Humanas."
            },
            {
                texto: "Os fatos científicos e as evidências empíricas apresentadas",
                afirmacao: "Biológicas."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
