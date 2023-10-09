import React from "react";
import ZapatillasCard from "../../components/ZapatillaCard/ZapatillasCard";
import Banner from "../../components/banner/banner";
import Footer from "../../components/Footer/Footer";
import BeMember from '../../components/BeMember/BeMember'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from "../../assets/Image/Logo.png";
import zapa from '../../assets/Image/zapatillas.png'


import styles from "./Listado.module.css";

const ListadoBusqueda = () => {
  return (
    <>
      <div className={styles.containerList}>
        <Banner />

        <div className={styles.homediv}>
          <Link className={styles.homebtn} to={'/home'}><p><img src={zapa} alt="" width={30}/> Home</p></Link>
          <p className={styles.men}>MEN</p>
        </div>
        <div className={styles.zapatilla}>
          <ZapatillasCard />
        </div>
        <BeMember />
        <Footer />
      </div>
    </>
  );
};

export default ListadoBusqueda;
