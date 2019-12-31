import styled from 'styled-components'
const RbContainer = styled.div`
background:#fff;
display:flex;
a{
    flex:1;
    display:flex;
    height:0.75rem;
    padding:0 0 0 0.15rem;
    text-decoration: none;
    .left{
        margin:auto 0;
        h2{
            line-height:20px;
            color:#ff7658;
        }
        p{
            font-size:12px;
            line-height:16px;
            color:#999;
        }
    }
    .right{     
        margin:0 auto;
        img{
            display:block;
            height:0.53rem;
            width:0.53rem;
            margin:0.11rem 0;
        }
    }
    
}
`
export {RbContainer}