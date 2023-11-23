import { LightningElement, api} from 'lwc';

export default class Child extends LightningElement {
    @api messageOne = "This is message from child";
    @api messageTwo = "This is message from child2";

    handleParent(){
        const childEvent = new CustomEvent("parentdata", {
            detail:{
                color: 'Magenta',
                phone: 'iPhone15'
            }
        });
        this.dispatchEvent(childEvent);
    }
    
}