import React from 'react';

const scaleNames = {
  c: 'Цельсия',
  f: 'Фаренгейта',
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = e => {
    //this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    // const temperature = this.props.temperature;
    // const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Введите температуру в {scaleNames[this.props.scale]}:</legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;

//* this.handleChange = this.handleChange.bind(this);
