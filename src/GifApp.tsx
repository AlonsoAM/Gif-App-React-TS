import { CustomHeader } from "./shared/components/CustomHeader.tsx";
import { SearchBar } from "./shared/components/SearchBar.tsx";
import { PreviousSearches } from "./gifs/components/PreviousSearches.tsx";
import { GifList } from "./gifs/components/GifList.tsx";
import { useGifs } from "./gifs/hooks/useGifs.tsx";

export const GifApp = () => {
  const { gifs, previousTerms, handleSearch, handleTermClicked } = useGifs();

  return (
    <>
      {/*Header*/}
      <CustomHeader
        title={"Buscador de gifs"}
        description={"Busca tus gifs favoritos"}
      />
      {/*Search*/}
      <SearchBar searchPlaceholder={"Buscar Gif"} onSearch={handleSearch} />
      {/*Búsquedas Previas*/}
      <PreviousSearches
        previousSearches={previousTerms}
        onLabelClicked={handleTermClicked}
      />
      {/*Gifs*/}
      <GifList gifs={gifs} />
    </>
  );
};
