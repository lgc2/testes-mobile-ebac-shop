class HomeScreen {
    get #enterStoreAddress() {
        return $('id:button_login_store')
    }

    async goToLogin() {
        await this.#enterStoreAddress.waitForExist({ timeout:30000 })
        await this.#enterStoreAddress.click()
    }
}

module.exports = new HomeScreen()