const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Acessa o link fornecido
  await page.goto('https://earth.google.com/earth/d/1rvtuPjuz-SxJKNRlSnzzhgNF9qbnXWFF?usp=sharing', { waitUntil: 'load' });
  
  // Gera o PDF
  await page.pdf({ path: 'pagina-simples.pdf', format: 'A4' });

  await browser.close();
})();