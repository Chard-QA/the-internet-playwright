import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
    readonly validationMessage: Locator;


    constructor(page: Page){
        this.page = page;
        this.usernameField = page.getByLabel('Username');
        this.passwordField = page.getByLabel('Password');
        this.loginButton = page.getByRole("button", { name: "Login" });
        this.validationMessage = page.locator("#flash");
    }

    async gotoLoginPage() {
        await this.page.goto('/login');
    }

    async login(username: string, password: string){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async verifyValidationMessage(message: string){
        await expect(this.validationMessage).toContainText(message);
    }

    async verifyUrl(url: string){
        await expect(this.page).toHaveURL(url);
    }
}