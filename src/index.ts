import puppeteer from 'puppeteer-extra'
import {setTimeout} from 'node:timers/promises';
import StealthPlugin from 'puppeteer-extra-plugin-stealth'

async  function run() {
  puppeteer.use(StealthPlugin())
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  await page.goto('https://chat.openai.com/auth/login');

  await page.waitForSelector('button[data-testid="login-button"]');
  await setTimeout(200)

  await page.click('button[data-testid="login-button"]');

}
run();