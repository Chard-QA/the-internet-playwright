import { test } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { loginValidationData } from "../../test-data/login";

test.describe("Login Tests", () => {
    for (const data of loginValidationData) {
        test(`${data.testId}: ${data.testName}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.gotoLoginPage();
            await loginPage.login(data.username, data.password);

            await loginPage.verifyValidationMessage(data.expectedMessage);
            await loginPage.verifyUrl(data.expectedPath);
        });
    }
});