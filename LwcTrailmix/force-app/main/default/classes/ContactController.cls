public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
      return [select FirstName, LastName, Email from Contact];
   }
}