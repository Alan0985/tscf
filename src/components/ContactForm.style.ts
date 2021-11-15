import styled from 'styled-components';

interface Props
{
    theme: any;
}

export const StyledContactForm = styled.div`
    width: 400px;
    height: 420px;
    background-color: ${ ( { theme }: Props ) => theme.color.white };
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;

    header{
        width: 100%;
        height: 20%;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-bottom: 3px solid ${ ( { theme }: Props ) => theme.color.primary };
    }

    & > div{
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    button{
        margin: 0 20px;
    }

    @media (max-width: ${ ( { theme }: Props ) => theme.vp.sm }) {
        margin: auto 20px;
  }
`