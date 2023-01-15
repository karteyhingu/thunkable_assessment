export interface Project {
  id: string;
  name: string;
  isEdit: boolean;
  date:Date
}

export interface ProjectSlice {
  projects: Project[]
}
