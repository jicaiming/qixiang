import React, { PureComponent } from 'react'

import CategoryUI from './CategoryUI'

class Category extends PureComponent {
    
    render() {
        return (
            <div style={{
                height:'100%', 
                position:'relative',
                paddingTop: '.2rem'
            }}>
                <CategoryUI></CategoryUI>
            </div>
        )
    }
}

export default Category