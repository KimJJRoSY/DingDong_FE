import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {HeaderLogo} from "../../components/Icons/logos";

function PageHeader() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>
            <Wrap>
                <LogoBox>
                    <Link to={'/main'}>
                        <HeaderLogo/>
                    </Link>
                </LogoBox>
                <ItemBox>
                    <StyledLink to={'#동아리구경주소'} selected={currentPath === '#동아리구경주소'}>동아리 구경</StyledLink>
                    <StyledLink to={'#동아리등록주소'} selected={currentPath === '#동아리등록주소'}>동아리 등록</StyledLink>
                    <StyledLink to={'/mypage'} selected={currentPath === '/mypage'}>마이페이지</StyledLink>
                </ItemBox>
            </Wrap>
            
        </>

    );
}

export default PageHeader;



const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    height:180px;
    position: fixed;
    top: 0px;
    width:100%;
    z-index: 999;
    border-radius: 0px 0px 20px 20px;
    background: ${({theme}) => theme.backgroundColor.mainColor};
    @media (min-width: 600px) {
        width: 600px;
        left: relative;
    }
`;


const ItemBox =styled.div`
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-evenly;
    color: ${({ theme }) => theme.colors.darkGray};
`;

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

const StyledLink = styled(Link)`
    font-size: 16px;
    font-weight: ${({ selected }) => selected ? 'bold' : 'normal'};
`;
