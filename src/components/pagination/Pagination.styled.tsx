import styled from 'styled-components';

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

     @media screen and (min-width: 768px) {
        gap: 12px;
        justify-content: end;
    }

    @media screen and (min-width: 1280px) {
        gap: 16px;  
    }
`

export const PageBtn = styled.button`
    display: inline-block;
    font-size: 10px;
    background-color: var(--pagination-color);
    color: var(--secondary-text-color);
    outline: none;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 20px;   

    &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
    }

     @media screen and (min-width: 768px) {
        font-size: 12px;
        width: 70px;
        height: 26px;  
    }

    @media screen and (min-width: 1280px) {
        font-size: 14px;  
        width: 80px;
        height: 30px; 
    }
`

export const PageNumBtn = styled.button`
    display: inline-block;
    font-size: 10px;
    color: var(--secondary-text-color);
    outline: none;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    width: 22px;
    height: 20px;
  
    @media screen and (min-width: 768px) {
        font-size: 12px;
        width: 26px;
        height: 26px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 14px;  
        width: 30px;
        height: 30px;  
    }
    

`