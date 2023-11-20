import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email';

const COLUMNS = [
    {label: 'FirstName', fieldName: 'FirstName', type: 'text'},
    {label: 'LastName', fieldName: 'LastName', type: 'text'},
    {label: 'Email', fieldName: 'Email', type: 'email'}
];

export default class ContactList extends LightningElement {
    @track showContacts = false;
    results;
    error;
    columns = COLUMNS;

   /* @wire(getContacts)
    contacts({data, error}){
        if(data){
            this.results = data;
            this.error = undefined;
        }
        else if(error){
            this.results = undefined;
            this.error = error;
        }
    }*/

    showContactData(){
        getContacts()
        .then(data => {
            this.results = data;
            this.error = undefined;
        })
        .catch(error => {
            this.results = undefined;
            this.error = error;
        })
    }

    handleClick(){
        this.showContacts = true;

        this.showContactData();
    }

}