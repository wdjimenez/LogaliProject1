sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	function(Controller, JSONModel){
		return Controller.extend("logali.Customer.controller.CustomerList",{
			
			onInit: function(){
				var oViewModel = new JSONModel({
					currency:"USD"
				});
				this.getView().setModel(oViewModel, "view");
			}	
		});
	}
);