/**
 * @description       : 
 * @author            : Rajat M
 * @group             : 
 * @last modified on  : 08-21-2023
 * @last modified by  : Rajat M
**/
public with sharing class AccountController {
    
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Type, Industry FROM ACCOUNT LIMIT 5];

    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountsByType(String type) {
        return [SELECT Id, Name, Type, Industry FROM ACCOUNT WHERE Type = :type LIMIT 5];

    }
}