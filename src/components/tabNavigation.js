import React from 'react';
import HolidaySummary from './holidaySummary';
import Settings from './settings';
import AddHoliday from './addHoliday';

const TabNavigation = () => (
  <React.Fragment>
    <ion-tabs>
      <ion-tab label="Holidays" icon="sunny" name="tab-holidays">
        <HolidaySummary />
      </ion-tab>
      <ion-tab label="Add" icon="add" name="tab-addholiday">
        <AddHoliday />
      </ion-tab>
      <ion-tab label="Settings" icon="settings" name="tab-settings">
        <Settings />
      </ion-tab>
    </ion-tabs>
  </React.Fragment>
);

export default TabNavigation;
