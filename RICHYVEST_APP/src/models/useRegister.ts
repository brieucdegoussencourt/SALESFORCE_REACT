// src/hooks/useRegister.ts
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RegisterData {
  login: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [registerData, setRegisterData] = useState<RegisterData>({
    login: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('handleSubmit called');

    const payload = {
      action: 'register',
      login: registerData.login,
      email: registerData.email,
      password: registerData.password,
    };

    try {
      const response = await fetch(
        'https://easyvest-dev-ed.develop.my.salesforce-sites.com/services/apexrest/api/public/User',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );
      console.log('Fetch response received');

      let result = await response.text();
      console.log('API Response:', result);

      // Remove surrounding quotes if present
      result = result.trim();
      if (result.startsWith('"') && result.endsWith('"')) {
        result = result.substring(1, result.length - 1);
      }
      console.log('Cleaned API Response:', result);

      if (result.startsWith('Success')) {
        console.log('Registration successful, navigating to /login');
        navigate('/login');
      } else {
        console.log('Registration failed:', result);
        setMessage(result);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setMessage('Error registering user.');
    }
  };

  return {
    registerData,
    message,
    handleChange,
    handleSubmit,
  };
};

export default useRegister;