// REACT
import React from 'react'
import Particles, { ShapeType } from 'react-particles-js' 

function Particules() {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 100,
                        density: {
                            enable: false
                        }
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            speed: 4,
                            size_min: 0.3
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        random: true,
                        speed: 1,
                        direction: "top",
                        out_mode: "out",
                    },
                    color: {
                        value: "#e76f51"
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble"
                        },
                        onclick: {
                            enable: true,
                            mode: "repulse"
                        }
                    },
                    modes: {
                        bubble: {
                            distance: 250,
                            duration: 2,
                            size: 0,
                            opacity: 0
                        },
                        repulse: {
                            distance: 400,
                            duration: 4
                        }
                    }
                }
            }}
        />
    )
}

export default Particules
