/**
 * @description       : 
 * @author            : Rajat M
 * @group             : 
 * @last modified on  : 11-03-2023
 * @last modified by  : Rajat M
**/
trigger caseUrgentNews  on Cloud_News__e (after Insert) {

    List<Case> caseList = new List<Case>();
    Group queue = [SELECT Id from Group WHERE Name = 'Regional Dispatch' AND Type = 'Queue' LIMIT 1];

    for(Cloud_News__e news : Trigger.new){
        if(news.Urgent__c == True){

            Case newCase = new Case(
                                Priority = 'High',
                                OwnerId =  queue.Id,
                                Subject = 'News team dispatch to ' + news.Location__c
                            );
            caseList.add(newCase);
        }
    } 

    if(!caseList.isEmpty()) {
        insert caseList;
    }


}