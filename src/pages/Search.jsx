import { useEffect } from "react";

const Search = ({ routeParams }) => {
    useEffect(() => {
      document.title = `Haz buscado ${routeParams.query}`
    }, [])
    
  return <h1>Has buscado {routeParams.query}</h1>;
};

export default Search;
