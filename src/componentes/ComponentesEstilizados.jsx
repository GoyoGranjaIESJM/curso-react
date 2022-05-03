import styled, {css} from "styled-components"

export default function ComponentesEstilizados () {
    const mainColor= "#db7090",
     mainAlphaColor89="#db709080"
    const setTransitionTime=(time)=> `all ${time} ease-in`;
    const MyH3=styled.h3`
        padding:2rem;
        text-align:center;
        color: ${props=>props.color};
        background-color:${mainColor};
        transition:${setTransitionTime("1s")};        
        ${(props)=>props.isButton && css`margin:auto; border-radius:0.25rem; cursor:pointer;`};
        &:hover{
            background-color:${mainAlphaColor89};
        };
       
    `;
    return (
    <>
     <h2>Styled-components</h2>
     <MyH3>Hola soy un h3 estilizado</MyH3>
     <MyH3 color="#61dafd">Hola soy un h3 estilizado</MyH3>
     <MyH3 isButton>Soy un boton</MyH3>
    </>
    )
}