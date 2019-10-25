import styled from 'styled-components'

const ClassicDetailsContainer = styled.div`
    margin-top:.2rem;
    display:flex;
    flex-direction:column;
    height:100%;
    div.classic_wrapper{
        flex:1;
        overflow: hidden;
        text-align:center;
        >div.classic_son{
            height: 0;
            position: relative;
            padding-bottom:500%;
            img{
                width:100%;
            }
            button.customer_service{
                background:#37C2BC;
                height:.5rem;
                width:3.34rem;
                border-radius:.1rem;
                border:none;
                color:#fff;
                font-size:.18rem;
            }
        }

    }

`


export {
    ClassicDetailsContainer
}