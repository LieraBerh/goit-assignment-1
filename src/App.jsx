import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CataloguePage = lazy(() => import("./pages/CataloguePage/CataloguePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalogue" element={<CataloguePage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
