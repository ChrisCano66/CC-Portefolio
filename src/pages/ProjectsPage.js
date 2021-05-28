// REACT
import React, { useState } from 'react';
// COMPONENT
import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';
// carousel
import Slider from 'react-slick';
// Images
import WebDesign from '../assets/img/web-design.png';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa'


function ProjectsPage() {

    // constante d'état indiquant l'indexdes chaque card
    const [cardIndex, setCardIndex] = useState(0);

    // création des flèches de navigation pour le carousel
    const NextArrow = ({onClick}) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight/>
            </div>
        );
    };
    const PrevArrow = ({onClick}) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft/>
            </div>
        );
    };
    
    // paramètres pour le carousel
    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 1,
        speed: 300,
        centerMode: true,
        centerPadding: "80px",
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        beforeChange: (current, next) => setCardIndex(next),
    };

    return (
        <div className="projects-page">

            <Title lettre1={'M'} reste1={'es '} lettre2={'P'} reste2={'rojects'}/>

            <div className="caroussel">
                <Slider {...settings}>
                    <div className={cardIndex === 0 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="GardenKeep"
                            img={WebDesign}
                            text="Gestionnaire de potager et de jardin en vue d'obtenir une vue d'ensemble d'un jardin et potager/verger ainsi que des statistiques de production. (Projet actuellement en phase de conception)."
                            githubLink="https://www.google.com/"
                        />
                    </div>
                    <div className={cardIndex === 1 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="GardenKeep"
                            img={WebDesign}
                            text="Gestionnaire de potager et de jardin en vue d'obtenir une vue d'ensemble d'un jardin et potager/verger ainsi que des statistiques de production. (Projet actuellement en phase de conception)."
                            githubLink="https://www.google.com/"
                        />
                    </div>
                    <div className={cardIndex === 2 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="GardenKeep"
                            img={WebDesign}
                            text="Gestionnaire de potager et de jardin en vue d'obtenir une vue d'ensemble d'un jardin et potager/verger ainsi que des statistiques de production. (Projet actuellement en phase de conception)."
                            githubLink="https://www.google.com/"
                        />
                    </div>
                    <div className={cardIndex === 3 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="GardenKeep"
                            img={WebDesign}
                            text="Gestionnaire de potager et de jardin en vue d'obtenir une vue d'ensemble d'un jardin et potager/verger ainsi que des statistiques de production. (Projet actuellement en phase de conception)."
                            githubLink="https://www.google.com/"
                        />
                    </div><div className={cardIndex === 4 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="GardenKeep"
                            img={WebDesign}
                            text="Gestionnaire de potager et de jardin en vue d'obtenir une vue d'ensemble d'un jardin et potager/verger ainsi que des statistiques de production. (Projet actuellement en phase de conception)."
                            githubLink="https://www.google.com/"
                        />
                    </div>
                    <div className={cardIndex === 5 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="GardenKeep"
                            img={WebDesign}
                            text="Gestionnaire de potager et de jardin en vue d'obtenir une vue d'ensemble d'un jardin et potager/verger ainsi que des statistiques de production. (Projet actuellement en phase de conception)."
                            githubLink="https://www.google.com/"
                        />
                    </div>
                </Slider> 
            </div>

        </div>
    )
}

export default ProjectsPage;
