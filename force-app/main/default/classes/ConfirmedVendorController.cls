public with sharing class ConfirmedVendorController {
   @AuraEnabled(cacheable=true)
   public static List<Confirmed_Vendors__c>getCV(){
    return[
        SELECT First_Name__c, Last_Name__c, Contact_Number__c, Name, Id
        FROM Confirmed_Vendors__c
        LIMIT 3
    ];
   }

   @AuraEnabled
   public static void deleteCV(List<Id> cvIds) {
    List<Confirmed_Vendors__c> cvToDel = [SELECT Id FROM Confirmed_Vendors__c WHERE Id IN :cvIds];

    delete cvToDel;
   }
   }
   
   
   

