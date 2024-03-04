import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRSTNAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactCreator extends LightningElement {
  objectApiName = CONTACT_OBJECT;
  fields = [FIRSTNAME_FIELD, LASTNAME_FIELD, EMAIL_FIELD];

  handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
      title: 'Contact created',
      message: `Record Id: ${event.detail.id}`,
      variant: 'Success'
    });
    this.dispatchEvent(toastEvent);
  }
}