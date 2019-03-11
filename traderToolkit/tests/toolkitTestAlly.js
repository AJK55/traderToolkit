import {
	Selector
} from 'testcafe'
import Page from './traderToolkitPageModel';
import Functions from './traderToolkitFunctions';


const page = new Page();
const func = new Functions();

fixture('Trader Toolkit Ally')
	.page('https://www.google.com');


test('Confirm Page Ally LIVE', async t => {
	await t
		.navigateTo(page.allyLiveStarting)
	await t
		.expect(func.getPageUrl()).eql(page.allyLive)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleNews)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.calendar.innerText).eql(page.calendarText)
	await t
		.expect(await page.calendar.getAttribute('href')).contains(page.calendarURL)
	await t
		.expect(page.latestResearch.innerText).eql(page.latestResearchText)
	await t
		.expect(await page.latestResearch.getAttribute('href')).contains(page.latestResearchURL)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURL)
	await t
		.expect(page.researchReports.innerText).eql(page.researchReportsText)
	await t
		.expect(await page.researchReports.getAttribute('href')).contains(page.researchReportsURL)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.depositURLAlly)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.withdrawURLAlly)
	await t
		.expect(page.transfer.innerText).eql(page.transferText)
	await t
		.expect(await page.transfer.getAttribute('href')).contains(page.transferURLAlly)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesURL)
	await t
		.expect(page.transactionDataReport.innerText).eql(page.transactionDataReportText)
	await t
		.expect(await page.transactionDataReport.getAttribute('href')).contains(page.transactionDataReportURLAlly)
	await t
		.expect(page.costPerTradeReport.innerText).eql(page.costPerTradeReportText)
	await t
		.expect(await page.costPerTradeReport.getAttribute('href')).contains(page.costPerTradeReportURL)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLAlly)
	await t
		.expect(page.contactInfo.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.contactInfo.getAttribute('href')).contains(page.contactInfoURLAlly)
	await t
		.expect(page.liveChatHeader.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChatHeader.getAttribute('href')).contains(page.liveChatURLAlly)
	await t
		.expect(await page.imageHeader.getAttribute('src')).contains(page.imageHeaderAlly)
	await t
		.click(page.news)
	await t
		.close

});


test('Confirm Page Ally DEMO', async t => {
	await t
		.navigateTo(page.allyDemoStarting)
	await t
		.expect(func.getPageUrl()).eql(page.allyDemo)
	await t
		.expect(page.pageTitle.innerText).eql(page.homePageTitleNews)
	await t
		.expect(page.fundamentalAnalysis.innerText).eql(page.fundamentalAnalysisText)
	await t
		.expect(page.calendar.innerText).eql(page.calendarText)
	await t
		.expect(await page.calendar.getAttribute('href')).contains(page.calendarURL)
	await t
		.expect(page.latestResearch.innerText).eql(page.latestResearchText)
	await t
		.expect(await page.latestResearch.getAttribute('href')).contains(page.latestResearchURLDemo)
	await t
		.expect(page.news.innerText).eql(page.newsText)
	await t
		.expect(await page.news.getAttribute('href')).contains(page.newsURLDemo)
	await t
		.expect(page.researchReports.innerText).eql(page.researchReportsText)
	await t
		.expect(await page.researchReports.getAttribute('href')).contains(page.researchReportsURLDemo)
	await t
		.expect(page.funds.innerText).eql(page.fundsText)
	await t
		.expect(page.deposit.innerText).eql(page.depositText)
	await t
		.expect(await page.deposit.getAttribute('href')).contains(page.allyDemoOLS)
	await t
		.expect(page.withdraw.innerText).eql(page.withdrawText)
	await t
		.expect(await page.withdraw.getAttribute('href')).contains(page.allyDemoOLS)
	await t
		.expect(page.transfer.innerText).eql(page.transferText)
	await t
		.expect(await page.transfer.getAttribute('href')).contains(page.allyDemoOLS)
	await t
		.expect(page.profile.innerText).eql(page.profileText)
	await t
		.expect(page.eaHosting.innerText).eql(page.eaHostingText)
	await t
		.expect(await page.eaHosting.getAttribute('href')).contains(page.allyDemoOLS)
	await t
		.expect(page.rolloverRates.innerText).eql(page.rolloverRatesText)
	await t
		.expect(await page.rolloverRates.getAttribute('href')).contains(page.rolloverRatesURLDemo)
	await t
		.expect(page.support.innerText).eql(page.supportText)
	await t
		.expect(page.liveChat.innerText).eql(page.liveChatText)
	await t
		.expect(page.contactInfo.innerText).eql(page.contactInfoText)
	await t
		.expect(await page.liveChat.getAttribute('href')).contains(page.liveChatURLAlly)
	await t
		.expect(await page.contactInfo.getAttribute('href')).contains(page.contactInfoURLAlly)
	await t
		.expect(page.liveChatHeader.innerText).eql(page.liveChatText)
	await t
		.expect(await page.liveChatHeader.getAttribute('href')).contains(page.liveChatURLAlly)
	await t
		.expect(await page.imageHeader.getAttribute('src')).contains(page.imageHeaderAlly)
	await t
		.click(page.news)
	await t
		.close

});
