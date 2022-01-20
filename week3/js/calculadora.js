calculadora = {
    valor1 : function(){
        valor1 = document.querySelector('#valor1').value;
        return parseInt(valor1);
    },

    valor2 : function(){
        valor2 = document.querySelector('#valor2').value;
        return parseInt(valor2);
    },

    sum(){
        return this.valor1() + this.valor2();
    },

    mul : function(valor1,valor2){
        return valor1 * valor2;
    },

    resultadoSum : function(){
        div = document.querySelector('#resultado');
        div.innerHTML = this.sum();
    },

    resultadoMul : function(){
        div = document.querySelector('#resultado');
        div.innerHTML = this.mul(this.valor1(),this.valor2());
    }
}