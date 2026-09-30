import { expect, Locator, Page } from "@playwright/test";

export class CheckboxesInteraction {
    readonly page: Page;
    readonly checkBox1: Locator;
    readonly checkBox2: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkBox1 = page.locator('#checkboxes')
            .getByRole('checkbox').nth(0);

        this.checkBox2 = page.locator('#checkboxes')
            .getByRole('checkbox').nth(1);
    }

    async gotoCheckboxInteraction() {
        await this.page.goto('/checkboxes');
    }

    async modifyCheckboxState(){
        await this.checkBox1.check();
        await this.checkBox2.uncheck();
    }

    async verifyCheckboxState(){
        await expect(this.checkBox1).toBeChecked();
        await expect(this.checkBox2).not.toBeChecked();
    }
}