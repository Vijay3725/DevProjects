public with sharing class AccountHandler {
    @AuraEnabled(cacheable=true)
    public static List<Account> fetchAccounts(){
        return [select Industry, AnnualRevenue from Account];
    }
}