import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from '../firebase';

//export const isLoggedIn = false;//useAuthState kullandığımız için buna gerek kalmadı


const MainLayout = () => {
    const [user, isLoading] = useAuthState(auth);
    if(isLoading)
        return <h1>Loading...</h1>
    //if(!isLoggedIn)
    if(!user)
        return <Navigate to = "/sign-in" replace/>;
  return (
  <Outlet/>//Normal Home sayfası
  )
}

export default MainLayout
