import React from 'react'
import { userName } from '../proxyState'
import { Navigate } from "react-router-dom";
import { useSnapshot } from 'valtio';

const PrivateRoute = ({children}) => {

  const snap = useSnapshot(userName)

  return snap.name ? children : <Navigate to={'/'}/>
}

export default PrivateRoute
