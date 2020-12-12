In this project, I built a Rails & React APP with Ruby on Rails for the backend and React on the front end. The backend was deployed via Heroku and the front end via Netlify. All the files were uploaded to Github. 

The Ruby in rails backend serve a JSON API with all CRUD operation in my model. In this project I used two models called “user” & “fighter”. User was used for authentication to have a username & password. Fighter was used to reference the boxers. 

In the migrate file for users it contained string for username and password. I created one for age but I did not really use. In the fighters migrate file it included all the fighters needed info such as name, photo, weightclass, wins, losses, titles and about (which is the fighter’s bio)

I utilized the scaffold command to create all the files needed for the backend. It made things quiet simple and efficient. 

To ensure all the routes were working, I used Postman and it was a success. 

After deploying the back end on Heroku, I created the frontend using a react basic template so control the size of the file and to have the necessary information to build the Front end. 
