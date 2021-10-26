import { Route } from "wouter";
import HomePage from "./pages";
import ClientPage from "./pages/client";

export function App() {
  return (
    <>
      <Route path="/" component={HomePage} />
      <Route path="/client" component={ClientPage} />
    </>
  );
}
