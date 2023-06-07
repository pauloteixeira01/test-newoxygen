sap.ui.define([
  "sap/ui/core/UIComponent"
], function(UIComponent){
  'use strict';

  return UIComponent.extend("my.app.Component", {
    metadata: {
      "interfaces": ["sap.ui.core.IAsyncContentCreation"],
      "rootView": {
        "viewName": "my.app.view.MainPage",
        "type": "XML",
        "id": "main"
      },  
      "routing": {
        "config": {
            "routerClass": "sap.m.routing.Router",
            "type": "View",
            "viewType": "XML",
            "path": "my.app.view",
            "controlId": "app",
            "controlAggregation": "pages",
            "transition": "slide",
            // "bypassed": {
            //   "target": "notFound"
            // },
            "async": true
        },
        "routes": [
          {
            "pattern": "",
            "name": "MainPage",
            "target": "home"
          },
          {
            "pattern": "second",
            "name": "second",
            "target": "second"
          },
        ],
        "targets": {
          "home": {
            "id": "main",
            "name": "MainPage",
            "level" : 1
          },
          "second": {
            "id": "second",
            "name": "SecondPage",
            "level": 2
          }
        }
      }
    }, 

    init: function () {
      // call the init function of the parent
      UIComponent.prototype.init.apply(this, arguments);

      // create the views based on the url/hash

      this.getRouter().initialize();
    }
  });
})