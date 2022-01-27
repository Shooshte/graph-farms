import Image from 'next/image';
import BrandSidebar from '../components/brandSidebar';

import styles from './index.module.scss';

export function Index() {
  return (
    <article className={styles.container}>
      <BrandSidebar />
      <section className={styles.content}>
        <h1 className="heading-2">About Graph Farms</h1>

        <Image
          alt="Wheat farm at sunset"
          height={429}
          layout="responsive"
          quality={100}
          src="/images/GraphFarms.png"
          width={1024}
        />
        <p className="text margin-top-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima rerum
          incidunt, sunt ipsum debitis, nam sed perspiciatis maxime aperiam
          accusamus laudantium temporibus. Adipisci corporis assumenda minus
          illo magnam, obcaecati sed?
        </p>
        <p className="text">
          Possimus id, nihil atque eligendi provident expedita sit cumque nisi
          aliquid ipsa. Dolorem, harum! Magni ratione excepturi ipsum explicabo
          asperiores itaque aliquid, doloribus voluptas vel delectus, soluta
          cumque ea minima.
        </p>
        <h2 className="heading-2 margin-top-2">Location</h2>
        <p className="text margin-bottom-2">
          (513) 228-2942
          <br />
          8 Parkview Ct
          <br />
          Hoopeston, Illinois(IL) 60942
        </p>
        <Image
          alt="Wheat fields next to a forest"
          height={429}
          layout="responsive"
          quality={100}
          src="/images/Location.png"
          width={1024}
        />
        <p className="text margin-top-2">
          Etiam vel arcu nec ipsum vestibulum sollicitudin at et augue. Ut
          vulputate tortor id faucibus pretium. Nunc eleifend quis est non
          suscipit. Curabitur nec mi lacus. Phasellus eu scelerisque dolor, at
          vestibulum arcu. Sed ultricies, magna ac sodales suscipit, odio dolor
          sodales massa, sed blandit purus felis vitae mi. Curabitur id mi
          vulputate, varius lectus id, fringilla ipsum.
        </p>
        <h2 className="heading-2 margin-top-2">History</h2>
        <p className="text margin-bottom-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          eveniet est corporis ipsam, earum qui beatae alias quam recusandae
          magni consequatur reiciendis, laborum numquam? Dolores consequatur
          commodi odio hic possimus.
        </p>
        <Image
          alt="Wheat fields next to a forest"
          height={429}
          layout="responsive"
          quality={100}
          src="/images/History1.png"
          width={1024}
        />
        <p className="text margin-top-2">
          Iusto sunt, dolores esse, vero excepturi voluptas quos fuga vel
          architecto dolorem incidunt minus ut ex deleniti. Officia excepturi
          animi totam minus, voluptas, quos dolorum ipsum quae numquam enim
          tempore?
        </p>
        <p className="text margin-bottom-2">
          Temporibus molestias doloribus eveniet maxime eum voluptates assumenda
          vitae molestiae, placeat, id consectetur ad ipsa. Ea amet, ab autem
          dolor natus molestias. Sint vel, autem magni ea quo quod minus.
        </p>
        <Image
          alt="Wheat fields next to a forest"
          height={429}
          layout="responsive"
          quality={100}
          src="/images/History2.png"
          width={1024}
        />
        <p className="text margin-top-2">
          Amet, commodi aliquam. Labore molestiae quo magni? Dolores praesentium
          iure, repudiandae velit, architecto reiciendis, incidunt vitae commodi
          suscipit quidem autem nisi impedit ipsum reprehenderit exercitationem
          mollitia aspernatur minima quia eos.
        </p>
        <p className="text margin-bottom-2">
          Atque totam amet reprehenderit fugiat quaerat? Commodi expedita rerum
          odit, error illum quidem repellat sint tempore tempora repellendus
          nihil laborum facere molestiae aliquam qui accusamus explicabo
          blanditiis. Nam, at repellendus.
        </p>
        <Image
          alt="Wheat fields next to a forest"
          height={429}
          layout="responsive"
          quality={100}
          src="/images/History3.png"
          width={1024}
        />
        <p className="text margin-top-2 margin-bottom-2">
          Eum illo nemo, odit rem praesentium voluptas laboriosam ex doloremque
          minima maiores reiciendis similique, exercitationem maxime itaque!
          Recusandae sapiente voluptas iusto nam, doloribus illo veritatis error
          consectetur, debitis explicabo nisi?
        </p>
        <Image
          alt="Wheat fields next to a forest"
          height={429}
          layout="responsive"
          quality={100}
          src="/images/History4.png"
          width={1024}
        />
      </section>
    </article>
  );
}

export default Index;
