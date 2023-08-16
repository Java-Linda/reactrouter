import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blue from './blue';
import Red from './red';
import Yellow from './Yellow';

export default function Mainroutes() {
    return (
    <Routes>
         <Route path = "/" element={ < Home /> }/>
         <Route path = "/blue" element={ < Blue /> }/>
         <Route path = "/red" element={ < Red /> }/>
         <Route path = "/yellow" element={ < Yellow /> }/>
      </Routes>
    )
}