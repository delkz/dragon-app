import api from '@/utils/axios'
import { Dragon } from '@/utils/types/dragon'
import DragonList from './components/itemList/ItemList'
import { protectedRoute } from '@/utils/protectedRoute'


export default async function Home() {
  await protectedRoute();

  const dragonList:Dragon[] = (await api.get("/")).data;

  return <DragonList dragons={dragonList} />
}