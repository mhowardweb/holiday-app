import React, { Component } from 'react';
import Header from './header';

class HolidaySummary extends Component {
  state = {
    data: {
      daystaken: 0,
      daysremaining: 0,
      yearend: '03/2019',
    },
  };

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <Header headerTitle="Holiday Summary" />
        <ion-content padding fullscreen>
          <ion-card color="light" padding>
            <ion-item>
              <ion-label>Days Taken:</ion-label>
              <ion-label>{data.daystaken}</ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Days Remaining:</ion-label>
              <ion-label>{data.daysremaining}</ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Year End:</ion-label>
              <ion-label>{data.yearend}</ion-label>
            </ion-item>

            <ion-item padding-top>
              <ion-searchbar animated="true" show-cancel-button debounce="500" />
            </ion-item>
          </ion-card>

          <ion-card>
            <ion-grid>
              <ion-row>
                <ion-col>Start</ion-col>
                <ion-col>End</ion-col>
                <ion-col>Details</ion-col>
              </ion-row>

              <ion-row>
                <ion-col>24/09/2018</ion-col>
                <ion-col>27/09/2018</ion-col>
                <ion-col>Trip to Bournemouth</ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>
        </ion-content>
      </React.Fragment>
    );
  }
}

export default HolidaySummary;
