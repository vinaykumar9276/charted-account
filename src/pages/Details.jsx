import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams();
  
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/accounts/${id}`);
        setAccount(response.data);
      } catch (err) {
        console.error(err); 
        setError('Account not found');
      }
    };

    fetchAccount();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!account) return <p>Loading...</p>;

  return (
    <div className="card flex justify-center items-center p-3">
      <div className="max-w-3xl shadow-md rounded-md" >
        <div className="flex flex-col items-center">
          <img
                  src={account.image}
                  alt={account.name}
                  className="card-img-top w-full h-64 rounded-lg mb-4 p-4"
                />
          <div class="card-body p-4">
            <h1 className="card-title text-2xl font-bold mb-4">{account.name}</h1>
            <p className="card-text text-gray-600 mb-4">{account.intro}</p>
            <p className="card-text text-yellow-500 font-bold mb-2">{account.rating} ★</p>
            <p className="card-text text-gray-600 mb-2">{account.reviewCount} reviews</p>
            <p className="card-text text-green-600 font-bold mb-2">{account.price}</p>
            <p className="card-text text-gray-600 mb-2">{account.deliveryTime}</p>
            <div className="bg-gray-100 p-4 rounded-md mt-4">
              <h2 className="card-text font-bold">Testimonial</h2>
              <blockquote className="italic text-center text-gray-600">
                  "{account.testimonial.text}"
              </blockquote>
              <p className="text-right font-semibold text-gray-700">
                  - {account.testimonial.author}
              </p>
              </div>
              <div className='p-4 text-right'>
                <Link to='/accounts' className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none' >Back</Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;