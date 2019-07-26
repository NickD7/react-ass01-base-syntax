import React from 'react';

const userInput = (props) => {

    const style = {
        backgroundColor: 'white',
        margin: '16px',
        font: 'inherit',
        border: '2px solid green',
        padding: '6px',
        textAlign: 'center'
    };

    return (
      <div>
        <input type='text' style={style} onChange={ props.change } value={props.username}></input>
      </div>
    );
}

export default userInput;
