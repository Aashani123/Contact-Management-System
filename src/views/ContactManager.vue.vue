<template>
   <div class="container">
    <div class="row mt-3">
        <div class="col">
            <p class="h3 text-success fw-bold">Contact Manager
                <router-link to="/contacts/add" class="btn btn-success btn-sm"><i class="fa fa-plus-circle"></i>  New</router-link>
            </p>
            <p class="fst-italic">A contact management system is a powerful tool that helps individuals and businesses efficiently organize and maintain their contacts. With this system, users can store and manage a vast array of contact information, such as names, addresses, phone numbers, and email addresses, all in one centralized location. </p>
          <form>
            <div class="row">
               <div class="col-md-6">
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Search Name">
                    </div>
                    <div class="col">
                        <input type="submit" class="btn btn-outline-dark">
                    </div>
                </div>
               </div>
            </div>
          </form>
        </div>
    </div>
   </div>

   <!-- create card -->
   <div class="container mt-3">
    <div class="row">
        <div class="col-md-6">
            <div class="card my-2 list-group-item-succes shadow">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-sm-4">
                        <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" class="contact-img">
                        </div>
                        <div class="col-sm-7">
                          <ul class="list-group">
                            <li class="list-group-item">Name: <span class="fw-bold">Name</span></li>
                            <li class="list-group-item">Email: <span class="fw-bold">Email</span></li>
                            <li class="list-group-item">Mobile No: <span class="fw-bold">Modile No</span></li>

                          </ul>
                        </div>
                        <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                           <router-link to="/contacts/view/:contactId" class="btn btn-warning my-1">
                            <i class="fa fa-eye"></i>
                           </router-link>
                           <router-link to="/contacts/edit/:contactId" class="btn btn-primary my-1">
                            <i class="fa fa-pen"></i></router-link>
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
  