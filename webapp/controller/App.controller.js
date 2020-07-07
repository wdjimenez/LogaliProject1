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
			"logali.Customers.controller.App", {
				onInit: function(){

				},
				
				onShowDialog: function () {
					this.getOwnerComponent().openHelloDialog();
				}

		
			}
		);
	}
);