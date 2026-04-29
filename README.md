
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

| Conceito | JavaScript (JS) | TypeScript (TS) | Java |
|----------|----------------|----------------|------|
| Variável | Guarda um valor sem tipo fixo → `let nome = "Bruna"` | Guarda valor com tipo definido → `let nome: string = "Bruna"` | Sempre precisa de tipo → `String nome = "Bruna";` |
| Função | Bloco de código → `function soma(a,b)` | Igual ao JS, mas com tipo → `function soma(a:number,b:number):number` | Precisa de tipo → `int soma(int a,int b)` |
| Método | Função dentro de objeto → `obj.falar()` | Função dentro de classe com tipo | Função dentro da classe |
| Classe | Modelo de objeto (mais simples) | Igual ao JS, mas mais organizado | Base da linguagem (mais rígido) |
| Tipagem | Não precisa definir tipo | Precisa definir tipo | Sempre precisa definir tipo |
| Principal diferença | Mais fácil e flexível | Mais seguro que JS | Mais complexo e rígido |

---

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

