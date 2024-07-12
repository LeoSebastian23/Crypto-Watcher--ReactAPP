import React from 'react';

interface SearchInputProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const SearchInput: React.FC<SearchInputProps> = ({ search, setSearch }) => {
  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="input-group input-group-lg" style={{ maxWidth: '75%' }}>
        <input
          type="text"
          className="form-control"
          placeholder="Escriba la Cryptomoneda que desees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
