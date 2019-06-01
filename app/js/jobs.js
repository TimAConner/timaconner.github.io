(() => {
  const createJob = (title, place, date, description) => {
    return {
      title,
      place,
      date,
      description,
    }
  };

  const appendChild = (parent, elementType, elementContent) => {
    const elementNode = document.createElement(elementType);
    const elementContentNode = document.createTextNode(elementContent);
    elementNode.appendChild(elementContentNode);
    parent.appendChild(elementNode);
  };

  const currentJobs = [
    createJob('Software Engineer II', 'Asurion', 'March 2019 - Present', 'Planning, designing, and developing features for web apps.'),
    createJob('Mentor Coordinator', 'Code Apprentice', 'Jan 2019 – Present', 'Code Apprentice partners with experienced developers to provide high school students the opportunity to learn coding fundamentals and get firsthand experience with technology.'),
    createJob('Full Stack Software Engineer', 'dealWIP', 'June 2018 - March 2019', "Sole backend developer, responsible for all backend code, brought on to rewrite entire REST API's existing security & features, and build new features, while the app was being demoed to investors and in beta use. "),
  ];

  const overFlowJobs = [
    createJob('Database Programmer (Contractor)', 'Todd Dexter & Associates', 'Oct 2017 – June 2018', 'Completed contract to remotely perform monthly data updates and quality control on multiple database of millions of rows. '),
    createJob('Database Programmer (Contractor)', 'Mission Resource Alliance', 'Dec 2014 – June 2016', 'Completed contract to remotely perform monthly data updates and quality control on multiple database of millions of rows. '),
    createJob('Software Development Intern', 'Global Pueblo Solutions | Chandigarh, India ', 'June 2014 – Aug 2014', 'Completed a six-week summer internship in Chandigarh, India. Developed employee and time management systems for in-house use.'),
    createJob('Apprentice Software Developer', 'Nashville Software School', 'Nov 2017 - May 2018', 'Intensive full-time software development bootcamp focusing on full stack development fundamentals and problem solving with the final half of the program being executed in a simulated company environment with Scrum methodology.'),
    createJob('Esports Broadcaster', 'Freelance', '2013 – 2017', 'Play-by-Play commentary for StarCraft 2 events. Broadcasted 25+ tournaments. Commentated Cheeseadelphia 2, 3, and 4 for NerdStreetGamers, Philadelphia, PA; and PSISTORM Cup #3 and #4 for PSISTORM Gaming, Fairfax, VA.'),
  ];

  const currentJobsSection = document.getElementById('currentJobs');
  currentJobs.forEach((job) => {
    const article = document.createElement('article');
    
    appendChild(article, 'h3', job.title);
    appendChild(article, 'h4', job.place);
    appendChild(article, 'h5', job.date);
    appendChild(article, 'p', job.description);
    
    currentJobsSection.appendChild(article);
  });
  
  const jobOverflowSection = document.getElementById('jobOverflow');
  overFlowJobs.forEach((job) => {
    const article = document.createElement('article');
    
    appendChild(article, 'h3', job.title);
    appendChild(article, 'h4', job.place);
    appendChild(article, 'h5', job.date);
    appendChild(article, 'p', job.description);
    
    jobOverflowSection.appendChild(article);
  });

})();