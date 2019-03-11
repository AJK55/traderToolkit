import {
	Selector
} from 'testcafe'

export default class Page {
	constructor() {

		this.pageURLs = [
			this.startingCIMACNLive = 'https://tradertoolkit.efxnow.com/Live/UK/CH/Auth/SignIn?vn=gccig2&voea=2332&uid=12345',
			this.startingCIMACNDemo = 'https://tradertoolkit.efxnow.com/DEMO/UK/CH/Auth/SignIn?vn=gccig2&voea=2332&uid=12345',
			this.liveCIMACN = 'https://tradertoolkit.efxnow.com/Live/UK/CH/News',
			this.demoCIMACN = 'https://tradertoolkit.efxnow.com/DEMO/UK/CH/News',
			this.startingUKCNLive = 'https://tradertoolkit.efxnow.com/Live/UK/CH/Auth/SignIn?vn=fcukg2&voea=1231&uid=12345',
			this.startingUKCNDemo = 'https://tradertoolkit.efxnow.com/DEMO/UK/CH/Auth/SignIn?vn=fcukg2&voea=1231&uid=12345',
			this.liveUKCN = 'https://tradertoolkit.efxnow.com/Live/UK/CH/ForexInsider',
			this.demoUKCN = 'https://tradertoolkit.efxnow.com/DEMO/UK/CH/ForexInsider'

];

		this.pageElements = [
			this.pageTitle = Selector('title'),
			this.headerLogo = Selector('#logoMain'),
			this.liveChatHeader = Selector('#toplinks > span > a'),
			this.tradeIdeas = Selector('#li1 > span'),
			this.autochartistTradeIdeas = Selector('#li_tradeIdeas > span > a'),
			this.techAnalysis = Selector('#li2 > span'),
			this.autochartist = Selector('#li2 > ul > li:nth-child(1) > span > a'),
			this.autochartistRecognia = Selector('#li_tafromtradecentral > span > a'),
			this.commentary = Selector('#li4 > span'),
			this.weibo = Selector('#li_microblogging > span > a'),
			this.fundamentalAnalysis = Selector('#li5 > span'),
			this.economicCalendar = Selector('#li5 > ul > li:nth-child(1) > span > a'),
			this.news = Selector('#li_news > span > a'),
			this.funds = Selector('#li6 > span'),
			this.deposit = Selector('#li6 > ul > li:nth-child(1) > span > a'),
			this.withdraw = Selector('#li6 > ul > li.last > span > a'),
			this.profile = Selector('#li7 > span'),
			this.eaHosting = Selector('#li7 > ul > li:nth-child(1) > span > a'),
			this.updateProfile = Selector('#li7 > ul > li.last > span > a'),
			this.support = Selector('#li8 > span'),
			this.liveChatSide = Selector('#li8 > ul > li:nth-child(1) > span > a'),
			this.contactInfo = Selector('#li8 > ul > li:nth-child(2) > span > a'),
			this.cfdProductDetails = Selector('#li8 > ul > li:nth-child(3) > span > a'),
			this.rolloverRates = Selector('#li_rolloverRates > span > a')

];

		this.pageData = [
			this.homepageTitle = '新闻',
			this.homepageTitleUKCN = '汇市前沿',
			this.liveChatText = '在线中文客服',
			this.tradeIdeasText = '交易看点',
			this.autochartistTradeIdeasText = 'Autochartist - 交易看点',
			this.techAnalysisText = '市场技术分析',
			this.autochartistText = 'Autochartist - 图表走势',
			this.autochartistRecogniaText = 'Recognia Trading Central – 技术面分析',
			this.commentaryText = '汇评',
			this.weiboText = '新浪微博',
			this.fundamentalAnalysisText = '基础面分析',
			this.economicCalendarText = '实时全球经济日历',
			this.newsText = '新闻',
			this.fundsText = '帐户资金',
			this.depositText = '注资',
			this.withdrawText = '取款',
			this.profileText = '帐户信息',
			this.eaHostingText = '申请智能托管服务',
			this.updateProfileText = '修改帐户信息',
			this.supportText = '客户支持',
			this.contactInfoText = '联络方式',
			this.cfdProductDetailsText = 'CFD商品详情',
			this.rolloverRatesText = '隔夜利息报价'
];

		this.pageOutURLs = [
			this.logoImageURL = '/css/cima/uk/ch/_default/images/forex_logo.png',
			this.logoImageURLUKCN = '/css/forexcomukg2/uk/ch/_default/images/forex_logo.png',
			this.liveChatURL = 'https://z1.liveper.sn/api/account/21749759/route/campaign/852840214/engagement/852840614',
			this.liveChatURLUKCN = 'https://z1.liveper.sn/api/account/21749759/route/campaign/248551914/engagement/248553314',
			this.liveChatURLUKCNDemo = 'https://z1.liveper.sn/api/account/21749759/route/campaign/248551914/engagement/248553014',
			this.liveChatURLCIMADEMO = 'https://z1.liveper.sn/api/account/21749759/route/campaign/852840214/engagement/852841814',
			this.autochartistTradeIdeasURLCIMACNLive = '/Live/UK/CH/TradeIdeas',
			this.autochartistTradeIdeasURLCIMACNDemo = '/DEMO/UK/CH/TradeIdeas',
			this.autochartistURLCIMACNLive = 'http://gain.autochartist.com/aclite/GainCapitalCFDMain?username=12345&accountType=0&locale=zh_CN',
			this.autochartistURLCIMACNDemo = 'http://gain.autochartist.com/aclite/GainCapitalCFDMain?username=12345&accountType=1&locale=zh_CN',
			this.autochartistRecogniaURLCIMACNLive = '/Live/UK/CH/TradingCentral',
			this.autochartistRecogniaURLCIMACNDemo = '/DEMO/UK/CH/TradingCentral',
			this.weiboURLLive = '/Live/UK/CH/Microblogging',
			this.weiboURLDemo = '/DEMO/UK/CH/Microblogging',
			this.economicCalendarURL = 'https://www.jiasheng-jituan.com/cn/market-analysis/economic-calendar/',
			this.economicCalendarURLUKCN = 'http://www.forex.com/cn/economic-calendar.html',
			this.newsURLLive = '/Live/UK/CH/News',
			this.newsURLDemo = '/DEMO/UK/CH/News',
			this.depositURL = 'https://account.forexchinese.com/funding/deposit/chinaunionpay',
			this.withdrawURL = 'https://account.forexchinese.com/funding/withdrawal/cards',
			this.withdrawURLUKCN = 'https://account.efxnow.com/login/forexukzh?culture=zh-CHS&returnurl=/funding/withdrawal/cards',
			this.eaHostingLiveURL = 'https://www.jiasheng-jituan.com/cn/trading-platforms/metatrader-vps-ea-hosting/',
			this.updateProfileURLLive = 'https://account.forexchinese.com/login/forexglzh?culture=zh-CHS',
			this.contactInfoURLLive = 'https://www.jiasheng-jituan.com/cn/support/',
			this.contactInforURLLIVEUKCN = 'http://www.forex.com/uk/cns/contact_us.html',
			this.cfdProductDetailsURLLive = 'https://www.jiasheng-jituan.com/~/media/Forex/files/support/g2-cfd-contract-detail.pdf',
			this.rolloverRatesURLLive = '/Live/UK/CH/RolloverRates',
			this.rolloverRatesURLDemo = '/DEMO/UK/CH/RolloverRates',
			this.cimaCNDemoOLS = 'https://application.forexchinese.com/cn-meta/step/1'
		];



	}
}
