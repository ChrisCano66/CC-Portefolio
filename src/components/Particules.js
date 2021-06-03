// REACT
import React from 'react'
import Particles from 'react-particles-js' 

function Particules() {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 60,
                        density: {
                            enable: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            speed: 3,
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
                        value: "#f0ffff"
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
                            distance: 200,
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
