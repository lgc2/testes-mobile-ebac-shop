class MyStoreScreen {
    get #myStoreLogo() {
        return $('~My store') // acessibilidade
    }

    get #myStoreName() {
        return $('id:toolbar_subtitle')
    }

    async myStoreLogoIsDisplayed() {
        await this.#myStoreLogo.waitForExist({ timeout:30000 })
        return await this.#myStoreLogo.isDisplayed()
    }

    async getMyStoreName() {
        return await this.#myStoreName.getText()
    }
}

module.exports = new MyStoreScreen()