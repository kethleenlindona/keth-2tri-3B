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
                afirmacao: "Humanas. Você tem afinidade com áreas como psicologia, sociologia, filosofia ou letras. Você se destaca em compreender a mente humana, as relações interpessoais e a cultura."
            },
            {
                texto: "Resolver problemas lógicos e matemáticos",
                afirmacao: "Exatas. Você tem afinidade com áreas como matemática, física, engenharia ou programação. Você se destaca em resolver problemas lógicos, trabalhar com números e aplicar a análise crítica."
            },
            {
                texto: "Observar e entender os processos biológicos e naturais",
                afirmacao: "Biológicas. Você tem afinidade com áreas como biologia, medicina, ecologia ou veterinária. Você se destaca em observar e compreender os processos biológicos, a diversidade da vida e os sistemas naturais."
            }
        ]
    },
    {
        enunciado: "Quando se trata de problemas, você costuma:",
        alternativas: [
            {
                texto: "Analisar diferentes perspectivas e considerar os aspectos emocionais",
                afirmacao: "Humanas. Você tem afinidade com áreas como psicologia, sociologia, filosofia ou letras. Você se destaca em compreender a mente humana, as relações interpessoais e a cultura."
            },
            {
                texto: "Usar a lógica e a dedução para chegar a uma solução precisa",
                afirmacao: "Exatas. Você tem afinidade com áreas como matemática, física, engenharia ou programação. Você se destaca em resolver problemas lógicos, trabalhar com números e aplicar a análise crítica."
            },
            {
                texto: "Observar os detalhes e entender as causas e efeitos dos elementos envolvidos",
                afirmacao: "Biológicas. Você tem afinidade com áreas como biologia, medicina, ecologia ou veterinária. Você se destaca em observar e compreender os processos biológicos, a diversidade da vida e os sistemas naturais."
            }
        ]
    },
    {
        enunciado: "O que você prefere fazer em seu tempo livre?",
        alternativas: [
            {
                texto: "Ler livros, assistir filmes e discutir ideias com outras pessoas",
                afirmacao: "Humanas. Você tem afinidade com áreas como psicologia, sociologia, filosofia ou letras. Você se destaca em compreender a mente humana, as relações interpessoais e a cultura."
            },
            {
                texto: "Resolver quebra-cabeças, jogos de estratégia ou matemáticos",
                afirmacao: "Exatas. Você tem afinidade com áreas de exatas, como matemática, física, engenharia ou programação. Você se destaca em resolver problemas lógicos, trabalhar com números e aplicar a análise crítica."
            },
            {
                texto: "Explorar a natureza, observar animais e entender o funcionamento dos seres vivos",
                afirmacao: "Biológicas. Você tem afinidade com áreas como biologia, medicina, ecologia ou veterinária. Você se destaca em observar e compreender os processos biológicos, a diversidade da vida e os sistemas naturais."
            }
        ]
    },
    {
        enunciado: "Como você se sente em relação a números?",
        alternativas: [
            {
                texto: "Eles não são a minha praia, prefiro lidar com palavras e conceitos",
                afirmacao: "Humanas. Você tem afinidade com áreas como psicologia, sociologia, filosofia ou letras. Você se destaca em compreender a mente humana, as relações interpessoais e a cultura."
            },
            {
                texto: "Gosto de trabalhar com números e desafios matemáticos",
                afirmacao: "Exatas. Você tem afinidade com áreas como matemática, física, engenharia ou programação. Você se destaca em resolver problemas lógicos, trabalhar com números e aplicar a análise crítica."
            },
            {
                texto: "Aprecio a utilidade dos números, mas eles não são minha paixão principal",
                afirmacao: "Biológicas. Você tem afinidade com áreas como biologia, medicina, ecologia ou veterinária. Você se destaca em observar e compreender os processos biológicos, a diversidade da vida e os sistemas naturais."
            }
        ]
    },
    {
        enunciado: "O que você considera mais fascinante?",
        alternativas: [
            {
                texto: "A mente humana, a sociedade e a cultura",
                afirmacao: "Humanas. Você tem afinidade com áreas como psicologia, sociologia, filosofia ou letras. Você se destaca em compreender a mente humana, as relações interpessoais e a cultura."
            },
            {
                texto: "As leis da física, a lógica e os padrões matemáticos",
                afirmacao: "Exatas. Você tem afinidade com áreas como matemática, física, engenharia ou programação. Você se destaca em resolver problemas lógicos, trabalhar com números e aplicar a análise crítica."
            },
            {
                texto: "A diversidade da vida, os sistemas biológicos e a ecologia",
                afirmacao: "Biológicas. Você tem afinidade com áreas como biologia, medicina, ecologia ou veterinária. Você se destaca em observar e compreender os processos biológicos, a diversidade da vida e os sistemas naturais."
            }
        ]
    },
    {
        enunciado: "Você é:",
        alternativas: [
            {
                texto: "Introvertido",
                afirmacao: "Exatas. Você tem afinidade com áreas como matemática, física, engenharia ou programação. Você se destaca em resolver problemas lógicos, trabalhar com números e aplicar a análise crítica."
            },
            {
                texto: "Ambivertido",
                afirmacao: "Biológicas. Você tem afinidade com áreas como biologia, medicina, ecologia ou veterinária. Você se destaca em observar e compreender os processos biológicos, a diversidade da vida e os sistemas naturais."
            },
            {
                texto: "Extrovertido",
                afirmacao: "Humanas. Você tem afinidade com áreas como psicologia, sociologia, filosofia ou letras. Você se destaca em compreender a mente humana, as relações interpessoais e a cultura."
            }
        ]
    },
    {
        enunciado: "O que você acha mais interessante em um debate ou discussão?",
        alternativas: [
            {
                texto: "As diferentes opiniões e pontos de vista das pessoas",
                afirmacao: "Humanas. Você tem afinidade com áreas como psicologia, sociologia, filosofia ou letras. Você se destaca em compreender a mente humana, as relações interpessoais e a cultura."
            },
            {
                texto: "Os argumentos lógicos e racionais apresentados",
                afirmacao: "Exatas. Você tem afinidade com áreas como matemática, física, engenharia ou programação. Você se destaca em resolver problemas lógicos, trabalhar com números e aplicar a análise crítica."
            },
            {
                texto: "Os fatos científicos e as evidências empíricas apresentadas",
                afirmacao: "Biológicas. Você tem afinidade com áreas como biologia, medicina, ecologia ou veterinária. Você se destaca em observar e compreender os processos biológicos, a diversidade da vida e os sistemas naturais."
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

mostraPergunta();

let contagemAfirmacoes = {}; // Objeto para armazenar a contagem de cada afirmação

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSelecionada = opcaoSelecionada.afirmacao;
    if (contagemAfirmacoes.hasOwnProperty(afirmacaoSelecionada)) {
        contagemAfirmacoes[afirmacaoSelecionada]++;
    } else {
        contagemAfirmacoes[afirmacaoSelecionada] = 1;
    }
    
    historiaFinal += afirmacaoSelecionada + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua área é...";
    const afimMaisEscolhida = Object.keys(contagemAfirmacoes).reduce((a, b) => contagemAfirmacoes[a] > contagemAfirmacoes[b] ? a : b);
    textoResultado.textContent = afimMaisEscolhida;
    caixaAlternativas.textContent = "";
}