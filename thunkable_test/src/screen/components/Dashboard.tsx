import React from "react";
import dateFormat from "dateformat";
import useProjects from "../../shared/hooks/useProjects";
import HeaderScreen from "./Header/HeaderScreen";
import ProjectListsScreen from "./project-list/ProjectListsScreen";
import styles from "./styles";

const Dashboard = () => {
  const {addProject} = useProjects();

  const onAddProject = () => {
    const id = Math.floor(Math.random() * 100).toString();
    const date = new Date();
    const newDate = dateFormat(date,"mmmm dd, yyyy  h:MMtt")
    addProject({id: id, name: "", isEdit: true,date:newDate})
  }

  return (
    <div>
      <HeaderScreen onAddProject={onAddProject} />
      <div style={styles.container}>
          <ProjectListsScreen />
      </div>
    </div>

  )
}

export default Dashboard;
