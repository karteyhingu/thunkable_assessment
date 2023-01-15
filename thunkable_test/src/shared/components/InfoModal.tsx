import React from 'react';
import {Button, Modal, Row,Col} from 'antd';
import Image from "./Image";
import Assets from "../../assets";
import {ObjOfCss} from "../../app-types";

type Props = {
  open:boolean,
  onOk?:(e) => void,
  onCancel?:(e) => void
}

const styles:ObjOfCss = {
  icon:{
    height:"22px",
    width:"22px",
    marginTop:"3px"
  },
  text:{
    margin:'0px',
    fontSize:"16px",
    color:"#000000D9"
  },
  subText:{
    fontSize:"16px",
    color:"#00000080"
  }
}

const InfoModal = (props:Props) => {
  const{open, onOk,onCancel} = props

  return(
    <Modal
      open={open}
      onCancel={onCancel}
      footer={[
        <Button onClick={onCancel}>No</Button>,
        <Button type="primary" onClick={onOk}>Yes</Button>
      ]}
    >
      <Row justify="start">
        <Col xs={3} sm={2} md={2} lg={2} >
          <Image src={Assets.images.questionIcon} style={styles.icon} />
        </Col>
        <Col xs={21} sm={22} md={22} lg={22} >
          <p style={styles.text}>Are you sure you want to delete this project?</p>
          <p style={styles.subText}>This action can't be undone.</p>
        </Col>
      </Row>
    </Modal>
  )
}

export default InfoModal;

