import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import { DefaultLayout } from './components/Layout';
import { Fragment, useEffect, useState } from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Login from './components/pages/Login/Login';
import PrivateRoute from './components/common/PrivateRoute';
function App() {
  const [showScrollToTop, seTShowScrollToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        seTShowScrollToTop(true);
      } else {
        seTShowScrollToTop(false);
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <Router>
      <div className="App">
        <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
          <Routes>
            <Route path='/login' index element={<Login />} />
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return <Route key={index} path={route.path} element={
                <PrivateRoute>
                  <Layout>
                    <Page></Page>
                  </Layout>
                </PrivateRoute>
              }></Route>
            })
            }
          </Routes>

        </SkeletonTheme>
        {showScrollToTop && (<button style={{
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          height: '30px',
          width: '30px',
          fontSize: '15px',
          border: 'none',
          backgroundColor: 'white'

        }}
          onClick={scrollToTop}
        ><FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon></button>)}
      </div>
    </Router>
  );
}

export default App;
