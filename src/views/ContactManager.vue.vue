<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col">
        <p class="h3 text-success fw-bold">
          Contact Manager
          <router-link to="/contacts/add" class="btn btn-success btn-sm"
            ><i class="fa fa-plus-circle"></i> New</router-link
          >
        </p>
        <p class="fst-italic">
          A contact management system is a powerful tool that helps individuals
          and businesses efficiently organize and maintain their contacts. With
          this system, users can store and manage a vast array of contact
          information, such as names, addresses, phone numbers, and email
          addresses, all in one centralized location.
        </p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search Name"
                  />
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Spinner
<div v-if="loading">
 <div class="container">
  <div class="row">
    <div class="col">
      <Spinner/>
    </div>
  </div>
 </div>
</div> -->

<!-- Error -->
<div v-if="errorMessage">
  <div class="container">
  <div class="row">
    <div class="col">
<p class="h3 text-danger fw-bold">{{ errorMessage }}</p>    </div>
  </div>
 </div>  
</div>

  <!-- create card -->
  <div class="container mt-3" v-if="contacts.length > 0">
    <div class="row">
      <div class="col-md-6" v-for="contact of contacts" :key="contact">
        <div class="card my-2 list-group-item-succes shadow-lg">
          <div class="card-body">
            <div class="row align-items-center">
              <div class="col-sm-4">
                <img
                  :src="contact.photo"
                  class="contact-img"
                />
              </div>
              <div class="col-sm-7">
                <ul class="list-group">
                  <li class="list-group-item">
                    Name: <span class="fw-bold">{{contact.name}}</span>
                  </li>
                  <li class="list-group-item">
                    Email: <span class="fw-bold">{{contact.email}}</span>
                  </li>
                  <li class="list-group-item">
                    Mobile No: <span class="fw-bold">{{ contact.mobile }}</span>
                  </li>
                </ul>
              </div>
              <div
                class="col-sm-1 d-flex flex-column justify-content-center align-items-center"
              >
                <router-link
                  to="/contacts/view/:contactId"
                  class="btn btn-warning my-1"
                >
                  <i class="fa fa-eye"></i>
                </router-link>
                <router-link
                  to="/contacts/edit/:contactId"
                  class="btn btn-primary my-1"
                >
                  <i class="fa fa-pen"></i
                ></router-link>
                <button class="btn btn-danger my-1">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { contactService } from '@/services/contactService';
// import Spinner from '@/components/Spinner.vue';

export default{
    name: "ContactManager",
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMessage: null
        };
    },
    created: async function () {
        try {
            this.loading = true;
            let response = await contactService.getAllContacts();
            this.contacts = response.data;
            this.data = false;
        }
        catch (error) {
            this.errorMessage = error;
            this.loading = false;
        }
    },
    methods: {},
}
</script>
