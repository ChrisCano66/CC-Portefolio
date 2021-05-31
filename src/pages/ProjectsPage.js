// REACT
import React, { useState } from 'react';
// COMPONENT
import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';
// carousel
import Slider from 'react-slick';
// Images
import gardenkeep from '../assets/img/gardenkeep.png';
import nextcloud from '../assets/img/nextcloud.png';
import portefolio from '../assets/img/porte-folio.png';
import penses_y from '../assets/img/penses-y.png';
import pmt from '../assets/img/web-design.png';
import meteoapp from '../assets/img/web-design.png';
import mdp from '../assets/img/mdp-checker.png';
import todo from '../assets/img/todo.png';
import { FaArrowRight, FaArrowLeft} from 'react-icons/fa';



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
        autoplaySpeed: 8000,
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
                            title="GardenKeep - MERN - En cours de production"
                            img={gardenkeep}
                            text="Gestionnaire de potager et de jardin en vue d'obtenir une vue d'ensemble d'un jardin et potager/verger ainsi que des statistiques de production."
                            githubLink="https://www.google.com/"
                        />
                    </div>
                    <div className={cardIndex === 1 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="NextCloud/External - PHP/JS/Handlebars"
                            img={nextcloud}
                            text="Développement effectuer lors de mon stage CNAM à la FCCL de Vandoevre-lès-Nancy. Ajout d'une fonctionnalité sur le plug-in External (possibilité d'ouvrir des liens externes dans un nouvel onglet) pour le logiciel NextCloud."
                            githubLink="https://www.google.com/"
                        />
                    </div>
                    <div className={cardIndex === 2 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="Portefolio - React"
                            img={portefolio}
                            text="Le porte-folio que vous contemplez ! Application full Front-end."
                            githubLink="https://github.com/ChrisCano66/CC-Portefolio"
                        />
                    </div>
                    <div className={cardIndex === 3 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="Program Manager Tool - MERN"
                            img={pmt}
                            text="Application web ressemblant à l'application Trello. Permet de créer des listes de tâches à effectuer. Permet un suivit lors du développement d'une application. Application avec une base de données MongoDB."
                            githubLink="https://github.com/ChrisCano66/PMT"
                        />
                    </div>
                    <div className={cardIndex === 4 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="Penses-Y - React/Symfony"
                            img={penses_y}
                            text="Application permettent de créer des penses-bêtes. Application avec une base de données MySql."
                            githubLink="https://github.com/ChrisCano66/Penses_Y"
                        />
                    </div><div className={cardIndex === 5 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="Meteo App - React"
                            img={meteoapp}
                            text="Simple application Météo qui fut un essai pour de futeur projet. La fonctionnalité sera rajouté au projet GardenKeep."
                            githubLink="https://github.com/ChrisCano66/MeteoApp"
                        />
                    </div>
                    <div className={cardIndex === 6 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="Password Cheacker - Python"
                            img={mdp}
                            text="Application de bureau en Python qui permet de vérifier si vos mots de passe ont fuiter sur le net et s'ils sont à l'épreuve."
                            githubLink="https://www.google.com/"
                        />
                    </div>
                    <div className={cardIndex === 7 ? "slide activeSlide" : "slide"}>
                        <ProjectCard
                            title="Pense-Bête - Python"
                            img={todo}
                            text="Application de bureau permettent de créer des penses-bêtes. Application avec une base de données MySql."
                            githubLink="https://www.google.com/"
                        />
                    </div>
                </Slider> 
            </div>

        </div>
    )
}

export default ProjectsPage;
