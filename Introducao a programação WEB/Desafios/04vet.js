// Vetores e objetos

const programador = {
    nome : "Mateus",
    idade : "20",
    tecnologias : [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' },

    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} e com especialidade em ${programador.tecnologias[0].especialidade}`)
