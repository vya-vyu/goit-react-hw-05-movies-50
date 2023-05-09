import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
const SerchForm = () => {
  const [searchName, setSearchName] = useSearchParams();
  const [query, setQuery] = useState('');
  const handlSubmit = e => {
    e.preventDefault();
    setSearchName({ query: query });
  };
  return (
    <form onSubmit={handlSubmit}>
      <input
        type="text"
        name="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SerchForm;
