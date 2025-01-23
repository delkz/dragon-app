import api from "@/utils/axios";
import styles from "./style.module.scss";
import { Dragon } from "@/utils/types/dragon";
import { protectedRoute } from "@/utils/protectedRoute";

export default async function CreateDragon({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  await protectedRoute();

  const id = (await params).id
  const dragonData: Dragon = (await api.get("/" + id)).data;


  return (
    <>
      <div className={styles.CreateDragon}>
        <h1>{dragonData.name}</h1>
        <p>{dragonData.type}</p>
        <p>{dragonData.createdAt}</p>
        {
          dragonData.histories && dragonData.histories.map((historyObj, index) => (
            <p key={index}>{historyObj}</p>
          ))
        }
      </div>
    </>
  );
}
