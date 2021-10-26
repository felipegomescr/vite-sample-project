import { Route } from "wouter";
import ClientPage from "./pages";

export function App() {
  return (
    <>
      <Route path="/" component={ClientPage} />
    </>
  );
}
