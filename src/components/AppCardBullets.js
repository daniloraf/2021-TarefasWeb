import React from 'react';

const AppCardBullets = props => (
    <div>
      <hr />
        <h5>{props.date}</h5>
        <ul>
          {props.bullets.map(bullets => (<li><strong>{bullets.type}</strong>{bullets.title}</li>))};
        </ul>
      <hr />
      </div>
    );

    export default AppCardBullets;