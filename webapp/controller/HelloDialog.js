	sap.ui.define(
		[
			"sap/ui/base/ManagedObject",
			"sap/ui/core/Fragment"
		],
		function (ManagedObject, Fragment) {
			return ManagedObject.extend("logali.Customers.controller.HelloDialog", {
				constructor: function (oView) {
					this._view = oView;
				},

				exit: function () {
					delete this._view;
				},

				open: function () {
					var oView = this._view;

					if (!oView.byId("helloDialog")) {
						var oFragmentController = {
							onCloseDialog: function () {
								oView.byId("helloDialog").close();
							}
						};

						Fragment.load({
							id: oView.getId(),
							name: "logali.Customers.view.HelloDialog",
							controller: oFragmentController
						}).then(function (oDialog) {
							oView.addDependent(oDialog);
							oDialog.open();
						});
					} else {
						oView.byId("helloDialog").open();
					}
				}
			});
		}
	);