import { Component, OnInit } from '@angular/core';
import { initializeApp } from '@angular/fire/app';
import { getMessaging, getToken, onMessage } from '@angular/fire/messaging';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<p>Hi!</p>`,
})
export class AppComponent implements OnInit {
  private messaging: any;

  ngOnInit(): void {
    const app = initializeApp(environment.firebaseConfig);
    this.messaging = getMessaging(app);
    this.requestPermission();

    onMessage(this.messaging, (payload) => {
      alert(JSON.stringify(payload));
      // ...
    });
  }

  requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        getToken(this.messaging, {
          vapidKey: environment.firebaseConfig.vapidKey,
        })
          .then((currentToken: string) => {
            if (currentToken) {
              console.log(currentToken);
            } else {
              console.log(
                'No registration token available. Request permission to generate one.'
              );
            }
          })
          .catch((err: any) => {
            console.log(err);
          });
      }
    });
  }
}
