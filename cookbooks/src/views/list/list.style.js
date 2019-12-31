import styled from 'styled-components'
import {Border1px} from '../../components/style/border'
const ListContainer = styled.div`
.am-navbar {
 background:#ee7530   
}
`
const ListItemsContainer = styled.div`
ul{
   
}
`
const ItemContainer = Border1px({
    bordercolor:'#dfdfdf',
    borderwidth:'0 0 1px 0',
    Comp:styled.li`
        box-sizing:border-box;
        display:flex;
        padding:0.22rem;
        >div:first-child{
            width:2.6rem;
            img{
                width:2.3rem;
                height:1.5rem;
            }
        }
        >div:last-child{
            flex:1;
            h1{
                font-size:0.35rem;
                font-weight:300;
                line-height:0.2rem;
            }
            p{
                color:#9a9a9a;
                font-size:0.3rem;
                line-height:0.4rem;
                font-weight:300;
            }
        
    }
    `
})
export{
    ListContainer,
    ListItemsContainer,
    ItemContainer
} 