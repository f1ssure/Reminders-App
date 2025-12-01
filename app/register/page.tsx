'use client';
import InputField from '@components/InputField';
import Button from '@components/Button';
import { Google, Facebook, Apple } from '@components/Button';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { SignUp, SignIn } from '@lib/firebase/auth/EmailAndPassword'

export default function RegisterPage() {
  // TODO:
  // add UI upon input validation flags
  // use- formik.resetForm() upon success
  // make the component dynamic to be able to be reused on /login page
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => SignUp(values.email, values.password),
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required')
        .email('Invalid email address'),
      password: Yup.string()
        .required('Required')
        .min(8, 'Password should be at least 8 characters long')
        .matches(/[0-9]/, 'Password must contain a number')
        .matches(/[a-z]/, 'Password must contain a lowercase letter')
        .matches(/[A-Z]/, 'Password must contain an uppercase letter')
        .matches(/[^\w]/, 'Password must contain a symbol')
    }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
  };

  return (
    <main className='flex items-center justify-center min-h-screen'>
      <div className='flex flex-col items-center justify-evenly w-full max-w-125 gap-10 p-8'>
        <div>
          <h1 className='text-center text-4xl font-bold'>
            Reminders App
          </h1>
          <p className='text-center text-xs mt-2'>Never Forget Anything.</p>
        </div>

        <div className='w-full'>
          <form className='w-full' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3 w-full'>
              <InputField
                label='Email'
                name='email'
                type='text'
                placeholder='Enter your email address'
                {...formik.getFieldProps('email')}
              />
              <InputField
                label='Password'
                name='password'
                type='password'
                placeholder='Create a password'
                {...formik.getFieldProps('password')}
              />
            </div>
            <div className='w-full mt-1.5 mb-8 flex flex-row-reverse'>
              <Link href='/login' className='font-bold text-xs'>Already have an account?</Link>
            </div>

            <Button
              text='Create account'
              type='submit'
            />
          </form>

          <div className='w-full'>
            <div className='w-full my-3 flex items-center'>
              <hr className='inline w-full' />
              <span className='px-3'>or</span>
              <hr className='inline w-full' />
            </div>

            {/* TODO: Add Google, Facebook and Apple OAuth */}
            <div className='flex flex-col gap-3 w-full'>
              <Button
                text='Continue with Google'
                Icon={Google()}
                //onClick={() => console.log('Google.')}
              />
              <Button
                text='Continue with Facebook'
                Icon={Facebook()}
                //onClick={() => console.log('Facebook.')}
              />
              <Button
                text='Continue with Apple'
                Icon={Apple()}
                //onClick={() => console.log('Apple.')}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
