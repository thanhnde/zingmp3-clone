import MenuBar from './components/MenuBar/MenuBar';
import NavBar from './components/NavBar/NavBar';

import Discover from './pages/discover/Discover';
import ZingChart from './pages/zing-chart/ZingChart';
import Radio from './pages/radio/Radio';
import MusicLibrary from './pages/music-library/MusicLibrary';
import TopNewRelease from './pages/top-new-release/TopNewRelease';
import Topic from './pages/topic/Topic';
import Top100 from './pages/top-100/Top100';

import { connectFireBase } from './utils/FirebaseConfig';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

////////////////////// UPLOAD //////////////////////////////
import NewReleaseUpload from './admin-upload/NewReleaseUpload';
import ChillUpload from './admin-upload/ChillUpload';
import MCYDUpload from './admin-upload/MCYDUpload';

const pages = [
  { component: <Discover />, path: "/" },
  { component: <ZingChart />, path: "/zing-chart" },
  { component: <Radio />, path: "/radio" },
  { component: <MusicLibrary />, path: "/music-library" },
  { component: <TopNewRelease />, path: "/top-new-release" },
  { component: <Topic />, path: "/topic" },
  { component: <Top100 />, path: "/top-100" },
]

function App() {
  connectFireBase();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 0);
  }, []);

  return (
    <>
      {loading
        ?
        <div>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
          }}>
            <MenuBar />

            <div style={{
              width: 'calc(100% - 240px)',
              height: "100%",
              marginLeft: "240px" //
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: "0 60px 0 60px",
              }}>
                <NavBar />
                <Routes>
                  {pages.map((item, index) => (
                    <Route key={index} path={ item.path} element={item.component} />
                  ))}

                  {/* UPLOAD TEST */}
                  <Route path='/admin/upload/new-release' element={<NewReleaseUpload />} />
                  <Route path='/admin/upload/chill' element={<ChillUpload />} />
                  <Route path='/admin/upload/mcyd' element={<MCYDUpload />} />

                </Routes>
              </div>
            </div>
          </div>
        </div>
        : <p style={{ height: "100%", width: "100%", color: 'white', textAlign: 'center', transform: "translateY(50%)" }}>Loading test ...</p>
      }
    </>
  );
}

export default App;
