import type {FC} from "react";

interface PreviousSearchesProps {
  previousSearches: string[];
}


export const PreviousSearches: FC<PreviousSearchesProps> = ({previousSearches}) => {
  return (
    <>
      <div className={'previous-searches'}>
        <h2>Búsquedas Previas</h2>
        <ul className={'previous-searches-list'}>
          {
            previousSearches.map(search => (
              <li key={search}>{search}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
