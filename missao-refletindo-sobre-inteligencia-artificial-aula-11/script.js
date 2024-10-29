caixaPrincipal = document.querySelector("caixa-principal")
caixaPerguntas = document.querySelector("caixa-perguntas")
caixaAlternativas = document.querySelector("caixa-alternaivas")
caixaResultado = document.querySelector("caixa-resultado")
textoResultado = document.querySelector("texto-resultado")

perguntas = [
    {
        enunciado: "Você acaba de descobrir um novo dispositivo que consegue traduzir qualquer idioma instantaneamente. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Isso pode facilitar muito a comunicação!",
                afirmacao: "Você imagina todas as possibilidades de viajar e interagir com pessoas ao redor do mundo."
            },
            {
                texto: "Acho que isso pode acabar com a necessidade de aprender idiomas.",
                afirmacao: "Sente que as pessoas podem se tornar preguiçosas com essa tecnologia."
            }    
        ]
    },

    {
        enunciado: "Na sua escola, um professor introduz o uso deste dispositivo em suas aulas de línguas. Você se sente:",
        alternativas: [
            {
                texto: "Animado! Isso vai me ajudar a entender melhor as aulas.",
                afirmacao: "Você se sente mais confiante em participar das aulas de idiomas."
            },
            {
                texto: "Preocupado! Isso vai diminuir a prática da língua.",
                afirmacao: "Você teme que os alunos não se esforcem para aprender."
            }
        ]
    },
    {
        enunciado: "Durante um debate sobre o impacto da tecnologia nas línguas, você se posiciona:",
        alternativas: [
            {
                texto: "A tecnologia pode preservar línguas ameaçadas de extinção.",
                afirmacao: "Você vê uma oportunidade de ajudar a manter vivas culturas e tradições."
            },
            {
                texto: "A dependência dessa tecnologia pode levar ao esquecimento de línguas.",
                afirmacao: "Você acredita que a autenticidade da comunicação pode ser perdida."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você decide criar um projeto sobre a importância da comunicação intercultural. Como você procede?",
        alternativas: [
            {
                texto: "Cria um vídeo explicativo usando o dispositivo.",
                afirmacao: "Você quer mostrar como a tecnologia pode ser uma aliada na educação."
            },
            {
                texto: "Escreve um artigo refletindo sobre a necessidade de aprender idiomas.",
                afirmacao: "Você acredita que a experiência pessoal é irreplaceável."
            }
        ]
    },
    {
        enunciado: "Para um trabalho em grupo de história, um colega quer usar o dispositivo para traduzir todo o material. O que você faz?",
        alternativas: [
            {
                texto: "Concordo, pois facilita o trabalho em grupo.",
                afirmacao: "Você se preocupa mais com a praticidade do que com a profundidade do aprendizado."
            },
            {
                texto: "Acho que devemos fazer as traduções manualmente para garantir a compreensão.",
                afirmacao: "Você valoriza o aprendizado ativo e a pesquisa pessoal."
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

