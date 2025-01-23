import CreateForm from "./createForm";
import styles from "./style.module.scss";
import { protectedRoute } from "@/utils/protectedRoute";


export default async function CreateDragon() {
  await protectedRoute();
  return (
    <>
      <div className={styles.CreateDragon}>
        <CreateForm />
      </div>
    </>
  );
}
