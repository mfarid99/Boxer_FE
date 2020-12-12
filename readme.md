In this project, I built a Rails & React APP with Ruby on Rails for the backend and React on the front end. The backend was deployed via Heroku and the front end via Netlify. All the files were uploaded to Github. 

The Ruby in rails backend serve a JSON API with all CRUD operation in my model. In this project I used two models called “user” & “fighter”. User was used for authentication to have a username & password. Fighter was used to reference the boxers. 

In the migrate file for users it contained string for username and password. I created one for age but I did not really use. In the fighters migrate file it included all the fighters needed info such as name, photo, weightclass, wins, losses, titles and about (which is the fighter’s bio)

I utilized the scaffold command to create all the files needed for the backend. It made things quiet simple and efficient. 

To ensure all the routes were working, I used Postman and it was a success. 

After deploying the back end on Heroku, I created the frontend using a react basic template so control the size of the file and to have the necessary information to build the Front end. 

for the front end, I set up a global state. I created a router to send user to different routes. Having state in the components makes components more re-usable and it reduces the number of unnecessary renders of components. I set up context and reducer to have the application level state. 

-I also defined the reducer function which handles all the different situations. In the function you pass the original state and we pass an action. This will be required so that the dispatch function invoke the rducer to update our state. Based on the action, the reducer will cause the state to get updated. 
