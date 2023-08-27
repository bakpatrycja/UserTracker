  

# Users API

  
It's an api which saves basic user information in database and returns session cookie. 


  
## Running docker container (docker compose)

.env file is up to you to configure with credentials (only DB_PASSWORD, default user is root).

To build containers I used Docker version 4.22.0
https://docs.docker.com/desktop/release-notes/#4220

  
Linux bash is avialable on Windows :-) 
You can enable it here: https://www.geeksforgeeks.org/use-bash-shell-natively-windows-10/

In folder "Backend" open linux bash and run command:


```
 docker-compose -f docker-compose.yml up --build
```
![Alt text](<Zrzut ekranu 2023-08-27 020737.png>)

Please wait for applications running inside containers (they need some time to install all dependencies and run). 
Everything is ready when you can see messages like on screenshot :-) . Please be patient, I builded project on two different machines (gaming pc and laptop) and for laptop it took more time. 
  
![Alt text](<Zrzut ekranu 2023-08-27 004913.png>)


## Containers description and urls

![Alt text](<Zrzut ekranu 2023-08-27 012159.png>)


1. application: http://localhost:5173/
2. phpmyadmindev : http://localhost:5427/
3. api: http://localhost:3000/
4. mysqldev: http://localhost:51744/


1. Application is a frontend app where you can start.
2. PHP My Admin Panel is a nice tool to check database. root, configured DB_PASSWORD in .env file are your credentials to panel :-)
3. 4. api and mysqldev are self described.


## Api endpoints

###### http://localhost:3000/ 
Description: Returns string and send Session cookie

Method: GET
success: 
Status code: 200
Response: `Hello :-)`

Method: POST
success: 
Status code: 200
Response: `Cookie with userId is created.`
Response cookie:
![Alt text](<Zrzut ekranu 2023-08-27 011619.png>)

fail:
Status code: 500
Response: `Session with userId not created. Missing userId.`


###### http://localhost:3000/healthcheck
Description: Checks if database is up and running

Method: GET 
success: 
Status code: 200
Response: `{database: "OK",}`

fail:
Status code: 500
Response: `{ server: "OK", database: "DOWN" }`


###### http://localhost:3000/users/
route


###### http://localhost:3000/users/create-user
Description: Creates new user in database 
Required parameters and type:
`{ userId: string }`


Method: POST
Success: 
Status code: 200
Response: Returns new creates user

fail: 
Status code: 500
Response: Returns error


###### http://localhost:3000/users/get-users-data
Description: Returns data for report

Method: GET
success: 
Status code: 200
Response: `{listOfUsers: number, numberOfUsersWhichSawImageInPercentage: number}`

fail: 
Status code: 500
Response: Returns error

###### http://localhost:3000/users/update-user
Description: Updates user's property "userSawImage"
Required parameters and type:
`{ userId: string, userSawImage: boolean }`

Method: POST
Success: 
Status code: 200
Response: Returns updated user

fail: 
Status code: 500
Response: Returns error


## Run Api locally


```
npm install
```

```
npm start
```


## Frontend folder nested in backend folder

Contains Vue files 

Simple app which allows track user moves on webstite. 
When user scrolls to image then info is stores in database. 
Additionaly user can open report page to display this data :-).

![Alt text](<Zrzut ekranu 2023-08-27 015212.png>)


![Alt text](<Zrzut ekranu 2023-08-27 015220.png>)


## Technical stack 


Vue js + Node js + Docker + MySQL

