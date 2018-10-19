import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import legacyStyles from "./legacy.module.scss"
import aloe from "../assets/images/aloe_960x350.png"
import chameleon from "../assets/images/chameleon_960x350.png"
import dandelion from "../assets/images/dandelion.jpg"
import past from "../assets/images/past.jpg"
import present from "../assets/images/present.jpg"
import future from "../assets/images/future.jpg"

function setupSlides(data) {
  const content = [
    {
      title: data.frontmatter.title1,
      tense: data.frontmatter.caption1,
      class: `${legacyStyles.left}`,
      image: `${past}`,
    },
    {
      title: data.frontmatter.title2,
      tense: data.frontmatter.caption2,
		  image: `${present}`,
    },
    {
      title: data.frontmatter.title3,
      tense: data.frontmatter.caption3,
      class: `${legacyStyles.right}`,
      image: `${future}`,
    },
	  {
      title: data.frontmatter.title4,
      tense: data.frontmatter.caption4,
      class: `${legacyStyles.legacy}`,
      image: `${dandelion}`,
    },
];

  return content;
}

const Legacy = () => (
  <StaticQuery query = {graphql `
    query {
      block_1: markdownRemark(fileAbsolutePath: {regex: "/legacy_1/"}) {
        html
      }
      block_2: markdownRemark(fileAbsolutePath: {regex: "/legacy_2/"}) {
        html
      }
      block_3: markdownRemark(fileAbsolutePath: {regex: "/legacy_3/"}) {
          html
      }
      block_4: markdownRemark(fileAbsolutePath: {regex: "/legacy_4/"}) {
        html
      }
      slides: markdownRemark(fileAbsolutePath: {regex: "/slides/"}) {
        frontmatter {
          caption1
          title1
          caption2
          title2
          caption3
          title3
          caption4
          title4
        }
      }
    }
  `    
  }
  render = { data => (
      <section className={legacyStyles.legacy}>
          <div className="title-element">
              <div id="top"/>  
          </div>
          <Slider duration="2000" autoplay="5000" touchDisabled="true" infinite="true">
              {setupSlides(data.slides).map((item, index) => <div key={index} style={{height: "100vh", background: `url('${item.image}') no-repeat center center` }}>
                  <div className={`${legacyStyles.slideContent} ${item.class}`}>
                      <p className={legacyStyles.tense} data-tense={item.tense}>{item.tense}</p>
                      <p className={legacyStyles.tenseDivider}><span className={legacyStyles.past}></span><span className={legacyStyles.present}></span><span className={legacyStyles.future}></span></p>
                      <h2 className={legacyStyles.sliderTitle}>{item.title}</h2>
                      <div className={legacyStyles.sliderDesc}>{item.description}</div>
                  </div>
              </div>)}
          </Slider>
          <section className={legacyStyles.culture}>
            <h2 className={legacyStyles.title}>Our Culture</h2>
            <div className={legacyStyles.video}>
                    <iframe src="https://www.youtube.com/embed/YGE5euSZnbI" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Placeholder video"></iframe>
            </div>
          </section>
          <div className={legacyStyles.row}>
              <div className={`${legacyStyles.block} ${legacyStyles.black} ${legacyStyles.left}`} dangerouslySetInnerHTML={{__html: data.block_1.html}}></div>
              <div className={legacyStyles.block} style={{background: "url(" + aloe + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "none" }}></div>
          </div>
          <div className={legacyStyles.row}>
              <div className={`${legacyStyles.block} ${legacyStyles.left}`} style={{background: "url(" + chameleon + ")", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "none" }}></div>
              <div className={`${legacyStyles.block} ${legacyStyles.right}`} dangerouslySetInnerHTML={{__html: data.block_2.html}}></div>
          </div>
          <div className={legacyStyles.row}>
              <div className={`${legacyStyles.block} ${legacyStyles.left}`} style={{ background: "#307968", color: "#fff" }} dangerouslySetInnerHTML={{__html: data.block_3.html}}></div>
              <div className={`${legacyStyles.block} ${legacyStyles.right} ${legacyStyles.highlight}`} style={{ background: "#000", color: "#fff" }} dangerouslySetInnerHTML={{__html: data.block_4.html}}></div>
          </div>
      </section>
    )}
  />
)

export default Legacy