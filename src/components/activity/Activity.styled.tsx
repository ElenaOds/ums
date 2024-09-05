import styled, { css } from 'styled-components';

export const ActivityWrapper = styled.div`
    flex-grow: 1; 
    background-color: #F3F4F6;
    border-radius: 4px;
    padding: 16px;

    @media screen and (min-width: 768px) {
        padding: 20px;
    }
`;

export const ActivityItemTitle = styled.h3`
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

export const ActivityTable = styled.table`
    table-layout: auto;
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 5px;

    & > tbody > tr:nth-of-type(even) {
    background-color: #fff;
    }
`;

const tableHead = css`
    padding: 6px 20px;
    text-align: left; 
    font-size: 10px;

    @media screen and (min-width: 768px) {
        font-size: 12px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 14px;
    }
`;

export const UserHead = styled.th`
    ${tableHead}
    background-color: var(--text-color);
    color: var( --secondary-text-color);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
`;

export const NameHead = styled.th`
    ${tableHead}
    background-color: #E9D5FF;
`;

export const PercentHead = styled.th`
    ${tableHead}
    background-color: #D9F99D;
`;

export const TableData = styled.td`
    padding: 6px 20px;
    text-align: left; 
    font-size: 8px;

    @media screen and (min-width: 768px) {
        font-size: 10px;
    }

    @media screen and (min-width: 1280px) {
        font-size: 14px;
    }
`