import styled from 'styled-components';

export const Section = styled.section`
    padding: 20px;
    background-color: var(--secondary-text-color);
    border-radius: 30px;
    width: 100%;

    @media screen and (min-width: 768px) {
        padding: 32px;
    }
    @media screen and (min-width: 1280px) {
        padding: 40px;
    }
`