sap.ui.define([
    "sap/ui/core/mvc/Controller",	
    "sap/m/MessageToast"

    

 ], function (Controller,MessageToast) {
    "use strict";
    return Controller.extend("org.ubb.books.controller.BookList", {
       
       
		onBurrowBook(oEvent) {
            const aSelectedContexts = this.byId("idBooksTable").getSelectedContexts();
            const sPath = aSelectedContexts[0].getPath();

            var selRow = this.byId("idBooksTable").getModel().getProperty(sPath);
            var availableVal = parseInt(selRow.Available);

           

            if(availableVal > 0 ) {
               selRow.Available = parseInt(selRow.Available) - 1;

               var oBook =  {
                  ISBN: selRow.ISBN,
                  Title: "",
                  Author: "",
                  Published: selRow.Published,
                  Language: "",
                  Available: ""
              };

               this.getView().getModel().create("/CheckoutBooks", oBook, {
                  success: function () {
                     MessageToast.show("Book was successfully checked out");
                  },
                  error: function () {
                     MessageToast.show("error by checking book out");
                  }
               }); 
            } else {
               MessageToast.show("Not enough books");
            }
      }, 


    });
 });