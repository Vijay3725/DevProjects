import { LightningElement, track } from 'lwc';

export default class Parent extends LightningElement {
   @track color;
   @track phone;

   handleChild(){
      this.template.querySelector('c-child').messageTwo = "This is message from Parent";
   }

   handleParentData(event){
      this.color = event.detail.color;
      this.phone = event.detail.phone;
   }
}
