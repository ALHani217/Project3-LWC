import { LightningElement, wire} from 'lwc';
import  deleteCV from '@salesforce/apex/ConfirmedVendorController.deleteCV';
import  getCV from '@salesforce/apex/ConfirmedVendorController.getCV';
import { refreshApex } from "@salesforce/apex";

export default class DisplayCV extends LightningElement {
    @wire(getCV)
    confirmedVendors;
    

    mySelectedRows = [];
    error;

    btnDisabled = true;
    
    columns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'First Name', fieldName: 'First_Name__c', type: 'text' },
        { label: 'Last Name', fieldName: 'Last_Name__c', type: 'text' },
        { label: 'Contact Number', fieldName: 'Contact_Number__c', type: 'phone' },
    ];

    handleRowSelection(event) {
        this.mySelectedRows = [];
        if (event.detail.selectedRows.length > 0){
            this.mySelectedRows = event.detail.selectedRows;
            this.btnDisabled = false;
        } else {this.btnDisabled = true;}
    }

    handleMassDelete() {
        const selectedIds = this.mySelectedRows.map(row => row.Id);
        
            deleteCV({ cvIds : selectedIds })
                .then(result => {
                    refreshApex(this.confirmedVendors);
                    console.log("Success");
                })
                .catch(error =>{
                    this.error = error.body.message;
                    console.log(this.error);

                })
    }
}
   