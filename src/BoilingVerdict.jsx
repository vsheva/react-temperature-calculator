import React from 'react';

const BoilingVerdict = props => {
  if (props.celsius >= 100) {
    return <p>The water would boil / Вода закипит.</p>;
  }
  return <p>The water would not boil / Вода не закипит.</p>;
};

export default BoilingVerdict;
