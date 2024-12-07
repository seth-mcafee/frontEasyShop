'use client'
import Link from 'next/link'
import styles from './page.module.css'
import React, { useState } from 'react'
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './register.form'
import { Auth } from '@/api'
import { useRouter } from 'next/navigation'
import { AuthLayout } from '@/layouts'


const authCtrl = new Auth();



const Register = () => {

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue)=>{
      try {
        setLoading(true);
        await authCtrl.register(formValue);
        router.push("/auth/login");
      } catch (error) {
        setLoading(false);

        setErrors({email: error.errors.email[0]});
        
      }
    }
  })
  return (
    <>
    <AuthLayout>
    <div className='authform_box'>
      <h3>Create account</h3>
      
      <form onSubmit={formik.handleSubmit}>
        <input type='text' name='name' placeholder='user name' value={formik.values.name} onChange={formik.handleChange}/>
        {formik.touched.name && formik.errors.name && (
          <p className='error'>
            {formik.errors.name}
          </p>
        )}
        <input type='email' name='email' placeholder='email' value={formik.values.email} onChange={formik.handleChange}/>
        {formik.touched.email && (formik.errors.email || errors.email) && (
          <p className='error'>
            {formik.errors.email || errors.email}
          </p>
        )}
        <input type='password' name='password' placeholder='password' value={formik.values.password} onChange={formik.handleChange}/>
        {formik.touched.password && formik.errors.password && (
          <p className='error'>
            {formik.errors.password}
          </p>
        )}


        <button disabled={loading}>
            {loading ? ( 
              <div className="loader"></div>
            ):("Register now")} 
        </button>

        
        
        
      </form>

      <Link href={'/auth/login'}>You already have an account?</Link>

    </div>
    </AuthLayout>
    </>
  )
}

export default Register
