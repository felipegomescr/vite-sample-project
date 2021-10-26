import useSWR from "swr";
import { fetcher } from "../helpers";
import { Posts } from "../components/Posts";
import { Post } from "../types";

const HomePage = () => {
  const { data, error } = useSWR<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) {
    return <p>Failed to load.</p>;
  }

  return (
    <>
      <h1>Client Page</h1>
      {data ? <Posts data={data} /> : <p>Loading...</p>}
    </>
  );
};

export default HomePage;
