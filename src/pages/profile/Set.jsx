import React, { Component } from 'react'

import Header from 'components/profile/Header'
import {SetContainer} from './StyleSet'


export default class Set extends Component {
    render() {
        return (
            <SetContainer>
                <Header msg="设置"></Header>
                <main>
                    
                </main>
            </SetContainer>
        )
    }
}
