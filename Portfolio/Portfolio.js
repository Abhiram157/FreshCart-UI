function Home(){
var content=`
<!DOCTYPE html>
<html>
    <head>
        <title>Home Page</title>
        <link rel="stylesheet" type="text/css" href="Home.css" >
    </head>
    <body>
        <br><br><br><br>
        <div class="container">
        <div class="div-1">
        <div class="div-img">
        <img src="My Photo.jpg" height="350" width="350" class="home-image">
        </div>
        <div class="div-text">
        <p class="home-text"> Hello,</p>
        <p class="home-text">I am Abhiram Akella, I am currently pursuing my B.Tech in Computer Science and Engineering (Specialization in Data Science). I am a Highly motivated and dedicated undergraduate with a strong academic record and a passion for learning. I Possess good communication and interpersonal skills, with experience collaborating in team environments. Strong analytical skills with an ability to approach problems creatively and think critically. Proven ability to manage time effectively and meet tight deadlines.</p>
        </div>
        </div>
        <div class="div-2">
            <p class="home-text">Here are the links to all my social media accounts</p>
            <ul class="list">
            <li>
                <p class="home-btn-text"> Linkedin
            <button class="home-btn">
            <a href="https://www.linkedin.com/in/abhiram-akella-7660a7250/"> Click here</a>
            </button></p>
            </li>
            <li>
                <p class="home-btn-text">Github
            <button class="home-btn">
                <a href="https://github.com/Abhiram157"> Click here</a>
            </button></p>
            </li>
            <li>
                <p class="home-btn-text">Instagram
            <button class="home-btn">
                <a href="https://www.instagram.com/rising_from_fire/"> Click here</a>
            </button></p>
            </li>
            <li>
                <p class="home-btn-text">Twitter
            <button class="home-btn">
                <a href="https://twitter.com/akella_abhiram"> Click here</a>
            </button></p>
            </li>
            </ul>
        </div>
        <div class="div-3">
            <p class="home-text">Name: Abhiram Akella</p>
            <p class="home-text">Phone: 9833420860</p>
            <p class="home-text">Email: abhiram.akella@gmail.com</p>
        </div>
        </div>
    </body>

</html>
`;
document.getElementById("content").innerHTML=content;
}
function About()
{
    var about=
    `
    <!DOCTYPE html>
<html>
    <head>
        <title>About Page</title>
        <link rel="stylesheet" type="text/css" href="About.css" >
    </head>
    <body>
        <br><br><br><br>
        <h1 class="heading">About Me</h1>
        <br>
        <h2 class="edu-text">Education Details</h2>
        <br>
        <div class="education">
            <table>
                <tr>
                    <th>S No</th>
                    <th> Institution</th>
                    <th> Time Span</th>
                    <th> Grade</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Bal Bharati Public School, Navi Mumbai</td>
                    <td> 2008-2017</td>
                    <td> 97%</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>The Hyderabad Public School, Hyderabad</td>
                    <td> 2017-2019</td>
                    <td> 96.4%</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>FIITJEE Junior College, Hyderabad</td>
                    <td> 2019-2021</td>
                    <td> 95.6%</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>GITAM Deemed University, Visakhapatnam</td>
                    <td> 2021-Present</td>
                    <td> 9.8</td>
                </tr>
            </table>
        </div>
        <br>
        <div class="skills">
            <h2 class="edu-text">Skill Set</h2>
            <div class="s-align">
            <h2 style="color:#FFFF33">Technical Skills:</h2>
            <h2 class="skill-text">Soft Skills:</h2>
            </div>
        <div class="skill-align">
            <ul class="tech">
                <li> C</li>
                <li>Python</li>
                <li>Java</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <ul class="soft">
                <li>Teamwork</li>
                <li>Team Management</li>
                <li> Communication</li>
                <li>Critical-Thinking</li>
                <li>Problem-Solving</li>
            </ul>
        </div>
        </div>
        <br>
        <h2 class="exp-text">Experience</h2>
        <br>
        <div class="exp">
            <ol class="exp-list">
                <li>
                    <p>Good experience in C, Python programming languages having worked on various projects. </p>
                </li>
                <li>
                    <p>Learning Full Stack Web Development using HTML, CSS, JavaScript and Bootstrap.</p>
                </li>
                <li>
                    <p>Organizing Committee President for 50 days of Python Challenge.</p>
                </li>
            </ol>
        </div>
    
    </body>
</html>
    `;
    document.getElementById("content").innerHTML=about;
}
function Projects()
{
    var proj=
    `
    <!DOCTYPE html>
<html>
    <head>
        <title>Projects Page</title>
        <link rel="stylesheet" type="text/css" href="Projects.css" >
    </head>
    <body>
        <br><br><br><br>
        <div class="container">
            <h1 class="heading">My Projects</h1>
            <div class="p1">
                <p class="proj-1">1. Calculator Web Page</p>
                <div class="slideshow-1">     
                <img src="Calc_1.png" class="NG-1" height="400" width="400">
                <img src="Calc_2.png" class="NG-1" height="400" width="400">
                <img src="Calc_3.png" class="NG-1" height="400" width="400">          
                </div>
                <p class="p1-text">Here is a fully functional Calculator Web Page. The basic structure of the Calculator is made using HTML. We have different buttons for different values and operations. The positioning and other styling is done using CSS. The functionality of the buttons is provided by JavaScript which displays our input in the assigned area. The entire mathematical expression is considered as a string and it is evaluated using the eval() function in JavaScript and the output is displayed. The display is cleared when we click on the 'Reset' button. </p>
            </div>
            <br>
            <div class="p2">
                <p class="proj-1">2. Mini Snakes and Ladders Game</p>
                <div class="NG-photos">
                    <img src="SL-1.png" class="NG-1" height="400" width="400">
                    <img src="Sl-2.png" class="NG-2" height="400" width="400">
                </div>
                <p class="p2-text">This project is about a fully automatic Snakes and Ladders Game. For simplicity, the game starts from position 1 and ends at position 30. There are only snakes in the game and no ladders. The number from a dice is generated by the srand() function. The value of the dice is added to our position. If the sum of our position and the dice value puts us in a position where a snake is placed, we immediately reach to the tail of the snake. To make things interesting, a feature is added which concludes the game is over if our position is exactly 30 only and for any value other than 30, the dice value is discarded. If the position value reaches 29, a Master Snake throws the player out of the board to position 0 and the game is lost. For better user experience, a sleep() function is used which delays the output messages by the specified time period. The code for this game is written entirely in C Language. </p>
            </div>
            <br>
            <div class="p3">
                <p class="proj-1">3. Number Guessing Game</p>
                <div class="NG-photos">
                    <img>
                    <img>
                    <img>
                    <img src="NG-1.png" class="NG-1"height="250" width="620" >
                    <img src="NG-2.png" class="NG-2" height="250" width="620">

                </div>
                <div class="images">
                    <img>
                    <img>
                    <img>
                    <img src="NG-3.png" class="NG-1" height="250" width="620">
                    <img src="NG-4.png" class="NG-2" height="550" width="620">
                </div>
                <p class="p3-text">Here is a Number Guessing Game made using Python. The game has four difficulty levels: easy, medium, hard and custom. With increasing difficulty, the range of numbers increases. The user has to guess the number that the system randomly picks for that difficulty level. Everytime the user guesses a number, he receives a hint whether the actual number is higher or lower than the guessed number. When the user correctly guesses the number, the number of attempts made by the user will be displayed and the name of the user will be taken. The name of the user, difficulty level and number of attempts are then stored in a csv file and according to the difficulty level that the user has chosen, the statistics for that particular difficulty level will also be displayed.</p>
            </div>
        </div>
    </body>
</html>
    `;
    document.getElementById("content").innerHTML=proj;
}
function Contact(){
    var cont=
    `
    <!DOCTYPE html>
<html>
    <head>
        <title>Contact Form</title>
        <link rel="stylesheet" type="text/css" href="Contact.css" >
    </head>
    <body>
        <script src="Contact.js"></script>
        <div class="cform">
        <form id="contact-form" name="Cform" onsubmit="return submit()">
            <label for="name" style="font-size: x-large; color:#00FFFF;">Name</label>
            <input type="text" id="name" name="name" required style="color:rgb(57,255,20);">
          
            <label for="email" style="font-size: x-large; color:#00FFFF;">Email</label>
            <input type="email" id="email" name="email" required style="color:rgb(57,255,20);">
          
            <label for="message" style="font-size: x-large; color:#00FFFF;">Message</label>
            <textarea id="message" name="message" required style="color:rgb(57,255,20);"></textarea>
            <br>
            <br>
            <button type="submit" style="color:orangered; font-size: x-large;" value="Send"onclick="message()">Send</button>
          </form>
        </div>
          
    </body>
</html>
    `;
    document.getElementById("content").innerHTML=cont; 
}
