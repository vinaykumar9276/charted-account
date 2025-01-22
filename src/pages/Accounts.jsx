import { useState,useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Cards from '../components/Cards'

const Accounts = () => {
  const [accounts, setAccounts] = useState([]); // Store a list of accounts
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch some featured accounts when the component loads
  useEffect(() => {
    const fetchFeaturedAccounts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`http://localhost:5000/accounts`);
        setAccounts(response.data.slice(0, 10)); // Fetch first 10 accounts as featured
      } catch (err) {
        setError('Failed to fetch featured accounts.');
        console.error('Error fetching accounts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedAccounts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-extrabold my-5 text-center">CHARTERED ACCOUNTANTS</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <SearchBar onSearch={() => {}} /> 
      </div>

      {/* Display Loading, Error, or Featured Accounts */}
      {loading && <p className="text-center text-gray-600">Loading featured accounts...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Featured Accounts (Cards) */}
      <h2 className="text-2xl font-bold my-5 text-center">Featured Chartered Accountants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {accounts.map((account) => (
          <Cards key={account.id} account={account} />
        ))}
      </div>
    </div>
  );
};

export default Accounts;