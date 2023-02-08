import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import DefaultLayout from './components/Layout/DefaultLayout';
import MovieCard from './components/movieCard';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            const Layout = route.layout || DefaultLayout;
            return <Route key={index} path={route.path} element={
              <Layout>
                <Page></Page>
              </Layout>
            }></Route>
          })}
        </Routes> */}
        <MovieCard></MovieCard>
      </div>
    </Router>
  );
}

export default App;
