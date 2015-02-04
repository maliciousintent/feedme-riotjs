
project-single
  
  .project.active
    .project-info
      span.time-left { timeLeft }
      span.price { project.amount }
      span.title { project.title }
      span.description { project.description }
    .project-actions
      button.pure-button
        i.icon-check
      button.pure-button.small-button
        i.icon-archive

  script.
    this.project = this.opts.project;
    this.timeLeft = moment(this.project.dueDate, 'x').fromNow()
