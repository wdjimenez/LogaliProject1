sap.ui.define(
	[
		"sap/ui/core/UIComponent",
		"logali/Customers/model/models",
		"sap/ui/model/resource/ResourceModel",
		"./controller/HelloDialog"
	],
	function (UIComponent, models, ResourceModel, HelloDialog) {
		return UIComponent.extend("logali.Customers.Component", {
			metadata: {
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

				this._helloDialog = new HelloDialog(this.getRootControl());
			},

			exit: function () {
				this._helloDialog.destroy();
				delete this._helloDialog;
			},

			openHelloDialog: function () {
				this._helloDialog.open();
			}

		});
	}

);