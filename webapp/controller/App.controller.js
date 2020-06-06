sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"logali/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel"
	],
	function (Controller, MessageToast, models, ResourceModel) {
		"use strict";
		return Controller.extend(
			"logali.SAPUI5.controller.App", {
				onInit: function(){
					//Set model on view
					this.getView().setModel(models.createRecipient());
					
					//set i18n model on view
					var i18nModel = new ResourceModel({
						bundleName: "logali.SAPUI5.i18n.i18n"
					}); 
					
					this.getView().setModel(i18nModel, "i18nn");
				},

				onShowHello: function () {
					MessageToast.show("Hola Mundo");
					/*eslint-disable no-alert*/
					//alert("Se presiono el boton");
					/*eslint-enable no-alert*/
				}
			}
		);
	}
);