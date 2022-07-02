const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const productsScreen = require("../screens/products.screen")

let storeAdress = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Access Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToLogin()
       
        await loginScreen.setSiteAddress(storeAdress)

        await loginScreen.continueAfterTypeSiteAddress()

        await loginScreen.continueWithStoreCredentials()

        await loginScreen.login(usuario, senha)
       
        await loginScreen.buttonToTypeYourPassword()

        await loginScreen.setPasswordAndClick(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getMyStoreName()).toEqual('EBAC - Shop')
    });
});