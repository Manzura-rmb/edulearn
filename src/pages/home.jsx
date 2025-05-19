import React from "react";
import { Navbar, CarouselComp, CardsCamp,About, Footer } from "../components"

export const Home = () => {
    return(
        <div className="home">
            <Navbar/>
            <CarouselComp/>
            <CardsCamp/>
            <About/>
            <Footer/>
        </div>
    )
}