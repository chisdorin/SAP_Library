sap.ui.define([
    "sap/ui/core/mvc/Controller",	
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"

    

 ], function (Controller,Fragment,MessageToast) {
    "use strict";
    return Controller.extend("org.ubb.books.controller.BookList", {
       
        //Delete book
        onDeleteBook(oEvent){

            const aSelContexts=this.byId("idBooksTable").getSelectedContexts();
            const sPathToBook=aSelContexts[0].getPath();
            this.getView().getModel().remove(sPathToBook, {
            success: function () {
                MessageToast.show("Book deleted!");
            },
            error: function () {
                MessageToast.show("Error by deleting book!");
            }
        });
    },
    
    
        
        

        //open add book dialog
        openAddDialog(){
            var oView = this.getView();

			// create dialog lazily
			if (!this.byId("addDialog")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
                    name: "org.ubb.books.view.AddBook",
                    controller:this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("addDialog").open();
			}
        },


        //open update book dialog
        openUpdateDialog:function(){
            var oView = this.getView();

			// create dialog lazily
			if (!this.byId("updateDialog")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
                    name: "org.ubb.books.view.UpdateBook",
                    controller:this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("updateDialog").open();
			}
        },

        
        //Update book
        onUpdateBook: function(oEvent){
           // debugger;
			var bCreate = true;
			var oBook = {
				ISBN: "",
				Author: "",
				Title: "",
				DatePublished: "",
				Language: "",
				NrOfBooks: "",
				AvailableNr: "",

			};
			var oSimpleForm = oEvent.getSource().getParent().getParent();
            var aItems = oSimpleForm.getFormElements();
            var oControl = aItems[0].getFields()[0];
            
			if (oControl.getValue().length !== 0) {
				oBook.ISBN = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            oControl = aItems[1].getFields()[0];
			if (oControl.getValue().length !== 0) {
                oBook.Author = oControl.getValue();
				oControl.setValueState("None");
			} else {
                bCreate = false;
				oControl.setValueState("Error");
			}
            oControl = aItems[2].getFields()[0];
            if (oControl.getValue().length !== 0) {
                oBook.Title = oControl.getValue();
                oControl.setValueState("None");
            } else {
                bCreate = false;
                oControl.setValueState("Error");
            }
			
			oControl = aItems[3].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.DatePublished = oControl.getDateValue();
			
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[4].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.Language = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[5].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.NrOfBooks = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[5].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.AvailableNr = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			this.getView().getModel().setUseBatch(false);
			
				
					
            this.getView().getModel().update("/Books(ISBN='"+oBook.ISBN+"')", oBook, {
                success: function () {
                    MessageToast.show("Book updated!");
                },
                error: function () {
                    MessageToast.show("Error by updateing book!");
                }
            }); 

        }, 
        onCloseUpdate(){
            this.byId("updateDialog").close()
        },
        


        //Add book
        onAddBook(oEvent){
			debugger;
			var bCreate = true;
			var oBook = {
				ISBN: "",
				Author: "",
				Title: "",
				DatePublished: "",
				Language: "",
				NrOfBooks: "",
				AvailableNr: "",

			};
			var oSimpleForm = oEvent.getSource().getParent().getParent();
            var aItems = oSimpleForm.getFormElements();
            var oControl = aItems[0].getFields()[0];
            
			if (oControl.getValue().length !== 0) {
				oBook.ISBN = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
            }
            oControl = aItems[1].getFields()[0];
			if (oControl.getValue().length !== 0) {
                oBook.Author = oControl.getValue();
				oControl.setValueState("None");
			} else {
                bCreate = false;
				oControl.setValueState("Error");
			}
            oControl = aItems[2].getFields()[0];
            if (oControl.getValue().length !== 0) {
                oBook.Title = oControl.getValue();
                oControl.setValueState("None");
            } else {
                bCreate = false;
                oControl.setValueState("Error");
            }
			
			oControl = aItems[3].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.DatePublished = oControl.getDateValue();
				//oBook.CreatedOn = oControl.getValue();
				//oBook.ChangedOn = oControl.getValue();
				//oBook.Pdate = oControl.getDateValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[4].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.Language = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[5].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.NrOfBooks = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			oControl = aItems[5].getFields()[0];
			if (oControl.getValue().length !== 0) {
				oBook.AvailableNr = oControl.getValue();
				oControl.setValueState("None");
			} else {
				bCreate = false;
				oControl.setValueState("Error");
			}
			this.getView().getModel().setUseBatch(false);
			
				
					
            this.getView().getModel().create("/Books", oBook, {
                success: function () {
                    MessageToast.show("Book inserted!");
                },
                error: function () {
                    MessageToast.show("Error by inserting book!");
                }
            });
			
         
        },
        //Close add Dialog
        onCloseAdd(){
            this.byId("addDialog").close()
        },

        onFilter: function(oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains,sQuery));
			}
                        // filter binding
			var oList = this.getView().byId("idBooksTable");
			var oBinding = oList.getBinding("items");
            oBinding.filter(aFilter)},
            
        onSortDescending: function(){
            debugger;
            var sOrder = new sap.ui.model.Sorter("ISBN",true,null);
            this.getView().byId("idBooksTable").getBinding("items").sort(sOrder);
        },
        onSortAscending: function(){
            debugger;
            var sOrder = new sap.ui.model.Sorter("ISBN",false,null);
            this.getView().byId("idBooksTable").getBinding("items").sort(sOrder);
		},
		
		onShowCheckout(){ var oView = this.getView();

			// create dialog lazily
			if (!this.byId("id1")) {
				// load asynchronous XML fragment
				Fragment.load({
					id: oView.getId(),
                    name: "org.ubb.books.view.BurrowedBookTable",
                    controller:this
				}).then(function (oDialog) {
					// connect dialog to the root view of this component (models, lifecycle)
					oView.addDependent(oDialog);
					oDialog.open();
				});
			} else {
				this.byId("id1").open();
			}},


    });
 });