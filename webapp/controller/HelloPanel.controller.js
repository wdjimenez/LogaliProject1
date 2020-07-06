sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
		// "logali/SAPUI5/model/models",
		// "sap/ui/model/resource/ResourceModel"
	],
	function (Controller, MessageToast) {
		"use strict";
		return Controller.extend(
			"logali.Customers.controller.HelloPanel", {
				onInit: function(){

				},

				onShowHello: function () {
					
					//read text from i18n / model
					var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
					var sName = this.getView().getModel().getProperty("/recipient/name");
					//var sMsg = sHello.concat(" ").concat(sName);
					
					MessageToast.show(sHello.concat(" ").concat(sName));
					/*eslint-disable no-alert*/
					//alert("Se presiono el boton");
					/*eslint-enable no-alert*/
				}
			}
		);
	}
);