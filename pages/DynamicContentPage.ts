import { expect, Locator, Page } from "@playwright/test";

export class DynamicContentPage {
    readonly page: Page;
    readonly dynamicText: Locator;

    constructor(page: Page){
        this.page = page;
        this.dynamicText = page.locator('#content > .row > .large-10');

    }

    async gotoDynamicContentPage(){
        await this.page.goto('/dynamic_content');
    }

    async getDynamicText(){
        const capturedText = await this.dynamicText.allTextContents();

        return capturedText;
    }

    async refreshPage(){
        await this.page.reload();
    }

    compareText(before: string[], after: string[]){
        expect(before).toHaveLength(3);
        expect(after).toHaveLength(3);
        expect(before).not.toEqual(after);
    }
}