import React from 'react';
/**
 *
 * @param {name, label, error, type, inputmode, value, onInput} param0
 */

const Input = ({
  name, label, error, data, ...rest
}) => (
  <ion-card-content>
    <ion-item>
      <ion-label>{label}</ion-label>
      <ion-input value={data} {...rest} name={name} />
    </ion-item>
    {error && <ion-label color="danger">{error}</ion-label>}
  </ion-card-content>
);

export default Input;
