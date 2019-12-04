import React from 'react';

import './menu-item.styles.scss';

const styles = {
  MenuItem: {backgroundSize: 'cover',
             backgroundRepeat: 'no-repeat'}
};

const MenuItem = ({ title, image }) => (
  <div className="menu-item" style={{...styles.MenuItem, backgroundImage: `url(${window.location.origin + image})`}}>
    <div className="content">
      <h1 className="title">{ title }</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
