import styled from 'styled-components';
import { ReactComponent as World} from '../../assets/icons/world.svg';

export const CountriesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F3F4F6;
    border-radius: 4px;
    padding: 16px;

    @media screen and (min-width: 768px) {
        padding: 20px;
    }
`;

export const ItemTitle = styled.h3`
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 20px;

     @media screen and (min-width: 768px) {
        font-size: 18px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 20px;
    }
`;

export const MapWrapper = styled.div`
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
   
    @media screen and (min-width: 768px) {
        flex-direction: row;  
    }
`;

export const Map = styled(World)`
    width: 240px;
    height: 158px;
    align-self: center;

     @media screen and (min-width: 768px) {
        width: 395px;
        height: 260px;
    }
`;

export const CountriesList = styled.ul`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const CoutryItem = styled.li`
    position: relative;
    font-size: 10px;
    margin-left: 16px;

    @media screen and (min-width: 768px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 14px;
   }

   &::before {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #E9D5FF;
        border-radius: 50px;     
        top: 30%;
        left: -16px;
    }
`;