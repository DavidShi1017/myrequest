sap.ui.define(["sap/ui/core/mvc/ControllerExtension", "sap/m/MessageBox"], function (ControllerExtension, MessageBox) {
	"use strict";

	return ControllerExtension.extend("myrequest.ext.controller.ObjectPageExtension", {
		override: {
			editFlow: {
				onBeforeSave: function (oContext) {
					if (!oContext.getProperty("AckConfirmed")) {
						var sMessage = this.base.getExtensionAPI().getModel("i18n").getResourceBundle().getText("ackConfirmedRequired");
						MessageBox.error(sMessage);
						throw new Error(sMessage);
					}

					return undefined;
				}
			}
		}
	});
});
