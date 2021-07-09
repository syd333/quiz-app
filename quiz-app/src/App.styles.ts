import styled, {createGlobalStyle} from "styled-components";
// background image
// import BGImage from './images/'

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body {
    margin: 0;
    padding 0 20px;
    display: flex;
    justify-content: center;

* {
    box-sizing: border-box;
    font-family: forma-djr-deck, sans-serif;
}
`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
    // color:
}

.score {
    //color
    font-size: 2rem;
    margin: 0;
}

h1 {
    font-size: 70px;
    text-align: center;
    margin: 20px;
}

.start, .next {
    cursor: pointer;
    background: linear-gradient(184deg, rgba(73,73,198,1) 23%, rgba(83,88,207,1) 25%, rgba(14,144,195,1) 100%);
    border: 2px solid #9e6113;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;


// h1 {
//     font-family: Fascinate Inline;
//     background-image: linear-gradient(180deg, #fff, #87f1ff);
//     font-weight: 400;
//     background-size: 100%;
//     background-clip: text;
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     -moz-background-clip: text;
//     -moz-text-fill-color: transparent;
//     filter: drop-shadow(2px 2px #0085a3);
//     font-size: 70px;
//     text-align: center;
//     margin: 20px;
//   }