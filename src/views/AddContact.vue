<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">Add Contact</p>
        <p class="fst-italic">
          Welcome to the Add Contact page of our Contact Management System! This
          user-friendly interface allows you to effortlessly add new contacts to
          your database. Whether you're looking to store personal or
          professional information, our system makes it easy to organize and
          manage your contacts effectively. Simply fill in the required fields
          with the contact's details, and with just a click, their information
          will be seamlessly added to your collection. Stay connected and keep
          your contacts organized with our efficient Add Contact feature.
        </p>
      </div>
    </div>
  </div>
  <!-- <pre>{{ groups }}</pre> -->
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitCreate()">
          <div class="mb-2">
            <input v-model="contact.name" type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="mb-2">
            <input v-model="contact.photo" type="text" class="form-control" placeholder="Picture URL" />
          </div>
          <div class="mb-2">
            <input v-model="contact.email" type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="mb-2">
            <input v-model="contact.mobile" type="number" class="form-control" placeholder="Mobile" />
          </div>
          <div class="mb-2">
            <input v-model="contact.company" type="text" class="form-control" placeholder="Company" />
          </div>
          <div class="mb-2">
            <input v-model="contact.title" type="text" class="form-control" placeholder="Title" />
          </div>
          <div class="mb-2">
            <select v-model="contact.groupId" class="form-control" v-if="groups.length > 0">
              <option value="">Select Group</option>
              <option :value="group.id" v-for="group of groups" :key="group.id">{{ group.name }}</option>
            </select>
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Create" />
          </div>
        </form>
      </div>
      <div class="col-md-2 text-end">
        <img
          :src="contact.photo"
          alt=""
          class="contact-img"
        />
      </div>
    </div>
  </div>
  <!-- <pre>{{ contact }}</pre> -->
</template>

<script>
import { contactService } from '@/services/contactService';

export default {
  name:"AddContact",
  data: function (){
    return {
      contact: {
        //here write a query that are equal to titles of db data;
        name:'',
        photo:'',
        email:'',
        mobile:'',
        company:'',
        title:'',
        groupId:''
      },
      groups : []
    }
  },
  created: async function(){
    try{
      let response=await contactService.getAllGroups();
      this.groups = response.data;
    }
    catch (error) {
    console.log(error);
    }
  },
  methods : {
    submitCreate : async function(){
      try{
        let response = await contactService.createContact(this.contact);
        
        if(response){
          return this.$router.push('/');
        }
        else{
          return this.$router.push('/contacts/add');
        }
      }
      catch(error){
        console.log(error);
      }
    }
  }
}
</script>
