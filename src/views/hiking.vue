<template>
<div>
    <img class= "ocean" src="../assets/ocean.jpg" alt="ocean">
    <main class="main-iframe">
        <section> 
            <h2>Favorite Hiking Videos</h2>
            <P><strong>Twin Lakes</strong> is a set of connected lakes at the base of the southeastern slope of Mammoth Mountain, in Mono County of eastern California. They are in the eastern Sierra Nevada, and within the Inyo National Forest.</P>
            <p><strong>Twin Lakes</strong>  are the lowest lakes in the Mammoth Lakes Basin. On one side of the lake are lava cliffs that were formed by eruptions of Mammoth Mountain. The other side of the lake has the Inyo National Forest's Twin Lakes Campground, and Tamarack Lodge of the Mammoth Mountain Ski Area.</p>
        </section>
    </main>
    <aside class="aside-iframe"> 
        
        <!--Youtube video linked, TwinLake, Youtube.com--> 
        <iframe width="800" height="350" title="Hiking 60 Miles Alone in Hornstrandir Iceland"
            src="https://www.youtube.com/embed/pyfNIMW2_m8?si=kM0-LX-RrWZjI5bW" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
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

/* Key frames for slide in animation */

@media (max-width: 1100px) {
    .main-iframe {
        width: 100%;
        margin-left: 80px;
    }
}

img.ocean {
  width: 100%; 
  height: 30%; 
  object-fit: cover;
}

.main-iframe {
    width: 110%;
}

.aside-iframe {
    margin-top: 50px;
    margin-left: 150px;
}
</style>