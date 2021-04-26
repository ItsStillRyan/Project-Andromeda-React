![logoREADME](/andromeda-orbital/READMEimages/logoREADME.png)
## An E-commerce Website using mySQL database for Assignment 3
***

## **Context**
___
### _Opening Statement & Summary_
This assignment has required us, the programmers, to create an E-commerce store, using ReactJS for front-end, Express.JS for backend and mySQL for database storage. Demonstrating my proficiency with the technologies.

As this is a continuation and extension from The Pegasus Index (Assignment 2), I've followed up in building an e-commerce section to the website to provide Astrophotography gear to users who are considering to go into the hobby, or experienced astrophotographers wanting to upgrade their current gear.

As it stand right now, April 2021. The store only stocks Telescopes due to me not wanting to overwhelm myself with the amount of gear and its individual categories and specifications. 

Regardless, further expansion to other products are on the To-Do list.

___
### _Personal goals and expected user goals_
What I, as the programmer, hope to achieve is to provide a convienent and intuitive e-commerce store in the domain of Astrophotography.

As a new user, the goal is to have a place where I can find beginner friendly equipment to get started on this new hobby I am interested in try.

As an experienced user, the goal is to have a place where I convienent find and purchase new upgrades to my current gear.
***
## Demo
___
The live website can be access from this link:
### [Andromeda Orbital Station]("")
***
## **Content**
___
### **Site Map**
![sitemap](/andromeda-orbital/READMEimages/sitemap.png)
___
### Store Front


### Telescopes


### Individual Item
This page will consist of the post that the user has chosen to engage on. All the details will be shown in the order of 
* Picture
* Name
* Price
* Stock
* Brand
* Full Specs 
  * Description
  * User Level
  * Weight
  * Imaging Type
  * Optical Design
  * Aperture
  * f/Ratio 
  * Category
  



### Login/ Register


### Profile/ Past Orders


### Confirm Orders


### Stripe


### Success/Error



### Responsiveness
This website is meant to only be used on a computer system. Any monitor resolution above: 1366 x 786

### Navigation
This website employs the use of the Three-click rule for optimal UIUX.
___
### **Logical Schema**
![LS](/andromeda-orbital/READMEimages/LS.png)


***
## UI and Design Choices
___
#### **Space/futuristic themed, fictional. Around a main focus**
Following the style of The Pegasus Index, space is still the main theme of the website. I've decided to go with the fictional approach to a "space store", taking inspiration from Space Flight Simulators such as Elite: Dangerous and Star Citizen. 

#### **Color choices and Fonts**
 Using darker complementary colors like dark blue and its other shades. Contrasting it with yellow and turquiose in only my main logo just to make it stand out from the dark.


***

## Testing

___
### _Console.log Checks_

### _ARC (Advanced REST client) Tests_


***
## Technologies Used
As with the requirements of this project, it is done within the limits of **mySQL, Express, React, Node**.
All coding has been done in **Gitpod** IDE, including a seperate repository as a testing workbench.

**I also employed the use of external frameworks such as:**

#### **REACT Bootstrap ** https://react-bootstrap.github.io/ 

#### **Axios** https://github.com/axios/axios

#### **Db-Migrate** https://db-migrate.readthedocs.io/en/latest/

#### **Bookshelf** https://bookshelfjs.org/

#### **Caolan Forms** https://github.com/caolan/forms

___
## **Tools involved during development:**

#### **SqlDBM** https://sqldbm.com/Home/
Using SqlDBM for my Logical Schema

#### **Drawio** https://app.diagrams.net/
Using Drawio for my Site map

#### **Photoshop** https://www.photoshop.com/en
All graphics have been done photoshop

#### **DAFONT** https://www.dafont.com/
Fonts that are in the website was found and downloaded here

#### **mySQL/PostgreSQL** 
Main database use

#### **Netlify** https://app.netlify.com/
For Front end deployment

#### **Heroku** https://www.heroku.com
For Back end deployment
***

## Future development plans and Existing Bugs
___
1. With the main focus of this assignment in the backend, the UI in my opinion is rather lack-lustered. There is very much the intent to rethink and redo the UI of the page.

2. I want to normalise using functional programming, right now the REACT section is a mix between class components and functional components. Mixing both technologies has proven to be difficult to work with since both are not compatible.

3. Further understanding and improvements to the backend codes.  
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