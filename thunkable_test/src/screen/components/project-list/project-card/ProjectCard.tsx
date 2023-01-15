import React, {useState} from "react";
import {Row, Col} from "antd";
import Image from "../../../../shared/components/Image";
import InputText from "../../../../shared/components/InputText";
import styles from "./ProjectCard.style";
import {Project} from "../../../../redux/types/ProjectSlice";
import Assets from "../../../../assets";
import Text from "../../../../shared/components/Text";
import InfoModal from "../../../../shared/components/InfoModal";

type Props = {
  project: Project
  onUpdateProject: (project: Project) => void
  onEditClick: (project: Project) => void
  onDeleteProject: (project: Project) => void
}

const ProjectCard = (props: Props) => {
  const {project, onUpdateProject, onEditClick, onDeleteProject} = props;
  const [name, setName] = useState(project.name);
  const [openModal, setOpenModal] = useState(false)

  const showModal = () => {
    setOpenModal(true)
  }

  const onOk = () => {
    onDeleteProject(project)
  }

  const onCancel = () => {
    setOpenModal(false)
  }

  const onEnterPress = () => {
    const newProject = {...project, name, isEdit: false};
    onUpdateProject(newProject);
  }

  return (
    <>
      <div style={styles.container}>
        <Row gutter={[8,8]} justify="center" style={styles.row}>
          <Col lg={8} md={12} sm={16} xs={24}>
            <Row align="middle">
              <Image src={Assets.images.projectIcon} style={styles.icons}/>
              <div>
                {
                  project.isEdit ?
                    <InputText name="pname" type="text" value={name} placeholder="Name your project" onEnterPressed={onEnterPress}
                               onChange={(e) => setName(e.target.value)} inputStyle={styles.inputText}/>
                    :
                    <Row>
                      <Text style={styles.text}>{project.name}</Text>
                      <Image
                        src={Assets.images.editIcon}
                        hoverSrc={Assets.images.editHoverIcon}
                        onClick={() => onEditClick(project)}
                        style={styles.editIcon}
                        hoverStyle={styles.editIcon}
                      />
                    </Row>
                }
              </div>
            </Row>
          </Col>
          <Col lg={8} md={8} sm={4} xs={20}>
            <Row justify="center">
              <span style={styles.text}>{project.date.toString()}</span>
            </Row>
          </Col>
          <Col lg={8} md={4} sm={4} xs={4}>
            <Row justify="end">
              <Image
                src={Assets.images.deleteIcon}
                hoverSrc={Assets.images.deleteHoverIcon}
                onClick={() => showModal()}
                style={styles.editIcon}
                hoverStyle={styles.editIcon}
              />
            </Row>
          </Col>
        </Row>
      </div>
      <InfoModal open={openModal} onCancel={onCancel} onOk={onOk}/>
    </>

  )
}

export default ProjectCard;
