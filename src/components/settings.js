import React from 'react';
import Joi from 'joi-browser';
import { connect } from 'react-redux';
import Header from './header';
import Form from './common/form';
import * as actions from '../redux/actions/settingsActions';

class Settings extends Form {
  // state = {
  //   settings: {
  //     company: '',
  //     name: '',
  //     daysHol: '',
  //     bankHols: '',
  //     yearStart: '',
  //     yearEnd: '',
  //     mon: false,
  //     tue: false,
  //     wed: false,
  //     thu: false,
  //     fri: false,
  //     sat: false,
  //     sun: false,
  //   },
  //   errors: {},
  // };

  schema = {
    company: Joi.string()
      .required()
      .min(3)
      .label('Company'),
    name: Joi.string()
      .required()
      .min(4)
      .label('Name'),
    daysHol: Joi.string()
      .required()
      .label('Days Hol'),
    bankHols: Joi.string().required(),
    yearStart: Joi.string().required(),
    yearEnd: Joi.string().required(),
    mon: Joi.boolean().required(),
    tue: Joi.boolean().required(),
    wed: Joi.boolean().required(),
    thu: Joi.boolean().required(),
    fri: Joi.boolean().required(),
    sat: Joi.boolean().required(),
    sun: Joi.boolean().required(),
  };

  componentDidMount() {
    // const mySettings = loadSettings();
    // console.log(mySettings);
    // this.setState({ data: mySettings });
    // console.log(this.state);
    // this.setState({ settings: { props } });
  }

  doSubmit = () => {
    const { data } = this.props;
    actions.saveSettings(data);
  };

  render() {
    const {
      company,
      daysHol,
      bankHols,
      name,
      yearStart,
      yearEnd,
      mon,
      tue,
      wed,
      thu,
      fri,
      sat,
      sun,
    } = this.props.data;
    console.log(this.props);
    return (
      <React.Fragment>
        <Header headerTitle="Settings" />
        <ion-content padding fullscreen>
          <form onSubmit={this.handleSubmit}>
            <ion-card padding>
              <ion-card-title>Settings</ion-card-title>
              {this.renderInput('company', 'Company', { company }, 'text', 'text')}
              {this.renderInput('name', 'Name', { name }, 'text', 'text')}

              {this.renderInput('daysHol', 'Days Holiday', { daysHol }, 'text', 'text')}
              {this.renderInput('bankHols', 'Bank Holidays', { bankHols }, 'text', 'text')}
              {/* {this.renderRange('daysHol', 'Days Holiday', '20', '40', '1', 'true', 'secondary')}
              {this.renderRange('bankHols', 'Bank Holidays', '0', '10', '1', 'true', 'success')} */}

              {this.renderInput('yearStart', 'Holiday Year Start', { yearStart }, 'text', 'text')}
              {this.renderInput('yearEnd', 'Holiday Year End', { yearEnd }, 'text', 'text')}

              {/* {this.renderDateTime(
                'yearStart',
                'Holiday Year Start',
                'MM/YYYY',
                'MMMM YYYY',
                '2018',
              )}

              {this.renderDateTime('yearEnd', 'Holiday Year End', 'MM/YYYY', 'MMMM YYYY', '2018')} */}

              {this.renderCheckbox('mon', 'Monday', 'danger', { mon })}
              {this.renderCheckbox('tue', 'Tuesday', 'danger', { tue })}
              {this.renderCheckbox('wed', 'Wednesday', 'danger', { wed })}
              {this.renderCheckbox('thu', 'Thursday', 'danger', { thu })}
              {this.renderCheckbox('fri', 'Friday', 'danger', { fri })}
              {this.renderCheckbox('sat', 'Saturday', 'danger', { sat })}
              {this.renderCheckbox('sun', 'Sunday', 'danger', { sun })}
              {this.renderButton('Save Settings')}
            </ion-card>
          </form>
        </ion-content>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ data: state.settings });

export default connect(
  mapStateToProps,
  actions,
)(Settings);
