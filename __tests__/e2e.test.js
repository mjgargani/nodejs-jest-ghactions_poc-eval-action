const puppeteer = require("puppeteer");
const path = require("path");
const css = require("css");
const fs = require("fs/promises");
const challengePath = path.resolve(__dirname, "..", "challenges", "ex5");
const options = { timeout: 1000 };

describe("5. Faça uma lista de afazeres simples com html, css e javascript", () => {
  let browser, page;
  
  beforeAll(async () => {
    browser = await puppeteer
      .launch({ 
        args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--window-size=1270,720'], 
        headless: true,
        waitForInitialPage: true 
      });

    page = await browser.newPage();
  });

  afterAll(async () => {
    !!page && await page.close();
    page = undefined;
    !!browser && await browser.close();
    browser = undefined;
  })

  it("A página deve contér um form com um input e um botão de submissão, e fora dele, uma lista não ordenada, conforme data-test-id's", async () => {
    await page.goto(`file://${challengePath}/index.html`);

    const form = await page.waitForSelector("[data-test-id='task-form']", options).then(() => true);
    const input = await page.waitForSelector("[data-test-id='input-task']", options).then(() => true);
    const submit = await page.waitForSelector("[data-test-id='add-task']", options).then(() => true);
    const list = await page.waitForSelector("[data-test-id='task-list']", options).then(() => true);
    
    expect(form).toStrictEqual(true);
    expect(input).toStrictEqual(true);
    expect(submit).toStrictEqual(true);
    expect(list).toStrictEqual(true);
  });

  it("O corpo da página (body) deve ter fundo azul (blue) e texto branco (white)", async () => {
    const styleFile = await fs.readFile(`${challengePath}/style.css`, { encoding: "utf-8" });
    const { stylesheet: { rules } } = css.parse(styleFile);

    const body = rules[0];

    expect(body.selectors).toContain("body");
    expect(body.declarations[0]).toHaveProperty("property", "background-color");
    expect(body.declarations[0]).toHaveProperty("value", "blue");
    expect(body.declarations[1]).toHaveProperty("property", "color");
    expect(body.declarations[1]).toHaveProperty("value", "white");
  });

  it("Sem atualizar a página, deve ser possível identificar itens adicionados à lista, quando o botão de submissão é acionado", async () => {
    const testText = "Isso é um teste!";
    await page.goto(`file://${challengePath}/index.html`);

    await page.type("[data-test-id='input-task']", testText, { delay: 50 });
    const submit = await page.$("[data-test-id='add-task']");
    await submit.click();

    const result = await page.evaluate((testText) => {
      const taskHtmlList = document.querySelector("[data-test-id='task-list']");
      return taskHtmlList.textContent.includes(testText);
    }, testText);

    expect(result).toStrictEqual(true);
  });
});