<template>
    <div class="grid-container animated fadeIn"> 

      <!--Movie gallary using flexbox-->
      <section class="grid-img flex-container">     
          <div class="column overlayfade"> 
              <!-- Three movie images from Google image -->
              <img class="multirow-img overlayimage" src="../assets/American Horror Story.jpg" alt="American Horror Story movie" >
              <div class="middle">
                  <!--Button defined, when cursor hovers over image, image fades, and button becomes clickable-->
                  <form action="movies.html#AmericanHorrorStory">    
                      <button class="button">American Horror Story</button>  
                  </form>
              </div>
          </div>
          <div class="column overlayfade">
              <img class="multirow-img overlayimage" src="../assets/Mr.bean.jpg" alt="Mr.bean movie">
              <div class="middle">
                  <!--Button defined, when cursor hovers over image, image fades, and button becomes clickable-->
                  <form action="movies.html#Mr.bean">        
                      <button class="button">Mr.bean</button>   
                  </form>
              </div>
          </div>
          <div class="column overlayfade">
              <img class="multirow-img overlayimage" src="../assets/sherlock.jpg" alt="sherlock movie">
              <div class="middle">
                  <!--Button defined, when cursor hovers over image, image fades, and button becomes clickable-->
                  <form action="movies.html#sherlock">   
                      <button class="button">sherlock</button>  
                  </form>
              </div>
          </div>
      </section>
      <br>
      
      <main class="main-iframe">
          <section id="American Horror Story"> 
              <h2>American Horror Story </h2>
              <!-- Movie introduction from Goggle -->
              <p>A Freak Show begins its tale in the quiet, sleepy hamlet of Jupiter, Florida. The year is 1952. A troupe of curiosities has just arrived to town, coinciding with the strange emergence of a dark entity that savagely threatens the lives of townsfolk and freaks alike. This is the story of the performers and their desperate journey of survival a midst the dying world of the American carny experience.
                  <i>American Horror Story Freak Show (Jessica Lange - Gods and Monsters)</i>
               </p>
          </section>
          <br>
          <section id="Mr.bean"> 
              <h2>Mr.Bean </h2>
              <!-- Movie introduction from Goggle -->
              <p> <i>Mr.Bean </i>is a brand new masterpiece directed by Christopher Nolan, and it has just been released recently in the US. This 
                  movie includes quite a lot interesting and complex plots, for example timeline twists. Doing mind-blowing movies is 
                  one of the most distinguishable features in Nolan's world. He's an expert at making good use of these complex concepts 
                  as well as plots and bringing people a whole new world, consisting of both realistic and imaginary experiences. 
              </p>
          </section>
          <br>
          <section id="sherlock"> 
              <h2>Sherlock</h2>
              <!-- Movie introduction from Goggle -->
              <p>When a string of brutal murders terrorizes London, it doesn't take long for legendary detective Sherlock Holmes <i>(Robert Downey Jr.)</i> 
                and his crime-solving partner, Dr. Watson <i>(Jude Law)</i>, to find the killer, Lord Blackwood <i>(Mark Strong)</i>. A devotee of the dark arts, 
                Blackwood has a bigger scheme in mind, and his execution plays right into his plans. The game is afoot when Blackwood seems to rise 
                from the grave, plunging Holmes and Watson into the world of the occult and strange technologies.
              </p>
          </section>
      </main>
  
      <aside class="aside-iframe">
          <!--Youtube video linked,  BoxOfficeSmashers, Youtube.com-->
          <iframe width="500" height="350" 
              src="https://www.youtube.com/embed/4tCuf3SGHTU?si=oBIy3UtMii2HVJeu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
              allowfullscreen>
          </iframe>
          <br>
          <br>
          <br>
          <!--Youtube video linked,  Warner Bros. Pictures, Youtube.com-->
          <iframe width="500" height="350" 
              src="https://www.youtube.com/embed/8YHMnCoOh4k?si=0QXDKumcJdQXF3gw"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
              allowfullscreen>
          </iframe>
          <br>
          <br>
          <br>
          <br>
          <!--Youtube video linked,  sherlock Movie, Youtube.com-->
          <iframe width="500" height="350" 
              src="https://www.youtube.com/embed/0aZOOcTt0E4?si=RmwlfTEhM4M55SXN"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowfullscreen>
          </iframe>
      </aside>
      <br> 
      <footer>
            Copyright &copy; 2023 Jiahe Zhou. All Rights Reserved.
            <p id="printnotice">Printed version: Jiahe's Wonderland.</p>
        </footer>
    
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>
@import '../components/css/styles.css';

/* Button class that defines styles for buttons. When cursor hovers over image, image fades, button becomes clickable */
.button { 
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 8px;
}

.button:hover {      /* Cursor hovers, button font color changes */
    color: rgb(233, 173, 173);
}

/* --------- Movies page animation, overlayfade effect. -- */
/* Flexbox styles */
.flex-container {
    width: 98%;
    display: flex;
}
  
.flex-container > div {
    background-color: rgb(236, 185, 185);
    box-shadow: 10px 10px 5px rgb(233, 176, 176);
    margin: 15px;
    margin-top: 25px;
    padding: 10px;
    width: 30%;
}

.column {
    float: left;
    width: 310px;
    padding: 10px;
}

.multirow-img {
    width:100%;
    box-shadow: 10px 10px 5px rgb(20, 20, 20);
}

/* Overlay fade effect, when cursor hovers on top of image, image fades, and shows text in the middle */
.overlayfade {
    position: relative;
    width: 50%;
}

.overlayimage {      
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
}
/* When hovers on image, overlay image becomes 0.3 opac */
.overlayfade:hover .overlayimage {
    opacity: 0.3;
}

/* When hovers in the middle, triggers the button effect */
.middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.overlayfade:hover .middle {
    opacity: 1;
}

@media (max-width: 1100px) {
    .main-iframe {
        width: 100%;
        margin-left: 80px;
    }
}

.main-iframe {
    width: 80%;
}

.aside-iframe {
    margin-top: 60px;
    margin-right: 110px;
}
</style>