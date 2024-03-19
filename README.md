# MERN_Interview
Sky Goal Next's assignment for creating authentication apis using express and mongodb as database (login,  signup, userdetails, etc)

create .env file in the root folder with these variables change the values as the port and mongodb url running your system
PORT = 8020
MONGO_DB_CONNECTION_URL = "mongodb://127.0.0.1:27017/Interview"
JWT_SECRET_KEY = "ThisIsForMernStackAssignment"

To Start the backend command    --> npm start

In the testing tools like Postman or Rapid Api 

First Api of signup can be tested with the 'post' method and use below url 
http://localhost:8020/signup
{
  "user_name": "Y R Sai Krishna",
  "email": "yrsk@gmail.com",
  "gender": "male",
  "occupation": "Full Stack Developer",
  "phone_number": "8919475676",
  "salary": 60000,
  "password": "abcd1234"
}
the above content should be kept in 'body' with structure of 'json' should be used

Secound Api of login can be tested with the 'post' method and use below url
http://localhost:8020/login
{
  "email": "yrsk@gmail.com",
  "password" : "abcd1234"
}
the above content should be kept in 'body' with structure of 'json' should be used
Note :- Copy the token got as a response of the login url and use it in the next Api

Third Api of userdetails can be tested with the 'get' method and use below url
http://localhost:8020/userdetails
In headers section use the below key value pairs
Authorization   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVmODg0ZWY3NmZiMzJhOTA0Zjg0OTNkIiwiZW1haWwiOiJydXBha3NhaWtyaXNobmF5ZXJyYW1zZXR0aUBnbWFpbC5jb20iLCJpYXQiOjE3MTA3ODU5MjB9.dJez8AwUEux_SeKnBXtseq9aWHQ1Q7i4aAW9lgrp9M4
the above content should be kept in 'headers'

Note the my Advanced project had many features which includes above API as a Part below the repository link for the project and this project got recognized by a 2 project managers and appreciated by them

https://github.com/rupaksaikrishnayerramsetti/KEAOP_MERN

This is the drive link for the video recording of the manager-level conference 

https://drive.google.com/file/d/1m057PIbYRWv1lx4JcNPfpgB-7YN-i0_U/view?usp=drive_link
