import { Injectable } from '@angular/core';
import { init } from 'emailjs-com'
import emailjs from 'emailjs-com'
init("user_sAzkEymW27YsShZBaBeDW");

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  sendToAdminEmail(ticket_id: string, contact_email: string, contact: number, category: string, description: string) {
    const templateParams = {
      ticket_id: ticket_id,
      contact_email: contact_email,
      contact: contact,
      category: category,
      description: description
    };

    emailjs.send('service_u2myif6', 'template_65jwmnz', templateParams, 'user_sAzkEymW27YsShZBaBeDW')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });
  }
}
