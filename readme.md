### The Schema of Students. Students have the following features:
    firstName - (String, required)
    lastName - (String, required)
    grade - (Number, required)
    age - (Number, Greater than or equal 18)
    city - (String)

### Routes

* INDEX   : GET    - /students     - show all students names 
* SHOW    : GET    - /students/:id - show a single student 
* CREATE  : POST   - /students     - Create a new Student 
* UPDATE  : PATCH  - /students     - Update a single student 
* DESTROY : Delete - /students     - Destroy a single student 

