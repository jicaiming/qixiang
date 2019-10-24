// import React, { Component } from 'react'

// import { RegisterContent } from './StyleldIndex'

// export default class Register extends Component {
//     constructor(props){
//         super(props)

//         this.input = React.createRef();
//         this.handleClick=this.handleClick.bind(this)
//         // this.state = {
//         //     user: '',
//         //     pwd: '',
//         //     repeatpwd:'',
//         //     select:'',
//         //     ask:''
//         // }
//     }
//     render() {
//         return (
//             <RegisterContent>
//                 <form onSubmit={this.handleClick}>
//                 <div className='username'>
//                     <span>用户名</span> <input type="text" placeholder="7位字母或数字组合" ref={this.input}/>
//                 </div>
//                 <div className='pwd'>
//                     <span>密码</span> <input type="text" placeholder="6位字母或数字组合" ref={this.pass}/>
//                 </div>
//                 <div className='pwds'>
//                     <span>确认密码</span> <input type="text" placeholder="" ref={this.input} />
//                 </div>
//                 <div className='select'>
//                     <input type="text" placeholder="选择密保问题" ref={this.input}/>
//                 </div>
//                 <div className='ask'>
//                     <input type="text"placeholder="输入密保的答案" ref={this.input}/>
//                 </div>
//                 <input type="submit" value="Submit" />
//                 {/* <p onClick={this.handleClick}>注册</p> */}
//                 </form>
//             </RegisterContent>
//         )
//     }
//     handleClick(event){
//         alert('A name was submitted: ' + this.input.current.value);
//     event.preventDefault();
//     }
//     handleUser(){
//         console.log(this.refs.uIn.value)
//     }
// }


import React, { Component } from 'react'

import { RegisterContent } from './StyleldIndex'

export default class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            repassword: '',
            question: '',
            request: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        // console.log(value)
        this.setState({
            [name]: value
        });
    }
    render() {
        const bck1 = { background:'#9b9b9b'}
        // const bck2 = { background:'green'}
        return (
            <RegisterContent>
                <div className='username'>
                    <span>用户名</span> <input type="text" name="username" placeholder="7位字母或数字组合" onChange={this.handleInputChange} value={this.state.username}
                    />
                </div>
                <div className='pwd'>
                    <span>密码</span> <input type="text" name="password" placeholder="6位字母或数字组合" value={this.state.password}
                        onChange={this.handleInputChange} />
                </div>
                <div className='pwds'>
                    <span>确认密码</span> <input type="text" name="repassword" placeholder="" value={this.state.repassword}
                        onChange={this.handleInputChange} />
                </div>
                <div className='select'>
                    <input type="text" placeholder="选择密保问题" name="question" ref={this.input} value={this.state.question}
                        onChange={this.handleInputChange} />
                </div>
                <div className='ask'>
                    <input type="text" placeholder="输入密保的答案" name="request" value={this.state.request}
                        onChange={this.handleInputChange} />
                </div>
                {/* <input type="submit" value="Submit" /> */}
                <p onClick={this.handleClick} style={bck1}>注册</p>

            </RegisterContent>
        )
    }
    handleClick() {
        if (this.state.username === "") {
            alert('用户名不能为空')
        } else if (this.state.password === "") {
            alert('密码不能为空')
        } else if (this.state.repassword === "") {
            alert('请确认密码')
        } else if (this.state.question === "") {
            alert('请填写密保问题')
        } else if (this.state.request === "") {
            alert('请输入密码答案')
        } else {
            console.log(this)
 
            let mes = {
                username: this.state.username,
                password: this.state.password,
                question: this.state.question,
                request: this.state.request
            }
            fetch("/api/register", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(mes)
            })
                .then(
                    function (res) { return res.json() }
                ).then((res) => {
                    console.log(res)
                }).catch(function (res) { console.log(res) })
        }
    }

}
