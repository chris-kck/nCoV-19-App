<div align="center">
    <img src="https://github.com/chris-kck/nCoV-19-App/blob/master/public/assets/img/logo-dark.png" height="60">
    <h2>nCoV-19 Web App</h2>
    <p align="center">
        <p>My First Nodejs App</p>
    </p>
</div>

## My nCoV-19 Web Application Using Nodejs

This is my first application using Nodejs. Read a ton of information on the internet, saw a few tutorials on youtube (Net Ninja) and built this application.

This is a webapp with all the information relating to COVID-19, latest news, educational quizes, health metric calculators, etc.

### This is the directory structure of the project:

root/ - project root directory<br>
├─ bin/ - web server launch & project startup<br> 
├─ db/ - database storage and manipulations<br>
├── public/ -public assets <br>
├── routes/ - project browsing routes<br>
├── views/ - markup for rendered pages <br>
├── node-modules/ - all node modules and their pre-req<br>

+ Install dependencies
+ Run the application bin/www

```sh
$ npm install
$ npm run start
```
Browse ```http://localhost:8080```

Tiny Caveat: There is need to wait a little bit for Database to synchronize with latest data on startup ONLY.
In production, a cronjob can be setup to update daily during off-peak time.

Login as Guest and see the magic.

