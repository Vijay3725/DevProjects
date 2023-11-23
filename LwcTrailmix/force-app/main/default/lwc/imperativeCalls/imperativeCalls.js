import { LightningElement } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';


const COLUMNS = [
    {label: 'FirstName', fieldName: 'FirstName', type: 'text'},
    {label: 'LastName', fieldName: 'LastName', type: 'text'},
    {label: 'Email', fieldName: 'Email', type: 'email'}
];

export default class ImperativeCalls extends LightningElement {
    result;
    error;
    contactSearched;
    columns = COLUMNS;
    showColumns = false;


    
    handleSearch(event){
        this.contactSearched = event.target.value;
        this.showColumns = true;
        
        if(this.contactSearched === ""){
            this.contactSearched = "@#$%^&*()";
            this.showColumns = false;
        }

        this.fetchContactData();
    }

    fetchContactData(){
        getContacts({search:this.contactSearched})
        .then(data=>{
            this.result = data;
            this.error = undefined;
        })
        .catch(error=>{
            this.result = undefined;
            this.error = error;
        })
    }


}