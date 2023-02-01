var lista = ["Javascript", "HTML", "CSS"]

for (var c = 0; c < lista.length; c++){
    console.log(lista[c])
} // MOSTRANDO A LISTA USANDO LAÇÕ DE REPETIÇÃO

lista.forEach((item) => {
    console.log(item)
}) // MOSTRANDO A LISTA USANDO FOREACH E FUNÇÃO COMO ARGUMENTO