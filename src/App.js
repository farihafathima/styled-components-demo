import logo from './logo.svg';
import './App.css';
import {ThemeProvider,createGlobalStyle} from 'styled-components';
import { AnimatedLogo, FancyButton, StyledButton, SubmitButton,DarkButton } from './components/Button/Button';
const theme={
  dark:{
    primary:'#000',
    text:'#fff'
  },
  light:{
    primary:'#fff',
    text:'#000'


  },
  fontFamily:'Sego UI'
}
const GlobalStyle=createGlobalStyle`
button{
  font-family:${props=>props.theme.fontFamily};
}
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
   <div className='App'>
      <AnimatedLogo src={logo}/>
      <div>
        <StyledButton type='submit' >Styled Button</StyledButton>
      </div>
      <br />
      <div>
        <StyledButton variant='outline'>Styled Button</StyledButton>
      </div>
      <br/>
      <div>
        <FancyButton>FancyButton</FancyButton>
      </div>
      <br/>
      <div>
        <SubmitButton>Submit Button</SubmitButton>
      </div>
      <div>
        <DarkButton>DarkButton</DarkButton>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;

