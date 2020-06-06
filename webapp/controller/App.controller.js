sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"logali/SAPUI5/model/models"
	],
	function (Controller, MessageToast, models) {
		"use strict";
		return Controller.extend(
			"logali.SAPUI5.controller.App", {
				onInit: function(){
					//Set model on view
					this.getView().setModel(models.createRecipient());
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