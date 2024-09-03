import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 14px 20px;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
        padding: 22px 32px;
    }
    @media screen and (min-width: 1280px) {
        margin-left: 280px;
        padding: 28px 40px;
    }
`

export const Title = styled.h2`
    font-weight: 700;
    font-size: 20px;

    @media screen and (min-width: 768px) {
        font-size: 26px;
    }
    @media screen and (min-width: 1280px) {
        font-size: 30px;
    }
`;

export const UserWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 768px) {
        gap: 10px;
    }
    @media screen and (min-width: 1280px) {
        gap: 12px;
    }

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -16px;
    width: 1px;
    height: 100%;
    background-color: var(--border-color);

    @media screen and (min-width: 768px) {
       left: -18px;
    }
    @media screen and (min-width: 1280px) {
        left: -20px;
    }
  
  }
`;

export const Img = styled.img`
    width: 28px;

    @media screen and (min-width: 768px) {
        width: 38px;
    }
    @media screen and (min-width: 1280px) {
        width: 44px;
    }
`;

export const UserName = styled.p`
    font-weight: 700;
    font-size: 12px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
    }
    @media screen and (min-width: 1280px) {
        font-size: 16px;
    }
    
`;

export const UserEmail = styled.p`
    font-weight: 300;
    font-size: 10px;

    @media screen and (min-width: 768px) {
        font-size: 12px;
    }
    @media screen and (min-width: 1280px) {
        font-size: 14px;
    }
`