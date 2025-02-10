// src/app/login.tsx
'use client'; // Mark as a Client Component

import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { IAuthState } from '@components/interfaces/auth';
import { login } from '../redux/features/authSlice';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleLogin = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const loggedUser: IAuthState = {
      userId: '1',
      email: 't8o1o@example.com',
      firstName: 'John',
      lastName: 'Doe',
      picture: 'uploads/images/profiles/johndoe.jpg',
    };
    dispatch(login(loggedUser));
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}