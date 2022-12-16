describe("1. Faça uma função que receba dois parâmetros 'a' e 'b', somando a saída", () =>{
  it("O teste irá recuperar a função 'sum' do arquivo '01.js', validando o resultado", () => {
    const sum = require("../challenges/01");
    expect(sum(3, 3)).not.toStrictEqual(0);
    expect(sum(3, 5)).toStrictEqual(8);
  });
});

describe("2. Faça uma função que receba dois parâmetros 'a' e 'b', subtraindo a saída", () =>{
  it("O teste irá recuperar a função 'sub' do arquivo '02.js', validando o resultado", () => {
    const sub = require("../challenges/02");
    expect(sub(5, 2)).not.toStrictEqual(7);
    expect(sub(5, 3)).toStrictEqual(2);
  });
});

describe("3. Faça uma função que receba dois parâmetros 'a' e 'b', multiplicando a saída", () =>{
  it("O teste irá recuperar a função 'mul' do arquivo '03.js', validando o resultado", () => {
    const mul = require("../challenges/03");
    expect(mul(5, 5)).not.toStrictEqual(1);
    expect(mul(5, 3)).toStrictEqual(15);
  });
});

describe("4. Faça uma função que receba dois parâmetros 'a' e 'b', dividindo a saída", () =>{
  it("O teste irá recuperar a função 'div' do arquivo '04.js', validando o resultado", () => {
    const div = require("../challenges/04");
    expect(div(15, 3)).not.toStrictEqual(45);
    expect(div(15, 3)).toStrictEqual(5);
  });
});