import React, { Component } from 'react'

import { ProfileContainer } from './StyleProfile.js'
import userImg from 'images/20150224120123_fUzMf.png'


export default class Profile extends Component {
    render() {
        return (
            <ProfileContainer>
                <div>
                    <div>
                        <img src={userImg} alt="" />
                    </div>

                </div>
            </ProfileContainer>
        )
    }
}
