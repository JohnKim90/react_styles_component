import { ThemeProvider, createGlobalStyle } from "styled-components";
import "./App.css";
import Button, { FancyButton, SubmitButton } from "./Components/Button";
import styled from "styled-components";
import logo from "./logo.svg";
import "./Components/styles.css";
import { AnimatedLogo, DarkButton } from "./Components/Button.styles";

const theme = {
  dark: {
    primary: "#0000",
    text: "#fff",
  },
  light: {
    primary: "#fff",
    text: "#000",
  },
  fontFamily: "Segoe UI",
};

const GlobalStyle = createGlobalStyle`
button{
  font-family:${(props) => props.theme.fontFamily};
}
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button>Styled Button</Button>
      <div>
        <br />
      </div>
      <Button variant="outline">Styled Button</Button>
      <div>
        <br />
      </div>
      <FancyButton>Fancy Button</FancyButton>
      <div>
        <br />
      </div>
      <SubmitButton>Submit</SubmitButton>
      <div>
        <br />
      </div>
      <img src={logo} className="App-logo" alt="logo" />
      <AnimatedLogo src={logo} />
      <div>
        <br />
      </div>
      <DarkButton>Dark Button</DarkButton>
      <div>
        <br />
      </div>
    </ThemeProvider>
  );
}

export default App;
