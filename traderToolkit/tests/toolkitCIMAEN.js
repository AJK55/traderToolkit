import {
	Selector
} from 'testcafe'
import Page from './traderToolkitPageModel';
import Functions from './traderToolkitFunctions';


const page = new Page();
const func = new Functions();

fixture('Trader Toolkit CIMA EN')
	.page('https://www.google.com');



test('Confirm Page CIMA EN LIVE', async t => {
	await t
		.navigateTo(page.cimaENLiveStarting)
	await t
		.expect(func.getPageUrl()).eql(page.cimaENLive)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleNews)
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
		.expect(page.tcTechAnalysis.innerText).eql(page.tcTechAnalysisText)
	await t
		.expect(await page.tcTechAnalysis.getAttribute('href')).contains(page.tcTechAnalysisCimaENURL)
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
		.expect(page.latestResearch.innerText).eql(page.latestResearchText)
	await t
		.expect(await page.latestResearch.getAttribute('href')).contains(page.latestResearchURLCimaEN)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLCimaEN)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.depositURLCimaEN)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.withdrawURLCimaEN)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.eaHosting.innerText).eql(page.eaHostingText)
	await t
		.expect(await page.eaHosting.getAttribute('href')).contains(page.eaHostingLiveCimaEN)
	await t
		.expect(page.updateAccountProfile.innerText).eql(page.updateAccountProfileText)
	await t
		.expect(await page.updateAccountProfile.getAttribute('href')).eql(page.updateAccountProfileURLCimaEN)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesCimaENURL)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLCimaEN)
	await t
		.expect(page.contactInfoCA.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfoCA.getAttribute('href')).contains(page.contactInfoURLCimaEN)
	await t
		.expect(page.cfdProductDetailsCimaEN.innerText).eql(page.cfdProductDetailsText)
	await t
		.expect(await page.cfdProductDetailsCimaEN.getAttribute('href')).contains(page.cfdProductDetailsURLCimaEN)
	await t
		.close

});


test('Confirm Page CIMA EN DEMO', async t => {
	await t
		.navigateTo(page.cimaDemoStarting)
	await t
		.expect(func.getPageUrl()).eql(page.cimaENDemo)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleNews)
	await t
		.expect(page.tradeIdeas.innerText).eql(page.tradeIdeasText)
	await t
		.expect(page.tradeIdeasAutoChartist.innerText).eql(page.tradeIdeasAutoChartistText)
	await t
		.expect(await page.tradeIdeasAutoChartist.getAttribute('href')).contains(page.tradeIdeasAutoChartistCimaENURLDemo)
	await t
		.expect(page.techAnalysis.innerText).eql(page.techAnalysisText)
	await t
		.expect(page.autoChartPatterns.innerText).eql(page.autoChartPatternsText)
	await t
		.expect(await page.autoChartPatterns.getAttribute('href')).contains(page.autoChartPatternsURLDemo)
	await t
		.expect(page.tcTechAnalysis.innerText).eql(page.tcTechAnalysisText)
	await t
		.expect(await page.tcTechAnalysis.getAttribute('href')).contains(page.tcTechAnalysisCimaENURLDemo)
	await t
		.expect(page.commentary.innerText).eql(page.commentaryText)
	await t
		.expect(page.forexTweets.innerText).eql(page.forexTweetsText)
	await t
		.expect(await page.forexTweets.getAttribute('href')).contains(page.forexTweetsCimaENURLDemo)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.calendar.innerText).eql(page.calendarText)
	await t
		.expect(await page.calendar.getAttribute('href')).contains(page.calendarHttpsURL)
	await t
		.expect(page.latestResearch.innerText).eql(page.latestResearchText)
	await t
		.expect(await page.latestResearch.getAttribute('href')).contains(page.latestResearchURLCimaENDemo)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLCimaENDemo)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.cimaENDemoOLS)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.cimaENDemoOLS)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.eaHosting.innerText).eql(page.eaHostingText)
	await t
		.expect(await page.eaHosting.getAttribute('href')).contains(page.eaHostingLiveCimaEN)
	await t
		.expect(page.updateAccountProfile.innerText).eql(page.updateAccountProfileText)
	await t
		.expect(await page.updateAccountProfile.getAttribute('href')).eql(page.cimaENDemoOLS)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesCimaENURLDemo)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLCimaEN)
	await t
		.expect(page.contactInfoCA.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfoCA.getAttribute('href')).contains(page.contactInfoURLCimaEN)
	await t
		.expect(page.cfdProductDetailsCimaEN.innerText).eql(page.cfdProductDetailsText)
	await t
		.expect(await page.cfdProductDetailsCimaEN.getAttribute('href')).contains(page.cfdProductDetailsURLCimaEN)
	await t
		.close

});
