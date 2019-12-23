import styled from 'styled-components'
const GridContainer = styled.div`
ul{
    display:flex;
    width:100%;
    flex-wrap:wrap;
    padding-left:0.08rem;
    padding-right:0.08rem;
    li{
        display:flex;
        flex-direction:column;
        padding:0.08rem;
        width:${({column})=>100/column}%;
        justify-content:center;
        align-items:center;
        img{
            width:100%;
        }
        span{
            display:block;
            text-align:center;
            line-height:0.3rem;
        }
    }
}
`
export default GridContainer