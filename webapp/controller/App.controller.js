sap.ui.define(
	[
		"sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"sap/ui/model/json/JSONModel"
	],
	function (Controller, MessageToast, JSONModel) {
		"use strict";
		return Controller.extend(
			"logali.SAPUI5.controller.App", {
				onInit: function(){
					//Set model on view
					var oData = {
						recipient:{
							name:"Word"
						}
					};
					
					var oModel = new JSONModel(oData);
					
					this.getView().setModel(oModel);
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