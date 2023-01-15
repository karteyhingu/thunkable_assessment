import React from "react";
import {Header} from "antd/lib/layout/layout";
import {Col, Row} from "antd";
import Assets from "../../../assets"
import Image from "../../../shared/components/Image";
import styles from "./HeaderScreen.style"
import DividerBorder from "../../../shared/components/DividerBorder";

type Props = {
  onAddProject: () => void;
}

const HeaderScreen = (props: Props) => {
  const {onAddProject} = props;
  return (
    <div>
      <Header style={styles.container}>
        <Row>
          <Col span={18} offset={3}>
            <Image src={Assets.images.logo} style={styles.logo}/>
            <p style={styles.text}>My Projects</p>
          </Col>
        </Row>
      </Header>
      <DividerBorder style={styles.divider}>
        <div style={styles.addIconContainer} onClick={() => onAddProject()}>
          <Image src={Assets.images.addIcon} />
        </div>
      </DividerBorder>
    </div>

  )
}

export default HeaderScreen;
