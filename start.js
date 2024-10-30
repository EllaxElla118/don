const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  
  // Create a new page
  const page = await browser.newPage();

  // Set custom screen size (e.g., 1280x800)
  await page.setViewport({ width: 1280, height: 800 });
  
  // Navigate to the desired URL
  await page.goto('https://meta.ai/');

  // Select the input field with the specified placeholder and type "hello"
  await page.waitForSelector('input[placeholder="Ask Meta AI anything..."]');
  await page.type('input[placeholder="Ask Meta AI anything..."]', 'hello');

  // Select the div with the attribute label="Send message" and click it
  await page.waitForSelector('div[label="Send message"]');
  await page.click('div[label="Send message"]');

  // Take a screenshot and save it as 'screenshot.png'
  let t = await page.screenshot({ encoding: 'base64', fullPage: true });
  console.log(t);

  // Close the browser
  await browser.close();
})();
