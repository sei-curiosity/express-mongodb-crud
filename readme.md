[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)
![Misk Logo](https://i.ibb.co/KmXhJbm/Webp-net-resizeimage-1.png)

### The Schema of Students. Students have the following features:
    firstName - (String, required)
    lastName - (String, required)
    grade - (Number, required)
    age - (Number, Greater than or equal 18)
    city - (String)

### Routes

* INDEX   : GET    - /students       - show all students names 
* CREATE  : POST   - /students       - Create a new Student
* SHOW    : GET    - /students/:id   - show a single student  
* UPDATE  : PATCH  - /students/:id   - Update a single student 
* DESTROY : Delete - /students/:id   - Destroy a single student 

