import { Icon } from '@iconify/react';
import { useState } from 'react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState('solar:eye-bold-duotone');

  const handleTogglePassword = () => {
    if (type === 'password') {
      setIcon('solar:eye-closed-bold-duotone');
      setType('text');
    } else {
      setIcon('solar:eye-bold-duotone');
      setType('password');
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='flex flex-col items-center justify-center max-w-lg p-4 space-y-4 text-center'>

        <h1 className="text-3xl font-bold">Sign in</h1>
        <p className="text-neutral-500">
          Enter your <strong className='text-black'>email</strong> and <strong className='text-black'>password</strong> below to access your account.
        </p>

        <div className='w-full text-left'>

          <div className='mb-6'>
            <label className='font-bold block mb-1 text-gray-700'>Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon="solar:letter-bold-duotone" width="1.4em" height="1.4em" />
              </div>
              <input
                type='email'
                placeholder='email@email.com'
                className='w-full p-2 ps-11 border border-solid border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 block'
              />
            </div>
          </div>

          <div className='mb-8'>
            <label className='font-bold block mb-1 text-gray-700'>Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon="solar:lock-password-bold-duotone" width="1.4em" height="1.4em" />
              </div>
              <input
                type={type}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
                className='w-full p-2 ps-11 pe-11 font-sans tracking-widest border border-solid border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 block'
              />
              <button onClick={handleTogglePassword} className='absolute inset-y-0 end-0 flex items-center pe-3'>
                <Icon icon={icon} width="1.3em" height="1.3em" />
              </button>
            </div>
          </div>

          <button className='w-full p-2 font-bold text-white bg-black rounded-lg hover:bg-neutral-800'>Sign in</button>

        </div>
      </div>
    </div>
  );
};

export default Login;