import api from "@/utils/axios";
import styles from "./style.module.scss";
import { Dragon } from "@/utils/types/dragon";
import { protectedRoute } from "@/utils/protectedRoute";
import Link from "next/link";
import DragonImage from "@/app/components/dragonImage/dragonImage";
import DragonDetailDelete from "@/app/components/deleteButton/deleteButton";
import MomentAgo from "@/app/components/momentAgo/momentAgo";

export default async function CreateDragon({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  await protectedRoute();

  const id = (await params).id
  const dragonData: Dragon = (await api.get("/" + id)).data;

  const histories = Array.isArray(dragonData.histories) ? dragonData.histories : [dragonData.histories];

  if (!dragonData || !dragonData.id) {
    return (<div>Dragon not found</div>)
  }


  return (
    <>
      <div className={styles.InfoDragon}>

        <div className={styles.dragonImage} >
          <DragonImage dragon={dragonData} />
        </div>


        <h1 className={styles.dragonName} id="dragonName" data-testid="dragonName">{dragonData.name}</h1>


        <div className={styles.dragonInfosContainer}>
          <span data-testid="dragonType" id="dragonType" className={`${styles.dragonType} type-${dragonData.type.toLowerCase().trim()}`}>
            {dragonData.type}
          </span>
          <MomentAgo data={dragonData} />
          <Link title={dragonData.name} data-testid="dragonEditButton" href={"/dragon/edit/" + dragonData.id}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>
          </Link>
          <DragonDetailDelete dragonId={dragonData.id} />
        </div>



        <div className={styles.dragonHistories}>
          {
            histories.map((historyObj, index) => (
              <p key={index}>{historyObj}</p>
            ))
          }
        </div>



      </div>
    </>
  );
}
