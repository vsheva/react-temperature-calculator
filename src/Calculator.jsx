import React from 'react';
import BoilingVerdict from './BoilingVerdict.jsx';
import TemperatureInput from './TemperatureInput.jsx';

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    //*
    this.state = {
      temperature: '',
      scale: 'c',
    };
  }

  handleCelsiusChange = temperature => {
    this.setState({
      temperature: temperature,
      scale: 'c',
    });
  };

  handleFahrenheitChange = temperature => {
    this.setState({
      scale: 'f',
      temperature: temperature,
    });
  };

  render() {
    // const temperature = this.state.temperature;
    // const scale = this.state.scale;
    const celsius =
      this.state.scale === 'f'
        ? tryConvert(this.state.temperature, toCelsius)
        : this.state.temperature;

    const fahrenheit =
      this.state.scale === 'c'
        ? tryConvert(this.state.temperature, toFahrenheit)
        : this.state.temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator;

//*
// this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
// this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
