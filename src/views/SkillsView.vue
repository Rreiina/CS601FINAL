<template>

  <div class="grid-container animated fadeIn"> 
 
      <aside class="aside-iframe">

      </aside>  
  
      <main class="main-iframe">
          <section> 
              <h2> Software Development Course I've Taken</h2>
              <p> Please below so far all course I've learned and comming soon courses, some course I took in diffenrent universitites.
                since I just start to front-end courses, so I try more different courses in furture.
              </p>
          
              <ul>
                  <li>Information Structures with Python</li> 
                  <li>Data Structures and Algorithms</li>
                  <li>Advanced Progarmming Techniques</li>
                  <li>Software Design and Patterns</li>
                  <li>Information Systems Analysis and Design</li>
                  <li>Software Engineering</li>
                  <li>Web Application Development</li>
                  <li>Database Design and Implementation for Business</li>
                  <li>Mobile Application Development with Android</li>
              </ul>
          </section>
  
          <section> 
              <h2>Skill Set</h2>       
              <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li> 
                  <li>VUE Frame</li> 
                  <li>UI Design</li> 
                  <li>My SQL</li> 
                  <li>Java</li>
                  <li>Python</li>
                  <li>Node.js</li>
              </ul>
          </section>
         <!-- -- catch data-- -->
          <section> 
             <h2>Education</h2> 
             <p>Please click here to get quickly table: &#x1F447;&#x1F447;&#x1F447;</p>      
              <div class="buttonDrive">
                <button class = "linkDrive" v-if="fetchedData === null" @click="getSchoolData">View School Info</button>
     
                <table v-if="fetchedData !== null">
                 <thead>
                   <tr>
                    <th>Name</th>
                    <th>Major</th>
                    <th>Type</th>
                    <th>Location</th>
                    <th>Year</th>
                   </tr>
                </thead>
                 <tbody>
                 <tr v-for="school in fetchedData.Schools" :key="school.Id">
                 <td>{{ school.Name }}</td>
                 <td>{{ school.Major }}</td>
                 <td>{{ school.Type }}</td>
                 <td>{{ school.Location }}</td>
                <td>{{ school.Year_Conferred }}</td>
                  </tr>
                  </tbody>
                   </table>
               </div>
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
  export default {
    data() {
      return {
        fetchedData: null,
      };
    },
    methods: {
      async getSchoolData() {
        try {
          const response = await fetch('SchoolData.json');
          const data = await response.json();
          this.fetchedData = data;
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
@import '../components/css/styles.css';
  
  .main-iframe {
      width: 85%;
  }
  
  .aside-iframe {
      margin-top: 60px;
      margin-right: 80px;
  }
  
  .fade-in {  
      width: 500px;
      border-radius: 8px;
      box-shadow: 15px 15px 5px rgb(240, 204, 204);
      animation: fadeIn ease 6s;
  }
  
.buttonDrive {
  margin-right: -70%;
    }

@keyframes fadeIn {
      0% {opacity:0;}
      100% {opacity:1;}
  }
  
@media only screen and (min-width: 1024px)  {
      .main-iframe {
          margin-left: 60px;
      }
  }
  </style>