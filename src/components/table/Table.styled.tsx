import styled from 'styled-components';


export const StyledTable = styled.table`
    table-layout: auto;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 5px;
    margin-bottom: 16px;

    @media screen and (min-width: 768px) {
        border-spacing: 0 8px;
        margin-bottom: 20px;
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 24px;
    }
`;

export const TableHead = styled.th`
    font-weight: 600;
    padding-bottom: 16px;
    text-align: left; 
    font-size: 10px;

    @media screen and (min-width: 768px) {
        font-size: 12px;
        padding-bottom: 18px;
    }
    @media screen and (min-width: 1280px) {
        font-size: 14px;
        padding-bottom: 20px;
    }

    &:first-child {
        padding-left: 10px;

        @media screen and (min-width: 768px) {
        padding-left: 14px;
        }
    
        @media screen and (min-width: 1280px) {
            padding-left: 16px;
        }
    }

    &:last-child {
        padding-right: 10px;

        @media screen and (min-width: 768px) {
        padding-right: 14px;
        }
    
        @media screen and (min-width: 1280px) {
            padding-right: 16px;
        }
    }
`;

export const TableData = styled.td`
    font-size: 8px;
    padding-top: 16px;
    padding-bottom: 16px;
    background-color: var(--bg-color);

    &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        padding-left: 10px;

        @media screen and (min-width: 768px) {
        padding-left: 14px;
        }
    
        @media screen and (min-width: 1280px) {
            padding-left: 16px;
        }
    }

    &:last-child {
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        padding-right: 10px;

        @media screen and (min-width: 768px) {
        padding-right: 14px;
        }
    
        @media screen and (min-width: 1280px) {
            padding-right: 16px;
        }
    }

    @media screen and (min-width: 768px) {
        font-size: 12px;
        padding-top: 18px;
        padding-bottom: 18px;
    }
    
    @media screen and (min-width: 1280px) {
        font-size: 14px;
        padding-top: 20px;
        padding-bottom: 20px;
    }
`