public with sharing class WeddingParty {
    @AuraEnabled(cacheable=true)
    public static List<Wedding_Party__c>getWI(){
        return[
            SELECT Name, Bride_Name__c, Groom_Name__c, Wedding_Date_and_Time__c, Wedding_Complete__c, Id
            FROM Wedding_Party__c
            LIMIT 3
        ];
    }  
}
