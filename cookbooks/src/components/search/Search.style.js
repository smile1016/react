import styled from 'styled-components'
import search from 'assets/images/search.png'
// import search from '../../assets/images/search.png'
const SearchContainer = styled.div`
    height:1.3rem;
    background:${({bgcolor})=>bgcolor};
    padding:0.3rem;
    box-sizing:border-box;
`
const InputContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;

border-radius:0.1rem;
height:0.8rem;
background:white;
i{
    display:block;
    background:url(${search});
    background-size:cover;
    width:0.29rem;
    height:0.29rem
}
input{
    width:4rem;
    outline:none;
    border:none;
}
`
const borderContainer = styled(InputContainer)
`
border:1px solid #b28969;
border-radius:0.1rem;
`
export {borderContainer,SearchContainer,InputContainer}