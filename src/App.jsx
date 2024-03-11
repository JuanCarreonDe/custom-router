import { Suspense, lazy } from "react";
import Router from "../Router";

import Page404 from "./pages/Page404";
import Search from "./pages/Search";
import Route from "./components/Route";

const LazyAboutPage = lazy(() => import("./pages/About"));
const LazyHomePage = lazy(() => import("./pages/Home"));

const routes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path: "/twich",
    Component: () => <h1>Nuevo twich</h1>,
  },
  {
    path: "/search/:query",
    Component: Search,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
