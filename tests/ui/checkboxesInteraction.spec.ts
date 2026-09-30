import { test } from "@playwright/test";
import { CheckboxesInteraction } from "../../pages/CheckboxesInteractionPages";

test.describe("Checkboxes Interaction Tests", () => {
    test('CI-001: Verify the checkbox state', async ({ page }) => {
        const checkboxInteraction = new CheckboxesInteraction(page);

        await checkboxInteraction.gotoCheckboxInteraction();
        await checkboxInteraction.modifyCheckboxState();
        await checkboxInteraction.verifyCheckboxState();
    })

});