import styled from "styled-components";
import { ButtonStyle } from "../Button/styles";

export const PostForm = styled.form`
    display: grid;
    grid-template-columns: 48px auto;
    width: 100%;
    height: 100%;
    margin-top: 12px;
    background: ${(props) => props.theme.corDeFundo};

    label {
        cursor: pointer;
    }

    > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    video {
        max-width: 100%;
        max-height: 80vh;
    }
    
    textarea {
        width: 100%;
        border: none;
        font-size: 1.2rem;
        padding: 12px;
        outline: none;
        resize: none;
        min-height: 100px;
        height: auto;
        background-color: ${(props) => props.theme.corDeFundo};
    }
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid rgb(239, 243, 244);
        padding-top: 12px;
        width: 100%;

        img {
            width: 16px;
            height: 16px;
        }
        ${ButtonStyle} {
            width: 90px;
        }
    }
`;

export const PreviewImage = styled.img`
    max-width: 100%;
    max-height: 80vh;
`;

export const PostDiv = styled.div`
    background: ${(props) => props.theme.corDeFundo};
    max-width: 700px;
    width: 100%;
    min-height: 200px;
    height: auto;
    border-radius: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    overflow-y: auto;
`;