public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String search){
      String searchKey = '%'+search+'%';
      return [select FirstName, LastName, Email from Contact where FirstName like  :searchKey];
   }
}