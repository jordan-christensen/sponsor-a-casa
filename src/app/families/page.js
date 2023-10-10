import React from 'react';
// Components
import { FamilyCard } from '@/components';
// Styles & Assets
import styles from './page.module.css';

const families = [
  {
    familyName: 'Rodriguez',
    status: 'available',
    dateFound: '01/01/2001',
    numberChildren: 4,
    married: true,
    hardshipScale: 7,
  },
  {
    familyName: 'Gomez',
    status: 'reserved',
    dateFound: '02/02/2021',
    numberChildren: 2,
    married: true,
    hardshipScale: 4,
  },
  {
    familyName: 'Villasquez',
    status: 'completed',
    dateFound: '03/03/2023',
    numberChildren: 8,
    married: false,
    hardshipScale: 10,
  },
  {
    familyName: 'Martinez',
    status: 'scheduled',
    dateFound: '04/21/2017',
    numberChildren: 1,
    married: true,
    hardshipScale: 3,
  },
  {
    familyName: 'Sanchez',
    status: 'available',
    dateFound: '04/21/2017',
    numberChildren: 5,
    married: true,
    hardshipScale: 5,
  },
]

export default function page() {
  return (
    <section>
      <div className={styles.description}>
        <h1 className={styles.heading}> Families in Need of a Proper Home</h1>
        <p>
          The families below are in need of a safe, dry, and functional home.
        </p>
        <p>Browse through them and find one that you would like to help.</p>
      </div>
      <div className={styles.families}>
        {families.map((family, index) => (
          <FamilyCard
            key={index}
            familyName={family.familyName}
            status={family.status}
            dateFound={family.dateFound}
            numberChildren={family.numberChildren}
            married={family.married}
            hardshipScale={family.hardshipScale}
          />
        ))}
      </div>
    </section>
  );
}
