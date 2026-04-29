
 ## HTML (estrutura)

O HTML é o que cria as coisas da página.
Ele monta tudo que vai aparecer: título, texto, imagem, botão.

Exemplo:
um `<h1>` cria um título
um `<p>` cria um texto

Sem HTML, não existe nada na página.

---

## CSS (visual)

O CSS é o que deixa a página bonita.
Ele muda cor, tamanho, posição e fonte.

- Exemplo:
deixar o título azul
aumentar o tamanho da letra
centralizar algo

Sem CSS, a página fica sem estilo.

---

## JavaScript (ação)

 O JavaScript é o que faz a página reagir.
Ele faz coisas acontecerem quando você interage.

- Exemplo:
clicar em um botão e mudar um texto
mostrar algo na tela
validar um formulário

Sem JavaScript, a página não reage, só mostra informação.

---

 Resumo geral

-  HTML = cria
-   CSS = estiliza
-   JavaScript = faz acontecer 


Os três juntos formam um site completo.

## Comparação: JavaScript, TypeScript e Java

| Conceito            | JavaScript (JS)                                   | TypeScript (TS)                                                        | Java                                              |
| ------------------- | ------------------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------- |
| Variável            | Guarda valor sem tipo fixo → `let nome = "Bruna"` | Tem tipo definido → `let nome: string = "Bruna"`                       | Sempre precisa de tipo → `String nome = "Bruna";` |
| Função              | Bloco de código → `function soma(a,b)`            | Igual ao JS, mas com tipos → `function soma(a:number,b:number):number` | Precisa de tipo → `int soma(int a,int b)`         |
| Método              | Função dentro de objeto → `obj.falar()`           | Função dentro da classe com tipo                                       | Função dentro da classe                           |
| Classe              | Modelo de objeto (mais simples)                   | Igual ao JS, mas mais organizado                                       | Base da linguagem (mais rígido)                   |
| Tipagem             | Não precisa definir tipo                          | Precisa definir tipo                                                   | Sempre precisa definir tipo                       |
| Principal diferença | Mais flexível                                     | Mais seguro que JS                                                     | Mais rígido e estruturado                         |

---

## Conceitos de POO nas linguagens

| Conceito          | JavaScript (JS)                                | TypeScript (TS)                      | Java                                 |
| ----------------- | ---------------------------------------------- | ------------------------------------ | ------------------------------------ |
| Getters e Setters | Pode usar `get` e `set`, mas não é obrigatório | Usa `get` e `set` com tipagem        | Métodos `get` e `set` tradicionais   |
| Construtor        | Método `constructor()` para iniciar valores    | Igual ao JS, mas tipado              | Método especial da classe            |
| Herança           | Usa `extends`                                  | Usa `extends` com tipagem            | Usa `extends`                        |
| Encapsulamento    | Limitado (usa convenções ou `#private`)        | Usa `public`, `private`, `protected` | Usa `public`, `private`, `protected` |
| Polimorfismo      | Mais flexível (sobrescrita simples)            | Tipado, mais controlado              | Forte e obrigatório em muitos casos  |

---

## Explicando de forma simples

* **Getters e Setters**:
  servem para **pegar (get)** e **mudar (set)** valores de forma controlada

* **Construtor**:
  é o que roda quando você cria um objeto

* **Herança**:
  uma classe pode usar coisas de outra

* **Encapsulamento**:
  protege os dados (não deixa qualquer um mexer direto)

* **Polimorfismo**:
  o mesmo método pode se comportar diferente dependendo do objeto

---

## Resumo final

* JS = simples e flexível
* TS = igual ao JS, mas com segurança de tipos
* Java = mais rígido, mas mais organizado

E todos usam os conceitos de POO para organizar melhor o código.

## Exemplos de código

### JavaScript

```javascript
let nome = "Bruna";

function saudacao(nome) {
  return "Olá " + nome;
}

const pessoa = {
  falar: function() {
    return "Oi!";
  }
};
```

### TypeScript

```typescript
let nome: string = "Bruna";

function saudacao(nome: string): string {
  return "Olá " + nome;
}

class Pessoa {
  falar(): string {
    return "Oi!";
  }
}
```

### Java

```java
class Pessoa {
    String nome = "Bruna";

    String saudacao(String nome) {
        return "Olá " + nome;
    }

    String falar() {
        return "Oi!";
    }
}

