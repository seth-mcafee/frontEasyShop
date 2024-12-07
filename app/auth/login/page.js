'use client'
import Link from 'next/link'
import styles from './page.module.css'
import React, { useState } from 'react'
import { Auth } from '@/api';
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './login.form';
import { useAuth } from '@/hooks';
import { AuthLayout } from '@/layouts';

const authCtrl = new Auth();

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const {login} = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        setLoading(true);
        const response = await authCtrl.login(formValue);
        login(response.token);
      } catch (error) {
        setLoading(false);
        setErrors({ general: error.message });
      }
    }
  })
  return (
    <>
    <AuthLayout>
    <div className='authform_box'>
      <h3>Login</h3>
      
      <form onSubmit={formik.handleSubmit}>
      {errors.general && (<p className='error'>{errors.general}</p>)}
        <input type='email' name='email' placeholder='email' value={formik.values.email} onChange={formik.handleChange} />

        {formik.touched.email && formik.errors.email && (
          <p className='error'>
            {formik.errors.email}
          </p>
        )}


        <input type='password' name='password' placeholder='password' value={formik.values.password} onChange={formik.handleChange} />

        {formik.touched.password && formik.errors.password && (
          <p className='error'>
            {formik.errors.password}
          </p>
        )}
        
        <button disabled={loading}>
            {loading ? ( 
              <div className="loader"></div>
            ):("Login now")} 
        </button>

      </form>
      <Link href={'/auth/register'}>Create account</Link>
    </div>
    </AuthLayout>
    </>
  )
}

export default Login
