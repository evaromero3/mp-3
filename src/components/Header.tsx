import { styled } from 'styled-components';

const StyledHeader = styled.header`
    background-color:#7F534B;
    color:white;
    display:flex;
    flex-direction:column;
    padding: 1vh 3vw;

    @media screen and (max-width: 750px) {
    /*align header center*/
        background-color:#7F534B;
        color:white;
        display:flex;
        padding: 1vw 1vh;
        align-items:center;
    }
`;


export default function Header(){
    return(
        <StyledHeader>
            <h1>Eva Romero</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}