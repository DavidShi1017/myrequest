sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"myrequest/test/integration/pages/ZC_VO_MYREQList.gen",
	"myrequest/test/integration/pages/ZC_VO_MYREQObjectPage.gen"
], function (JourneyRunner, ZC_VO_MYREQListGenerated, ZC_VO_MYREQObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('myrequest') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_VO_MYREQListGenerated: ZC_VO_MYREQListGenerated,
			onTheZC_VO_MYREQObjectPageGenerated: ZC_VO_MYREQObjectPageGenerated
        },
        async: true
    });

    return runner;
});

