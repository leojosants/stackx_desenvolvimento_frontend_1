<a id="top"></a>

# Módulo Desenvolvimento Front-end [StackX](https://www.stackx.com.br)

## Tarefa - Documentação do código CSS

- Documentar o código CSS para facilitar a compreensão e as futuras manutenções.

- Isso pode incluir comentários explicativos, documentação de estilo ou um guia de estilo para desenvolvedores.

## Minha proposta

- Proposta de documentação do projeto [Developer Portfolio](https://leojosants.github.io/stackx_desenvolvimento_frontend_1/02_tarefas/03_projeto_final_de_css/developer_portfolio/).

- Comentário explicativo em forma de legenda onde cada número representa a definição do trecho correspondente ao código do [arquivo cs](https://github.com/leojosants/stackx_desenvolvimento_frontend_1/blob/main/02_tarefas/03_projeto_final_de_css/developer_portfolio/assets/css/styles.css).

## Legenda

1. Resetar valores padrão do browser

2. Definir variáveis globais.

3. Definir cor de fundo do corpo do documento.

4. Retirar sublinhado do elemento.

5. Definir cor e margem do elemento.

6. Definir cor da fonte, alinhamento e margem.

7. Definir cor da fonte, alinhamento, direcionamento, espaçamento e margem do elemento.

8. Definir tamanho da fonte do elemento.

9. Definir borda do elemento.

10. Definir margem do elemento.

11. Definir largura, altura, borda e opacidade do elemento.

12. Definir cor, peso, espaçamento e retirar sublinhado do elemento.

13. Definir efeito ao passar o mouse alterando cor, borda e tamanho do elemento.

14. Definir alinhamento e margem do elemento.

15. Definir tamanho, margem e transformar fonte para letras maiúsculas do elemento.

16. Definir cor, tamanho e margem do elemento.

17. Definir cor, tamanho e transformar fonte para letras  maiúsculas do elemento.

18. Definir alinhamento do elemento.

19. Definir largura, altura, margem e ordenação do elemento.

20. Definir alinhamento e espaçamentodo elemento.

21. Definir cor de fundo e da fonte, espaçamento e alinhamento do elemento.

22. Definir cor e tamanho da fonte,  margem e espaçamento do elemento.

23. Retirar bordas ao clicar no elemento.

24. Definir borda, cor da fonte, largura, espaçamento, cor de fundo, margem e tamanho da fonte do elemento.

25. Transformar fonte para letras maiúsculas do elemento.

26. Definir cor de fundo, borda, posicionamento, tipo de cursor e margem do elemento.

27. Definir cor e tamanho da fonte, alinhamento e espaçamento do elemento.

28. Definir transição ao passar o mouse do elemento.

29. Definir cor da fonte do elemento.

30. Definir cor da fonte, largura, altura e alinhamento do elemento.

31. Definir largura máxima, altura, alinhamento, direcionamento, espaçamento e borda do elemento.

32. Definir tamanho da fonte, espaçamento, margem e alinhamentodo elemento.

33. Definir cor, largura, margem, espaçamento, borda, transição ao passar o mouse e retirar sublinhado do elemento.

34. Definir cor da fonte, borda e efeito ao passar o mouse do elemento.

35. Definir todo preenchimento possível do elemento.

36. Definir sobreposição e margem do elemento.

37. Definir largura máxima e margem do elemento.

38. Definir alinhamento, direcionamento e posicionamento do elemento.

39. Definir posicionamento do elemento.

40. Definir largura, altura e margem do elemento.

41. Definir largura, alinhamento, direcionamento e margem do elemento.

42. Definir cor da fonte, alinhamento e espaçamento do elemento.

43. Definir largura do elemento.

## Arquivo CSS

<h3 title="Resetar valores padrão do browser">1</h3>

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Space Grotesk', sans-serif;
}
```

<h3 title="Definir variáveis globais">2</h3>

```css
:root {
  --none: none;
  --size: 28px;
  --uppercase: uppercase;
  --color-ACACAC: #ACACAC;
  --color-B2B2B2: #B2B2B2;
  --color-C5C5C5: #C5C5C5;
  --color-C6C6C6: #C6C6C6;
  --color-FFFFFF: #FFFFFF;
  --color-FCFCFC: #FCFCFC;
  --color-151515: #151515;
  --color-242424: #242424;
  --color-5FDDE5: #5FDDE5;
  --color-5fdce541: #5fdce541;
  --font-size-28px: var(--size);
  --text-decoration-none: var(--none);
  --text-transform-uppercase: var(--uppercase);
}
```

## --> Mobile First <--

<h3 title="Definir cor de fundo do corpo do documento">3</h3>

```css
.c-body,
.c-body__success-page {
  background-color: var(--color-151515);
}
```

<h3 title="Retirar sublinhado do elemento">4</h3>

```css
a {
  text-decoration: var(--text-decoration-none);
}
```

<h3 title="Definir cor e margem do elemento">5</h3>

```css
nav i {
  color: var(--color-FCFCFC);
  margin-top: 30px;
  margin-bottom: 30px;
  margin-right: 20px;
  margin-left: 20px;
}

.c-body__section-about h2,
.c-body__contact h2 {
    font-size: var(--font-size-28px);
    margin-bottom: 20px;
}
```

<h3 title="Definir cor da fonte, alinhamento e margem">6</h3>

```css
.c-body__header {
  color: var(--color-FFFFFF);
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}

.c-body__section-skills {
  color: var(--color-FFFFFF);
  text-align: left;
  margin-right: 18px;
  margin-bottom: 40px;
  margin-left: 18px;
}
```

<h3 title="Definir cor da fonte, alinhamento, direcionamento, espaçamento e margem.do elemento">7</h3>

```css
.c-body__section-about {
  color: var(--color-FCFCFC);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;    
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
}
```

<h3 title="Definir tamanho da fonte.do elemento">8</h3>

```css
.c-body__section-about h3 {
  font-size: var(--font-size-28px);
}

.c-section-skills__text h3 {
  font-size: var(--font-size-28px);
}

.c-body__section-about h3 {
  font-size: 40px;
}

.c-body__section-about h2 {
  font-size: 50px;
}
```

<h3 title="Definir borda do elemento">9</h3>

```css
.c-body__section-about h2 span,
.c-body__section-skills h2 span,
.c-section-projects__heading h2 span,
.c-body__section-contact h2 span,
.c-body__emphasis {
  border-bottom: 2px solid var(--color-5fdce541);
}
```

<h3 title="Definir margem do elemento">10</h3>

```css
.c-body__section-about p {
  margin-top: 15px;
  margin-bottom: 15px;
}

.c-body__hr {
  margin-top: 50px;
  margin-right: 20px;
  margin-bottom: 50px;
  margin-left: 20px;
}

.c-section-skills__box i {
  margin-top: 14px;
  margin-right: 10px;
  margin-bottom: 14px;
  margin-left: 10px;
}

.c-body__hr {
  margin-top: 30px;       
  margin-right: 5%;       
  margin-bottom: 30px;       
  margin-left: 5%;       
}

.c-section-projects__heading,
.c-section-projects__link {
  margin-top: 10px;       
  margin-right: 18px;       
  margin-bottom: 35px;       
  margin-left: 18px;       
}

.c-body__footer nav {
  margin-left: 0;
}
```

<h3 title="Definir largura, altura, borda e opacidade do elemento">11</h3>

```css
.c-body__section-about img {
  width: 40%;
  height: auto;
  border-radius: 3px; 
  opacity: 0.7;
}
```

<h3 title="Definir cor, peso, espaçamento e retirar sublinhado do elemento">12</h3>

```css
.c-body__emphasis {
  color: var(--color-FFFFFF);
  font-weight: 600;
  text-decoration: none;    
  padding-top: 15px;
  padding-bottom: 15px;
}
```

<h3 title="Definir efeito ao passar o mouse alterando cor, borda e tamanho do elemento">13</h3>

```css
.c-body__emphasis--hover:hover {
  color: var(--color-C6C6C6);
  border-bottom-color: 1px solid var(--color-FFFFFF);
  transition: all .4s;
  transform: scale(1.1);
}
```

<h3 title="Definir alinhamento e margem do elemento">14</h3>

```css
.c-section-skills__box {
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
}

.c-section-projects__heading,
.c-section-projects__link {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-right: 18px;
  margin-bottom: 35px;
  margin-left: 18px;
}

.c-section-projects__text {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}
```

<h3 title="Definir tamanho, margem e transformar fonte para letras maiúsculas do elemento">15</h3>

```css
.c-body__section-skills h2 {
  font-size: var(--font-size-28px);
  text-transform: var(--text-transform-uppercase);
  margin-top: 0;
  margin-right: 5px;
  margin-bottom: 40px;
  margin-left: 5px;
}

```

<h3 title="Definir cor, tamanho e margem do elemento">16</h3>

```css
.c-section-skills__text p {
  color: var(--color-B2B2B2);
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
}

.c-section-projects__text h4 {
  color: var(--color-FFFFFF);
  font-size: 25px;
  margin-bottom: 10px;
}

.c-section-projects__text span {
  color: var(--color-C5C5C5);
  font-size: 20px;
  margin-right: 20px;
}

.c-body__section-contact p {
  color: var(--color-ACACAC);
  font-size: 16px;
  margin-bottom: 20px;     
}
```

<h3 title="Definir cor, tamanho e transformar fonte para letras  maiúsculas do elemento">17</h3>

```css
.c-section-projects__heading h2 {
  color: var(--color-FFFFFF);
  font-size: var(--font-size-28px);
  text-transform: var(--text-transform-uppercase);
}
```

<h3 title="Definir alinhamento do elemento">18</h3>

```css
.c-section-projects__box {
  text-align: center;
}

.c-section-projects__text div {
  display: flex; 
  align-items: center;
  justify-content: space-evenly;
}

.c-body__header {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.c-section-about__box {
  text-align: left;
}

.c-section-skills__box-one {
  display: flex;
  justify-content: space-evenly;
}

.c-section-projects__two-projects {
  display: flex;
  justify-content: space-around;
}
```

<h3 title="Definir largura, altura, margem e ordenação do elemento">19</h3>

```css
.c-section-projects__box img {
  width: 90%;
  height: auto;    
  margin-top: 0;
  margin-right: 20px;
  margin-bottom: 0;
  margin-left: 20px;
  order: 1;
}
```

<h3 title="Definir alinhamento e espaçamentodo elemento">20</h3>

```css
.c-section-projects__text div span {
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: auto;
  padding: 10px;
}

.c-section-contact__container {
  display: flex;
  justify-content: space-around;
  padding-top: 10px;     
  padding-bottom: 10px;     
}
```

<h3 title="Definir cor de fundo e da fonte, espaçamento e alinhamento do elemento">21</h3>

```css
.c-body__section-contact {
  background-color: var(--color-242424) !important;
  color: var(--color-FFFFFF);
  padding-top: 35px;
  padding-right: 20px;
  padding-bottom: 20%;
  padding-left: 20px;
  text-align: center;
}
```

<h3 title="Definir cor e tamanho da fonte,  margem e espaçamento do elemento">22</h3>

```css
.c-body__section-contact p {
  color: var(--color-ACACAC);
  font-size: 16px;
  margin-bottom: 20px;
  padding-top: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-left: 30px;

}
```

<h3 title="Retirar bordas ao clicar no elemento">23</h3>

```css
.c-section-contact__input--focus:focus {
  outline: none;
}
```

<h3 title="Definir borda, cor da fonte, largura, espaçamento, cor de fundo, margem e tamanho da fonte do elemento">24</h3>

```css
.c-body__section-contact input {
  border-bottom: 2px solid var(--color-FFFFFF);
  color: var(--color-FFFFFF);
  width: 95%;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: transparent;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;    
  font-size: 16px;
}
```

<h3 title="Transformar fonte para letras maiúsculas do elemento">25</h3>

```css
.c-body__section-contact__input--placeholder input::placeholder {
  text-transform: var(--text-transform-uppercase);
}
```

<h3 title="Definir cor de fundo, borda, posicionamento, tipo de cursor e margem do elemento">26</h3>

```css
button.c-body__emphasis {
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--color-5fdce541);
  float: right;
  cursor: pointer;
  margin: 20px;
}
```

<h3 title="Definir cor e tamanho da fonte, alinhamento e espaçamento do elemento">27</h3>

```css
.c-body__footer {
    color: var(--color-FFFFFF);
  text-align: center;
  padding-top: 20px;
  padding-bottom: 40px;
}

.c-success-page__main h1 {
  font-size: 40px;
  text-align: center;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}
```

<h3 title="Definir transição ao passar o mouse do elemento">28</h3>

```css
.c-body__footer nav a i,
.c-body__header nav a i {
  transition: .4s;
}
```

<h3 title="Definir cor da fonte do elemento">29</h3>

```css
.c-body__footer nav a i:hover,
.c-body__header nav a i:hover {
  color: var(--color-5fdce541);
}
```

<h3 title="Definir cor da fonte, largura, altura e alinhamento do elemento">30</h3>

```css
.c-body__success-page {
  color: var(--color-FFFFFF);
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

<h3 title="Definir largura máxima, altura, alinhamento, direcionamento, espaçamento e borda do elemento">31</h3>

```css
.c-success-page__main {
  max-width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid var(--color-5fdce541);
}
```

<h3 title="Definir tamanho da fonte, espaçamento, margem e alinhamentodo elemento">32</h3>

```css
.c-success-page__main h2 {
  font-size: 20px;
  padding-top: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
  text-align: center;
}
```

<h3 title="Definir cor, largura, margem, espaçamento, borda, transição ao passar o mouse e retirar sublinhado do elemento">33</h3>

```css
.c-success-page__main a {
  color: var(--color-ACACAC);
  font-size: 15px;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  padding-top: 10px;
  padding-right: 25px;
  padding-bottom: 10px;
  padding-left: 25px;
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid transparent;
  border-bottom-color: 1px solid var(--color-5fdce541);
  border-right-color: 1px solid var(--color-5fdce541);
  transition: .6s;
}
```

<h3 title="Definir cor da fonte, borda e efeito ao passar o mouse do elemento">34</h3>

```css
.c-success-page__a--hover:hover { 
  color: var(--color-5FDDE5);
  border: 1px solid transparent;
  border-top-color: 1px solid var(--color-5FDDE5);
  border-left-color: 1px solid var(--color-5FDDE5);
  transform: scale(1.1);
}
```

## --> Tablet Screen <--

 <h3 title="Definir largura, altura, margem e ordenação do elemento">19</h3>

```css
img {
  width: 70%;
    height: auto;
    order: -1;
    margin-bottom: 20px;       
}   
```  

<h3 title="Definir todo preenchimento possível do elemento">35</h3>

```css
.c-body__section-about div {
    flex: 1;
}
```

## --> Desktop Screen <--

<h3 title="Definir sobreposição e margem do elemento">36</h3>

```css
nav {
  z-index: 10;
  margin-left: 480px;
}
```

<h3 title="Definir largura máxima e margem do elemento">37</h3>

```css
.c-body__header, 
.c-body__section-about, 
.c-body__section-skills,
.c-body__section-projects,
.c-section-contact__container {
  max-width: 1000px;
  margin-top: 0;       
  margin-right: auto;       
  margin-bottom: 0;       
  margin-left: auto;       
}
```

<h3 title="Definir alinhamento, direcionamento e posicionamento do elemento">38</h3>

```css
.c-body__section-about {
  justify-content: space-between;
  flex-direction: row;
  position: relative;
}
```

<h3 title="Definir posicionamento do elemento">39</h3>

```css
.c-body__section-about img {
  position: relative;
  top: -80px;
}
```

<h3 title="Definir largura, altura e margem do elemento">40</h3>

```css
.c-section-projects__box img {
  width: 450px;
  height: 400px;
  margin-top: 0;       
  margin-right: auto;       
  margin-bottom: 0;       
  margin-left: auto;       
}
```

<h3 title="Definir largura, alinhamento, direcionamento e margem do elemento">41</h3>

```css
.c-section-projects__text {
  width: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin-top: 20px;     
  margin-right: 20px;      
  margin-bottom: 20px;     
  margin-left: 20px;      
}
```

<h3 title="Definir cor da fonte, alinhamento e espaçamento do elemento">42</h3>

```css
.c-body__section-contact {
  color: var(--color-FFFFFF);
  text-align: left;
  padding-top: 35px;     
  padding-right: 20px;     
  padding-bottom: 35px;     
  padding-left: 20px;     
}
```

<h3 title="Definir largura do elemento">43</h3>

```css
.c-section-contact__form {
  width: 40%;
}
```

[topo](#top)
