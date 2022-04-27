import React, { useState, useEffect } from 'react';

function Pokemons({ avatar, name }) {
    return (<figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
    </figure>);
}
export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        let url = "https://pokeapi.co/api/v2/pokemon/";
        const getPokemons= async (url) => {
            let res=await fetch(url);
            let json=await res.json();
            // console.log(json);
            json.results.forEach(async (el)=>{
                let res=await fetch(el.url);
                let json=await res.json();
                // console.log(json);
                let pokemon = {
                    id:json.id,
                    name:json.name,
                    avatar:json.sprites.front_default
                };
                setPokemons(pokemons =>[...pokemons,pokemon]);
            });
        };        
       getPokemons(url);
    }, []);

    // useEffect(() => {
    //     let url = "https://pokeapi.co/api/v2/pokemon/";
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(json => {
    //             json.results.forEach(el => {
    //                 fetch(el.url)
    //                     .then(res => res.json())
    //                     .then(json => {
    //                         let pokemon = {
    //                             id: json.id,
    //                             name: json.name,
    //                             avatar: json.sprites.front_default,
    //                         };
    //                         //setPokemons ([...pokemons, pokemon]);
    //                         setPokemons((pokemons) => [...pokemons, pokemon]);
    //                     });
    //             });
    //         });
    // }, []);

    return <>
        <h4>Peticiones asíncronas en hooks</h4>
        { 
        pokemons.length === 0 ? <h4>Cargando...</h4>
         : pokemons.map(el => <Pokemons key={el.id} name={el.name} avatar={el.avatar} /> )
        }
    </>;
}