import React from 'react';
/**
 *
 * @param {name, label, error, type, inputmode, value, onInput} param0
 */

const Input = ({
  name, label, error, ...rest
}) => (
  <ion-card-content>
    <ion-item>
      <ion-label>{label}</ion-label>
      <ion-input {...rest} name={name} />
    </ion-item>
    {error && <ion-label color="danger">{error}</ion-label>}
  </ion-card-content>
);

export default Input;
