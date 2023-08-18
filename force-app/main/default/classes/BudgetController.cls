public with sharing class BudgetController {
    @AuraEnabled(cacheable=true)
   public static List<Budget__c> getBudget(){
    return[
        SELECT Name, Budget_Amount__c, Budget_Spent__c
        FROM Budget__c
        LIMIT 3
    ];

    }
}
