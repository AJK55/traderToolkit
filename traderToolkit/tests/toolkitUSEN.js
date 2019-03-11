import {
	Selector
} from 'testcafe'
import Page from './traderToolkitPageModel';
import Functions from './traderToolkitFunctions';


const page = new Page();
const func = new Functions();

fixture('Trader Toolkit US EN')
	.page('https://www.google.com');


test('Confirm Page US EN LIVE', async t => {
	await t
		.navigateTo(page.startingUSENLive)
	await t
		.expect(func.getPageUrl()).eql(page.liveUSEN)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleNews)
	await t
		.expect(page.tradeIdeas.innerText).eql(page.tradeIdeasText)
	await t
		.expect(page.tradeIdeasAutoChartist.innerText).eql(page.tradeIdeasAutoChartistText)
	await t
		.expect(await page.tradeIdeasAutoChartist.getAttribute('href')).contains(page.tradeIdeasAutoChartistURLUS)
	await t
		.expect(page.techAnalysis.innerText).eql(page.techAnalysisText)
	await t
		.expect(page.autoChartPatterns.innerText).eql(page.autoChartPatternsText)
	await t
		.expect(await page.autoChartPatterns.getAttribute('href')).contains(page.autoChartPatternsUSURL)
	await t
		.expect(page.commentary.innerText).eql(page.commentaryText)
	await t
		.expect(page.forexTweets.innerText).eql(page.forexTweetsText)
	await t
		.expect(await page.forexTweets.getAttribute('href')).contains(page.forexTweetsUSURL)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.calendar.innerText).eql(page.calendarText)
	await t
		.expect(await page.calendar.getAttribute('href')).contains(page.calendarURL)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURL)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.depositURLUS)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.withdrawURLSUS)
	await t
		.expect(page.transfer.innerText).eql(page.transferText)
	await t
		.expect(await page.transfer.getAttribute('href')).contains(page.transferURLUS)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.eaHosting.innerText).eql(page.eaHostingText)
	await t
		.expect(await page.eaHosting.getAttribute('href')).contains(page.eaHostingURLUS)
	await t
		.expect(page.updateAccountProfile.innerText).eql(page.updateAccountProfileText)
	await t
		.expect(await page.updateAccountProfile.getAttribute('href')).eql(page.updateAccountProfileURLUS)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesURLUSLive)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLUSLive)
	await t
		.expect(page.contactInfoCA.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfoCA.getAttribute('href')).contains(page.contactInfoURLUS)
	await t
		.close

});


test('Confirm Page US EN DEMO', async t => {
	await t
		.navigateTo(page.startingUSENDemo)
	await t
		.expect(func.getPageUrl()).eql(page.demoUSEN)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleForexInsider)
	await t
		.expect(page.tradeIdeas.innerText).eql(page.tradeIdeasText)
	await t
		.expect(page.tradeIdeasAutoChartist.innerText).eql(page.tradeIdeasAutoChartistText)
	await t
		.expect(await page.tradeIdeasAutoChartist.getAttribute('href')).contains(page.tradeIdeasAutoChartistURLUSDemo)
	await t
		.expect(page.techAnalysis.innerText).eql(page.techAnalysisText)
	await t
		.expect(page.autoChartPatterns.innerText).eql(page.autoChartPatternsText)
	await t
		.expect(await page.autoChartPatterns.getAttribute('href')).contains(page.autoChartPatternsUSURLDemo)
	await t
		.expect(page.forexInsider.innerText).eql(page.forexInsiderText)
	await t
		.expect(await page.forexInsider.getAttribute('href')).contains(page.forexInsiderUSURLDemo)
	await t
		.expect(page.commentary.innerText).eql(page.commentaryText)
	await t
		.expect(page.forexTweets.innerText).eql(page.forexTweetsText)
	await t
		.expect(await page.forexTweets.getAttribute('href')).contains(page.forexTweetsUSURLDemo)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.calendar.innerText).eql(page.calendarText)
	await t
		.expect(await page.calendar.getAttribute('href')).contains(page.calendarURL)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLDemo)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.usENDEMOOLS)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.usENDEMOOLS)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.updateAccountProfile.innerText).eql(page.updateAccountProfileText)
	await t
		.expect(await page.updateAccountProfile.getAttribute('href')).eql(page.usENDEMOOLS)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesURLUSDemo)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLUSDemo)
	await t
		.expect(page.contactInfoCA.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfoCA.getAttribute('href')).contains(page.contactInfoURLUSDemo)
	await t
		.close
});
