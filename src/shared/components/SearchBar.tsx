import {type KeyboardEvent, useEffect, useState} from "react";

interface SearchBarProps {
  searchPlaceholder?: string;
  onSearch: (query: string) => void;
}

export const SearchBar = ({searchPlaceholder, onSearch}:SearchBarProps) => {

  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query)
    }, 700)

    return () => {
      clearTimeout(timer)
    }
  }, [query, onSearch])

  const handleSearch = () => {
    onSearch(query);
    setQuery('');
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className={'search-container'}>
      <input type="text"
             value={query}
             onChange={e => setQuery(e.target.value)}
             onKeyDown={handleKeyDown}
             placeholder={searchPlaceholder ?? 'Buscar'}/>
      <button onClick={handleSearch}>Buscar</button>
    </div>
  )
}
