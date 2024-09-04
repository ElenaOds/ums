import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px 20px 30px; 20px;

    @media screen and (min-width: 768px) {
        padding: 22px 32px 40px 32px;
    }

    @media screen and (min-width: 1280px) {
        padding: 32px 40px 60px 32px;
    }
`;

export const ItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-grow: 1;

    @media screen and (min-width: 1280px) {
       flex-direction: row;
    }
`