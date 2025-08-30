import { useRef, useState } from "react";
import { getGifByQuery } from "../actions/get-gif-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }
    const gifs = await getGifByQuery(term);
    setGifs(gifs);
  };

  const handleSearch = async (query: string) => {
    // Validar que el query no esté vacío
    if (!query || query.trim() === "") return;

    // Convertir el query a minúsculas y eliminar espacios en blanco
    const normalizedQuery = query.toLowerCase().trim();

    // Evitar búsquedas duplicadas verificando si el término ya existe en previousTerms
    if (previousTerms.includes(normalizedQuery)) return;

    // Actualizar previousTerms agregando el nuevo término al inicio y limitando a 8 elementos máximo
    setPreviousTerms((prevTerms) => {
      const newTerms = [normalizedQuery, ...prevTerms];
      return newTerms.slice(0, 8);
    });

    const gifs = await getGifByQuery(query);
    setGifs(gifs);

    gifsCache.current[normalizedQuery] = gifs;
  };
  return {
    gifs,
    previousTerms,
    handleSearch,
    handleTermClicked,
  };
};
