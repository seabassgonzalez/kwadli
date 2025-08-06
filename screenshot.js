const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to desktop size
  await page.setViewport({ width: 1920, height: 1080 });
  
  // Navigate to your local app
  await page.goto('http://localhost:8080', { waitUntil: 'networkidle2' });
  
  // Take a screenshot
  const screenshot = await page.screenshot({ fullPage: true });
  
  // Save screenshot
  fs.writeFileSync('landing-page-screenshot.png', screenshot);
  
  console.log('Screenshot saved as landing-page-screenshot.png');
  
  await browser.close();
})();