import styled from 'styled-components';


export const TableContainer = styled.div`
    padding: 14px 20px 30px; 20px;
    background-color: #F3F4F6;

    @media screen and (min-width: 768px) {
        padding: 22px 32px 40px 32px;
    }
    @media screen and (min-width: 1280px) {
        padding: 32px 40px 60px 32px;
    }
`;

export const TaleText = styled.p`
    text-align: center;
    font-size: 10px;

    @media screen and (min-width: 768px) {
        font-size: 12px;
    }
    @media screen and (min-width: 1280px) {
        font-size: 14px;
    }
`
