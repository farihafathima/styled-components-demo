import styled  from 'styled-components'
import { keyframes } from 'styled-components'


export const StyledButton=styled.button `
border:2px solid #4caf50;
background-color:${props=>props.variant===`outline`?`white`:":#4acf50"};
color:${props=>props.variant==='outline'?`green`:`white`};
padding:15px 32px;
text-align:center;
text-decoration:none;
display:flex;
font-size:16px;
transition:0ms.5s all ease-out;
&:hover{
    background-color:${props=>props.variant!==`outline`?`white`:":#4acf50"};
    color:${props=>props.variant!=='outline'?`#4acf50`:`#fff`};
}
`

export const FancyButton=styled(StyledButton)`
background-image: linear-gradient(to right, #f6d366 0%, #fda085);`


export const SubmitButton=styled(StyledButton).attrs({
    type:'submit'
})`
box-shadow:0 9px #999;
&active{
    background-color:${props=>props.variant!=='outline'?'white':'#4acf50'}
}
`
const rotate=keyframes`
from{
    transform:rotate(0deg);
}
to{
    transform:rotate(360deg);
}

`
export const AnimatedLogo=styled.img`
height:40vmin;
pointer-events:none;
animation:${rotate} infinite 20s linear;

`
export const DarkButton=styled(StyledButton)`

border:2px solid ${props=>props.theme.dark.primary};
background-color:${props=>props.theme.dark.primary};
color:${props=>props.theme.dark.text};

`