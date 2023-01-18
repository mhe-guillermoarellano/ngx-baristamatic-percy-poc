import { test, expect } from "@playwright/test";
import percySnapshot from '@percy/playwright';

test.describe("Barista Demo app", () => {
  test("should have main elements on landing page", async ({ page }) => {
    await page.goto("http://localhost:4200/");
    const mainHeading = await page.getByRole("heading");

    expect(await mainHeading.textContent()).toEqual("Barista-Matic Coffee");
    await percySnapshot(page, 'Barista Main Landing Page');
  });

  test("should have show out-of-stock menu item", async ({ page }) => {
    await page.goto("http://localhost:4200/");
    await page.getByRole("button", { name: "Caffe Latte, $2.55" }).click();
    await page.getByRole("button", { name: "Caffe Americano, $3.30" }).click();
    await page.getByRole("button", { name: "Caffe Mocha, $3.35" }).click();
    await page.getByRole("button", { name: "Cappuccino, $2.90" }).click();
    await page.waitForTimeout(2000);
    
    const content = await page.evaluate("window.getComputedStyle(document.querySelector('nb-card-body div:nth-child(4) button'), '::after').content")

    expect(content as string).toEqual('\"Out Of Stock\"');
    await percySnapshot(page, 'Barista Main Landing Page - Out of Stock - Caffe Americano');

  });

});
