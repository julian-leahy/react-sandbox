import React from 'react';
import MenuItems from './menu-items/menu-items.component';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'hats.png',
                    id: 1,
                },
                {
                    title: 'jackets',
                    imageUrl: 'jackets.png',
                    id: 2,
                }
            ]
        }
    }

    render() {
        return (<div>
            {this.state.sections.map(s => <MenuItems key={s.id} title={s.title} path={s.imageUrl} />)}
        </div>)
    }
}

export default Menu;