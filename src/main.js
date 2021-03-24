const funcionarios = [
    {
        id: 11,
        nome: 'joao da silva',
        cpf: '111.222.333-44',
        categoria: 'tecnico'
    },
    {
        id: 22,
        nome: 'joana da silva',
        cpf: '111.222.333-55',
        categoria: 'tecnico'
    },
    {
        id: 23,
        nome: 'joana da Mata',
        cpf: '111.222.333-66',
        categoria: 'analista'
    },
    {
        id: 24,
        nome: 'joana da Mata',
        cpf: '23456789-00',
        categoria: 'gerente'
    },
    {
        id: 45,
        nome: 'joana da Mata',
        cpf: '111222333-44',
        categoria: 'gerente'
    },
    {
        id: 36,
        nome: 'joana da Mata',
        cpf: '654321987-23',
        categoria: 'gerente'
    },
    {
        id: 27,
        nome: 'joana da Mata',
        cpf: '098876654-99',
        categoria: 'gerente'
    }
]

console.log(funcionarios.filter(element => element.id === 36))

console.log(funcionarios.reduce((acc, element, index) => {
    if(index === 0) 
        acc = element
    
    if(acc.id > element.id) 
        acc = element

    return acc
}))

console.log('Idade dos funcionários: ' + funcionarios.map(element => element.idade = element.id + 5))