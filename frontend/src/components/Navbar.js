import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/userRedux';
import { publicRequest } from '../requestMethod';


const Container = styled.div`
  height: auto;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;



const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`;

const ProfileContainer = styled.div`
  position: relative;
`;

const OptionsContainer = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: transparent;
  padding: 2px;
  /* box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); */
  z-index: 1;

  ${ProfileContainer}:hover & {
    display: block;
  }
`;







const Navbar = () => {

  // USER
  const [getPic, setgetPic] = useState({});
  const token = useSelector(state => state.user.currentUser?.accessToken);
  const id = useSelector(state => state.user.currentUser?._id);
  const username = useSelector(state => state.user.currentUser?.username);
  const dispatch = useDispatch();
  // console.log(token)

  useEffect(()=>{
    const userPic = async ()=>{
      try {
        const res = await axios.get("http://localhost:5000/api/user/find/" + id, {
          headers: {
            token:"Bearer "+ token   
          },
        });
        setgetPic(res.data)
        console.log(res)
      } catch (err) {
        console.error(err);
      }
    }; 
    userPic()
  },[]);
  
  const handleLogout = () => {
    dispatch(logOut());
  };





  // CART
  const quantity = useSelector(state => state.cart.quantity);
  const [product, setProduct] = useState({});
  const [searchQuery, setSearchQuery] = useState('');



  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };



  // console.log(quantity)
  
  return (
    <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
      </Left>
      <Center>
        <Link to={`/`} style={{ textDecoration: 'none', color:'black'}} >
          <Logo>MY SHOP</Logo>
        </Link>
      </Center>
      <Right>
        {username ? (
              <>
                <Link to={`/profile`} style={{ textDecoration: 'none', color: 'black' }}> <MenuItem>{username}</MenuItem></Link>
              </>
            ) : (
              <>
                <Link to={`/register`} style={{ textDecoration: 'none', color: 'black' }} ><MenuItem>REGISTER</MenuItem></Link>
                <Link to={`/login`} style={{ textDecoration: 'none', color: 'black' }} ><MenuItem>SIGN IN</MenuItem></Link>
                <Link to={`/cart`}></Link>
              </>
            )}



        {/* <Link to={`/register`} style={{ textDecoration: 'none', color:'black'}} ><MenuItem>REGISTER</MenuItem></Link>
        <Link to={`/login`} style={{ textDecoration: 'none', color:'black'}} ><MenuItem>SIGN IN</MenuItem></Link> */}
        <Link to={`/cart`}>
          <MenuItem>  
                <Badge badgeContent={quantity} color="primary">
                    <ShoppingCartIcon color="action" />
                </Badge>
          </MenuItem>
        </Link>
        <ProfileContainer>
            <ArrowDropDownIcon className="icon" />
            <OptionsContainer>
              <MenuItem>Settings</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </OptionsContainer>
          </ProfileContainer>
      </Right>
    </Wrapper>
  </Container>
  )
}

export default Navbar