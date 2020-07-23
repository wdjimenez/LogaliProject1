sap.ui.define(
	[],
	function(){
		return {
			statusText: function(contactTitle){
				var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
				
				switch(contactTitle){
					case "S": return resourceBundle.getText("ContactTitleS");
					case "O": return resourceBundle.getText("ContactTitleO");
					case "A": return resourceBundle.getText("ContactTitleA");
					default: return contactTitle;
				}
			}
		};	
	}
	
);