<template>

    <div class="grid-container animated fadeIn"> 
      
        <aside class="aside-iframe">
            <figure>   
                <img class="regular-image" src="../assets/man.png" alt="profile">
            </figure>    
        </aside>

        <main class="main-iframe">
            <section class="fade-in-text" > 
              <h2>A Mini Biography</h2>
              <p>I want to become a web developer and user interface designer. Why become? Because I just started to contact the information computer industry, graduated from the Southern California Business School in 2011, and then also successfully entered a multinational trading company, engaged in apparel design and product management work, and did for six years.</p>
              <p>Until the first two years, because I have been doing apparel design, using software that is different from UI but with similar design concepts, I started to study WIX.COM on my own,It gave me a great learning experience, and even though I knew it wasn't really web design, it made me very interested in web design. That's why I decided to come to Boston University to study.I had a hard time learning because I had zero foundation, after all, I couldn't even figure out how many parts there are in a computer. I also realized that many of my classmates already had relevant work experience, so the pressure was very great. In the first year, I worked and stayed up late to study, but I still couldn't write my assignments, and the feeling of powerlessness was something I had never encountered in my previous jobs, so I took a year off from school. During this year, I thought over and over again whether I was studying for a degree, or for knowledge, or for high technology. One must always have a purpose, and I realized that I had no purpose. I just felt that I hadn't tried, I wanted to try, and a challenge is always a happy feeling.</p>
              So this year I began to continue to take classes again, I set my mind right, I put down the work in hand, I no longer ask myself to have the best of both worlds, after all, if you want everything, then you can't get anything.
           
            </section>
        </main>

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

.main-iframe {
    width: 85%;
}

.aside-iframe {
    margin-bottom: 80px;
    margin-right: 150px;
}

@keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
}

.fade-in-text { 
    text-transform: none;
    margin: 0 20px;
    opacity: 100%;
    animation: fadeIn ease 6s;
}

@media (max-width: 1100px) {
    .main-iframe {
        margin-left: 50px;
    }
}
</style>