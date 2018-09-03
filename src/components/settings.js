import React from 'react';
import Header from './header';

const Settings = () => (
  <React.Fragment>
    <Header headerTitle="Settings" />
    <ion-content padding fullscreen>
      <ion-card padding>
        <ion-card-title>Settings</ion-card-title>
        <ion-item>
          <ion-label>Company</ion-label>
          <ion-input required type="text" placeholder="company name" />
        </ion-item>
        <ion-text color="danger">
          <h6>You need to enter a Company Name</h6>
        </ion-text>

        <ion-item>
          <ion-label>Name</ion-label>
          <ion-input required type="text" placeholder="your name" />
        </ion-item>
        <ion-text color="danger">
          <h6>You need to enter your Name</h6>
        </ion-text>

        <ion-item>
          <ion-label>Days Holiday</ion-label>
          <ion-range min="20" max="40" step="1" pin="true" color="secondary" />
        </ion-item>
        <ion-text color="danger">
          <h6>You need to enter the number of days holiday</h6>
        </ion-text>

        <ion-item>
          <ion-label>Bank Holidays</ion-label>

          <ion-range min="0" max="10" step="1" pin="true" color="success" />
        </ion-item>
        <ion-text color="danger">
          <h6>You need to enter the number of days holiday</h6>
        </ion-text>

        <ion-item>
          <ion-label>Holiday Year Start</ion-label>

          <ion-datetime display-format="MM/YYYY" min="2018" picker-format="MMMM YYYY" />
        </ion-item>
        <ion-text color="danger">
          <h6>You need to enter the start</h6>
        </ion-text>

        <ion-item>
          <ion-label>Holiday Year End</ion-label>
          <ion-datetime display-format="MM/YYYY" max="2025" picker-format="MMMM YYYY" />
        </ion-item>
        <ion-text color="danger">
          <h6>You need to enter the end</h6>
        </ion-text>

        <ion-item>
          <ion-label>Work Days</ion-label>
          <ion-grid>
            <ion-row>
              <ion-col padding-start>M</ion-col>
              <ion-col>T</ion-col>
              <ion-col>W</ion-col>
              <ion-col>T</ion-col>
              <ion-col>F</ion-col>
              <ion-col>S</ion-col>
              <ion-col>S</ion-col>
            </ion-row>

            <ion-row>
              <ion-col>
                <ion-checkbox color="danger" />
              </ion-col>
              <ion-col>
                <ion-checkbox color="danger" />
              </ion-col>
              <ion-col>
                <ion-checkbox color="danger" />
              </ion-col>
              <ion-col>
                <ion-checkbox color="danger" />
              </ion-col>
              <ion-col>
                <ion-checkbox color="danger" />
              </ion-col>
              <ion-col>
                <ion-checkbox color="danger" />
              </ion-col>
              <ion-col>
                <ion-checkbox color="danger" />
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
        <ion-text color="danger">
          <h6>You need to select your work days</h6>
        </ion-text>

        <ion-item>
          <ion-button size="default">Save Settings</ion-button>
        </ion-item>
      </ion-card>
    </ion-content>
  </React.Fragment>
);

export default Settings;
