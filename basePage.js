class basePage {

    async navigateTOUrl(element){
        await browser.url(element)
        await browser.maximizeWindow()
    }

    async entervalue(element, value){
        await (await element).clearValue()
        await (await element).setValue(value)
    }
    async clickOnElement(element){
        await (await element).click()
    }
    async scrolldown(element){
        await (await element).scrollIntoView()
    }
    async dropdown(element,value){
        await(await element).selectByIndex(value)
    }

    async mouseHover(element){
        await(await element).moveTo()
        }
    async waitForDisplayed(element){
            await (await element).waitForDisplayed()
        }


    // async switchingWindow(){
    //    var currentWindow  =  await browser.getWindowHandle()
    //    var windowHandles = await browser.getWindowHandles()
    //    for (const window of windowHandles) {
    //        if (window != currentWindow) {
    //            await browser.switchToWindow(window)
    //            break
    //        }  
    //    }
    // }
    // async switchFrame(element){
    //     await browser.switchToFrame(await element)
    // }


}
module.exports = basePage