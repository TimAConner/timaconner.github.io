(() => {
  const createJob = (title, place, date, description, moreInfo) => {
    return {
      title,
      place,
      date,
      description,
      moreInfo
    }
  };

  const appendChild = (parent, elementType, elementContent, elementClass) => {
    const elementNode = document.createElement(elementType);
    if(typeof elementClass !== 'undefined') elementNode.classList.add(elementClass);
    // const elementContentNode = document.createTextNode(elementContent);
    elementNode.innerHTML = elementContent;
    parent.appendChild(elementNode);
  };

  const currentJobs = [
    createJob('Software Engineer II', 'Asurion', 'March 2019 - Present', 'Planning, designing, and developing full-stack features for web apps.', `
    <ul>
      <li>TypeScript</li>
      <li>Node</li>
      <li>React</li>
      <li>Redux</li>
      <li>Redux-Saga</li>
      <li>Jest</li>
      <li>MySQL</li>
      <li>Redis</li>
      <li>Terraform</li>
      <li>Docker</li>
      <li>Kibana</li>
      <li>AWS: Aurora</li>
      <li>Lambda</li>
      <li>ECS</li>
      <li>ECR</li>
      <li>EC2</li>
      <li>RDS</li>
      <li>KMS</li>
      <li>Elasticache</li>
      <li>Load Balancing</li>
      <li>Route 52</li>
    </ul>
    `),
    createJob('Mentor Coordinator', 'Code Apprentice', 'Jan 2019 – Present', 'Code Apprentice partners with experienced developers to provide high school students the opportunity to learn coding fundamentals and get firsthand experience with technology.', `
    <ul>
    <li>Act as a point of contact between mentors, students, and Code Apprentice.</li>
    <li>Develop curriculum for students.</li>
    <li>Check in weekly with each mentor and student.</li>
    </ul>
`),
    createJob('Full Stack Software Engineer', 'dealWIP', 'June 2018 - March 2019', "Sole backend developer, responsible for all backend code, brought on to rewrite entire REST API's existing security & features, and build new features, while the app was being demoed to investors and in beta use. ", `
    <ul>
	<li>Architect, test, and build Node / Express API</li>
	<li>Architect & build PSQL database</li>
	<li>Build serverless API with AWS Lambda</li>
	<li>Write unit tests for Node backend using Mocha, Chai, Sinon and Jest</li>
	<li>Conform API to OWASP security standards and GDPR</li>
	<li>Write API documentation</li>
	<li>Write and optimize PSQL queries</li>
	<li>Write migrations for PSQL database</li>
	<li>Work with existing MongoDB</li>
	<li>Implement AWS Cognito and JWT security</li>
	<li>Design & implement file upload system with AWS S3</li>
	<li>Design & implement feature flag / permissions system</li>
	<li>Design & implement endpoint validator / sanitizer</li>
	<li>Design & implement API error logging system and integrate with Sentry API</li>
	<li>Implement Mailgun API</li>
	<li>Write tickets for backend / manage backend sprints</li>
	<li>Develop new features with product team</li>
	<li>Modify existing Terraform setup</li>
	<li>Manage Heroku Pipelines</li>
	<li>Manage AWS EBS, EC2, CodeBuild, and CodePipeline</li>
	<li>Supervise contractors</li>
	<li>On-board new developers</li>
	<li>Developing AngularJS web-app</li>
	<li>Developing React / Redux web-app</li>
</ul>`),
  ];

  const overFlowJobs = [
    createJob('Database Programmer (Contractor)', 'Todd Dexter & Associates', 'Oct 2017 – June 2018', 'Completed contract to remotely perform monthly data updates and quality control on multiple database of millions of rows. ', `
    <ul>
      <li>Ran, debugged, and refactored MySQL queries using MySQL Workbench</li>
      <li>Loaded data from CSV files into MySQL databases</li>
      <li>Work in Excel to create quality control analysis.</li>
      <li>Passed information directly to clients</li>
    </ul>`),
    createJob('Database Programmer (Contractor)', 'Mission Resource Alliance', 'Dec 2014 – June 2016', 'Completed contract to remotely perform monthly data updates and quality control on multiple database of millions of rows. ', `
    <ul>
      <li>Ran, debugged, and refactored MySQL queries using MySQL Workbench</li>
      <li>Loaded data from CSV files into MySQL databases</li>
      <li>Work in Excel to create quality control analysis.</li>
    </ul>
`),
    createJob('Web Developer', 'Freelance', 'Jan 2015 - Jun 2018', 'Some examples of my work: sc2online.com and lindholm-it.dk', `
    <ul>
      <li>Developed and modified Wordpress Widgets.</li>
      <li>Developed PHP scripts to pull content from Google Spreadsheets.</li>
      <li>Performed miscellaneous front end updates.</li>
      <li>Built mobile friendly site.</li>
    </ul>
    `),
    createJob('Unity 3D Developer', 'Freelance', '2013 - 2017', 'Developed tools and games in Unity 3D.', `
    <ul>
      <li>Developed a run time compiled language in C# to create visual novels in Unity 3.x. </li>
      <li>Cloned World of Warcraft camera and player movement in C#. </li>
      <li>Wrote miscellaneous C# scripts for games.</li>
    </ul>
    `),
    createJob('Software Development Intern', 'Global Pueblo Solutions | Chandigarh, India ', 'June 2014 – Aug 2014', 'Completed a six-week summer internship in Chandigarh, India. Developed employee and time management systems for in-house use.', `
    <ul>
      <li>Developed web-apps in PHP with CakePHP and Symfony</li>
      <li>Managed MySQL database through PHPMyAdmin</li>
      <li>Follow agile / scrum methodology.</li>
    </ul>`),
    createJob('Apprentice Software Developer', 'Nashville Software School', 'Nov 2017 - May 2018', 'Intensive full-time software development bootcamp focusing on full stack development fundamentals and problem solving with the final half of the program being executed in a simulated company environment with Scrum methodology.', `
      <ul>
        <li>Application of OOP fundamentals through group and individual projects reflecting real world business problems</li>
        <li>Source code version control with Git/GitHub</li>
        <li>Project management/tracking with GitHub Projects & Issue Tracking</li>
        <li>JavaScript fundamentals leveraging DRY, modular, readable and reusable code</li>
        <li>Single-page applications with HTML, CSS, AngularJS, React/Redux, jQuery, and Lodash; styling with SASS, Bootstrap, Materialize, Material UI, and Bulma</li>
        <li>Task automation with Grunt and Gulp; linting with JSHint; and modularization with Browserify</li>
        <li>Utilized Test Driven Development with JavaScript packages Mocha and Chai</li>
        <li>Deployed applications through Heroku, Firebase, and GitHub Pages</li>
        <li>Backends with Node.js, Express, PostgeSQL, Sequelize, and SQLite</li>
    </ul>`),
    createJob('Esports Broadcaster', 'Freelance', '2013 – 2017', 'Play-by-Play commentary for StarCraft 2 events. Broadcasted 25+ tournaments. Commentated Cheeseadelphia 2, 3, and 4 for NerdStreetGamers, Philadelphia, PA; and PSISTORM Cup #3 and #4 for PSISTORM Gaming, Fairfax, VA.', `
    <h4>Live StarCraft 2 Events</h5>
    <ul>
      <li>Cheeseadelphia 2 for NerdStreetGamers, Philadelphia, PA</li>
      <li>Cheeseadelphia 3 for NerdStreetGamers, Philadelphia, PA</li>
      <li>Cheeseadelphia 4 for NerdStreetGamers, Philadelphia, PA</li>
      <li>PSISTORM Cup #3 for PSISTORM Gaming, Fairfax, VA</li>
      <li>PSISTORM Cup #4 for PSISTORM Gaming, Fairfax, VA</li>
    </ul>

    <h4>Online StarCraft 2 Events</h5>
    <ul>
      <li>Ascended StarCraft 2 League (ASL)*</li>
      <li>Oseanic Championship Series (OSC)*</li>
      <li>Rival StarCraft 2 League (RSL)*</li>
      <li>18 other competitive online tournaments and events</li>
    </ul>

    <small>*Multiple seasons</small>
    `),
    createJob('Computer Repair Technician', 'Freelance', '2014 - 2016', '', `
    <ul>
      <li>Build, maintain, and repair Windows PCs. </li>
      <li>Troubleshoot and repair printers. </li>
      <li>Fix network and wifi issues.</li>
  </ul>
`),
  ];

  let jobCount = 0;

  const createJobHtml = (htmlSection) => (job) => {
    const article = document.createElement('article');
    
    appendChild(article, 'h3', job.title);
    appendChild(article, 'h4', job.place);
    appendChild(article, 'h5', job.date);
    appendChild(article, 'p', job.description);
    
    const moreInfoContainerNode = document.createElement('div');
    moreInfoContainerNode.classList.add('moreInfoContainer');
    article.appendChild(moreInfoContainerNode);
      
    const checkboxNode = document.createElement('input');
    checkboxNode.type = 'checkbox';
    const checkboxId = 'job' + jobCount; 
    checkboxNode.id = checkboxId;
    checkboxNode.classList.add('moreInfoButton');
    moreInfoContainerNode.appendChild(checkboxNode);
    
    const labelNode = document.createElement('label');
    labelNode.htmlFor = checkboxId;
    jobCount++;
    moreInfoContainerNode.appendChild(labelNode);

    appendChild(moreInfoContainerNode, 'div', job.moreInfo, 'moreInfo');

    htmlSection.appendChild(article);
  }

  const currentJobsSection = document.getElementById('currentJobs');
  currentJobs.forEach(createJobHtml(currentJobsSection));
  
  const jobOverflowSection = document.getElementById('jobOverflow');
  overFlowJobs.forEach(createJobHtml(jobOverflowSection));

})();