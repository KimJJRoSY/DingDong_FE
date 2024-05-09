import styled from "styled-components";

function MyPageClubItems() {
    return (
        <>
            <Wrapper>
                <ItemBox>
                    <RegisterInfo>내가 가입한 동아리</RegisterInfo>
                </ItemBox>
                <ClubBtnBox>
                    <ClubBtn>멋쟁이사자처럼</ClubBtn>
                    <ClubBtn>축구</ClubBtn>
                    <ClubBtn>배구</ClubBtn>
                </ClubBtnBox>
                <LogoutBtnBox>
                    <LogoutBtn>로그아웃</LogoutBtn>
                </LogoutBtnBox>
            </Wrapper>
            
        </>

    );
}

export default MyPageClubItems;


const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    justify-content: center;
    
`;
const ItemBox = styled.div`
    color: ${({theme})=> theme.colors.darkGray};
`;
const RegisterInfo = styled.div`
    font-size: 20px;
`
const ClubBtnBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const ClubBtn = styled.button`
    font-size: 18px;
    margin-top:20px;
    font-weight: bold;
    width: 320px;
    height: 56px;
    border-radius: 20px;
    color: ${({theme})=> theme.colors.darkGray};
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    text-align: left;
    padding-left: 16px;
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;
const LogoutBtnBox = styled.div`
    display: flex;
    justify-content: center;
`;
const LogoutBtn = styled.button`
    margin: 25px ;
    color: ${({theme})=> theme.colors.darkGray};
    font-size: 20px;
    width: 220px;
    height: 51px;
    border-radius: 20px;
    background: ${({theme})=>theme.backgroundColor.mainColorDark};;
`;
