
import styled from 'styled-components';

const Border1px = ({ Comp, bordercolor = '#B28969', radius = 0.1 }) => {
  return styled(Comp)`
    position:relative;
    &::before{
      pointer-events:none;
      position:absolute;
      content:"";
      width:100%;
      height:100%;
      border:solid 1px ${bordercolor};

      @media (-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {
        width:150%;
        height:150%;
        border-radius:${radius * 1.5}rem;
        transform:scale(0.75);
      }

      @media (-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2) {
        width:200%;
        height:200%;
        border-radius:${radius * 2}rem;
        transform:scale(0.5);

      }

      @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
        width:300%;
        height:300%;
        border-radius:${radius * 3}rem;
        transform:scale(0.3333);

      }

    }
  `
}


export {
  Border1px
}