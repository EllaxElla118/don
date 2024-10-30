const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch({ args: [--no-sandbox] });
  
  // Create a new page
  const page = await browser.newPage();
  
  // Navigate to the desired URL
  await page.goto('https://meta.ai/');
  
  // Take a screenshot and save it as 'screenshot.png'
  let t = await page.screenshot({ encoding: 'bas64', fullPage: true });
  console.log(t);
  // Close the browser
  await browser.close();
})();
