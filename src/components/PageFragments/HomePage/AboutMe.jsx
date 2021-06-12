import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello !! My name is Rosny Ratsianompo. I'm a software developer who is
    passionate about various web technologies. I like to experiment with different web
    technologies. I have an experience of nearly two years using Javascript,HTML/CSS and React.I love building website and application and my desire is to experience new technology to my project.
    I used to update my blog about my sprint in learning technology, which you are free to look at. 
    `,
  paraTwo: 'Currently, I am still progressing my knowledge at ONja, training to get used to use different frameworks. In web, there is always new thing to learn, which I want to go through and dev into them.',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and brought up in"
            textH3="Amparafaravola, Andromba"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="smoothie.png"
            alt="smoothie image"
            textH4="Love natural juice"
            textH3="Natural Juice + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="music.png"
            alt="music note image"
            textH4="Love Music"
            textH3="Music for life"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Web learner"
            textH3="Thanks to the NGO Onja"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
