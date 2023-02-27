function Home(){
var content=`
<html>
    <head>
        <title>Home Page</title>
        <link rel="stylesheet" type="text/css" href="Home.css" >
    </head>
    <body>
        <div>
        <img src="My Photo.jpg" height="350" width="350" class="home-image">
        <p class="home-text"> Hello,</p>
        <p class="home-text">I am Abhiram Akella, I am currently pursuing my B.Tech in Computer Science and Engineering (Specialization in Data Science). I am always energetic, motivated and eager to learn new skills.</p>
        </div>
        <div>
            <p class="home-text">Here are the links to all my social media accounts</p>
            <button>
            <a href="https://www.linkedin.com/in/abhiram-akella-7660a7250/"> Linkedin</a>
            </button>
            <button>
                <a href="https://github.com/Abhiram157"> Github</a>
            </button>
        </div>
    </body>

</html>
`;
document.getElementById("content").innerHTML=content;
}