import styled from 'styled-components'
const GridContainer = styled.div`
ul{
    display:flex;
    width:100%;
    flex-wrap:wrap;
    li{
        display:flex;
        flex-direction:column;
        padding:0.05rem;
        width:25%;
        img{
            width:100%;
        }
        span{

        }
    }
}
`
export default GridContainer