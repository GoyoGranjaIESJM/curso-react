import React from 'react';
import { useFetch } from './hooks/useFetch';
export default function HooksPersonalizados () {
    let url="https://pokeapi.co/api/v2/pokemons/";
    let  {data,ispending,error}=useFetch(url);
    return <>
    <h4>Hooks personalizados</h4>
    <h4>{JSON.stringify(ispending)}</h4>
    <h4>{JSON.stringify(error)}</h4>
    <h4>{JSON.stringify(data)}</h4>
    </>;
}