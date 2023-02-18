class LoginScreen {
    get #inputSiteAddress() {
        return $('android.widget.EditText') // seletor por class
    }

    get #continue() {
        return $('id:bottom_button')
    }

    get #buttonContinueWithStoreCredentials() {
        return $('id:login_site_creds')
    }

    get #inputUserName() {
        return $('android=new UiSelector().text("Username")')
    }

    get #inputPassword() {
        return $('android=new UiSelector().text("Password")')
    }

    get #buttonTypeYourPassword() {
        return $('id:login_enter_password')
    }

    async setSiteAddress(url) {
        await this.#inputSiteAddress.setValue(url)
    }

    async continueAfterTypeSiteAddress() {
         await this.#continue.click()
    }

    async continueWithStoreCredentials() {
        await this.#buttonContinueWithStoreCredentials.waitForExist({ timeout:30000 })
        await this.#buttonContinueWithStoreCredentials.click()
    }

    async login(userName, password) {
        await this.#inputUserName.setValue(userName)
        await this.#inputPassword.setValue(password)
        await this.#continue.click()
    }

    async buttonToTypeYourPassword() {
        await this.#buttonTypeYourPassword.click()
    }

    async setPasswordAndClick(password) {
        await this.#inputPassword.setValue(password)
        await this.#continue.click()
    }
}

module.exports = new LoginScreen()