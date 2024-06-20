import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [passIcon, setPassIcon] = useState('solar:eye-bold-duotone');
  const [birthdate, setBirthdate] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const handleTogglePassword = () => {
    if (type === 'password') {
      setPassIcon('solar:eye-closed-bold-duotone');
      setType('text');
    } else {
      setPassIcon('solar:eye-bold-duotone');
      setType('password');
    }
  };

  const handleRegisterClick = () => {
    navigate('/signin');
  };

  const handleRegister = async () => {
    const date = birthdate.split('-');
    setBirthdate(`${date[2]}-${date[1]}-${date[0]}`);

    const user = {
      username,
      password,
      email,
      firstname,
      lastname,
      birthdate,
    };

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Registre exitós
        navigate('/signin');
      } else {
        // Error en el registre
        const errorData = await response.json();
        console.error('Error en el registre:', errorData.message);
      }
    } catch (error) {
      console.error('Error en la sol·licitud:', error);
    }
  };

  const handleBirthdayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) {
      value = value.slice(0, 2) + '-' + value.slice(2);
    }
    if (value.length > 5) {
      value = value.slice(0, 5) + '-' + value.slice(5);
    }
    setBirthdate(value);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-neutral-100'>
      <div className='flex flex-col items-center justify-center max-w-lg p-2 space-y-6 text-center w-11/12'>

        <h1 className="text-3xl font-bold text-black">Register</h1>
        <p className="text-neutral-500">
          Fill the form below to register.
        </p>

        <div className='w-full text-left'>

          <div className='mb-6'>
            <label className='font-bold block mb-1 text-gray-700'>First Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon="solar:user-bold-duotone" width="1.3em" height="1.3em" />
              </div>
              <input
                type='text'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                placeholder='Marc'
                className='w-full p-2 ps-11 border border-solid border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              />
            </div>
          </div>

          <div className='mb-6'>
            <label className='font-bold block mb-1 text-gray-700'>Last Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon="solar:hashtag-bold-duotone" width="1.3em" height="1.3em" />
              </div>
              <input
                type='text'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder='Batistti Moreno'
                className='w-full p-2 ps-11 border border-solid border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              />
            </div>
          </div>

          <div className='mb-6'>
            <div className='flex items-end'>
              <label className='font-bold block mb-1 text-gray-700'>Birthday</label>
              <p className='text-sm ml-2 mb-1.5'>Day-Month-Year</p>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon="solar:hashtag-bold-duotone" width="1.3em" height="1.3em" />
              </div>
              <input
                type='text'
                value={birthdate}
                onChange={handleBirthdayChange}
                placeholder='02-01-200'
                maxLength={10}
                className='w-full p-2 ps-11 border border-solid border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              />
            </div>
          </div>

          <div className='mb-6'>
            <label className='font-bold block mb-1 text-gray-700'>Username</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon="solar:hashtag-bold-duotone" width="1.3em" height="1.3em" />
              </div>
              <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='MacoSt'
                className='w-full p-2 ps-11 border border-solid border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              />
            </div>
          </div>

          <div className='mb-6'>
            <label className='font-bold block mb-1 text-gray-700'>Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon="solar:hashtag-bold-duotone" width="1.3em" height="1.3em" />
              </div>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email@domain.com'
                className='w-full p-2 ps-11 border border-solid border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
              />
            </div>
          </div>

          <div className='mb-8'>
            <label className='font-bold block mb-1 text-gray-700'>Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Icon icon="solar:lock-password-bold-duotone" width="1.3em" height="1.3em" />
              </div>
              <input
                type={type}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete='current-password'
                className={`w-full p-2 ps-11 pe-11 border border-solid border-gray-300 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 ${type === 'password' ? 'font-sans tracking-widest' : ''}`}
              />
              <button onClick={handleTogglePassword} className='absolute inset-y-0 end-0 flex items-center pe-3'>
                <Icon icon={passIcon} width="1.3em" height="1.3em" />
              </button>
            </div>
          </div>

          <button className='w-full p-2 font-bold text-white bg-black rounded-xl hover:bg-neutral-800' onClick={handleRegister}>Register</button>

        </div>
        <p className="text-neutral-500">Have an account? <strong className='text-neutral-700 underline cursor-pointer hover:text-black' onClick={handleRegisterClick}>Sign in</strong></p>
      </div>
    </div>
  );
};

export default Register;