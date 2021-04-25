![logoREADME](/andromeda-orbital/READMEimages/logo.png)
## An E-commerce Website using mySQL database for Assignment 3
***

## **Context**
___
### _Opening Statement & Summary_
This assignment has required us, the programmers, to create an interactive website using a MERN(MongoDB, Express, React, Node) stack. Demonstrating my proficiency with the technologies.


___
### _Personal goals and expected user goals_
What I, as the programmer, hope to achieve is to provide a focused portal for like-minded individuals to share and discuss topics around this hobby.

As the user, the goal is to have a place where I can share my findings, pictures and methods to other like-minded people in this hobby.
***
## Demo
___
The live website can be access from this link:
### [The Pegasus Index](https://wonderful-joliot-895ffd.netlify.app)
***
## **Content**
___
### **Site Map**
![sitemap](project-pegasus/src/images/README/Sitemap.png)
### **Landing Page**
* Main landing page
* Category tab

### **Categories**
  * Galaxies
  * Planets
  * Stars
  * Nebulae
  * Man-made
  * Other

### **Individual post page**


### **Getting Started**
* Uploading your first post
* Getting started with astrophotography

### **Uploads**
* Upload post form

___
### Landing page
The main logo along with the title will be the first thing user sees upon entering the page. Scrolling down, there will be a small content divider showing a small glimps on what the website is about. Further down, there is an interactive category list, displaying all 6 categories in image buttons.

### Categories page
This constitutes all 6 categories as they are of the same layout.
Upon entering, you'll be greeted with the title of the respective category and a small description about it. A filter bar is present to filter only by title. The contents of all the posts will follow up under the filter bar. All posts will be displayed in cards, a preview of the photograph along with the title and the astrophotographer.

### Individual post page
This page will consist of the post that the user has chosen to engage on. All the details will be shown in the order of 
* Full picture
* Title
* Poster's Name
* Location
* Equipment Used
* Aquisitions and Processing
* Comments

Here, people and engage in discussions with the post in the comments section.

### Getting Started page
Here, Users can learn how to post their own pictures and what each form field works/require. 

New users can also come here to get started on astrophotography and start their research on the hobby.

### Uploads page
This page is for users who wants to upload into the index. All forms in here are required except the location. 

### Responsiveness
This website is meant to only be used on a computer system. Any monitor resolution above: 1366 x 786

### Navigation
This website employs the use of the Three-click rule for optimal UIUX.
***
## UI and Design Choices
___
#### **Space/futuristic themed. Around a main focus**
As this website revolves around the topic of space, I'm going for a futuristic sci-fi look. Using a constellation map in the background, it cuts through the mundane solid color. 

#### **Color choices and Fonts**
 Using darker complementary colors like dark blue and its other shades. Contrasting it with yellow and turquiose in only my main logo just to make it stand out from the dark.


***

## Testing

___
### _Console.log Checks_
Axios check - 

        Database Active, Mongo Connected
        Database Active, Mongo Connected
        Database Active, Mongo Connected
        Database Active, Main Function Running

***
## Technologies Used
___
As with the requirements of this project, it is done within the limits of **MongoDB, Express, React, Node**.
All coding has been done in **Gitpod** IDE, including a seperate repository as a testing workbench.

**I also employed the use of external frameworks such as:**

#### **REACT Bootstrap in 2 kinds** https://react-bootstrap.github.io/ & https://mdbootstrap.com/

#### **Axios** https://github.com/axios/axios

**Tools involved during development:**

#### **Drawio** https://app.diagrams.net/
Using Drawio for my Site map

#### **Photoshop** https://www.photoshop.com/en
All graphics have been done photoshop

#### **DAFONT** https://www.dafont.com/
Fonts that are in the game was found and downloaded here

#### **MongoDB** https://www.mongodb.com/
Main database use

#### **Netlify** https://app.netlify.com/
For Front end deployment

#### **Heroku** https://www.heroku.com
For Back end deployment
***

## Future development plans and Existing Bugs
___
1. Mainly looking into UI changes. Loading screen in particular could add more immersion.

2. Filtering. I am aware of the lack of filtering in this project so this would be one of the top priority in the list to tackle and implement.

3. A better use of REACT.JS without doing a windows.reload for certain pages. 
***
## Deployment
___
### Content
* Ensure all last changes are saved and committed
* Successfully went through with a Git Push
___
### Express.js deployment to Heroku
1. After confirming and pushing the final build of the project, run the command to download Heroku

        npm install -g heroku
2. After install has succeded, log in to heroku with

        heroku login -i
    Enter username and password
3. Create Heroku app

        heroku create <app-name>
    Replace <app-name> with a name of your choice. Do not use underscore. As the app name has to be unique, make sure the name you use is distinctive. You can use your initials as part of the app name, for instance.
4. The Procfile executes a command when Heroku needs to run our server. Create one in the same directory as index.js and **name it as Procfile (the first alphabet must be capitalized, and there is no extension).**

5. Add the following line to the Procfile:

        web: node index.js

6. Add a start script to package.json

        {
        "name": "06-api-auth",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1",
            "start": "node index.js"
        },
        . . .
        }
7. Change the port that we are using

    Change the 3000 in app.listen to process.env.PORT
8. Push to Heroku
    Make sure you have a .gitignore file, and it must have node_modules, sessions/ and .env included,

        git push heroku master

9. We need to duplicate the content of the .env file inside the config variables section of Heroku.

    Go to Heroku and look for the app you just deployed. Then click on Settings.

    Next, click on Reveal Config Vars

    After which, add in MONGO_URL, and the connection URL from your .env file:

10. Run the app

    From your Heroku project panel, click on the button that says Open App. Test if your app is working.



___
### React.js deployment to Netlify
1. After confirming and pushing the final build of the project, run the command 

        npm run build
2. A build folder should be created in the explorer. Download the file and unzip  build.tar
3. Log into Netlify.com and go to the Sites tab
4. Drag the build folder into the box that says "Drag and drop your site output folder here"
5. Wait for the project to be deployed.


***
## Credits
___
All the following has been taken from Reddit, in the subreddit r/Astrophotography.
* All uploaded posts
* Getting started information page
* Landing page categories button pictures

Main logo pegasus taken from https://dribbble.com/shots/3037025-Constellations-Pegasus

Deployment Steps taken with courtesy of Paul Chor

Layout for most UIUX taken from both https://react-bootstrap.github.io/ & https://mdbootstrap.com/ templates