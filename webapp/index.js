sap.ui.define([
		"sap/ui/core/ComponentContainer"
	],
	function (ComponentContainer) {
		new ComponentContainer({
				name: "logali.SAPUI5",
				settings: {
					id: "logali"
				},
				async: true
			}
		).placeAt("content");
	}
	/*	function (XMLView) {
			XMLView.create({
				viewName: "logali.SAPUI5.view.App"
			}).then(function (OView){
				OView.placeAt("content");
				
			});
			
		}*/
);