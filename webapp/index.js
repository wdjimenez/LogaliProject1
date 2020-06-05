sap.ui.define([
	"sap/ui/core/mvc/XMLView"
	],
	function (XMLView) {
		XMLView.create({
			viewName: "logali.SAPUI5.view.App"
		}).then(function (OView){
			OView.placeAt("content");
			
		});
		
	}
);