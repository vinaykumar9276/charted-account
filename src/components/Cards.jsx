import { Link } from 'react-router-dom';

const Cards = ({ account }) => {
    if (!account || !account.image || !account.name) {
        console.error('Invalid account data:', account);
        return <p>Invalid data</p>;
      }
       
  return (
    <div className="card flex justify-center items-center p-4 max-w-xs">
      <div className="shadow-md rounded-lg" >
        <div className="flex flex-col items-center p-4">
          <img
            src={account.image}
            alt={account.name}
            className="card-img-top w-32 h-32  rounded-md mb-4"
          />
          <div className='card-body text-center'>
            <h2 className="card-title text-sm font-bold">{account.name}</h2>
            <p className='card-text text-sm'>{account.intro}</p>
            <div className="mt-2">
              <Link
                to={`/details/${account.id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;