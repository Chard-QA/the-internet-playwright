import { test } from "@playwright/test";
import { DynamicContentPage } from "../../pages/DynamicContentPage";

test.describe("Dynamic Content Test", () => {
   test('DC-001: Verify that the text content is dynamic', async ({ page }) => {
        const dynamicContent = new DynamicContentPage(page);

        await dynamicContent.gotoDynamicContentPage();
        const beforeRefreshText = await dynamicContent.getDynamicText();
        // console.log(beforeRefreshText);
        await dynamicContent.refreshPage();
        const afterRefreshText = await dynamicContent.getDynamicText();
        // console.log(afterRefreshText);
        dynamicContent.compareText(beforeRefreshText,afterRefreshText);

   })
});