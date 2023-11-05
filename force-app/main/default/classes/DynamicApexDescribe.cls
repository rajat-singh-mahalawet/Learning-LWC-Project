/**
 * @description       : 
 * @author            : Rajat M
 * @group             : 
 * @last modified on  : 10-25-2023
 * @last modified by  : Rajat M
**/
public with sharing class DynamicApexDescribe {
    public DynamicApexDescribe() {

        SObject a = new Account();
        
        if(a.getSObjectType() == Account.sobjectType ){
            System.debug('------- object token is: ' + Account.sObjectType);
        }

        //object Tokens
        Schema.SObjectType sot = Account.sObjectType;
        System.debug('------- object token is: ' + sot);

        //fieldToken
        Schema.SObjectField fieldToken = Account.Industry;
        System.debug('------- object token is: ' + fieldToken);

        //object result
        Schema.DescribeSObjectResult dsr = sot.getDescribe();
        System.debug('------- object result is: ' + dsr);

        // dsr = Schema.SObjectType.Account.getDescribe();
        // System.debug('------- object result is: ' + dsr);

        schema.DescribeFieldResult dfr = fieldToken.getDescribe();
        System.debug('------- field result is: ' + dfr);

        System.debug('------- field values option is: ' + dfr.getPicklistValues());


        sot = ((SObject)Type.forName('Contact').newInstance()).getSObjectType();
        System.debug('------- object token is: ' + sot);
        
        dsr = sot.getDescribe();
        System.debug('------- object result is: ' + dsr);

        Map<String, Schema.SObjectField> FieldsTokenmap = dsr.fields.getMap();
        System.debug('------- field map is: ' + FieldsTokenmap);

        //dynamic DML
        Account a = new Account();
        Schema.SObjectType objectToken = a.getSObjectType();
        Account b = (Account)objectToken.newSObject(); // token is a generic sObject, not an Account. Casting to concrete sobject is mandatory

        SObject s = [SELECT AccountNumber FROM ACCOUNT LIMIT 1];
        Object o = s.get('AccountNumber');
        s.put('AccontNumber', '12345');

        Schema.DescribeFieldResult dfr = Schema.SObjectType.Account.fields.AccountNumber;
        s.put(dfr.getSobjectField(), 'abcde');


        System.debug('End');

        



    }

    
}