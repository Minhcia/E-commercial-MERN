import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../redux/userRedux';

const ProfileWrapper = styled.div`
  background-color: #333;
`;


const Header = styled.header`
  background-color: white;
  color: white;
  padding: 20px;

  img {
    height: 25px;
    margin-right: 40px;
  }
  h1 {
    margin: 0;
    text-decoration: none;
    color: black
  }
  a {
    text-decoration: none
  }

`;

const Main = styled.main`
  margin: auto;
  min-height: 100vh;
  padding: 20px;
  padding-top: 40px;
  background-color: teal;
  align-items: center;
`;

const ProfileInfo = styled.section`
  margin: 30px;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    margin-top: 0;
  }

  .profile-details {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 20px;

    .avatar {
      img {
        width: 100px;
        height: 150px;
        border-radius: 50%;
      }
    }

    .user-details {
      color: white;
      border-radius: 5px;
      padding: 5px;

      h3 {
        margin-top: 0;
        min-height: 30px;
        z-index: 1; 
      }

      p {
        margin: 10px 0;
      }

      input[type='text'] {
        height: 30px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 5px;
        margin-bottom: 5px;
        width: 100%;
        box-sizing: border-box;
      }
    }
  }

  button {
    padding: 10px 20px;
    background-color: #e50914;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 60%;
    box-sizing: border-box;

    &:hover {
      background-color: #ff1e34;
    }
  }
`;

const ProfileSettings = styled.section`
  padding: 10px;
  color: rgb(219, 211, 211);
  width: 50%;
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;

      a {
        color: rgb(151, 146, 146);
        text-decoration: none;
      }
    }
  }
`;

const Profile = () => {
  const [getProfile, setgetProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('*****');
  const [username, setUsername] = useState('');
  const [telephone, setTelephone] = useState('');
  const [subscriptionPlan, setSubscriptionPlan] = useState('Premium');
  const id = useSelector(state => state.user.currentUser?._id);
  const token = useSelector(state => state.user.currentUser?.accessToken);
  const dispatch = useDispatch();
  console.log(id)

  useEffect(() => {
    const userPic = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/user/find/${id}`, {
          headers: {
            token: `Bearer ${token}`
          },
        });
        setgetProfile(res.data);
        console.log(res)
      } catch (err) {
        console.error(err);
      }
    };
    userPic();
  }, []);

  const [originalProfile, setOriginalProfile] = useState({});

  useEffect(() => {
    setOriginalProfile(getProfile);
  }, [getProfile]);

  const handleEditProfile = async () => {
    if (!isEditing) {
      setIsEditing(true);
      setEmail(originalProfile.email);
      setPassword(originalProfile.password);
      setUsername(originalProfile.username);
      setTelephone(originalProfile.telephone);
      setSubscriptionPlan(originalProfile.subscriptionPlan || 'Premium');
    } else {
      try {
        const updatedProfile = {
          email: email,
          password: password,
          username: username,
          telephone: telephone,
          subscriptionPlan: subscriptionPlan
        };

        const response = await axios.put(`http://localhost:5000/api/users/${id}`, updatedProfile, {
          headers: {
            token: `Bearer ${token}`
          },
        });

        console.log('Profile updated:', response.data);

        setIsEditing(!isEditing);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    };
  }

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <ProfileWrapper>
      <Header>
        <Link to={'/'} className="link">
          <h1>My Shop</h1>
        </Link>
      </Header>
      <Main>
        <ProfileInfo>
          <div className="profile-details">
            <div className="avatar">
              <img src='https://cdn.mos.cms.futurecdn.net/2NBcYamXxLpvA77ciPfKZW-1200-80.jpg.webp' alt="Profile Picture" />
            </div>
            <div className="user-details">
              <h3>{getProfile.username}</h3>
              <p>Email: {isEditing ? <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /> : (getProfile.email)}</p>
              <p>Password: {isEditing ? <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> : (getProfile.password || password)}</p>
              <p>Username: {isEditing ? <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> : (getProfile.username)}</p>
              <p>Telephone: {isEditing ? <input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)} /> : (getProfile.telephone || telephone)}</p>
            </div>
          </div>
          <button onClick={handleEditProfile}>{isEditing ? 'Save' : 'Edit Profile'}</button>
        </ProfileInfo>
        <ProfileSettings>
          <div className="settings-list">
            <ul>
              <li><a href="">Account Settings</a></li>
              <li><a href="/" onClick={handleLogout}>Sign Out</a></li>
            </ul>
          </div>
        </ProfileSettings>
      </Main>
    </ProfileWrapper>
  );
}

export default Profile;
