# dnc-eval-action-poc

Esta é prova de conceito para avaliação automatizada de exercícios.

Aqui, levando em consideração 4 exercícios, que devem ser construídos dentro da pasta `challenges` respeitando o formato `01.js; 02.js; 03.js; 04.js` _(Isso não é uma regra, mas pra efeitos de organização, utilizei essa disposição)_

Os exercícios são:

1. Faça uma função que receba dois parâmetros 'a' e 'b', somando a saída
2. Faça uma função que receba dois parâmetros 'a' e 'b', subtraindo a saída
3. Faça uma função que receba dois parâmetros 'a' e 'b', multiplicando a saída
4. Faça uma função que receba dois parâmetros 'a' e 'b', dividindo a saída

Para testar, crie uma PR, resolvendo os desafios, e aguarde a execução da ação para validar os exercícios. 
Ela vai aparecer no seu página do seu PR, na parte inferior, onde você pode acessar os detalhes para verificar o processo ([Exemplo](https://github.com/mjgargani/dnc-eval-action-poc/actions/runs/3714103159/jobs/6297564244#step:5:19)).

Considerações importantes:

- Os exercícios aqui, estão utilizando JS puro (a avaliação ocorre através do motor do NodeJS);
- É possível testar páginas HTML utilizando uma biblioteca de testes E2E, chamada [Puppeteer](https://github.com/puppeteer/puppeteer), porém, esses testes tem mais custo em termos de tempo de execução;
- Existem várias formas de validar código, o contexto aqui, pensa em um teste de execução (então um problema pode ser resolvido de mais de uma forma), e não uma validação textual (o código está escrito certo/errado, baseado em um gabarito);
- Existe um [custo de execução](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions) de ações no Github. Sugestões aqui:
  - Considerar um plano `GitHub Enterprise Cloud` para a instituição, caso esse metodo vá escalar de maneira interna (considerando que os desafios serão realizados dentro da própria organização);
  - De outra forma, orientar estudantes a fazer um `fork` do template do dia, e executar os testes em seus próprios repositórios (cada conta tem, **gratuitamente**, até 2000 minutos por mês, para executar ações).