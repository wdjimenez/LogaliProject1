sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
	function(Controller, JSONModel, formatter, Filter, FilterOperator){
		return Controller.extend("logali.Customer.controller.CustomerList",{
			formatter: formatter,
			
			onInit: function(){
				var oViewModel = new JSONModel({
					currency:"USD"
				});
				this.getView().setModel(oViewModel, "view");
			},
			
			onFilterCustomers: function(oEvent){
				var aFilter = [];
				var squery = oEvent.getParameter("query");
				if(squery){
					aFilter.push(new Filter("ContactName", FilterOperator.Contains, squery));
				}
				
				var olist = this.byId("customerList");
				var obinding = olist.getBinding("items");
				obinding.filter(aFilter);
			}
		});
	}
);