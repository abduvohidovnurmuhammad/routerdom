import React from 'react';
import Header from '../components/headers/header';
import Footer from '../components/footers/footer';
import { Outlet } from 'react-router-dom';
export  const MainLoyaut = () => {
    return (
      <>
      <header>

      <Header/>
      </header>

      <main>
        <Outlet/>
      </main>
        <footer>

      <Footer/>
        </footer>
      </>
    );
}


