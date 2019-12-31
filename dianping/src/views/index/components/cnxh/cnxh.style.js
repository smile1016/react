import styled from 'styled-components'
const CnxhContainer = styled.div `
background:#fff;
.cnxhTitle{
    height:0.3rem;
    line-height:0.3rem;
    padding:0 0 0 0.15rem;
    font-size:0.14rem;
    color:#777;
}
.cnxhMain{
    
    .cnxhItem{
        display:flex;
        margin:0 0 0 0.15rem;
        padding:0.11rem 0.1rem 0.11rem 0;
        img{
            width:0.9rem;
            padding:0  0.1rem 0 0;
        }
        .info{
            flex:1;
            h2{
                font-size:0.17rem;
                line-height:0.23rem;
            }
            p{
                font-size:0.13rem;
                line-height:0.27rem;
                color:#777;
            }
            .price{
                display:flex;
                align-items:flex-end;
                span{
                    flex:1;
                    color:#f63;
                    font-size:0.21rem;
                }
                del{
                  flex:3;  
                  color:#777;
                  font-size:0.13rem;
                }
                h5{
                    font-size:0.13rem;
                    color:#777;
                    font-weight:100;
                }
            }
        }
    }
}

`
export {
    CnxhContainer
}