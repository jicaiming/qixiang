import styled from 'styled-components'

const HomeContainer = styled.div`
    margin-top:.2rem;
<<<<<<< HEAD
    display:flex;
    flex-direction:column;
    height:95%;
=======
>>>>>>> guangruixiao
    header{
        height:.44rem;
        width:100%;
        display:flex;
        justify-content:space-between;
        color:#fff;
        background:#37C2BC;
        align-items:center;
        font-size:.16rem; 
        padding:0 .15rem;
        .home_home{
            color:#fff;
        }
        .home_area{
            .city{
                margin-right:.05rem;
            }
<<<<<<< HEAD
            img{
                width:.1rem;
                height:.06rem;
                margin-left:.04rem;
=======
        }  
    }
    section.home_banner{
        padding:.12rem;
        div{
            height:0;
            position:relative;
            padding-bottom:41.59544%;
            border-radius:.1rem;
            img{
                width:100%;
                border-radius:.1rem;
>>>>>>> guangruixiao
            }
        }  
    }
<<<<<<< HEAD
    .home_scroll{
        flex:1;
        overflow: scroll;
        section.home_banner{
            padding:.12rem;
            div{
                border-radius:.1rem;
            }
            img{
                border-radius:.1rem;
            }
        }
        ul.home_list{
=======
    ul.home_list{
        display:flex;
        justify-content:center;
        padding: 0 .25rem;
        margin-bottom:.38rem;
        li{
            flex:1;
            text-align:center;
            img{
                width:.45rem;
                height:.45rem;
            }   
            span{
                display:inline-block;
            }
        }
    }
    section{
        padding: 0 .15rem;  
        .hot_header{
>>>>>>> guangruixiao
            display:flex;
            justify-content:center;
            padding: 0 .25rem;
            margin-bottom:.38rem;
            z-index:9999;
            li{
                flex:1;
                text-align:center;
                img{
                    width:.45rem;
                    height:.45rem;
                }   
                span{
                    display:inline-block;
                }
            }
        }
<<<<<<< HEAD
        section{
            padding: 0 .15rem;  
            .hot_header{
                display:flex;
                justify-content:space-between;
                margin-bottom:.1rem;
                align-items:center;
                div{
                    h4{
                        font-size:.16rem;
                        color:#000;
                        font-weight:500;
                    }
                }
                span{
                    color:#4A4A4A;
                    font-size:.12rem;
                    img{
                        width:.06rem;
                        height:.1rem;
                        margin-left:.07rem;
                    }
                }
            }
            .hot_container{
                display:flex;
                justify-content:space-between;         
                li{
                    width:1.675rem;
                    div{
                        height:0;
                        position:relative;
                        padding-bottom:44.1791%; 
                        border-radius:.1rem;
                        img{
                            width:100%;
                        }                
                    }
=======
        .hot_container{
            display:flex;
            justify-content:space-between;         
            li{
                width:1.675rem;
                div{
                    height:0;
                    position:relative;
                    padding-bottom:44.1791%; 
                    border-radius:.1rem;
                    img{
                        width:100%;
                    }                
>>>>>>> guangruixiao
                }
            }
        }
    }

    .home_classic{
        margin-top:.38rem;
        .classic_container{    
            li{
                width:100%;
                margin-bottom:.15rem;
                div{
                    height:0;
                    position:relative;
                    padding-bottom:31.30435%;
                    border-radius:.1rem;
                    img{
                        width:100%;
                    }                
                }
            }
        }
    }

`

export {
    HomeContainer
}