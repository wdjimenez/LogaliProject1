sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		"logali/SAPUI5/model/models",
		"sap/ui/model/resource/ResourceModel"
	],
	function (UIComponent, models, ResourceModel) {
		return UIComponent.extend("logali.SAPUI5.Component.js", {
			metadata: {
				rootview: {
					"viewName": "logali.SAPUI5.view.App",
					"type": "XML",
					"async": "true",
					"id": "app"
				}

			},
			init: function () {
				//Call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);

				//Set model on view
				this.setModel(models.createRecipient());

				//set i18n model on view
				var i18nModel = new ResourceModel({
					bundleName: "logali.SAPUI5.i18n.i18n"
				});

				this.setModel(i18nModel, "i18n");
			}
		});
	}

);