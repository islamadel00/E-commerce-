'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';
import authImage from '@/assets/images/authImage.jpeg';
import PageLoading from '@/components/ui/PageLoading';
import toast from 'react-hot-toast';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function SigninPage() {
  const router = useRouter();
  const { status } = useSession();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/');
    }
  }, [status, router]);

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.error) {
        console.error('Sign in error:', result.error);
        if (result.error === 'ConfigurationError') {
          toast.error('Server configuration error. Please try again later.');
        } else if (result.error === 'CredentialsSignin') {
          toast.error('Invalid email or password');
        } else {
          toast.error('Login failed. Please try again.');
        }
      } else if (result?.ok) {
        toast.success('Logged in successfully!');
        router.push('/');
      } else {
        toast.error('Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  if (status === 'loading' || status === 'authenticated') {
    return (
      <PageLoading
        title="Authenticating..."
        subtitle="Please wait while we verify your session"
      />
    );
  }

  return (
    <div className="flex items-stretch min-h-screen">
      <div className="w-1/2 relative">
        <Image 
          src={authImage} 
          alt="Auth image" 
          fill
          className="object-cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8">
          <h1 className="text-4xl font-bold mb-4">Login to Exclusive</h1>
          <p className="text-gray-600 mb-8">Enter your details below</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="mb-4">
              <input {...register('email')} className={`border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:border-black`} id="email" type="email" placeholder="Email" />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
            </div>

            <div className="mb-6">
              <input {...register('password')} className={`border-b-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:border-black`} id="password" type="password" placeholder="Password" />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <button style={{ backgroundColor: '#db4444' }} className="text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline" type="submit">
                Login
              </button>
              <Link href="/reset-password" className="inline-block align-baseline font-bold text-sm" style={{ color: '#db4444' }}>
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}