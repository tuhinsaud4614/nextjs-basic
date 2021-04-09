import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Hello.module.css";

const Hello = ({ users }) => {
  return (
    <div>
      <Head>
        <title>Hello</title>
      </Head>
      <h1>All Ninjas</h1>
      {users.map((user) => (
        <Link href={`/hello/${user.id}`} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

export default Hello;
