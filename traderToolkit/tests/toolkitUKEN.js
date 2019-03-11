import {
	Selector
} from 'testcafe'
import Page from './traderToolkitPageModel';
import Functions from './traderToolkitFunctions';


const page = new Page();
const func = new Functions();

fixture('Trader Toolkit UK EN')
	.page('https://www.google.com');


test('Confirm Page UK EN LIVE', async t => {
	await t
		.navigateTo(page.startingUKENLive)
	await t
		.expect(func.getPageUrl()).eql(page.liveUKEN)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleForexInsider)
	await t
		.expect(page.tradeIdeas.innerText).eql(page.tradeIdeasText)
	await t
		.expect(page.tradeIdeasAutoChartist.innerText).eql(page.tradeIdeasAutoChartistText)
	await t
		.expect(await page.tradeIdeasAutoChartist.getAttribute('href')).contains(page.tradeIdeasAutoChartistCimaENURL)
	await t
		.expect(page.techAnalysis.innerText).eql(page.techAnalysisText)
	await t
		.expect(page.autoChartPatterns.innerText).eql(page.autoChartPatternsText)
	await t
		.expect(await page.autoChartPatterns.getAttribute('href')).contains(page.autoChartPatternsURL)
	await t
		.expect(page.forexInsider.innerText).eql(page.forexInsiderText)
	await t
		.expect(await page.forexInsider.getAttribute('href')).contains(page.forexInsiderUKENURL)
	await t
		.expect(page.commentary.innerText).eql(page.commentaryText)
	await t
		.expect(page.forexTweets.innerText).eql(page.forexTweetsText)
	await t
		.expect(await page.forexTweets.getAttribute('href')).contains(page.forexTweetsCimaENURL)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.calendar.innerText).eql(page.calendarText)
	await t
		.expect(await page.calendar.getAttribute('href')).contains(page.calendarHttpsURL)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLCimaEN)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.depositURLUKEN)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.withdrawURLUKEN)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.eaHosting.innerText).eql(page.eaHostingText)
	await t
		.expect(await page.eaHosting.getAttribute('href')).contains(page.eaHostingURLUKEN)
	await t
		.expect(page.updateAccountProfile.innerText).eql(page.updateAccountProfileText)
	await t
		.expect(await page.updateAccountProfile.getAttribute('href')).eql(page.updateAccountProfileURLUKEN)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesCimaENURL)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLUKENLive)
	await t
		.expect(page.contactInfoCA.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfoCA.getAttribute('href')).contains(page.contactInfoURLUKEN)
	await t
		.expect(page.cfdProductDetailsCimaEN.innerText).eql(page.cfdProductDetailsText)
	await t
		.expect(await page.cfdProductDetailsCimaEN.getAttribute('href')).contains(page.cfdProductDetailsURLUKEN)
	await t
		.close

});


test('Confirm Page UK EN DEMO', async t => {
	await t
		.navigateTo(page.startingUKENDemo)
	await t
		.expect(func.getPageUrl()).eql(page.demoUKEN)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleForexInsider)
	await t
		.expect(page.tradeIdeas.innerText).eql(page.tradeIdeasText)
	await t
		.expect(page.tradeIdeasAutoChartist.innerText).eql(page.tradeIdeasAutoChartistText)
	await t
		.expect(await page.tradeIdeasAutoChartist.getAttribute('href')).contains(page.tradeIdeasAutoChartistUKENURLDemo)
	await t
		.expect(page.techAnalysis.innerText).eql(page.techAnalysisText)
	await t
		.expect(page.autoChartPatterns.innerText).eql(page.autoChartPatternsText)
	await t
		.expect(await page.autoChartPatterns.getAttribute('href')).contains(page.autoChartPatternsURLDemo)
	await t
		.expect(page.forexInsider.innerText).eql(page.forexInsiderText)
	await t
		.expect(await page.forexInsider.getAttribute('href')).contains(page.forexInsiderUKENURLDemo)
	await t
		.expect(page.commentary.innerText).eql(page.commentaryText)
	await t
		.expect(page.forexTweets.innerText).eql(page.forexTweetsText)
	await t
		.expect(await page.forexTweets.getAttribute('href')).contains(page.forexTweetsUKENURLDemo)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.calendar.innerText).eql(page.calendarText)
	await t
		.expect(await page.calendar.getAttribute('href')).contains(page.calendarHttpsURL)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLUKENDemo)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.ukENDEMOOLS)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.ukENDEMOOLS)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.updateAccountProfileUKEN.innerText).eql(page.updateAccountProfileText)
	await t
		.expect(await page.updateAccountProfileUKEN.getAttribute('href')).eql(page.ukENDEMOOLS)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesUKENURLDemo)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLUKENDemo)
	await t
		.expect(page.contactInfoCA.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfoCA.getAttribute('href')).contains(page.contactInfoURLUKEN)
	await t
		.expect(page.cfdProductDetailsCimaEN.innerText).eql(page.cfdProductDetailsText)
	await t
		.expect(await page.cfdProductDetailsCimaEN.getAttribute('href')).contains(page.cfdProductDetailsURLUKEN)
	await t
		.close
});
