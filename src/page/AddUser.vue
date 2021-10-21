<template>
  <div class="container">
    <form class="form-horizontal" role="form">
      <h2>Registration</h2>
      <div class="form-group row">
        <label for="firstName" class="col-sm-3 control-label">Full name</label>
        <div class="col-sm-9">
          <input type="text" id="firstName" placeholder="Name" class="form-control" autofocus>
        </div>
      </div>
      <div class="form-group row">
        <label for="firstName" class="col-sm-3 control-label">Email</label>
        <div class="col-sm-9">
          <input type="email" id="email" placeholder="Email" class="form-control" name="email">
        </div>
      </div>
      <div class="form-group row">
        <label for="firstName" class="col-sm-3 control-label">Phone</label>
        <div class="col-sm-9">
          <input type="number" id="phoneNumber" placeholder="Phone number" class="form-control">
          <span class="help-block">Your phone number won't be disclosed anywhere </span>
        </div>
      </div>
      <div class="form-group row">
        <label for="firstName" class="col-sm-3 control-label">Adress</label>
        <div class="col-sm-9">
          <input type="text" id="adress" placeholder="Adress" class="form-control">
        </div>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Register</button>
    </form> <!-- /form -->
  </div> <!-- ./container -->
</template>

<script>
export default {

}
</script>

<style>
body {
    background-size: cover;
}

*[role="form"] {
    padding: 15px;
    margin: 0 auto;
    border-radius: 0.3em;
    background-color: #f2f2f2;
}
.col-sm-3 {
    flex: 0 0 20% !important;
}

*[role="form"] h2 { 
    font-family: 'Open Sans' , sans-serif;
    font-size: 40px;
    font-weight: 600;
    color: #000000;
    margin-top: 5%;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 4px;
}
</style>
