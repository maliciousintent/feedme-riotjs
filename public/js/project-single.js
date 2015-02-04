
riot.tag('project-single', '<div class="project active"> <div class="project-info"><span class="time-left">{ timeLeft }</span><span class="price">{ project.amount }</span><span class="title">{ project.title }</span><span class="description">{ project.description }</span></div> <div class="project-actions"> <button class="pure-button"><i class="icon-check"></i></button> <button class="pure-button small-button"><i class="icon-archive"></i></button> </div> </div>', function(opts) {
    this.project = this.opts.project;
    this.timeLeft = moment(this.project.dueDate, 'x').fromNow()
  
});