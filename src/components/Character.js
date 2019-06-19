import React from 'react';

const Character = props => {
  return (
    <div className="planet character-card">
      {props.character.name}
      <div className="gravity">
        <div className="satellite" />
      </div>
    </div>
  );
};

export default Character;
