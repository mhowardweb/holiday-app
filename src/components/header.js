import React from 'react';

const Header = ({ headerTitle }) => (
  <ion-header>
    <ion-toolbar color="tertiary">
      <ion-title>{headerTitle || 'headerTitle'}</ion-title>
    </ion-toolbar>
  </ion-header>
);

export default Header;
