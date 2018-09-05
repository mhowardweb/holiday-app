import React from 'react';
import Joi from 'joi-browser';
import Header from './header';
import Form from './common/form';

class Settings extends Form {
  state = {
    data: {
      company: '',
      name: '',
      daysHol: 0,
      bankHols: 0,
      yearStart: '',
      yearEnd: '',
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
    },
    errors: {},
  };

  schema = {
    company: Joi.string()
      .required()
      .min(3)
      .label('Company'),
    name: Joi.string()
      .required()
      .min(4)
      .label('Name'),
  };

  doSubmit = () => {
    const { data } = this.state;
    console.log(data);
  };

  render() {
    return (
      <React.Fragment>
        <Header headerTitle="Settings" />
        <ion-content padding fullscreen>
          <form onSubmit={this.handleSubmit}>
            <ion-card padding>
              <ion-card-title>Settings</ion-card-title>
              {this.renderInput('company', 'Company', 'text', 'text')}
              {this.renderInput('name', 'Name', 'text', 'text')}

              {this.renderRange('daysHol', 'Days Holiday', '20', '40', '1', 'true', 'secondary')}
              {this.renderRange('bankHols', 'Bank Holidays', '0', '10', '1', 'true', 'success')}

              {this.renderDateTime(
                'yearStart',
                'Holiday Year Start',
                'MM/YYYY',
                'MMMM YYYY',
                '2018',
              )}

              {this.renderDateTime('yearEnd', 'Holiday Year End', 'MM/YYYY', 'MMMM YYYY', '2018')}

              {this.renderCheckbox('mon', 'Monday', 'danger')}
              {this.renderCheckbox('tue', 'Tuesday', 'danger')}
              {this.renderCheckbox('wed', 'Wednesday', 'danger')}
              {this.renderCheckbox('thu', 'Thursday', 'danger')}
              {this.renderCheckbox('fri', 'Friday', 'danger')}
              {this.renderCheckbox('sat', 'Saturday', 'danger')}
              {this.renderCheckbox('sun', 'Sunday', 'danger')}
              {this.renderButton('Save Settings')}
            </ion-card>
          </form>
        </ion-content>
      </React.Fragment>
    );
  }
}

export default Settings;
