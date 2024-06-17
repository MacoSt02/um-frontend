
const Login = () => {

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='flex flex-col items-center justify-center max-w-lg p-4 space-y-4 text-center'>
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your email and password below to access your account.
        </p>
        <form>
          <div className='w-full text-left'>
            <label className='font-bold block mb-1 text-gray-700'>Email</label>
            <input
              type='email'
              placeholder='email@email.com'
              className='w-full p-2 border border-solid border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500'
            />
          </div>

          <div className='w-full text-left'>
            <label className='font-bold block mb-1 text-gray-700'>Password</label>
            <input
              type='password'
              className='w-full p-2 border border-solid border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500'
            />
          </div>
          <button className='w-full p-2 font-bold text-white bg-black rounded-lg hover:bg-gray-900'>Sign in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;