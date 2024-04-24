import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import LandingPage from './pages/Dashboard/LandingPage';
import DetailPage from './pages/Dashboard/DetailPage';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Using dark mode by default
    window.document.body.classList.add('dark');
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageTitle title="Forecast" />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <PageTitle title="City Detail" />
              <DetailPage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
