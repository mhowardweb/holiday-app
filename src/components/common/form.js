import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Range from './range';
import DateTime from './dateTime';
import Checkbox from './checkbox';
import TextArea from './textArea';
// import Select from './select';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    const { data } = this.state;
    const { error } = Joi.validate(data, this.schema, options);
    console.log('error', error);
    if (!error) return null;

    const errors = {};
    for (const item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Stops form submit causing full page re-load

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} }); // errors must never be null
    if (errors) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    console.log(input);
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value; // bind dynamically
    this.setState({ data, errors });
  };

  renderButton(label, color) {
    return (
      <ion-button type="submit" disabled={this.validate()} color={color}>
        {label}
      </ion-button>
    );
  }

  /**
   *
   * @param {*} name
   * @param {*} label
   * @param {*} options
   */
  // renderSelect(name, label, options) {
  //   const { data, errors } = this.state;
  //   return (
  //     <Select
  //       name={name}
  //       value={data[name]}
  //       label={label}
  //       options={options}
  //       ionChange={this.handleChange}
  //       error={errors[name]}
  //     />
  //   );
  // }

  /**
   *
   * @param {*} name
   * @param {*} label
   * @param {*} type
   * @param {*} inputmode
   */
  renderInput(name, label, type = 'text', inputmode = 'text') {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        inputmode={inputmode}
        name={name}
        value={data[name]}
        label={label}
        onInput={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderRange(name, label, min, max, step, pin, color) {
    const { data, errors } = this.state;
    return (
      <Range
        min={min}
        max={max}
        step={step}
        pin={pin}
        color={color}
        name={name}
        value={data[name]}
        label={label}
        ionBlur={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderDateTime(name, label, dFormat, pFormat, min) {
    const { data, errors } = this.state;
    return (
      <DateTime
        name={name}
        label={label}
        dFormat={dFormat}
        pFormat={pFormat}
        min={min}
        value={data[name]}
        ionChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderCheckbox(name, label, color) {
    const { data, errors } = this.state;
    return (
      <Checkbox
        name={name}
        label={label}
        color={color}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderTextArea(name, label) {
    const { data, errors } = this.state;
    return (
      <TextArea
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
