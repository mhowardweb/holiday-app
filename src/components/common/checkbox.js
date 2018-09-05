import React from 'react';

/**
 *
 * @param { name, label, color, error} param0
 */

const Checkbox = ({
  name, label, color, error, ...rest
}) => (
  <ion-card-content>
    <ion-item>
      <ion-label>{label}</ion-label>
      <ion-checkbox {...rest} name={name} color={color} />
    </ion-item>
    {error && <ion-label color="danger">{error}</ion-label>}
  </ion-card-content>
);

export default Checkbox;
