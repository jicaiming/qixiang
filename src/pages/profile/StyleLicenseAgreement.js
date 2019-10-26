import styled from 'styled-components'

const LicenseAgreementContainer = styled.div`
    margin-top:0.2rem;
    background:#fff;
    height: 100%;
    main{
        background:#fff;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:flex-start;
        div{
            margin-top:0.5rem;
            width:2.5rem;
            background:rgba(55,194,188,0.5);     
            border-radius:0.145rem;
            padding:0.22rem 0.3rem;
        }
    } 
`
// :nth-of-type(2){
//     width:2.5rem;
//     height:2.125rem;
//     background:rgba(55,194,188,0.5);
//     border-radius:0.145rem;
//     padding:0.22rem 0.3rem;
//     p{
//         font-size:0.13rem;
//         font-weight:300;
//         color:#4a4a4a;
//         line-height:0.21rem;
//         letter-spacing:0.015rem;
//     }
// }
export{
    LicenseAgreementContainer
}