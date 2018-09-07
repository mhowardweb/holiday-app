import React, { Component } from 'react';
import Header from './header';
import { saveHolidays, loadHolidays } from '../services/storeApi';

class HolidaySummary extends Component {
  state = {
    data: {
      daystaken: 5,
      daysremaining: 10,
      yearEnd: '03/2020',
    },
    hols: {
      start: '06/09/2018',
      end: '10/09/2018',
      details: 'hols1',
    },
  };

  componentDidMount() {
    const myData = this.state;
    // this.hydrateStateWithLocalStorage(myData);
    // saveStateToLocalStorage();
    const hols = loadHolidays();
    console.log(hols);
  }

  hydrateStateWithLocalStorage = (data) => {
    for (const key in data) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          return this.setState({ [key]: value });
        } catch (e) {
          return this.setState({ [key]: value });
        }
      }
    }
  };

  render() {
    const { data, hols } = this.state;
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
              <ion-label>{data.yearEnd}</ion-label>
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
                <ion-col>{hols.start}</ion-col>
                <ion-col>{hols.end}</ion-col>
                <ion-col>{hols.details}</ion-col>
              </ion-row>
            </ion-grid>
          </ion-card>
        </ion-content>
      </React.Fragment>
    );
  }
}

export default HolidaySummary;
