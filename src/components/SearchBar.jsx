import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim() === '') {
        setSuggestions([]);
        return;
      }

      setLoading(true);

      try {
        const response = await axios.get(`http://localhost:5000/accounts?q=${query}`);
        setSuggestions(response.data || []);
      } catch (err) {
        console.error('Error fetching suggestions:', err);
        setSuggestions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [query]); // Runs whenever the query changes

  const handleSelect = (account) => {
    setQuery(account.name);
    setSuggestions([]); // Clear suggestions once an account is selected
    onSearch(account); // Trigger the search action (or pass selected account to parent)
    navigate(`/details/${account.id}`); // Navigate to the details page for the selected account
  };

  return (
    <div className="relative text-black py-1 max-w-2xl mx-auto">
      <div className='flex justify-center'>
      <input
        type="text"
        placeholder="Search for Chartered Accountants..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className=" border px-4 py-2 rounded-l-md w-1/2"
      />
      </div>
      {loading && <p>Loading...</p>}
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white bg-opacity-80 border rounded shadow-lg">
          {suggestions.map((account) => (
            <li
              key={account.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(account)} // Navigate to the details page when clicked
            >
              {account.name}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default SearchBar;