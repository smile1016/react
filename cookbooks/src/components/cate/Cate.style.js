import styled from 'styled-components'
import {Border1px} from 'components/style/border'

const Container = styled.div`
    display:flex;
    height:100%;
    >div:first-child{
    width:1.84rem;
    background:#e2e2e2;
    ul{
        li{
            line-height:0.95rem;
            text-align:center;
            color:#424242;
        }
        li.active{
            color:#d9772c;
            background:white;
            position: relative;
            &::before{
                position:absolute;
                height:2px;
                content:'';
                left:0.6rem;
                right:0.6rem;
                bottom:0;
                background:#d9772c
            }
        }
        
    }
}
        >div:last-child{
            flex:1;
            overflow-y:auto;
            ul{
                display:flex;
                flex-wrap:wrap;
                li{
                    color:#a1a1a1;
                    text-align:center;
                    line-height:1.2rem;
                    width:33.333%
                }
            }
        }
`

const CateContainer= Border1px({
    Comp:Container,
    borderwidth:'1px  0 0 '
})
export {CateContainer}