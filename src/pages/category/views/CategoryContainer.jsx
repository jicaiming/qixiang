import React, { PureComponent } from 'react'

import { 
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import CategoryUI from './CategoryUI'

class Category extends PureComponent {
    render() {
        let { match } = this.props
        // console.log(match)
        return (
            <div style={{
                height: '100%',
                position: 'relative',
                paddingTop: '.2rem'
            }}>
                <Switch>
                    <Redirect 
                        from={`${match.path}`}
                        exact
                        to={`${match.path}/car`}    
                    ></Redirect>
                    <Route
                        path={`${match.path}`}
                        component={CategoryUI}
                    >
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default Category