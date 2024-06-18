import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='flex flex-col items-center justify-center max-w-lg p-4 space-y-4 text-center'>
        <h1 className="text-3xl font-bold">Welcome</h1>
        {/* <p className='text-black font-bold'>User Manager</p> */}
        <p className="text-gray-500 dark:text-gray-400">
          <strong>User Manager</strong> is an application for managing users.
        </p>
        <button onClick={handleLoginClick} className='w-full p-2 font-bold text-white bg-black rounded-lg hover:bg-gray-900'>Log in</button>
      </div>
    </div>
  );
};

export default Welcome;