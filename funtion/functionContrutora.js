function carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function () {
         if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
         } else {
             velocidadeAtual = velocidadeMaxima
         }
    }
    //metodo pblico
    this.getVelovidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelovidadeAtual())

const ferrari = new carro(350, 25)
ferrari.acelerar()
console.log(ferrari.getVelovidadeAtual())