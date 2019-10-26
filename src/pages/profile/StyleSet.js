import styled from 'styled-components'
import border from 'components/border.js'


const SetContainer = styled.div`
    margin-top:0.2rem;
    background:#fff;
    height: 100%;
    main{
        background:#fff;
        height:100%;
        /* div.backdrop{
            height:0.13rem;
            background:#f3f3f3;
        } */
        div.am-list-item{
            height:0.5rem;
            div.am-list-line{
                div.am-list-content{
                    font-size:0.16rem;
                    font-weight:300;
                }
            }
        }
        div.backdrop{
            height:0.13rem;
            background:#f3f3f3;
        }
    } 
`

const SetItem = styled.div`
    padding:0 0.15rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    height:0.5rem;
    p{
        font-size:0.13rem;
        font-weight:300;
        color:#000;
    }
    img{
        width:0.06rem;
        height:0.105rem;
    }
`

const SetItemHaveBorder = border({
    width: '0 0 1px 0',
    style: 'solid',
    color: '#cecece',
    comp: SetItem
})




export {
    SetContainer,
    SetItem,
    SetItemHaveBorder
}