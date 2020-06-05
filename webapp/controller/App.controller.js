sap.ui.define(
	[
	"sap/ui/core/mvc/Controller"	
	],
	function(Controller){
		"use strict";
		return Controller.extend(
			"logali.SAPUI5.controller.App",
			{
				
				onShowHello : function(){
					/*eslint-disable no-alert*/
					alert("Se presiono el boton");
					/*eslint-enable no-alert*/
				}
			}
		);
	}
	);