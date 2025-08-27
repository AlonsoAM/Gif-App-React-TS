import type {FC} from "react";

interface PreviousSearchesProps {
  previousSearches: string[];
  onLabelClicked: (term: string) => void
}


export const PreviousSearches: FC<PreviousSearchesProps> = ({previousSearches, onLabelClicked}) => {
  return (
    <>
      <div className={'previous-searches'}>
        <h2>Búsquedas Previas</h2>
        <ul className={'previous-searches-list'}>
          {
            previousSearches.map(search => (
              <li key={search} onClick={() => onLabelClicked(search)}>{search}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
