import React from 'react';

/**
 *
 * @param {name, label, error, dFormat, pFormat, min, ...rest} param0
 */

const DateTime = ({
  name, label, error, dFormat, pFormat, min, ...rest
}) => (
  <ion-card-content>
    <ion-item>
      <ion-label>{label}</ion-label>
      <ion-datetime
        {...rest}
        name={name}
        display-format={dFormat}
        min={min}
        picker-format={pFormat}
      />
    </ion-item>
    {error && <ion-label color="danger">{error}</ion-label>}
  </ion-card-content>
);

export default DateTime;
