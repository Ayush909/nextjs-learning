import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
