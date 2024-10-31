const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  
  // Create a new page
  const page = await browser.newPage();

  // Set custom screen size (e.g., 1280x800)
  await page.setViewport({ width: 1349, height: 643 });
  
  // Navigate to the desired URL
  await page.goto('https://meta.ai/', { waitUntil: 'networkidle0' });

  // Select the input field with the specified placeholder and type "hello"
  await page.waitForSelector('textarea[placeholder="Ask Meta AI anything..."]');
  await page.type('textarea[placeholder="Ask Meta AI anything..."]', 'hello');
  
 await page.evaluate(() => {
    const span = Array.from(document.querySelectorAll('path')).find(el => el.d === 'M13 7.414V19a1 1 0 1 1-2 0V7.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 7.414z');
    
      span.click(); // Click the span, or perform another action as needed
    
  });
  
 await page.evaluate(() => {
    const span = Array.from(document.querySelectorAll('span')).find(el => el.textContent === 'Continue without logging in');
    
      span.click(); // Click the span, or perform another action as needed
    
  });
  
  // Take a screenshot and save it as 'screenshot.png'
  let t = await page.screenshot({ encoding: 'base64', fullPage: true });
  console.log(t);

  // Close the browser
  await browser.close();
})();
