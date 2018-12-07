// Only edit this file unless you want to adjust the styling or formatting of the resume sections. If you want to make changes to reordering the resume sections, move the react components in the _index.jsx_ file. All data fields should be entered in "string" format. Do not edit the object names and only make changes to the quoted areas.

module.exports = {

  // Main summary
  summary: "Spicy jalapeno bacon ipsum dolor amet boudin est sint in labore ribeye. Aute cow ut tongue dolor ad. Turducken bresaola buffalo lorem. Ribeye meatloaf chuck bacon biltong, pancetta qui pork belly dolore ipsum rump. Corned beef minim jowl, drumstick tempor chicken magna. Ut leberkas jerky ea, rump pork chop ad capicola ipsum corned beef id strip steak. Minim shank jowl, doner jerky flank velit ad proident chuck burgdoggen kielbasa nisi pastrami.",

  // Your contact information. length of github or linkedin may affect styling for the side-bar container
  // only edit the [text] areas for github and linkedin sections
  // recommend that the imgpath is not your personal photo due to HR recommendations in business practices for job applications
  contactInfo: {
    name: "FName LName",
    phone: "(111) 111-1111",
    email: "email@email.email",
    github: "github.com/[_yourgithub_]",
    linkedin: "linkedin.com/in/[_yourlinkedin_]",
    imgPath: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2WniLsEKOfMobit0LyCMxvq8SzFBzwQTwcpFqq7YsHcWylOK2A",
  },

  // Education information
  education: {
    school: "School Name",
    date: "September 1950 - December 2018",
    study: "B.A. or other school stuff",
  },

  // Array of tech skills
  techSkills: [
    'Put',
    'Your',
    'List',
    'Of',
    'Tech',
    'Skills',
    'As',
    'an',
    'Array',
    'Here'
  ],

  // Array of other skills
  otherSkills: [
    'Other',
    'Relevant Skills',
    'As an array',
    'You want to highlight'
  ],

  // Work experience section. If you want to add more, copy the {...} section and add it to the array (don't forget the ",").
  // React will automatically render the addition to the work experience components.
  workexp: [
    {
      title: "Position Title",
      company: "Company Name",
      address: "Company Address (e.g. 1111 West 99th Avenue, Vancouver, BC)",
      date: "[_Month_] [_Year_] - [_Month_] [_Year_]",
      responsibilities: "Pastrami commodo velit, non excepteur consectetur pork chop meatloaf landjaeger minim laborum filet mignon consequat occaecat prosciutto. Dolore kielbasa ex leberkas buffalo strip steak ham hock jerky ad magna. Id culpa strip steak, turkey leberkas sunt lorem. Duis cupidatat ham, biltong frankfurter nisi ham hock qui. Short ribs lorem pork chop porchetta turducken. Flank ut short ribs, ut minim id doner in anim corned beef. Cillum ribeye sirloin non in pork."
    },
    {
      title: "Position Title",
      company: "Company Name",
      address: "Company Address (e.g. 1111 West 99th Avenue, Vancouver, BC)",
      date: "[_Month_] [_Year_] - [_Month_] [_Year_]",
      responsibilities: "Pastrami commodo velit, non excepteur consectetur pork chop meatloaf landjaeger minim laborum filet mignon consequat occaecat prosciutto. Dolore kielbasa ex leberkas buffalo strip steak ham hock jerky ad magna. Id culpa strip steak, turkey leberkas sunt lorem. Duis cupidatat ham, biltong frankfurter nisi ham hock qui. Short ribs lorem pork chop porchetta turducken. Flank ut short ribs, ut minim id doner in anim corned beef. Cillum ribeye sirloin non in pork."
    }
  ],

  // Projects section. If you want to add more, copy the {...} section and add it to the array (don't forget the ",").
  // React will automatically render the addition to the project components.
  // ***Make sure the "https://" is inclusive when putting your project urls in the _link_ section
  gitHubProjects: [
    {
      title: "Project Title",
      link: "https://[_githubURL_]",
      stack: "[Tech stack goes here such as]: React, WebSockets, NodeJS, JavaScript, HTML/CSS/SASS",
      description: "[Project Description]: Ex chuck pork prosciutto tenderloin brisket shank. In in filet mignon biltong fugiat, pork loin laboris irure commodo ea fatback ham hock.",
      date: "[_Month_] [_Year_] - [_Month_] [_Year_]",
    },
    {
      title: "Project Title",
      link: "https://[_githubURL_]",
      stack: "[Tech stack goes here such as]: React, Express, NodeJS, JavaScript, HTML/CSS/SASS",
      description: "[Project Description]: Ex chuck pork prosciutto tenderloin brisket shank. In in filet mignon biltong fugiat, pork loin laboris irure commodo ea fatback ham hock.",
      date: "[_Month_] [_Year_] - [_Month_] [_Year_]",
    },
    {
      title: "Project Title",
      link: "https://[_githubURL_]",
      stack: "[Tech stack goes here such as]: React, Rails, NodeJS, JavaScript, HTML/CSS/SASS",
      description: "[Project Description]: Ex chuck pork prosciutto tenderloin brisket shank. In in filet mignon biltong fugiat, pork loin laboris irure commodo ea fatback ham hock.",
      date: "[_Month_] [_Year_] - [_Month_] [_Year_]",
    },
  ],

  // Personal interests section (array).
  interests: [
    'Food',
    'Food',
    'Food',
    'Food',
    'Food'
  ] 
}