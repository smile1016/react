import styled from 'styled-components'
const NavbarContainer = styled.div `

.am-navbar{
    background-color:#ff6633;
    input{
        border-radius:0.15rem;
        border-color:transparent;
        padding:0.05rem 0.6rem 0.05rem 0.05rem;
        font-size:0.13rem;
        color:#b8b8b8
    }
    .am-navbar-right{
        margin:0;
        img{
            width:30px;
            height:30px
        }

    }
}
`
const CarouselContainer = styled.div `
.slider-frame{
    background:#fff;
    .slider-list ul{
    display:flex;
    flex-flow:row wrap;
    padding:0 0.1rem;
    li{
       width:0.7rem;
       height:0.8rem;
       padding:0.13rem 0 0;
       div{
           
        img{
           width:0.44rem;
           height:0.44rem;
           margin:0 0.13rem 0.02rem 0.13rem;
       }
       } 
       span{
           display:block;
           text-align:center;
           color:#333;
           font-size:0.13rem;
       }
    }
}
} 
`


export {
    NavbarContainer,
    CarouselContainer,
}