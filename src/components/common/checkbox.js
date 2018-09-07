import React from 'react';

/**
 *
 * @param { name, label, color, data, error} param0
 */

const Checkbox = ({
  name, label, color, data, error, ...rest
}) => (
  <ion-card-content>
    <ion-item>
      <ion-label>{label}</ion-label>
      <ion-checkbox checked={data} {...rest} name={name} color={color} />
    </ion-item>
    {error && <ion-label color="danger">{error}</ion-label>}
  </ion-card-content>
);

export default Checkbox;
