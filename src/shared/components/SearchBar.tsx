interface SearchBarProps {
  searchPlaceholder?: string;
}

export const SearchBar = ({searchPlaceholder}:SearchBarProps) => {
  return (
    <div className={'search-container'}>
      <input type="text" placeholder={searchPlaceholder ?? 'Buscar'}/>
      <button>Buscar</button>
    </div>
  )
}
