import api from "@/utils/axios";
import styles from "./style.module.scss";
import { Dragon } from "@/utils/types/dragon";
import { protectedRoute } from "@/utils/protectedRoute";
import Link from "next/link";
import DragonImage from "@/app/components/dragonImage/dragonImage";
import DragonDetailDelete from "@/app/components/deleteButton/deleteButton";
import MomentAgo from "@/app/components/momentAgo/momentAgo";
import DragonDetails from "./details";

export default async function DragonDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  await protectedRoute();

  const id = (await params).id
  const dragonData: Dragon = (await api.get("/" + id)).data;

  const histories = Array.isArray(dragonData.histories) ? dragonData.histories : [dragonData.histories];
  const filteredHistories = histories.filter((history): history is string => history !== undefined);

  dragonData.histories = filteredHistories;

  if (!dragonData || !dragonData.id) {
    return (<div>Dragon not found</div>)
  }


  return (
    <DragonDetails dragonData={dragonData} />
  );
}
