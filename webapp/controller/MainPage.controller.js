sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast",
  "sap/ui/model/json/JSONModel",
	"sap/ui/core/UIComponent"
], function(Controller, MessageToast, JSONModel){
  'use strict';

  return Controller.extend("my.app.controller.MainPage", {

		onNavToSecondPage: function (){
      console.log('CarmellaBing')
			this.getOwnerComponent().getRouter().navTo("second");
		},

    onPress : function () {
			MessageToast.show("Look toast here!");
      this.anyEvent()
			// this.byId("app").to(this.byId("intro"));
		},

    onInit : function () {
			this.getView().setModel(new JSONModel({
					features: [
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
						"Free and Open Source",
						"Free and Open Source",
						"Free and Open Source",
						"Free and Open Source",
						"Free and Open Source",
						"Responsive Across Browsers and Devices"
					]
				})
			);
		},

    onChange : function (oEvent) {
			var bState = oEvent.getParameter("state");
			this.byId("ready").setVisible(bState);
		}
  });
})