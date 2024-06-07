const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Na escola, quais são suas matérias favoritas?",
        alternativas: [
            {
                texto: "Matemática e física.",
                afirmacao: "Exatas. "
            },
            {
                texto: "Português, filosofia e sociologia.",
                afirmacao: "Humanas."
            },
            {
                texto: "Química e biologia.",
                afirmacao: "Biológicas."
            }
        ]
    },
    {
        enunciado: "Quando está de boa na lagoa em casa, o que mais gosta de fazer?",
        alternativas: [
            {
                texto: "Gosto de me dedicar a atividades que, pelo fato de exigirem concentração e raciocínio rápido, são capazes de estimular meu cérebro. Não é à toa que tenho uma coleção de quebra-cabeças de mil peças!.",
                afirmacao: "Exatas."
            },
            {
                texto: " Um dos meus passatempos prediletos é ler. Leio absolutamente tudo o que encontro pela frente: de rótulo de shampoo Monange aos livros que narram as aventuras de Harry Potter.",
                afirmacao: "Humanas."
            },
            {
                texto: "Curto assistir a documentários que tratam, especialmente, de questões científicas. Se o Discovery Channel tem fãs, eu com certeza sou um deles…",
                afirmacao: "Biológicas."
            }
        ]
    },
    {
        enunciado: "Com qual das personalidades abaixo você mais se identifica?",
        alternativas: [
            {
                texto: "Com o carinha que, depois de ter a cabeça atingida por uma maçã, resolveu criar a teoria da gravidade, Isaac Newton.",
                afirmacao: "Exatas."
            },
            {
                texto: "Com a mulher que deu vida ao bruxinho mais famoso da história e que deixou todo mundo morrendo de vontade de conhecer Hogwarts, J.K. Rowling.",
                afirmacao: "Humanas."
            },
            {
                texto: "Com o cientista que provavelmente nunca chorou no banho, Dexter, protagonista do desenho animado O Laboratório de Dexter.",
                afirmacao: "Biológicas."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
