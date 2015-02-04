
riot.tag('projects-list', '<div id="project-list"> <div each="{ projects }" class="projects-all"> <project-single project="{ this }"></project-single> </div> </div>', function(opts) {this.projects = opts.projects
});