import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';


export default class ContactCreator extends LightningElement {
    @api objectApiName = "Contact";

    fields = [FirstName, LastName, Email];

    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title: 'Contact Created',
            message: 'New Contact Record is created with an id of '+ event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
    }
}