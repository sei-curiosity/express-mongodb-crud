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

