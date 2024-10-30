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
  await page.waitForSelector('textarea[placeholder="Ask Meta AI anything..."]');
  await page.type('textarea[placeholder="Ask Meta AI anything..."]', 'hello');

  // Select the div with the attribute label="Send message" and click it
  await page.waitForSelector('div[label="Send message"]');
  await page.click('path[d="M13 7.414V19a1 1 0 1 1-2 0V7.414l-3.293 3.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 7.414z"]');
  
  const spanXPath = "//span[text()='Continue without logging in']";
  await page.waitForXPath(spanXPath);
  const [spanElement] = await page.$x(spanXPath);
  if (spanElement) {
    await spanElement.click();
  };

  await page.waitForSelector('path[d="M4.341 7.247a1 1 0 0 0-.094 1.412l7 8a1 1 0 0 0 1.506 0l7-8a1 1 0 0 0-1.506-1.318L12 14.482l-6.247-7.14a1 1 0 0 0-1.412-.094z"]');

  // Take a screenshot and save it as 'screenshot.png'
  let t = await page.screenshot({ encoding: 'base64', fullPage: true });
  console.log(t);

  // Close the browser
  await browser.close();
})();
