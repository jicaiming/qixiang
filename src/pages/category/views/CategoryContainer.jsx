import React, { PureComponent } from 'react'
import { 
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import CategoryUI from './CategoryUI'
import connect from './connect'

class Category extends PureComponent {    
    render() {
        // console.log(this.props)
        let { match } = this.props
        // console.log(match)
        // console.log(this.props)
        return (
            <div 
                style={{
                    height: '100%',
                }}
            >
                <Switch>
                    <Redirect
                        from="/index/category/car"
                        exact
                        to="/index/category/car/1"
                    ></Redirect>
                    <Redirect
                        from="/index/category/flower"
                        exact
                        to="/index/category/flower/1"
                    ></Redirect>
                    <Redirect
                        from="/index/category/site"
                        exact
                        to="/index/category/site/1"
                    ></Redirect>
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

export default connect(Category)