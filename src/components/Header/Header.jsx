import { Menu, Search, User } from "react-feather";
import styled from "styled-components"
import { QUERIES } from "../../utils/constants";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Button from "../Button";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
    return (
        <Wrapper>
            <SupperHeader>
                <Row>
                    <button>
                        <VisuallyHidden>a search bar icon , click to search for something</VisuallyHidden>
                        <Search size={24} />
                    </button>
                    <button>
                        <VisuallyHidden>a menu icon , click to show the menu</VisuallyHidden>
                        <Menu size={24} />
                    </button>
                    <button>
                        <VisuallyHidden>a user icon, click to see your profile</VisuallyHidden>
                        <User size={24} />
                    </button>
                </Row>
            </SupperHeader>
            <MainHeader>
                <Actions>
                    <button>
                        <VisuallyHidden>a search bar icon , click to search for something</VisuallyHidden>
                        <Search size={24} />
                    </button>
                    <button>
                        <VisuallyHidden>a menu icon , click to show the menu</VisuallyHidden>
                        <Menu size={24} />
                    </button>
                </Actions>
                <Logo />
                <LeftAction>
                    <SubscribeButton>subscribe</SubscribeButton>
                </LeftAction>
            </MainHeader>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media ${QUERIES.tabletAndUp}{
        gap: 48px;
    }
    
`;
const SupperHeader = styled.div`
    background-color: var(--color-gray-900);
    color: var(--color-white);
    @media ${QUERIES.laptopAndUp} {
        display: none;
    }
    `;
const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: center;
    gap: 24px;

    & > button:last-of-type {
        margin-left: auto;
    }

`;



const Actions = styled.div`
    display: none;
    gap: 24px;
    align-items: center;
    @media ${QUERIES.laptopAndUp} {
        display: flex;
    }
`;
const MainHeader = styled(MaxWidthWrapper)`
    display: block;
    @media ${QUERIES.laptopAndUp}{
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
    }
`;
const LeftAction = styled.div`
    display: none;
    @media ${QUERIES.laptopAndUp} {
        display: revert;
        
    }

`;
const SubscribeButton = styled(Button)`
    background-color: var(--color-primary);
    color: var(--color-white);
    margin-left: auto;
   
`;

export default Header