import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Helmet>
                <style>{'body { background-color: #56CCF2; }'}</style>
            </Helmet>
            {/* Header Section */}
            <Header />

            {/* About Section */}
            <div className="about">
                <div className="about_container">
                    <div className="about_img_container">
                        <div className="about_img_card">
                        <img src="../../img/idealife_logo_transparentbg.png" alt="Logo"></img>
                        </div>
                    </div>
                    <div className="about_content">
                        <h1><b>Apa itu Idealyfe?</b></h1>
                        <p><b1><b>Idealyfe</b></b1> adalah suatu website dimana pengguna dapat mendapatkan kategori indeks BMI dirinya dengan memasukkan tinggi serta berat badannya. Melalui indeks BMI yang didapat, <i>user</i> dapat diarahkan ke tips and tricks yang relevan bagi <i>user</i> tersebut berdasarkan BMI-nya dengan tujuan agar <i>user</i> dapat mendapatkan berat badan yang ideal berdasarkan BMI-nya.</p>
                    </div>
                </div>
            </div>

            {/* Service Section */}
            <div className="services">
                <h1><b>Our Services</b></h1>
                <div className="services_wrapper">
                    <div className="services_card">
                        <h2><b>Healthy Tips</b></h2>
                        <p>Several Tips For Your <b>Body</b></p>
                        <Link className="services_btn" to="/tips"><button><b>Read More</b></button></Link>
                    </div>
                    <div className="services_card">
                        <h2><b>BMI Calculator</b></h2>
                        <p>Calculate Your <b>Body Mass Index</b></p>
                        <Link className="services_btn" to="/calculator"><button><b>Calculate Now</b></button></Link>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <Footer />
        </div>
    )
}

export default Home;