describe("5. Faça uma lista de afazeres simples com html, css e javascript", () => {
  let browser, page;
  
  beforeAll(async () => {
    browser = await puppeteer
      .launch({ 
        args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1270,720'], 
        headless: false,
        waitForInitialPage: true 
      });

    page = await browser.newPage();
  });

  it("A página deve contér um input, um botão de submissão, e uma lista não ordenada, conforme lista de data-test-id's", async () => {
    
  });

  it("O corpo da página (body) deve ter fundo azul (blue) e texto branco (white)", async () => {

  });

  it("Sem atualizar a página, deve ser possível identificar itens adicionados à lista, quando o botão de submissão é acionado", async () => {

  });
});