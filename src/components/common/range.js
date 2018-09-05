import React from 'react';
/**
 *
 * @param {name, label, error, min, max, step, pin, color} param0
 */
const Range = ({
  name, label, error, min, max, step, pin, color, value, ...rest
}) => (
  <ion-card-content>
    <ion-item>
      <ion-label>{`${label}   ${value}`}</ion-label>
      <ion-range {...rest} name={name} min={min} max={max} step={step} pin={pin} color={color} />
    </ion-item>
    {error && <ion-label color="danger">{error}</ion-label>}
  </ion-card-content>
);

export default Range;
