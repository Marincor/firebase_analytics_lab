import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { Analytics, getAnalytics, logEvent } from "firebase/analytics";
import { environment } from 'src/environments/environment';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  databaseURL: environment.databaseURL,
  projectId: environment.projectId,
  storageBucket: environment.storageBucket,
  messagingSenderId: environment.messagingSenderId,
  appId: environment.appId,
  measurementId: environment.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  app = initializeApp(firebaseConfig);
  analytics?:Analytics;

  ngOnInit(): void {
    this.analytics = getAnalytics(this.app);
  }

  loginEvent() {
    if(this.analytics) {
      logEvent(this.analytics, "login");
      console.log("log")
    }
  }

  customEvent() {
    if(this.analytics) {
      logEvent(this.analytics, "partner", {"event_name": "partner"});
      console.log("log")
    }
  }
}
