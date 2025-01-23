import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import api from '@/utils/axios'
import { Dragon } from '@/utils/types/dragon'
import DragonList from './components/dragonList/dragonList'


export default async function Home() {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  const dragonList:Dragon[] = (await api.get("/")).data;

  return <DragonList dragons={dragonList} />
}