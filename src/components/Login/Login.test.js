const faker = require('faker');
const user = {
    username: 'testuser',
    email: faker.internet.email(),
    password: 'test',
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
}

const isDebugging = () => {
    const debugging_mode = {
        headless: false,
        slowMo: 250,
        devtools: true,
    }
    return process.env.NODE_ENV === 'debug' ? debugging_mode : {}
}

let browser;
let page;
beforeAll(async () => { 
    browser = await puppeteer.launch(isDebugging()); 
    page = await browser.newPage();
    page.setViewport({ width: 500, height: 2400 });
});

afterAll(() => {     
    if (isDebugging()) {         
        browser.close()     
    } 
})

describe('on page load', () => {
    test('h1 loads correctly', async() => {
        let browser = await puppeteer.launch({});
        let page = await browser.newPage();
    
        page.emulate({
            viewport: {
                width: 500,
                height: 2400,
            },
            userAgent: ''
        })
    })
    
    test('login form works correctly', async () => {
        await page.click('[data-testid="username"]')
        await page.type('[data-testid="username"]', user.username)

        await page.click('[data-testid="password"]')
        await page.type('[data-testid="password"]', user.password)

        await page.click('[data.testid="submit"]')
        await page.waitForSelector('[data-testid="success"]')
    }, 1600)

})