import {mockGifs} from "./mock-data/gifs.mock.ts";
import {CustomHeader} from "./shared/components/CustomHeader.tsx";
import {SearchBar} from "./shared/components/SearchBar.tsx";
import {PreviousSearches} from "./gifs/components/PreviousSearches.tsx";
import {GifList} from "./gifs/components/GifList.tsx";

export const GifApp = () => {
  return (
    <>
      {/*Header*/}
        <CustomHeader title={'Buscador de gifs'} description={'Busca tus gifs favoritos'}/>
      {/*Search*/}
        <SearchBar searchPlaceholder={'Buscar Gif'}/>
      {/*Búsquedas Previas*/}
        <PreviousSearches previousSearches={['Superman', 'Funny Cat', 'Happy BDay']}/>
        {/*Gifs*/}
        <GifList gifs={mockGifs}/>
    </>
  )
}
