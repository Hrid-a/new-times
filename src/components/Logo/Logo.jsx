import styled from "styled-components"

const Logo = () => {
    return (
        <Wrapper>
            <Title>
                new grid times
            </Title>
            <Date>saturday, february 5th, 2024</Date>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    place-content: center;
`;

const Title = styled.h1`
    font-family: var(--font-family-logo);
    text-transform: capitalize;
    font-size: ${48 / 16}rem;
    font-weight: var(--font-weight-medium);
    color: var(--color-offblack);
    `;
const Date = styled.span`
    text-transform: capitalize;
    font-size: ${18 / 16}rem;
    font-weight: var(--font-weight-normal);
    text-align: center;
    color: var(--color-gray-900);
`;

export default Logo
