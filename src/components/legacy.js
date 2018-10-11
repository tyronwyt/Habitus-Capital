import React from "react"

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Particles from 'react-particles-js';

import legacyStyles from "./legacy.module.scss"
import aloe from "../assets/images/aloe_960x350.png"
import chameleon from "../assets/images/chameleon_960x350.png"
import dandelion from "../assets/images/dandelion.jpg"
import glassBall from "../assets/images/glassBall.jpg"
import bullBear from "../assets/images/bullBearMountain.jpg"
import trees from "../assets/images/trees.jpg"

const particleParams = {
    particles: {
        number: {
            value: 50,
            density: {
            enable: true,
            value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
            width: 0,
            color: "#000000"
            },
            polygon: {
            nb_sides: 5
            }
        },  
        line_linked: {
            shadow: {
                enable: true,
                color: "#fff",
                blur: 5
            }
        },
    },
    retina_detect: true,
    

}

const content = [
    {
        title: 'We Invest in; our culture, our dynamic edges and the consistent evolution of our successful habits',
        tense: "Past",
		class: `${legacyStyles.left}`,
		image: `${glassBall}`,
    },
    {
        title: 'You Invest in; our vision of the future',
        tense: "Present",
		image: `${bullBear}`,
    },
    {
        title: 'Together; We achieve naturally, high-performance',
        tense: "Future",
        class: `${legacyStyles.right}`,
		image: `${trees}`,
    },
	{
        title: "'Keep only what remains', nourished and blessed by the sun and soils'",
        tense: "Habitus Capital",
		// description:
		// 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
		image: `${dandelion}`,
    },
];

const Legacy = () => (
    <section className={legacyStyles.legacy}>
        <div id="title-element">
            <div id="top"/>  
        </div>
        <Slider duration="2000" autoplay="5000">
            {content.map((item, index) => <div key={index} style={{height: "100vh", background: `url('${item.image}') no-repeat center center` }}>
                <Particles
                params={particleParams}
                style={{
                    width: '100%',
                    position: 'absolute',
                    height: "calc(100vh - 100px)",
                }}
                />
                <div className={`${legacyStyles.slideContent} ${item.class}`}>
                    <p className={legacyStyles.tense}>{item.tense}</p>
                    <h2 className={legacyStyles.sliderTitle}>{item.title}</h2>
                    <div className={legacyStyles.sliderDesc}>{item.description}</div>
                </div>
            </div>)}
        </Slider>
        <h2 className={legacyStyles.title}>Our Culture</h2>
        <div className={legacyStyles.video}>
                <iframe src="https://www.youtube.com/embed/YGE5euSZnbI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Placeholder video"></iframe>
        </div>
        <div className={legacyStyles.row}>
            <div className={`${legacyStyles.block} ${legacyStyles.black} ${legacyStyles.left}`}>
                <h3 className={legacyStyles.header}>Our DNA</h3>
                <p>
                    Habitus Capital mimics Natures’ truths. Unique talents co-exist within a conducive
                    environment, striving toward efficiency and optimisation. Individual strengths are
                    harnessed, weaknesses overcome by adding human capital, thus creating a
                    symbiotic association. The collective Team adopts instinctive habits and smart
                    processes that enforce a system of constant evolution. Thus, high-performance is a
                    function of optimising the habitual processes. Through weakness we adapt, evolve
                    and grow. Through strength, we thrive.
                </p>
            </div>
            <div className={legacyStyles.block} style={{background: "url(" + aloe + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "none" }}>
            </div>
        </div>
        <div className={legacyStyles.row}>
            <div className={`${legacyStyles.block} ${legacyStyles.left}`} style={{background: "url(" + chameleon + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "none" }}>
               
            </div>
            <div className={`${legacyStyles.block} ${legacyStyles.right}`}>
                <h3 className={legacyStyles.header}>Our Purpose</h3>
                <p>
                    To <strong>build</strong> an <strong>exclusive team</strong> of <strong>talented individuals</strong> that share a common <strong>ideology</strong> and create a <strong>unique cultural identity</strong> through practiced habits.
                </p>
            </div>
        </div>
        <div className={legacyStyles.row}>
            <div className={`${legacyStyles.block} ${legacyStyles.left}`} style={{ background: "#307968", color: "#fff" }}>
                <h3 className={legacyStyles.header}>Vision Statement</h3>
                <p>
                    Our Cultural Model will become world renowned and our practices adopted globally.<br/>
                    Our Unique Environment will be designed and built by the team, for the team.<br/>
                    We will Create tools that unlock true human potential, leading to world class performers.<br/>
                    We will Re-invent the manner in which profits are extracted from financial markets.<br/>
                    We will Outperform Constantly, Consistently and Ethically.
                </p>
            </div>
            <div className={`${legacyStyles.block} ${legacyStyles.right}`}  style={{ background: "#000", color: "#fff" }}>
                <h3 className={legacyStyles.header}>Individual Ethos</h3>
                <p>
                    <span className={legacyStyles.highlight}>H</span>Humility<br/>
                    <span className={legacyStyles.highlight}>A</span>Accountability<br/>
                    <span className={legacyStyles.highlight}>B</span>Bravery<br/>
                    <span className={legacyStyles.highlight}>I</span>Integrity<br/>
                    <span className={legacyStyles.highlight}>T</span>Timely<br/>
                    <span className={legacyStyles.highlight}>U</span>Understanding<br/>
                    <span className={legacyStyles.highlight}>S</span>Selfless
                </p>
            </div>
        </div>
    </section>
)

export default Legacy