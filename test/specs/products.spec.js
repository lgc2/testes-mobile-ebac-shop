const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");
const productsScreen = require("../screens/products.screen")

let storeAdress = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

let productName = `[${Math.floor(Math.random() * 100000000)}] Produto Lgc2`
let regularPrice = 1500
let salePrice = 1000

describe('Manage Products', () => {
    it('should add a product in the store', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setSiteAddress(storeAdress)
        await loginScreen.continueAfterTypeSiteAddress()
        await loginScreen.continueWithStoreCredentials()
        await loginScreen.login(usuario, senha)
        await loginScreen.buttonToTypeYourPassword()
        await loginScreen.setPasswordAndClick(senha)

        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getMyStoreName()).toEqual('EBAC - Shop')

        await productsScreen.goToProducts()
        await productsScreen.goToAddProductScreen()
        await productsScreen.simplePhysicalProductClick()
        await productsScreen.setProductTitle(productName)
        await productsScreen.addPriceToProduct()
        await productsScreen.setRegularPrice(regularPrice)
        await productsScreen.setSalePrice(salePrice)
        await productsScreen.backScreenAfterSetPrices()
        await productsScreen.publishProduct()

        await productsScreen.moreOptionsClick()
        await productsScreen.viewProductInTheStore()
        expect(await productsScreen.getProductName()).toEqual(productName)
    });
});