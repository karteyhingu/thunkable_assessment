import {Project} from "../../redux/types/ProjectSlice";
import {projectAction} from "../../redux/reducers/projectSlice";
import {useDispatch, useSelector} from "react-redux";

const useProjects = () => {
  const projects = useSelector<any, Array<Project>>(state => state.project.projects);
  const dispatch = useDispatch();

  const addProject = (project: Project) => {
    const newProjectsList = [...projects];
    newProjectsList.push(project);
    dispatch(projectAction.updateProjects(newProjectsList));
  }

  const updateProject = (project: Project) => {
    const newProjectsList = [...projects]
    const foundProjectIndex = newProjectsList.findIndex(prj => prj.id === project.id);
    if (foundProjectIndex !== -1) {
      newProjectsList[foundProjectIndex] = project
    }
    dispatch(projectAction.updateProjects(newProjectsList));
  }

  const toggleEditMode = (projectId: string, enableEditMode: boolean) => {
    const newProjectsList = [...projects]
    const foundProjectIndex = newProjectsList.findIndex(prj => prj.id === projectId);
    if (foundProjectIndex !== -1) {
      // have to do this way due to readonly access of isEdit
      const project = {...newProjectsList[foundProjectIndex]}
      project.isEdit = enableEditMode;
      newProjectsList[foundProjectIndex] = project
    }
    dispatch(projectAction.updateProjects(newProjectsList));
  }

  const removeProjectById = (projectId: string) => {
    const newProjectsList = [...projects].filter(prj => prj.id !== projectId);
    dispatch(projectAction.updateProjects(newProjectsList));
  }

  const onDragProject = (fromIndex, toIndex) => {
    if (toIndex < 0) return; // Ignores if outside designated area
    
    const newProjectsList = [...projects];
    const project = newProjectsList.splice(fromIndex, 1)[0];
    newProjectsList.splice(toIndex, 0, project);
    dispatch(projectAction.updateProjects(newProjectsList))
  }

  const deleteAllProjects = () => {
    dispatch(projectAction.clear());
  }

  return {projects, addProject, updateProject, toggleEditMode, removeProjectById, onDragProject ,deleteAllProjects}
}

export default useProjects;
