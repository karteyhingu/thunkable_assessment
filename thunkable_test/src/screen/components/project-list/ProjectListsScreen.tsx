import React from "react";
import {List} from 'antd';
import ReactDragListView from "react-drag-listview";
import useProjects from "../../../shared/hooks/useProjects";
import {Project} from "../../../redux/types/ProjectSlice";
import ProjectCard from "./project-card/ProjectCard";

const ProjectListsScreen = () => {

  const {projects, updateProject, removeProjectById, toggleEditMode, onDragProject} = useProjects();

  const onUpdateProject = (project: Project) => {
    updateProject(project);
  }

  const onEditProject = (project: Project) => {
    toggleEditMode(project.id, !project.isEdit);
  }

  const onProjectDelete = (project: Project) => {
    removeProjectById(project.id);
  }

  const onDragEnd = (fromIndex, toIndex) => {
    onDragProject(fromIndex, toIndex)
  };

  return (
    <>
      <ReactDragListView
        nodeSelector=".ant-list-item.draggble"
        onDragEnd={onDragEnd}
      >
        <List
          size="default"
          bordered
          dataSource={projects}
          renderItem={(project) =>
            <List.Item style={{padding: "12px 7px"}} className="draggble">
              <ProjectCard key={project.id} project={project} onUpdateProject={onUpdateProject} onEditClick={onEditProject}
                           onDeleteProject={onProjectDelete}/>
            </List.Item>}
        />
      </ReactDragListView>
    </>
  )
}

export default ProjectListsScreen;
