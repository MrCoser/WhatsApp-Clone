import React,{useContext} from 'react'
import {AppBar,Toolbar,styled,Box} from '@mui/material';
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/ChatDialog';

//import Login component
import LoginDialog from './Account/LoginDialog';
//import { height } from '@mui/system';

//define custom css using material UI
const Header=styled(AppBar)`
    height: 125px;
   background-color:#00A884;
   box-shadow:none;
`;

const Component=styled(Box)`
height:100vh;
background:#DCDCDC;
`

const LoginHeader=styled(AppBar)`
background:#00bfa5;
height:200px;
box-shadow:none;
`;


export default function Messanger() {

  const {account}=useContext(AccountContext);

  return (
    <Component>
      {
        account?
        <>
       <Header>  
        <Toolbar>
        </Toolbar>
        </Header>
        <ChatDialog></ChatDialog>
        </>
        :
        <>
      <LoginHeader>
        <Toolbar/>
        </LoginHeader>
        <LoginDialog/>
        </>
      }
   </Component>
    
  )
}
