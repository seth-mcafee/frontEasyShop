import styles from "./page.module.css";
import { Hero, Banner } from "../components/Home";
import { GridProducts } from "../components/Shared";
import { BasicLayout } from "@/layouts";

export default async function Home({searchParams}) {
  const search = searchParams.search;
  return (
    <BasicLayout>
    <div className={styles.page}>
      <main className={styles.main}>
        
        <Hero/>
        
        <GridProducts search={search} />
        <Banner />
      </main>
      
    </div>
    </BasicLayout>
  );
}
