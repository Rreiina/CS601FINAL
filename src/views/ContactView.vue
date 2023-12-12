<template>

    <div class="grid-container animated fadeIn"> 

      <aside class="aside-iframe">
          <figure>   
              <img class="contact-image" src="../assets/contact.jpg" alt="resume">
          </figure>
      </aside>

      <main class="main-iframe">
          <section> 
              <h2>Contact me!</h2>  
              <p class="slideinfromleft"></p> <p>Check social media as below:</p>  
              <a href="https://api.whatsapp.com/send?phone=3239259687">+323 925 9688</a>
              <a href="http://www.linkedin.com/in/jiahezhou/" ><img src="@/assets/iconmonstr-linkedin-3-240.png" id ="icon" alt="Linkedin icone"
                        class="imgicon"> Linkedin</a>
              <a href="http://www.linkedin.com/in/jiahezhou/"><img src="@/assets/iconmonstr-github-1-240.png"  id ="icon" alt="Github icone"
                        class="imgicon"> Linkedin</a>
                <p mail to="jiahe933@bu.edu"> Send e-mail to jiahe933@bu.edu</p>
              <em>Or</em> <p> Leaving message to me！</p>
 
          </section>
      

          <div id="validates">
              <!-- /// Information validates -->
                <form class="information" @submit.prevent="submitForm">
                    <div class="form-group">
                      <label for="name">Name:</label>
                      <input type="text" id="name" v-model="formData.name" required>
                    </div>
                    <div class="form-group">
                       <label for="email">E-mail:</label>
                       <input type="email" id="email" v-model="formData.email" required>
                  </div>
                   <div class="form-group">
                      <label for="message">Message:</label>
                      <textarea id="message" v-model="formData.message" required></textarea>
                  </div>
                 <button type="submit">Submit</button>
               </form>
          </div>

        </main>
                <br> 
               <footer>
                    Copyright &copy; 2023 Jiahe Zhou. All Rights Reserved.
                    <p id="printnotice">Printed version: Jiahe's Wonderland.</p>
                 </footer>
    </div>

 
 </template>
 
 <script>
 export default {
   data() {
     return {
       formData: {
         name: '',
         email: '',
         message:'',
       },
     };
   },
   methods: {
     submitForm() {
       // Call the form validation logic here
       this.validateForm(this.formData);
     },
         // validates form content
     validateForm(formadata){
             this.errors = [];
             const regex = /^[A-Za-z]+$/;
             const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             if (!this.name || this.name.length < 2) {
                 this.errors.push("Name required. Please check for more than 1 character.");
                 e.preventDefault();
                 return;
             } if (!this.name.match(regex)) {
                  this.errors.push("Please ensure the name contains letters only.");
                  e.preventDefault();
                  return;
             } if (!this.email) {
                 this.errors.push('Email required.');
                 e.preventDefault();
                 return;
             } if (!this.email.match(emailRegex)){
                 this.errors.push('Please enter valid email.');
                 e.preventDefault();
                 return;     
             } if (!this.message){
                 this.errors.push('Please enter brief message.');
                 e.preventDefault();
                 return; 
             } if (!this.errors.length) {
                 console.log('sending')
                 e.preventDefault();
                 this.sendEmail(e);
             }
             }
         }
     }
 </script>
 
 <style scoped>
 @import '../components/css/styles.css';


 .aside-iframe {
     margin-bottom: 20px;
     margin-right: -120px;
 }
 
 .main-iframe {
     width: 80%;
     text-align: center;
 }
 
 .contact-image {
     width: 330px;
     border-radius: 8px;
     box-shadow: 10px 10px 5px rgb(238, 230, 230);
     margin-left: -20px;
 }
 
 .slideinfromleft {   
     animation-duration: 3s;
     width: 100%;
     animation-name: slideinfromleft;
 }

 .imgicon {
  width: 32px;
  height: 32px; 
}

.information {
    display: flex;
    flex-direction: column;
}

.form-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

label {
    width: 100px; 
    margin-right: 10px;
}

input, textarea {
    flex: 1; 
}

section a {
    color: #dce0e4; 
    text-decoration: none;
}

 @keyframes slideinfromleft {
     from {
       margin-left: -50%;
       width: 100%; }
     to {
         margin-left: 0%;
         width: 100%;}
 }
 
 @media (max-width: 1100px) {
     .main-iframe {
         margin-left: 80px;
     }
 }
 </style>