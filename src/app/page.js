import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <section className={styles.section}>
      <p>
        In Tijuana, Mexico, thousands of families live in extreme poverty. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate molestias
        aut recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Deserunt accusantium officiis, adipisci necessitatibus quam maiores
        impedit minus vel totam nesciunt? Dicta sint accusamus atque!
      </p>
      <p>You can make a difference by building a home for a family in need.</p>
      <p>Take a look at some families and see what you think.</p>
      <div style={{ width: '400px', height: '300px', background: 'grey' }}>
        Placeholder
      </div>
      <button>Explore the possibilities</button>
    </section>
  );
}
