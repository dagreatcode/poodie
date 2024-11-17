const code = `
  x = 10;
  y = 20;
  if (x > y) {
    x = 50;
  } else {
    y = 100;
  }
  console.log(x);
  console.log(y);
`;

runMyLangCode(code);
