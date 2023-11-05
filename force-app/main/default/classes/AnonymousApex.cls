/**
 * @description       : 
 * @author            : Rajat M
 * @group             : 
 * @last modified on  : 11-03-2023
 * @last modified by  : Rajat M
**/
public with sharing class AnonymousApex {
    public AnonymousApex() {

        Cloud_News__e newsEvent = new Cloud_News__e(
           Location__c='Sydney City',
           Urgent__c=true,
           News_Content__c='Lake Road is closed due to mudslides2.');
            // Call method to publish events
            Database.SaveResult sr = EventBus.publish(newsEvent);
            // Inspect publishing result
            if (sr.isSuccess()) {
                System.debug('Successfully published event.');
            } else {
                for(Database.Error err : sr.getErrors()) {
                    System.debug('Error returned: ' +
                                err.getStatusCode() +
                                ' - ' +
                                err.getMessage());
                }
            }

    }
}