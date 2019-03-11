import {
	Selector
} from 'testcafe'
import Page from './traderToolkitPageModel';
import Functions from './traderToolkitFunctions';


const page = new Page();
const func = new Functions();

fixture('Trader Toolkit Canada')
	.page('https://www.google.com');


test('Confirm Page Canada LIVE', async t => {
	await t
		.navigateTo(page.caLiveStarting)
	await t
		.expect(func.getPageUrl()).eql(page.caLive)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleForexInsider)
	await t
		.expect(page.tradeIdeas.innerText).eql(page.tradeIdeasText)
	await t
		.expect(page.tradeIdeasAutoChartist.innerText).eql(page.tradeIdeasAutoChartistText)
	await t
		.expect(await page.tradeIdeasAutoChartist.getAttribute('href')).contains(page.tradeIdeasAutoChartistURL)
	await t
		.expect(page.techAnalysis.innerText).eql(page.techAnalysisText)
	await t
		.expect(page.autoChartPatterns.innerText).eql(page.autoChartPatternsText)
	await t
		.expect(await page.autoChartPatterns.getAttribute('href')).contains(page.autoChartPatternsURL)
	await t
		.expect(page.tcTechAnalysis.innerText).eql(page.tcTechAnalysisText)
	await t
		.expect(await page.tcTechAnalysis.getAttribute('href')).contains(page.tcTechAnalysisURL)
	await t
		.expect(page.techUpdate.innerText).eql(page.techUpdateText)
	await t
		.expect(await page.techUpdate.getAttribute('href')).contains(page.techUpdateURL)
	await t
		.expect(page.commentary.innerText).eql(page.commentaryText)
	await t
		.expect(page.forexInsider.innerText).eql(page.forexInsiderText)
	await t
		.expect(await page.forexInsider.getAttribute('href')).contains(page.forexInsiderURL)
	await t
		.expect(page.forexTweets.innerText).eql(page.forexTweetsText)
	await t
		.expect(await page.forexTweets.getAttribute('href')).contains(page.forexTweetsURL)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.calendar.innerText).eql(page.calendarText)
	await t
		.expect(await page.calendar.getAttribute('href')).contains(page.calendarURL)
	await t
		.expect(page.latestResearch.innerText).eql(page.latestResearchText)
	await t
		.expect(await page.latestResearch.getAttribute('href')).contains(page.latestResearchURLCA)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLCA)
	await t
		.expect(page.researchReports.innerText).eql(page.researchReportsText)
	await t
		.expect(await page.researchReports.getAttribute('href')).contains(page.researchReportsURLCA)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.depositURLCA)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.withdrawURLCA)
	await t
		.expect(page.transfer.innerText).eql(page.transferText)
	await t
		.expect(await page.transfer.getAttribute('href')).contains(page.transferURLCA)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.eaHosting.innerText).eql(page.eaHostingText)
	await t
		.expect(await page.eaHosting.getAttribute('href')).contains(page.eaHostingURLCA)
	await t
		.expect(page.updateAccountProfile.innerText).eql(page.updateAccountProfileText)
	await t
		.expect(await page.updateAccountProfile.getAttribute('href')).eql(page.updateAccountProfileURLCA)
	await t
		.expect(page.linkAccounts.innerText).eql(page.linkAccountsText)
	await t
		.expect(await page.linkAccounts.getAttribute('href')).contains(page.linkAccountsURLCA)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesURLCA)
	await t
		.expect(page.annualCustState.innerText).eql(page.annualCustStateText)
	await t
		.expect(await page.annualCustState.getAttribute('href')).contains(page.annualCustStateCAURL)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLCA)
	await t
		.expect(page.contactInfoCA.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfoCA.getAttribute('href')).contains(page.contactInfoURLCA)
	await t
		.expect(page.cfdProductDetails.innerText).eql(page.cfdProductDetailsText)
	await t
		.expect(await page.cfdProductDetails.getAttribute('href')).contains(page.cfdProductDetailsCA)
	await t
		.click(page.forexInsider)
	await t
		.close

});


test('Confirm Page Canada DEMO', async t => {
	await t
		.navigateTo(page.caDemoStarting)
	await t
		.expect(func.getPageUrl()).eql(page.caDemo)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleForexInsider)
	await t
		.expect(page.tradeIdeas.innerText).eql(page.tradeIdeasText)
	await t
		.expect(page.tradeIdeasAutoChartist.innerText).eql(page.tradeIdeasAutoChartistText)
	await t
		.expect(await page.tradeIdeasAutoChartist.getAttribute('href')).contains(page.tradeIdeasAutoChartistURLDemo)
	await t
		.expect(page.techAnalysis.innerText).eql(page.techAnalysisText)
	await t
		.expect(page.autoChartPatterns.innerText).eql(page.autoChartPatternsText)
	await t
		.expect(await page.autoChartPatterns.getAttribute('href')).contains(page.autoChartPatternsURLDemo)
	await t
		.expect(page.tcTechAnalysis.innerText).eql(page.tcTechAnalysisText)
	await t
		.expect(await page.tcTechAnalysis.getAttribute('href')).contains(page.tcTechAnalysisURLDemo)
	await t
		.expect(page.techUpdate.innerText).eql(page.techUpdateText)
	await t
		.expect(await page.techUpdate.getAttribute('href')).contains(page.techUpdateURLDemo)
	await t
		.expect(page.commentary.innerText).eql(page.commentaryText)
	await t
		.expect(page.forexInsider.innerText).eql(page.forexInsiderText)
	await t
		.expect(await page.forexInsider.getAttribute('href')).contains(page.forexInsiderURLDemo)
	await t
		.expect(page.forexTweets.innerText).eql(page.forexTweetsText)
	await t
		.expect(await page.forexTweets.getAttribute('href')).contains(page.forexTweetsURLDemo)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.calendar.innerText).eql(page.calendarText)
	await t
		.expect(await page.calendar.getAttribute('href')).contains(page.calendarURL)
	await t
		.expect(page.latestResearch.innerText).eql(page.latestResearchText)
	await t
		.expect(await page.latestResearch.getAttribute('href')).contains(page.latestResearchURLCADemo)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLCADemo)
	await t
		.expect(page.researchReports.innerText).eql(page.researchReportsText)
	await t
		.expect(await page.researchReports.getAttribute('href')).contains(page.researchReportsURLCADemo)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.caDemoOLS)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.caDemoOLS)
	await t
		.expect(page.transfer.innerText).eql(page.transferText)
	await t
		.expect(await page.transfer.getAttribute('href')).contains(page.caDemoOLS)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.eaHosting.innerText).eql(page.eaHostingText)
	await t
		.expect(await page.eaHosting.getAttribute('href')).contains(page.caDemoOLS)
	await t
		.expect(page.marginChangeRequest.innerText).eql(page.marginChangeRequestText)
	await t
		.expect(await page.marginChangeRequest.getAttribute('href')).contains(page.marginChangeRequestURL)
	await t
		.expect(page.updateAccountProfileCA.innerText).eql(page.updateAccountProfileText)
	await t
		.expect(await page.updateAccountProfileCA.getAttribute('href')).eql(page.caDemoOLS)
	await t
		.expect(page.linkAccountsCADemo.innerText).eql(page.linkAccountsText)
	await t
		.expect(await page.linkAccountsCADemo.getAttribute('href')).contains(page.caDemoOLS)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRatesDemoCA.getAttribute('href')).contains(page.rolloverRatesURLCADemo)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLCADemo)
	await t
		.expect(page.contactInfoCA.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfoCA.getAttribute('href')).contains(page.contactInfoURLCADemo)
	await t
		.expect(page.cfdProductDetails.innerText).eql(page.cfdProductDetailsText)
	await t
		.expect(await page.cfdProductDetails.getAttribute('href')).contains(page.cfdProductDetailsCADemo)
	await t
		.click(page.forexInsider)
	await t
		.close

});
