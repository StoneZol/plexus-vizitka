
import NickPlexus from "@/modules/Nick";
import styles from "./page.module.css";
import Wave from "@/modules/Wave";

export default function Home() {
  return (
    <main id='main'>
          <section className='scene'>
      <Wave/>
    </section>
    <section className='over_scene'>
      <NickPlexus/>
    </section>
  </main>
  );
}
