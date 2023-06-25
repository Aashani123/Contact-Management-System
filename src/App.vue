<template>
<!--  <spinner/>-->
  <NavBar/>
  <router-view/>  
     <!--  the configurations made in routes get loads  -->
</template>

<script>
 import NavBar from "@/components/NavBar.vue";
 // import Spinner from "@/components/Spinner.vue";

 export default{
  name:'App',
   components: { NavBar}
 }
</script>

<style>

</style>

<!-- in this project I used bootstrap,font-awesome,axios and fort awesome 
to install them we can use  "npm i bootstrap @fortawesome/fontawesome-free axios"-->



<!--all database access are provide by db.json. when we want get all contact details we have to send a get request. http://localhost:9000/contacts/
when you want to get single contact can be used http://localhost:9000/contacts/contactID       methnt adl kenage it ek ghnw.
when you want create acontact you can use POST request. http://localhost:9000/contacts/
when you want update a contact then used PUT request http://localhost:9000/contacts/contactID
when you want delete a contact you can use DELETE request http://localhost:9000/contacts/contactID
these are created in services folder-->