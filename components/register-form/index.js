'use client'
import React, { useState } from 'react';
import { useFormik } from 'formik';
import ReCaptcha from './ReCaptcha';
import Link from 'next/link';
import * as Yup from 'yup';

export const RegisterForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
    formik.setFieldValue('captcha', value);
    console.log(value);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      captcha: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      captcha: Yup.string().required('Captcha is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: values.email }),
        });

        if (response.ok) {
          alert(`Account created! Email sent to: ${values.email}`);
        } else {
          alert('Failed to send email');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send email');
      }
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
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder='Email'
        className={'border rounded-md p-[.5rem] block mb-12 w-full'}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-500">{formik.errors.email}</div>
      ) : null}

      <label htmlFor="password" className={'block font-light'}>Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className={'border rounded-md p-[.5rem] block mb-8 w-full'}
        placeholder='Password'
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="text-red-500">{formik.errors.password}</div>
      ) : null}

      <label htmlFor="confirmPassword" className={'block font-light'}>Confirm Password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        className={'border rounded-md p-[.5rem] block mb-8 w-full'}
        placeholder='Confirm Password'
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className="text-red-500">{formik.errors.confirmPassword}</div>
      ) : null}

      <ReCaptcha onChange={handleCaptchaChange} />
      {formik.touched.captcha && formik.errors.captcha ? (
        <div className="text-red-500">{formik.errors.captcha}</div>
      ) : null}

      <div className='flex mt-8'>
        <Link href={'/sign-in'} className='flex-1 border rounded-xl w-full p-3 px-8 text-white bg-black font-light mr-4'>
          cancel
        </Link>
        <button type="submit" className='border rounded-xl w-full p-3 text-white bg-black font-light'>
          create an account
        </button>
      </div>
    </form>
  );
};


/*import React, {useState} from 'react'
import { useFormik } from 'formik';
import ReCaptcha from './ReCaptcha'
import Link from "next/link";

export const RegisterForm = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value)
    formik.setFieldValue('captcha', value);
    console.log(value)
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      captcha: ''
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
      <ReCaptcha
        onChange={handleCaptchaChange}
      />
      <div className='flex mt-8'>
      <Link href={'/sign-in'} className='flex-1 border rounded-xl w-full p-3 px-8 text-white bg-black font-light mr-4'>
        cancel
      </Link>
      <button type="submit" className='border rounded-xl w-full p-3 text-white bg-black font-light'>
        create an account
      </button>
      </div>
    </form>
  );
}*/