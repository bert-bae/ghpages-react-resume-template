This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Instructions on how to work with react is at this link and further information is down below at the bottom of the ReadMe file for further information on how to work with it.

# Online Resume Template (React Based)

This online resume was rendered using React to make updating seperate components easy to manage and update as your progress as a developer changes over time. In saying so, using React _is not_ the most effective way and is likely (absolutely) overkill for something like this. However, in learning React, absolutely fell in love with its ease of use and simply had to practice its basic concepts!

If you want to check-out what this actually looks like, check-out my own resume at [My CV](https://bert-bae.github.io/my-cv/). This template was created for you to utilize it for your own use.

Important to note that the instructions to uploading this react app to gh-pages is not mine and credit should go to the appropriate individual for their clear instructions at [Instructions](https://github.com/gitname/react-gh-pages).

## Example

![Example1](https://github.com/bert-bae/ghpages-react-resume-template/blob/master/src/img/ex1.png)
![Example2](https://github.com/bert-bae/ghpages-react-resume-template/blob/master/src/img/ex2.png)
![Example3](https://github.com/bert-bae/ghpages-react-resume-template/blob/master/src/img/ex3.png)
![Example4](https://github.com/bert-bae/ghpages-react-resume-template/blob/master/src/img/ex4.png)

## How to use it

1) Install the dependencies:  run =>  npm install
2) Run the server with the command =>  npm start
3) Go to https://localhost:3000 (it may take some time for the developer environment to complete so be patient!)
4) Go to the following file:
  - Folder: 'src' => 'datainput.js'
  - Update the appropriate sections with your own information. You can keep the local server running to see the changes updating as you update the data in this file.
  - The projects section headers are links, so ensure that you are following the instructions for inputting links into the 'datainput.js' sections properly to ensure that the links are set correctly.
5) Once you've fully updated your personal resume information, check it out!
6) If you want to upload it online, GitPages is a simple way to do so:
  - Create-react-app comes with a wonderful built-in method to build your code into a compiled format.
  - Few steps you will need to complete by following the instructions here at this link (and thank you to this GitHub user for such a well documented and easy to follow instructions): [Instructions](https://github.com/gitname/react-gh-pages)
  - Important: Go to the package.json file and ensure that you have all of the dependencies including "gh-pages": "^2.0.1".
  - Update the "homepage" section >> "homepage": "https://[your github page link goes here]" >> add your github page link and update it (same instructions provided in the link).
7) When you are ready, ensure these scripts are in the package.json:
  - "predeploy": "npm run build"
  - "deploy": "gh-pages -d build"
8) Run "npm run deploy" >> After some time, you should be able to go to https://[githubname].github.io/[reponame] and see it live!

## Styling

Styling is completely done using SCSS located at 'src' => 'scss' => 'index.scss'.
  - Go to the src => scss folder and run the following command in your terminal to automatically update your SCSS changes to your CSS file. You can edit the SCSS file to edit the styling to your liking.
    - "sass --watch index.scss:../index.css"

## Section layout

If you want to adjust the section layout, it can be done so by moving the component sections in the "return(...)" area (marked with a comment in the file) in "src" => "index.jsx".



SEE BELOW FOR CREATE-REACT-APP BOILER PLATE INSTRUCTIONS. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
