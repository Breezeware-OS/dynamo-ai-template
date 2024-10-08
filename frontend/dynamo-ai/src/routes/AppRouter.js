import React, {useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Appbar from '../components/appbar/Appbar';
import AIHome from '../screens/AI/AIHome';
import TrainAIUploadDocuments from '../screens/AI/TrainAIUploadDocuments';
import TrainAIConfigureAndTest from '../screens/AI/TrainAIConfigureAndTest';
import TuneAIUploadDocuments from '../screens/AI/TuneAIUploadDocuments';
import TuneAIConfigureAndTest from '../screens/AI/TuneAIConfigureAndTest';
import TuneNavSideBar from '../components/AI/TuneNavSideBar';
import ViewModel from '../screens/AI/ViewModel';

const AppRouter = ({signOut, user}) => {

  const navigate = useNavigate();
  useEffect(() => {
    navigate('/AI/home')

  }, []);
  return (
    <>
    {window.location.pathname !== '/release-notes' &&
        <Appbar signOut={signOut} user={user} />}{' '}
      <Routes>
          
            {/* AI Route Start */}
            <Route path="/AI/home" element={<AIHome />} />
            <Route
              path="/AI/train/:id/upload-document"
              element={<TrainAIUploadDocuments />}
            />
            <Route
              path="/AI/train/:id/configure-test"
              element={<TrainAIConfigureAndTest />}
            />
            {/* <Route path="/AI/tune/:id/" element={<TuneNavSideBar />}> */}
            <Route
              path="/AI/tune/:id/upload-document"
              element={<TuneAIUploadDocuments />}
            />
            <Route
              path="/AI/tune/:id/configure-test"
              element={<TuneAIConfigureAndTest />}
            />
            {/* </Route> */}
            <Route path="/AI/view-model/:id" element={<ViewModel />} />
            {/* AI Route End */}
        
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default AppRouter;
