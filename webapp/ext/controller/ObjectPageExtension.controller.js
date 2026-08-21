/* global Promise */
sap.ui.define(["sap/ui/core/mvc/ControllerExtension", "sap/m/MessageBox"], function (ControllerExtension, MessageBox) {
	"use strict";

	return ControllerExtension.extend("myrequest.ext.controller.ObjectPageExtension", {
		override: {
			editFlow: {
				onBeforeSave: function (oContext) {
					var oView = this.getView();
					var oBindingContext = oView.getBindingContext();
					if (!oBindingContext.getProperty("AckConfirmed")) {
						var sMessage = "Please confirm the declaration before saving.";
						MessageBox.error(sMessage);
						return Promise.reject(new Error(sMessage));
					}

					return Promise.resolve();
				}
			}
		}
	});
});
