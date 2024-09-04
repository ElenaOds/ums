import styled, { css } from 'styled-components';

import img_1 from '../../assets/icons/mesh-gradient-1.svg';
import img_2 from '../../assets/icons/mesh-gradient-2.svg';
import img_3 from '../../assets/icons/mesh-gradient-3.svg';
import img_4 from '../../assets/icons/mesh-gradient-4.svg';



export const StatsList = styled.ul`
  display: grid;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
   }
`;

const statItem = css`
  background-size: cover;
  border-radius: 4px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding: 28px;
   }
`;

export const FirstStatItem = styled.li`
   ${statItem}
   background-image: url(${img_1});
`;

export const SecondStatItem = styled.li`
   ${statItem}
   background-image: url(${img_2});
`;

export const ThirdStatItem = styled.li`
   ${statItem}
   background-image: url(${img_3});
`;

export const FourthStatItem = styled.li`
   ${statItem}
   background-image: url(${img_4});
`;

export const StatText = styled.p`
    position: relative;
    font-size: 10px;
    margin-bottom: 16px;
    margin-left: 24px;

   @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 14px;
    margin-bottom: 20px;
   }

   &::before {
        content: '';
        position: absolute;
        width: 16px;
        height: 2px;
        background-color: var( --text-color);     
        top: 50%;
        left: -24px;
    }
`;

export const StatNumber = styled.p`
   font-weight: 600;
   font-size: 40px;

   @media screen and (min-width: 768px) {
    font-size: 50px;
    
  }
  @media screen and (min-width: 1280px) {
    font-size: 60px;

   }
`