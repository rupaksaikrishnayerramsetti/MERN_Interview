# MERN_Interview
Sky Goal Next's assignment for creating authentication apis using express and Mongodb as database (login,  signup, userdetails, etc)

create .env file in the root folder with these variables change the values as the port and MongoDB url running your system

PORT = 8020
MONGO_DB_CONNECTION_URL = "mongodb://127.0.0.1:27017/Interview"
JWT_SECRET_KEY = "ThisIsForMernStackAssignment"

To Start the backend command    --> npm start

In testing tools like Postman or Rapid Api 

First Api of signup can be tested with the 'post' method and use the below URL 

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

the above content should be kept in 'body' with the structure of 'JSON' should be used

The second API of login can be tested with the 'post' method and use the below URL

http://localhost:8020/login

{
  "email": "yrsk@gmail.com",
  "password" : "abcd1234"
}

the above content should be kept in 'body' with the structure of 'JSON' should be used
Note:- Copy the token got as a response of the login URL and use it in the next API

Third Api of userdetails can be tested with the 'get' method and use the below URL

http://localhost:8020/userdetails

In the headers section use the below key-value pairs

Authorization   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVmODg0ZWY3NmZiMzJhOTA0Zjg0OTNkIiwiZW1haWwiOiJydXBha3NhaWtyaXNobmF5ZXJyYW1zZXR0aUBnbWFpbC5jb20iLCJpYXQiOjE3MTA3ODU5MjB9.dJez8AwUEux_SeKnBXtseq9aWHQ1Q7i4aAW9lgrp9M4

the above content should be kept in 'headers'

For updating user details can be tested with the 'put' method and use below URL

​http://localhost:8020/updateUserDetails

In headers section use the below key value pairs

Authorization   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVmODg0ZWY3NmZiMzJhOTA0Zjg0OTNkIiwiZW1haWwiOiJydXBha3NhaWtyaXNobmF5ZXJyYW1zZXR0aUBnbWFpbC5jb20iLCJpYXQiOjE3MTA3ODU5MjB9.dJez8AwUEux_SeKnBXtseq9aWHQ1Q7i4aAW9lgrp9M4

the above content should be kept in 'headers'
In the body section use the below format of the JSON 

{
  "user_name": "Yerramsetti R Sai Krishna",
  "gender": "male",
  "occupation": "SDE 1",
  "phone_number": "8919475676",
  "salary": 54000
}

Updating the password of a user can be tested with the 'put' method and using below URL

​http://localhost:8020/changePassword

In the headers section use the below key-value pairs

Authorization   eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjVmODg0ZWY3NmZiMzJhOTA0Zjg0OTNkIiwiZW1haWwiOiJydXBha3NhaWtyaXNobmF5ZXJyYW1zZXR0aUBnbWFpbC5jb20iLCJpYXQiOjE3MTA3ODU5MjB9.dJez8AwUEux_SeKnBXtseq9aWHQ1Q7i4aAW9lgrp9M4

the above content should be kept in 'headers'
In the body section use the below format of the JSON 

{
  "password": "abcd1234",
  "newpassword": "abcd@1234"
}

Note:- deleting user is only done as soft delete by using a extra column by changing it's value in the Real time bases.

Note that my Advanced project had many features which included the above API with some extra API required for my personal project the repository link was provided and this project got recognized by 2 project managers and appreciated by them

https://github.com/rupaksaikrishnayerramsetti/KEAOP_MERN

This is the drive link for the video recording of the manager-level conference 

https://drive.google.com/file/d/1m057PIbYRWv1lx4JcNPfpgB-7YN-i0_U/view?usp=drive_link
