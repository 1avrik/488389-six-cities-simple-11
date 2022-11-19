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
import { cardsData, userEmail } from '../../mock/mock';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout userEmail={userEmail}/>}>
          <Route index element={<Main links="/" cardArr={cardsData}/>} />
          <Route path="login" element={<Login/>} />
          <Route path="offer/:id" element={<Offer/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
