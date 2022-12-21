# dnc-eval-action-poc

Esta é prova de conceito para avaliação automatizada de exercícios.

Aqui, levando em consideração 5 exercícios, que devem ser construídos dentro da pasta `challenges` respeitando o formato `01.js; 02.js; 03.js; 04.js` (com exceção do 5º, que deve ser feito dentro da pasta `challenges/ex5`) _(Isso não é uma regra, mas pra efeitos de organização, utilizei essa disposição)_

Os exercícios são:

1. Faça uma função `sum` que receba dois parâmetros 'a' e 'b', somando a saída
2. Faça uma função `sub` que receba dois parâmetros 'a' e 'b', subtraindo a saída
3. Faça uma função `mul` que receba dois parâmetros 'a' e 'b', multiplicando a saída
4. Faça uma função `div` que receba dois parâmetros 'a' e 'b', dividindo a saída
5. Faça uma lista de afazeres simples com html, css e javascript
  - A página deve contér um form com um input e um botão de submissão, e fora dele, uma lista não ordenada, conforme data-test-id's:
    - `task-form`;
    - `input-task`;
    - `add-task`;
    - `task-list`.
  - O corpo da página (body) deve ter fundo azul (blue) e texto branco (white);
    - O primeiro parâmetro do `style.css` deve ser o `body`;
    - O primeiro atributo do `body` deve ser a cor de fundo;
    - O segundo atributo do `body` deve ser a cor de texto;
  - Sem atualizar a página, deve ser possível identificar itens adicionados à lista, quando o botão de submissão é acionado.

Para testar, crie uma PR, resolvendo os desafios, e aguarde a execução da ação para validar os exercícios. 
Ela vai aparecer no seu página do seu PR, na parte inferior, onde você pode acessar os detalhes para verificar o processo ([Exemplo com todos corretos](https://github.com/mjgargani/dnc-eval-action-poc/actions/runs/3714103159/jobs/6297564244#step:5:19) / [Exemplo com um exercício incorreto](https://github.com/mjgargani/dnc-eval-action-poc/actions/runs/3714096655/jobs/6297549598#step:5:19) / [Exemplo atualizado, incluindo o 5º exercício](https://github.com/mjgargani/dnc-eval-action-poc/actions/runs/3745900446/jobs/6360776354)).

Considerações importantes:

- É possível testar páginas Web utilizando uma biblioteca de testes E2E, chamada [Puppeteer](https://github.com/puppeteer/puppeteer), porém, esses testes tem mais custo em termos de tempo de execução (exercício 5);
- Existem várias formas de validar código, o contexto aqui, pensa em um teste de execução (então um problema pode ser resolvido de mais de uma forma), e não uma validação textual (o código está escrito certo/errado, baseado em um gabarito), como é feito com o teste de css no ex. 5;
- Existe um [custo de execução](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions) de ações no Github. Sugestões aqui:
  - Considerar um plano `GitHub Enterprise Cloud` para a instituição, caso esse metodo vá escalar de maneira interna (considerando que os desafios serão realizados dentro da própria organização);
  - De outra forma, orientar estudantes a fazer um `fork` do template do dia, e executar os testes em seus próprios repositórios (cada conta tem, **gratuitamente**, até 2000 minutos por mês, para executar ações).