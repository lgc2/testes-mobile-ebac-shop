class ProductsScreen {
    get #productsbutton() {
        return $('id:products')
    }

    get #addProductButton() {
        return $('id:addProductButton')
    }

    get #simplePhysicalProduct() {
        return $('android=new UiSelector().text("Simple physical product")')
    }

    get #productTitleInput() {
        return $('id:editText')
    }

    get #addPrice() {
        return $('android=new UiSelector().text("Add price")')
    }

    get #regularPrice() {
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #salePrice() {
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #backButtonInTheSetPriceScreen() {
        return $('~Navigate up')
    }

    get #publishProductButton() {
        return $('id:menu_done')
    }

    get #moreOptions() {
        return $('~More options') // acessibilidade
    }

    get #viewProductInTheStoreOption() {
        return $('//hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ListView/android.widget.LinearLayout[2]')
    }

    get #productName() {
        return $('//android.webkit.WebView/android.view.View/android.view.View[1]/android.view.View[1]/android.widget.TextView')
    }

    async goToProducts() {
        await this.#productsbutton.click()
    }

    async goToAddProductScreen() {
        await this.#addProductButton.click()
    }

    async simplePhysicalProductClick() {
        await this.#simplePhysicalProduct.click()
    }

    async setProductTitle(productName) {
        await this.#productTitleInput.setValue(productName)
    }

    async addPriceToProduct() {
        await this.#addPrice.click()
    }

    async setRegularPrice(regularPrice) {
        await this.#regularPrice.setValue(regularPrice)
    }

    async setSalePrice(salePrice) {
        await this.#salePrice.setValue(salePrice)
    }

    async backScreenAfterSetPrices() {
        await this.#backButtonInTheSetPriceScreen.click()
    }

    async publishProduct() {
        await this.#publishProductButton.click()
    }

    async moreOptionsClick() {
        await this.#moreOptions.click()
    }

    async viewProductInTheStore() {
        await this.#viewProductInTheStoreOption.waitForExist({ timeout:30000 })
        await this.#viewProductInTheStoreOption.click()
    }

    async getProductName() {
        await this.#productName.waitForExist({ timeout:30000 })
        return await this.#productName.getText()
    }
}

module.exports = new ProductsScreen()