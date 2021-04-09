import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
  const { push } = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      push("/");
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="not-found">
      <Head>
        <title>Page Not Found</title>
      </Head>
      <h1>Oooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
