import styled from 'styled-components'

const EnterpriseContainer = styled.div`
    margin-top:0.2rem;
    background:#fff;
    height: 100%;
    main{
        background:#fff;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        div:nth-of-type(1){
            width:1.02rem;
            height:1.02rem;
            margin:0.63rem 0.15rem 0.15rem;
            img{
                width:100%;
            }
        }
        >p{
            margin:0.06rem 0;
            height:0.24rem;
            line-height:0.24rem;
            font-size:0.17rem;
            font-weight:300;
            color:#4a4a4a;
        }
        div:nth-of-type(2){
            width:2.5rem;
            height:2.125rem;
            background:rgba(55,194,188,0.5);
            border-radius:0.145rem;
            padding:0.22rem 0.3rem;
            p{
                font-size:0.13rem;
                font-weight:300;
                color:#4a4a4a;
                line-height:0.21rem;
                letter-spacing:0.015rem;
            }
        }
    } 
`

export{
    EnterpriseContainer
}