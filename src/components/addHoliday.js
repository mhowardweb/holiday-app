import React from 'react';
import Header from './header';

const AddHoliday = () => (
  <React.Fragment>
    <Header headerTitle="Add a Holiday" />
    <ion-content padding fullscreen>
      <ion-card padding>
        <ion-card-title>New/Edit Holiday</ion-card-title>
        <ion-item>
          <ion-label>Hol Name</ion-label>
          <ion-input required type="text" placeholder="hol name" />
        </ion-item>
        <ion-text color="danger">
          <h6>You need to enter a holiday Name</h6>
        </ion-text>

        <ion-item>
          <ion-label>Holiday Start</ion-label>

          <ion-datetime display-format="DD/MM/YYYY" min="2018" picker-format="DD MMMM YYYY" />
        </ion-item>
        <ion-text color="danger">
          <h6>You need to enter the start</h6>
        </ion-text>

        <ion-item>
          <ion-label>Holiday End</ion-label>
          <ion-datetime display-format="DD/MM/YYYY" max="2025" picker-format="DD MMMM YYYY" />
        </ion-item>
        <ion-text color="danger">
          <h6>You need to enter the end</h6>
        </ion-text>

        <ion-item>
          <ion-label>Days Booked: </ion-label>
        </ion-item>

        <ion-item>
          <ion-label position="floating">Notes:</ion-label>
          <ion-textarea />
        </ion-item>
        <ion-item>
          <ion-button>Add / Edit</ion-button>
        </ion-item>
      </ion-card>
    </ion-content>
  </React.Fragment>
);

export default AddHoliday;
