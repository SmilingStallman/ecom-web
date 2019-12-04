import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [{
        title: 'Mountain',
        image: '/images/menu-item/mountain.webp',
        id: 1
      },
      {
        title: 'Road',
        image: '/images/menu-item/road.webp',
        id: 2
      },
      {
        title: 'Cruiser',
        image: '/images/menu-item/cruiser.webp',
        id: 3
      },
      {
        title: 'Hybrid',
        image: '/images/menu-item/hybrid.webp',
        id: 4
      },
      {
        title: 'Electric',
        image: '/images/menu-item/electric.webp',
        id: 5
      }]
    };
  }

  render(){
    return(
      <div className='directory-menu'>
        {this.state.sections.map(({title, image, id}) => (
            <MenuItem key={id} title={title} image={image} />
          ))}
      </div>
    )
  }

}

export default Directory;
