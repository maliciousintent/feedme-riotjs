
projects-list
  
  #project-list
    .projects-all(each="{ projects }")
      project-single(project="{ this }")
  
  script.
    this.projects = opts.projects