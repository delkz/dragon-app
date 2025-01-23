import { createClient } from '@/utils/supabase/server';
import { login, signup } from './actions'

import { redirect } from 'next/navigation';
import LoginForm from './loginForm';

export default async function LoginPage() {
  
    const supabase = await createClient()
  
    const { data } = await supabase.auth.getUser()
    if (data?.user) {
      redirect('/')
    }
  

  return (
    <LoginForm login={login} signup={signup}/>
  )
}