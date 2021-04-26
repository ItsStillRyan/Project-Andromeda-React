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
Here is where the Users/Customer will land upon entering the website. Store title and logo, along with 2 seperate navigation types and the whole product list will be displayed and is the first point of contact. From there, the Users/Customer will be able to use the NavBar to go into the log in page, or use the category buttons to browse their desired products.

### Telescopes
A full list of the telescope inventory will be rendered here, in cards. Cards will display the image, the title and the price. All cards will be clickable to which will take the User/Customer to its individual detailed product page.

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
Users/Customer that plan to purchase products from this e-commerce store will be required to register an account for checkout purposes. In this login page, Users/Customer can login and/or register for an account if they haven't already. Displayed in a group of forms. Users/Customer will be asked to fill in their Personal and Profile details before being able to login and unlock further functionalities.

### Profile/ Past Orders
Upon logging in, Users/Customer will be redirected to their profile page, to which will display their informations and a navigation section to their orders page. Users/Customer will be able to edit and update their details as and when they choose, as well as a logout button. In the Orders page, users will be able to display their past order for tracking purposes. 

### Cart
Users/Customer that has added items into their carts will have them displayed in this page. Users/Customer will be able ot update the quantity of the item they are purchasing and will be able to check out as and when they decide to purchase said items.

### Confirm Orders
After the Users/Customer checks out from the Cart page, they will be redirected to the Confirm Order page where they will see the brief description of the items they want to purchase. Also, Users/Customer are required to choose which shipping company they want to use. As of April 2021, the only options for shipping are _Singpost_ and _Seller's Shipping_.
After confirming and selecting on the shipping company, Users/Customer will be able to properly checkout and be redirected to the strip checkout page.

### Stripe
Here, Users/Customer will be required to enter their billing information for puchase. This page is fully controled by Stripe. After the success of the purchase, Users/Customer will be redirected to a Success URL. Whereas, if the Users/Customer backs out from the payment page, they will be redirected to an Error URL.

### Success/Error
In the Success URL, Users/Customer will be given a shipping number, as well as the options to be redirect to their profile page or the store front page.
In the Error URL, Users/Customer will have the option to go back to their Cart to try to check out again or back to the store front page if they choose to try again at a later time.


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