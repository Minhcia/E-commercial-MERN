import { useEffect } from 'react';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Singleproduct from './pages/Singleproduct';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import { loginSucess, logOut } from './redux/userRedux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.user.currentUser);
  // console.log(user)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(loginSucess(JSON.parse(storedUser)));
    } else {
      dispatch(logOut());
    }
  }, [dispatch]);
  return (
    
    <Router>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route
            path="/login"
            element={user ? <Navigate to="/" replace={true} /> : <Login /> }
          />
          <Route path='/products/:category' element={<ProductList/>}/>
          <Route path='/register' element={<Register/>} />
          <Route path='/product/:id' element={<Singleproduct/>}/>
          <Route path='/cart' element={<Cart/>}/>

          {user &&(<>
            <Route path='/' element={<Home/>}/>
            <Route path='/products/:category' element={<ProductList/>}/>
            <Route path='/product/:id' element={<Singleproduct/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/:id' element={<Profile/>} />       
          </>
          )}
          </Routes>
    </Router>
  )
}

export default App