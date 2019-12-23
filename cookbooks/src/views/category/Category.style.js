import styled from 'styled-components';

const HeaderTab = styled.div`
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  ul {
    border:solid 1px white;
    border-radius:0.3rem;
    width:2.84rem;
    height:0.6rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    li {
        flex:1;
        width:1.42rem;
        /* position:absolute; */
        z-index:2;
    }
    .active{
      color:#C28558;
    }

    &::before {
      position:absolute;
      z-index:1;
      left:0;
      top:0;
      content:" ";
      width:1.42rem;
      height:0.6rem;
      background:white;
      border-radius:0.3rem;
      transition: all 0.3s;
    }

    &.left::before{
      transform:translate(0,0)
    }

    &.right::before{
      transform:translate(100%,0)
    }

  }
`

export {
  HeaderTab
}