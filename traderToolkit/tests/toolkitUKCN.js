import {
	Selector
} from 'testcafe'
import Page from './traderToolkitPageModelCN';
import Functions from './traderToolkitFunctions';


const page = new Page();
const func = new Functions();



fixture('Trader Toolkit UK CN')
	.page('https://www.google.com')


test('Confirm Page UK CN LIVE', async t => {
	await t
		.navigateTo(page.startingUKCNLive)
	await t
		.expect(func.getPageUrl()).eql(page.liveUKCN)
	await t
		.expect(page.pageTitle.innerText).eql(page.homepageTitleUKCN)
	await t
		.expect(await page.headerLogo.getAttribute('src')).contains(page.logoImageURLUKCN)
	await t
		.expect(page.liveChatHeader.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChatHeader.getAttribute('href')).contains(page.liveChatURLUKCN)
	await t
		.expect(page.tradeIdeas.innerText).eql(page.tradeIdeasText)
	await t
		.expect(page.autochartistTradeIdeas.innerText).eql(page.autochartistTradeIdeasText)
	await t
		.expect(await page.autochartistTradeIdeas.getAttribute('href')).contains(page.autochartistTradeIdeasURLCIMACNLive)
	await t
		.expect(page.techAnalysis.innerText).eql(page.techAnalysisText)
	await t
		.expect(page.autochartist.innerText).eql(page.autochartistText)
	await t
		.expect(await page.autochartist.getAttribute('href')).contains(page.autochartistURLCIMACNLive)
	await t
		.expect(page.commentary.innerText).eql(page.commentaryText)
	await t
		.expect(page.weibo.innerText).eql(page.weiboText)
	await t
		.expect(await page.weibo.getAttribute('href')).contains(page.weiboURLLive)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.economicCalendar.innerText).eql(page.economicCalendarText)
	await t
		.expect(await page.economicCalendar.getAttribute('href')).contains(page.economicCalendarURLUKCN)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLLive)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.withdrawURLUKCN)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChatSide.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChatSide.getAttribute('href')).contains(page.liveChatURLUKCN)
	await t
		.expect(page.contactInfo.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfo.getAttribute('href')).contains(page.contactInforURLLIVEUKCN)
	await t
		.expect(page.cfdProductDetails.innerText).eql(page.cfdProductDetailsText)
	await t
		.expect(await page.cfdProductDetails.getAttribute('href')).contains(page.cfdProductDetailsURLLive)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesURLLive)
	await t
		.close

});


test('Confirm Page UK CN DEMO', async t => {
	await t
		.eval(() => location.reload(true));
	await t
		.navigateTo(page.startingUKCNDemo)
	await t
		.expect(func.getPageUrl()).eql(page.demoUKCN)
	await t
		.expect(page.pageTitle.innerText).eql(page.homepageTitleUKCN)
	await t
		.expect(await page.headerLogo.getAttribute('src')).contains(page.logoImageURLUKCN)
	await t
		.expect(page.liveChatHeader.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChatHeader.getAttribute('href')).contains(page.liveChatURLUKCNDemo)
	await t
		.expect(page.tradeIdeas.innerText).eql(page.tradeIdeasText)
	await t
		.expect(page.autochartistTradeIdeas.innerText).eql(page.autochartistTradeIdeasText)
	await t
		.expect(await page.autochartistTradeIdeas.getAttribute('href')).contains(page.autochartistTradeIdeasURLCIMACNDemo)
	await t
		.expect(page.techAnalysis.innerText).eql(page.techAnalysisText)
	await t
		.expect(page.autochartist.innerText).eql(page.autochartistText)
	await t
		.expect(await page.autochartist.getAttribute('href')).contains(page.autochartistURLCIMACNDemo)
	await t
		.expect(page.commentary.innerText).eql(page.commentaryText)
	await t
		.expect(page.weibo.innerText).eql(page.weiboText)
	await t
		.expect(await page.weibo.getAttribute('href')).contains(page.weiboURLDemo)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.economicCalendar.innerText).eql(page.economicCalendarText)
	await t
		.expect(await page.economicCalendar.getAttribute('href')).contains(page.economicCalendarURLUKCN)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLDemo)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.updateProfile.innerText).eql(page.updateProfileText)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChatSide.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChatSide.getAttribute('href')).contains(page.liveChatURLUKCNDemo)
	await t
		.expect(page.contactInfo.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfo.getAttribute('href')).contains(page.contactInforURLLIVEUKCN)
	await t
		.expect(page.cfdProductDetails.innerText).eql(page.cfdProductDetailsText)
	await t
		.expect(await page.cfdProductDetails.getAttribute('href')).contains(page.cfdProductDetailsURLLive)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesURLDemo)
	await t
		.close

});
