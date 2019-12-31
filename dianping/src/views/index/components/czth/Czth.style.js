import styled from 'styled-components'
const CzthContainer = styled.div`
background:#fff;
padding:0.07rem 0.06rem 0.1rem;
    .czthTop{
        display:flex;
        line-height:37px;
        h2{
            flex:1;
            color:#ff524b;
        }
        a{
            font-size:12px;
            color:#bbb;
            text-decoration:none;
        }
    }
    .czthMain{
        display:flex;
        div{
            flex:1;
            padding:0 0.04rem;
            img{
                width:1.11rem;
                height:0.84rem;
            }
            p{
                font-size:14px;
                color:#333;
                line-height:18px;
            }
            span{
                color:#f63;
                font-size:20px;
            }
            del{
                color:#999
            }
        }
    }
`
export {CzthContainer}