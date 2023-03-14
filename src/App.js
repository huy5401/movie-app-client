import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import Scrollbars from 'react-custom-scrollbars-2';
function App() {
  return (
    <Router>
      <div className="App">
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return <Route key={index} path={route.path} element={
                <Layout>
                  <Page></Page>
                </Layout>
              }></Route>
            })}
          </Routes>
        </SkeletonTheme>
      </div>
    </Router>
  );
}

export default App;
