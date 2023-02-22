import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import MoonIcon from "./components/icons/MoonIcon";
import SunIcon from "./components/icons/SunIcon";
import Switch from "./components/Switch";

const StyledApp = styled.div`
  minheight: 100vh;
  textalign: center;
  paddingtop: 10rem;
  backgroundcolor: ${(props) => props.theme.body};;
`;

const Name = styled.h1`
  marin: 1rem;
  color: ${(props) => props.theme.title};
`;

const Info = styled.p`
  margin: 1rem;
  color : ${(props) => props.theme.subtitle};
`;

const darktheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
};

const lighttheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
};

function App() {

  const [theme , setTheme] = useState("light");
  const isDarkTheme = theme ==="dark";

  const toogleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark")
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darktheme :lighttheme}>
      <StyledApp>
        <SunIcon />
        <Switch toggleTheme={toogleTheme} isDarkTheme={isDarkTheme}/>
        <MoonIcon />
        <Name >Md Faiyazuddin Siddique</Name>
        <Info>Email: faiyazsiddique9@gmail.com.com</Info>
        <Info>I am a Software Developer</Info>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
