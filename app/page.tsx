
import NickPlexus from "@/modules/Nick";
import Wave from "@/modules/Wave";
import NeonCity from "@/modules/NeonCity";
import Contacts from "@/modules/Contacts";

export default function Home() {
  return (
    <main id='main'>
      <section className='scene'>
        <div className="city_box"><NeonCity/></div>
        <Wave />
      </section>
      <section className='over_scene'>
        <NickPlexus />
        <Contacts/>
      </section>
    </main>
  );
}
