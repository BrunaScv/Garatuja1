export { }

class Triangulo {
  lado1: number;
  lado2: number;
  lado3: number;

  constructor(pLado1: number, pLado2: number, pLado3: number) {
    if (
      (pLado1 <= 0 || pLado2 <= 0 || pLado3 <= 0)
      // || (escreva aqui a lógica para verificar se os lados formam um triângulo válido, 
      //   ou seja, a soma de dois lados deve ser maior que o terceiro lado)
    ) {
      throw new Error("O valores não formam um triângulo válido");
    }

    this.lado1 = pLado1;
    this.lado2 = pLado2;
    this.lado3 = pLado3;
  }

  get tipo(): string {
    if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
      return "equilátero";
    }

    if (this.lado1 === this.lado2 || this.lado2 === this.lado3 || this.lado1 === this.lado3) {
      return "isósceles";
    }

    return "escaleno";
  }

  get perimetro(): number {
    return (this.lado1 + this.lado2 + this.lado3) / 2;
  }

  get area(): number {
    const p = this.perimetro;
    const a = this.lado1;
    const b = this.lado2;
    const c = this.lado3;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area;
  }
}






const tri1 = new Triangulo(10, 10, 10);
const isosceles = new Triangulo(10, 10, 5);
const escaleno = new Triangulo(10, 5, 6);

tri1.lado1 = 20;
tri1.lado2 = 20;
tri1.lado3 = 20;

console.log(tri1.tipo, tri1.area);
console.log(isosceles.tipo, isosceles.area);
console.log(escaleno.tipo, escaleno.area);



// class TrianguloEquilatero {
//   base: number;
//   altura: number;

//   constructor(base: number, altura: number) {
//     this.base = base;
//     this.altura = altura;
//   }

//   calcularArea(): number {
//     return (this.base * this.altura) / 2;
//   }
// }

// const zzz = new TrianguloEquilatero(5, 10);



// class Retangulo {
//   altura: number = 0;
//   largura: number = 0;

//   constructor(pAltura: number, pLargura: number) {
//     this.largura = pLargura;
//     this.altura = pAltura;
//   }

//   calcularArea(): number {
//     return this.largura * this.altura;
//   }
// }





// const fofinho = new Retangulo(5, 10);
// const pontudo = new Retangulo(30, 3);

// console.log(`Área do retângulo fofinho: ${fofinho.calcularArea()}`);
// console.log(`Área do retângulo pontudo: ${pontudo.calcularArea()}`);