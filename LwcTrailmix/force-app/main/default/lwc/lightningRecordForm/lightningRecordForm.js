import { LightningElement, api } from 'lwc';
import ShowToastEvent from 'lightning/platformShowToastEvent';
import Name from '@salesforce/schema/Account.Name';
import AnnualRevenue from '@salesforce/schema/Account.AnnualRevenue';
import Industry from '@salesforce/schema/Account.Industry';

export default class LightningRecordForm extends LightningElement {
    @api objectApiName = "Account";
    
    fields=[Name, AnnualRevenue, Industry];
    
    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title: 'Account Created',
            message: 'Account Record Id is'+event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}