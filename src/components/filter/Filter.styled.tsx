import styled from 'styled-components';
import { ReactComponent as Search} from '../../assets/icons/search.svg';
import { ReactComponent as Cross} from '../../assets/icons/cross.svg';


export const FilterContainer = styled.div`
    padding: 14px 20px;
    background-color: #F3F4F6;
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;

    @media screen and (min-width: 768px) {
        padding: 22px 32px;
        grid-template-columns: 1fr 1fr;
        gap: 18px;
        
    }
    @media screen and (min-width: 1280px) {
        padding: 32px 40px;
        gap: 20px;
    }
`;

export const Label = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;

    @media screen and (min-width: 768px) {
        gap: 8px; 
    }
`;


export const Labeltext = styled.p`
    font-size: 10px;

    @media screen and (min-width: 768px) {
        font-size: 12px;
        
    }
    @media screen and (min-width: 1280px) {
        font-size: 14px;
    }
`;

export const Input = styled.input`
    font-size: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #D1D5DB;
    cursor: pointer;
    outline: none;

    @media screen and (min-width: 768px) {
        font-size: 12px;
        padding: 10px;
        
    }
    @media screen and (min-width: 1280px) {
        font-size: 14px;
        padding: 12px;
    }

    &::placeholder {
    font-size: 10px;
    color: #637381;

    @media screen and (min-width: 768px) {
        font-size: 12px;    
    }

    @media screen and (min-width: 1280px) {
        font-size: 14px;
    }
  }

  &:hover,
  &:focus {
    border: 1px solid var(--hover-color);
}
`;

export const SearchIcon = styled(Search)`
    position: absolute;
    top: 50%;
    right: 10px;
    width: 16px;
    height: 16px;

     @media screen and (min-width: 768px) {
        top: 55%;
        width: 18px;
        height: 18px;   
    }
        
    @media screen and (min-width: 1280px) {
        width: 20px;
        height: 20px;
    }
`;

export const CrossIcon = styled(Cross)`
    width: 18px;
    height: 18px;
    stroke: #637381;



     @media screen and (min-width: 768px) {
        width: 20px;
        height: 20px;   
    }
        
    @media screen and (min-width: 1280px) {
        width: 24px;
        height: 24px;
    }
`

export const Button = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    border: none;
    top: 50%;
    right: 10px;
    width: 18px;
    height: 18px;
    padding: 0;

    @media screen and (min-width: 768px) {
        width: 20px;
        height: 20px;   
    }
        
    @media screen and (min-width: 1280px) {
        top: 52%;
        width: 24px;
        height: 24px;
    }


    &:hover > ${CrossIcon},
    &:focus > ${CrossIcon} {
      stroke: var(--hover-color);
    }


`

