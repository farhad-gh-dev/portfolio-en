# Portfolio Project

This is a responsive template I designed and developed to showcase my projects.

![enter image description here](https://raw.githubusercontent.com/farhad-gh-dev/portfolio-en/master/src/Assets/screenshots.png)

## Sections

1.  Header
2.  Skills
3.  Projects
4.  About Me
5.  Contact Form

## Tech stack

React (typescript) - Tailwind - Sass

## Build and Development

In case of any use of this project, contribution to my [github account](https://github.com/farhad-gh-dev) is needed. To use this template clone this repository or download it, then run **npm install** to install project packages.

    git clone https://github.com/farhad-gh-dev/portfolio-en.git
    npm run install

--
Now in the project directory, you can run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

    npm run start

--
You can also build the app for production mode, It correctly bundles React in production mode and optimizes the build for the best performance.

    npm run build

Now you can deploy this project!

## Project Structure

    .
    ├── design                  # Design files and assets
    ├── public                  # Html, fonts and manifist related files
    ├── src                     # Source files
    ├── .gitignore
    ├── README.md
    ├── craco.config.js			# Related to tailwind installation
    ├── package-lock.json
    ├── package.json
    ├── tailwind.config.js
    └── tsconfig.json

src folder structure:

    ├─── src
        ├─── Assets
        │   ├─── icons
        │   └─── projects
        ├─── Components
        │   ├─── About
        │   ├─── Contact
        │   │   └─── ContactForm
        │   ├─── Footer
        │   ├─── Header
        │   ├─── Loading
        │   ├─── Navbar
        │   ├─── Projects
        │   │   └─── ProjectCard
        │   └─── Skills
        ├─── Data
        └─── Style

- Style Folder contains all global styles, style resets, style variables, mixins and animations
- Data folder contains Projects, Skills and Links data
- In Components folder each component has a tsx and a style file
