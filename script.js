const generateMyWorks = (() => {
  const addProject = (background, name, github, liveUrl, description) => {
    function newDiv(divClass) {
      const div = document.createElement('div');
      div.classList.add(divClass);
      return div;
    }
    function newImg(src, imgClass) {
      const img = document.createElement('img');
      img.src = src;
      if (imgClass === 'projectBackground')
        img.classList.add('projectBackground');
      else 
        img.classList.add('projectLinksLogo');
      return img;
    }
    function newAnchor(href) {
      const anchor = document.createElement('a');
      anchor.href = href;
      return anchor;
    }
    function newHeading3(text) {
      const h3 = document.createElement('h3');
      h3.classList.add('projectName');
      h3.textContent = text;
      return h3;
    }
    function newPara(text) {
      const para = document.createElement('p');
      para.classList.add('projectDescription');
      para.textContent = text;
      return para;
    }

    const gitImg = newImg('./img/github_50w.png', 'git');
    const git = newAnchor(github);
    git.appendChild(gitImg);
    const gitLiveUrlImg = newImg('./img/square_arrow_icon.svg')
    const gitLiveUrl = newAnchor(liveUrl);
    gitLiveUrl.appendChild(gitLiveUrlImg);
    const linksContainer = newDiv('linksContainer');
    linksContainer.appendChild(git);
    linksContainer.appendChild(gitLiveUrl);
    const h3 = newHeading3(name);
    const nameAndLinks = newDiv('nameAndLinks');
    nameAndLinks.appendChild(h3);
    nameAndLinks.appendChild(linksContainer);
    const descriptionPara = newPara(description);
    const img = newImg(background, 'projectBackground');
    const textContainer = newDiv('textContainer');
    textContainer.appendChild(nameAndLinks);
    textContainer.appendChild(descriptionPara);

    const element = newDiv('project');
    element.appendChild(img);
    element.appendChild(textContainer);

    const myWorks = document.getElementById('myWorksContainer');
    myWorks.appendChild(element);
  }

  const works = [];
  const projectOne = {
    background: "./img/project1screen.jpg",
    name: 'Foundations/Landing Page',
    github: 'https://github.com/carabetcorneliu/foundations-landingPage',
    liveUrl: 'https://carabetcorneliu.github.io/foundations-landingPage/',
    description: 'this is the first leap of faith on my path of The Odin Project'
  }
  // Project template
  // const project = {
  //   background: "",
  //   name: '',
  //   github: '',
  //   liveUrl: '',
  //   description: ''
  // }
  // works.push(project);
  const projectTwo = {
    background: "./img/project2screen.jpg",
    name: 'Odin recipes',
    github: 'https://github.com/carabetcorneliu/odin-recipes',
    liveUrl: 'https://carabetcorneliu.github.io/odin-recipes/',
    description: 'some recipies i like, on a web design I don\'t :D'
  }
  const projectThree = {
    background: "./img/project3screen.jpg",
    name: 'Foundations - Rock, Paper, Scissors',
    github: 'https://github.com/carabetcorneliu/odinFoundations-rock-paper-scissors',
    liveUrl: 'https://carabetcorneliu.github.io/odinFoundations-rock-paper-scissors/',
    description: 'game to 5 wins, can you beat the computer?'
  }
  const projectFour = {
    background: "./img/project4screen.jpg",
    name: 'Foundations - Etch-a-Sketch',
    github: 'https://github.com/carabetcorneliu/Odin-Project-Etch-a-Sketch',
    liveUrl: 'https://carabetcorneliu.github.io/Odin-Project-Etch-a-Sketch/',
    description: 'a newbies etch-a-sketch, colors for the kids'
  }
  const projectFive = {
    background: "./img/project5screen.jpg",
    name: 'Foundations - Calculator',
    github: 'https://github.com/carabetcorneliu/TOP-Calculator',
    liveUrl: 'https://carabetcorneliu.github.io/TOP-Calculator/',
    description: 'a not-so-pretty but working Calculator :))) as they say: "it does the job"'
  }
  const projectSix = {
    background: "./img/project6screen.jpg",
    name: 'JS Path - Sign-up Form',
    github: 'https://github.com/carabetcorneliu/TOP-Sign-up-Form',
    liveUrl: 'https://carabetcorneliu.github.io/TOP-Sign-up-Form/',
    description: 'Thor Odinson\'s sign-up form to enter Asgard.'
  }
  const projectSeven = {
    background: "./img/project7screen.jpg",
    name: 'JS Path - Admin Dashboard',
    github: 'https://github.com/carabetcorneliu/TOP-admin-dashboard',
    liveUrl: 'https://carabetcorneliu.github.io/TOP-admin-dashboard/',
    description: 'Vasile Buzdugan claims that he is the admin of the dashboard. :)))'
  }
  const projectEight = {
    background: "./img/project8screen.jpg",
    name: 'JS Path - my library',
    github: 'https://github.com/carabetcorneliu/TOP-Library',
    liveUrl: 'https://carabetcorneliu.github.io/TOP-Library/',
    description: 'minimalist design library project'
  }
  works.push(projectEight);
  works.push(projectSeven);
  works.push(projectSix);
  works.push(projectFive);
  works.push(projectFour);
  works.push(projectThree);
  works.push(projectTwo);
  works.push(projectOne);
  

  works.forEach((item) => {
    addProject(item.background, item.name, item.github, item.liveUrl, item.description);
  });

})();