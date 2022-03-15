import styled from 'styled-components';

export const HeaderArea = styled.div`
    background-color: white;
    height: 60px;
    border-bottom: 1px solid #ccc;

    .container {
        max-width: 1280px;
        margin: auto;
        display: flex;
        height: 100%;
    }

    .logo {
        flex: 1;
        display: flex;
        align-items: center;

        a {
            text-decoration: none;
        }

        .logo1,
        .logo2,
        .logo3 {
            font-size: 27px;
            font-weight: bold;
        }

        .logo1 {color: red;}
        .logo2 {color: green;}
        .logo3 {color: blue;}
    }

    nav {
        padding: 10px 0;
        a{text-decoration: none;}
        display: flex;
        height: 100%;

        ul, li {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        ul {
            display: flex;
            align-items: center;
            height: 40px;
        }

        li {
            margin: 0 20px;

            a, button {
                border: 0;
                background: none;
                cursor: pointer;
                outline: 0;
                color: black;
                font-size: 14px;
                text-decoration: none;
                transition: 0.5s all ease;

                &:hover {
                    filter: brightness(0.9);
                    border-bottom: 1px solid  #ff8100;
                }

                &.button{
                    background-color: #ff8100;
                    color: white;
                    border-radius: 7px;
                    padding: 5px 10px;
                    border: none;
                }
            }
        }
    }
`;
