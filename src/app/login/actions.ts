'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(email: string, password: string): Promise<boolean> {
  const supabase = await createClient()

  const data = {
    email: email,
    password: password,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return false;
  }

  revalidatePath('/', 'layout')
  redirect('/');
}

export async function signup(email: string, password: string) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: email,
    password: password,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return {isValid : false, message: error.message, error: error};
  }
  
  revalidatePath('/', 'layout')
  redirect('/')
}

export async function logoff(){
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}