sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		"logali/Customers/model/models",
		"sap/ui/model/resource/ResourceModel"
	],
	function (UIComponent, models, ResourceModel) {
		return UIComponent.extend("logali.Customers.Component", {
			metadata: {
				/*rootview: {
					"viewName": "logali.SAPUI5.view.App",
					"type": "XML",
					"async": true,
					"id": "app"
				}*/
				manifest: "json"
			},
			
			init: function () {
				//Call the init function of the parent
				UIComponent.prototype.init.apply(this, arguments);

				//Set model on view
				this.setModel(models.createRecipient());

				//set i18n model on view
				var i18nModel = new ResourceModel({
					bundleName: "logali.Customers.i18n.i18n"
				});

				this.setModel(i18nModel, "i18n");
			}
		});
	}

);