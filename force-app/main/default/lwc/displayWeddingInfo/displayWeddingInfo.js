import { LightningElement, wire } from 'lwc';
import getWI from '@salesforce/apex/WeddingParty.getWI';

export default class DisplayWeddingInfo extends LightningElement {
    @wire(getWI)
    weddingInfo;

    columns = [
        { label: 'First Name', fieldName: 'Name', type: "text" },
        { label: 'Bride Name', fieldName: 'Bride_Name__c', type: "text" },
        { label: 'Groom Name', fieldName: 'Groom_Name__c', type: "text" },
        { label: 'Wedding Date', fieldName: 'Wedding_Date_and_Time__c', type: "date" },
        { label: 'Wedding Complete?', fieldName: 'Wedding_Complete__c', type: "boolean"},
    ];
    data = [];
    error;
}