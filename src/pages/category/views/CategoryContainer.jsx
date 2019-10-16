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
        // console.log(this.props)
        return (
            <div 
                style={{
                    height: '100%',
                    paddingTop: '.2rem'
                }}
            >
                <Switch>
                    <Redirect 
                        from={`${match.path}`}
                        exact
                        to={`${match.path}/car/1`}    
                    ></Redirect>
                    {/* <Route
                        path={`${match.path}`}
                        exact
                    >
                        <Redirect
                            from={`${match.path}`}
                            to={`${match.path}/car`} 
                        >
                        </Redirect>
                    </Route> */}
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