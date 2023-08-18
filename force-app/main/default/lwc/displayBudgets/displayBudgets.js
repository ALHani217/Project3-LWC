import { LightningElement, wire } from 'lwc';
import getBudget from '@salesforce/apex/BudgetController.getBudget';

export default class DisplayBudgets extends LightningElement {
  
    @wire(getBudget)
    budgets;

    columns = [
        { label: ' Name', fieldName: 'Name', type: "text" },
        { label: 'Budget Amount', fieldName: 'Budget_Amount__c', type: "number" }, 
        { label: 'Budget Spent', fieldName: 'Budget_Spent__c', type: "number" }, 
    ];
    
    data = [];
    error;
} 
