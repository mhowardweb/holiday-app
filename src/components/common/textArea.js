import React from 'react';

/**
 *
 * @param {*} label
 * @param {*} name
 * @param {*} error
 * @param  {...any} rest
 */

const TextArea = ({
  name, label, error, ...rest
}) => (
  <ion-card-content>
    <ion-item>
      <ion-label>{label}</ion-label>
      <ion-textarea {...rest} name={name} />
    </ion-item>
    {error && <ion-label color="danger">{error}</ion-label>}
  </ion-card-content>
);

export default TextArea;
