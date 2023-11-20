import { LightningElement, api} from 'lwc';

export default class Child extends LightningElement {

    @api message;

    handleClick(){
        const childEvent = new CustomEvent("parentdata", {
            detail:{
                name: "iPhone14",
                color: "Magenta"
            }
        });
        this.dispatchEvent(childEvent);
    }

    
}