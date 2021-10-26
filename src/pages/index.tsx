import { Link } from "wouter";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <Link href="/client">
          <a>Client</a>
        </Link>
      </nav>
    </>
  );
};

export default HomePage;
