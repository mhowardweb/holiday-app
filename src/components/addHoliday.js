import React from 'react';
import Joi from 'joi-browser';
import Header from './header';
import Form from './common/form';

class AddHoliday extends Form {
  state = {
    data: {
      holname: '',
      holstart: '',
      holend: '',
      daysbooked: 0,
      notes: '',
    },
    errors: {},
  };

  schema = {
    holname: Joi.string()
      .required()
      .min(3)
      .label('Holiday Name'),
    notes: Joi.string()
      .required()
      .min(4)
      .label('Notes'),
  };

  doSubmit = () => {
    const { data } = this.state;
    console.log(data);
  };

  render() {
    return (
      <React.Fragment>
        <Header headerTitle="Add a Holiday" />
        <ion-content padding fullscreen>
          <form onSubmit={this.handleSubmit}>
            <ion-card padding>
              <ion-card-title>New/Edit Holiday</ion-card-title>
              {this.renderInput('holname', 'Hol Name', 'text', 'text')}
              {this.renderDateTime('holstart', 'Holiday Start', 'DD/MM/YYYY', 'DDMMYYYY')}
              {this.renderDateTime('holend', 'Holiday End', 'DD/MM/YYYY', 'DDMMYYYY')}
              {this.renderRange('daysbooked', 'Days Booked', '1', '30', '1', 'primary')}
              {this.renderTextArea('notes', 'Notes')}
              {this.renderButton('Add')}
            </ion-card>
          </form>
        </ion-content>
      </React.Fragment>
    );
  }
}

export default AddHoliday;
