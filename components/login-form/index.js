'use client'
import React, {useState} from 'react'
import { useFormik } from 'formik';

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className='w-full max-w-[40rem]'>

      <label htmlFor="email" className={'block font-light'}>Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder='Email'
        className={'border rounded-md p-[.5rem] block mb-12 w-full'}
      />
      <label htmlFor="password" className={'block font-light'}>Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        className={'border rounded-md p-[.5rem] block mb-8 w-full'}
        placeholder='Password'
      />
      <button type="submit" className='border rounded-xl w-full p-4 text-white bg-black font-light mt-8'>Enter in account</button>
    </form>
  );
}