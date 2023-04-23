/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {useSelector} from "react-redux";
import HomeHeaderAnonymous from "../components/home-header-anonymous";
import HomeHeaderUser from "../components/home-header-user";

function HomePage () {
  const { currentUser } = useSelector((state) => state.currentUser);

    return (
        <>
          {
            currentUser ?  <HomeHeaderUser/> : <HomeHeaderAnonymous/>
          }
        </>
    );
}
export default HomePage;