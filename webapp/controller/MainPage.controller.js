sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
	"sap/ui/core/UIComponent"
], function(Controller, MessageToast, JSONModel){
  'use strict';

  return Controller.extend("my.app.controller.MainPage", {

		onNavToSecondPage: function (){
			this.getOwnerComponent().getRouter().navTo("employeeList");
		},

    onPress : function () {
			MessageToast.show("Look toast here!");
      this.anyEvent()
		},

    onInit : function () {
			this.getView().setModel(new JSONModel({
					products: [
						"ReactJS",
						"React Native",
						"VueJS",
						"Styled Components",
						"Material UI",
						"Bootstrap",
						"JQuery",
						"NodeJS",
						"Express.js",
						"NestJS",
						"Jest",
						"JavaScript(ES21) with TypeScript",
						"GraphQL",
						"Docker",
						"Git",
						"Git Flow",
						"HTML5",
						"CSS3",
					]
				})
			);
		},
  });
})