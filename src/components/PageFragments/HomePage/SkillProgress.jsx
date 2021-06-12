import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={90}
          text="HTML5/CSS"
        />
        <ProgressBar
          percent={85}
          text="React"
        />
        <ProgressBar
          percent={70}
          text="Redux"
        />
        <ProgressBar
          percent={50}
          text="Typescript"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
