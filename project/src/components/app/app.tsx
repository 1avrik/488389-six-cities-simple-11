import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Layout from '../layout/layout';
import NotFound from '../not-found/not-found';
import { appProps } from '../../types/types';

function App(props: appProps): JSX.Element {
  const {userEmail, offers, reviews} = props;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout userEmail={userEmail}/>}>
          <Route index element={<Main links="/" offers={offers}/>} />
          <Route path="login" element={<Login/>} />
          <Route path="offer/:id" element={<Offer offers={offers} reviews={reviews}/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
