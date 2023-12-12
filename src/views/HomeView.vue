<template>
    <div class="grid-container animated fadeIn"> 
      <!-- ////image from unsplash.com -->
        <div class="flip-box">
            <div class="flip-box-inner  grid-img">
                <img class="flip-box-front" src="@/assets/1.jpg" alt="Natural">
                <img class="flip-box-back" src="@/assets/2.jpg" alt="City"> 
            </div> 
        </div>

        <main> 
            <section>
                <h2>Hi~ This is <i>Jiahe's Place!</i></h2>
                <p>She travels between the city and the outdoors, comedy and horror; she's interested in a lot of things and feels that life needs different challenges, so today's hero is me! </p>
                <p>In addition, you can learn about my professional skills and academic programs related to computer science. In addition, you can learn about my professional skills and academic programs related to computer science.</p>
                <p>Ready for an adventure? Let's get started! &#x2600;&#x2600;&#x2600;</p>

                <!-- Audio source from pixabay-->
                <audio controls>
                    <source src="@/assets/reflected-light-147979.mp3" type="audio/mpeg">
                </audio> 
            </section>
        </main> 

        <aside> 
            <!--The right hand side includes featured links to other pages of the website-->
            <h2>Featured Topics</h2>
            <RouterLink to="/hiking">Hiking at Twinlake in Los Angeles</RouterLink>
            <!-- <a href="https://www.nps.gov/yell/index.htm">Yellowstone National Park <br> (Fun Place I've Been)</a> -->
            <a href="https://www.imdb.com/">IMDB Movies <br> (TOP 10 on IMDBb in this week)</a>
            <a href="https://drive.google.com/file/d/1COBOOq7juoLM_Nn-x7-o3BZf02xDSqsw/view?usp=sharing"> JIAHE'S RESUME Dowload HERE</a>
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

<style>  /* -- Import some common features of CSS --- */
@import '../components/css/styles.css';


/* Image animation, flip box, customized and revised based on example from W3Schools
 */
 .flip-box {
  display: block;
  margin-top: 30px;
  margin-left: 30px;
  background-color: transparent;
  width: 1050px;
  height: 700px;
  perspective: 2000px;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front, .flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-box-front {
  margin-left: -525px;
  border-radius: 8px;
}

.flip-box-back {
  margin-left: -525px;
  transform: rotateY(180deg);
  border-radius: 8px;
}

main {
  width: 70%;
}

aside {
  margin-left: -300px;
}

@media (max-width: 1100px) {
    main {
        width: 80%;
        margin-left: 60px;
    }
    aside {
      display: none;
    }
}
</style>