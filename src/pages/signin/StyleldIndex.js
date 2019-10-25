import styled from 'styled-components'

const HeadContent = styled.div `
  width: 100%;
  height: 180px;
  background-size:100% 100%;
`

const RegisterContent = styled.div `
  background : #fff;
  height : 5rem;
  text-align: left;
  input{
    border:none;
  }
  .username,.pwd,.pwds,.select,.ask{
    border-bottom : 1px solid #ddd;
    width : 60%;
    margin:0 auto;
    padding: .2rem 0 .05rem .03rem
  }
  .username {
    padding-top: .5rem;
    display:flex;
    span{
      width:1rem;
    }
    input{
      flex:1;
    } 
  }
  .pwd{
    display:flex;
    span{
      width:1rem;
    }
    input{
      flex:1;
    }
  }
  .pwds{
    display:flex;
    span{
      width:1rem;
    }
    input{
      flex:1;
    }
  }
  .select{

  }
  .ask{

  }
  p{
    width:1.6rem;
    height:.5rem;
    line-height:.5rem;
    border-radius:5px;
    margin:10px auto;
    /* background:#9b9b9b; */
    text-align:center;
    font-size:18px;
    color:#fff;
    margin-top:.6rem;
    cursor: pointer;
  }
`

const SigninContent = styled.div `
background : #fff;
height : 5rem;
text-align: left;
input{
  border:none;
}
.username,.pwd,.pwds,.select,.ask{
  border-bottom : 1px solid #ddd;
  width : 60%;
  margin:0 auto;
  padding: .2rem 0 .05rem .03rem
}
.username {
  padding-top: .5rem;
  display:flex;
  span{
    width:1rem;
  }
  input{
    flex:1;
  } 
}
.pwd{
  display:flex;
  span{
    width:1rem;
  }
  input{
    flex:1;
  }
}
.next{
  width:1.6rem;
  height:.5rem;
  line-height:.5rem;
  border-radius:5px;
  margin:50px auto;
  background:#9b9b9b;
  text-align:center;
  font-size:18px;
  color:#fff;
  margin-top:.6rem;
  cursor: pointer;
}
p{
  width:100%;
  height:.2rem;
  background:#f3f3f3;
}
button{
  border:none;
  background:#fff;
  position:absolute;
  left:50%;
  bottom:20%;
  transform:translate(-50%,-50%)
}
`

export {
  HeadContent,
  RegisterContent,
  SigninContent
}