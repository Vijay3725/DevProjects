import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {
   @track name;
   @track color;

   handleParent(event){
    this.name = event.detail.name;
    this.color = event.detail.color;
   }

   handleChild(){
    this.template.querySelector('c-child').message = "This is a message from child";
   }
}
