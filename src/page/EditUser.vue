<template>
  <div class="container">
    <form class="form-horizontal" role="form">
      <h2>Edit User</h2>
      <div class="form-group row">
        <label for="firstName" class="col-sm-3 control-label">First Name</label>
        <div class="col-sm-9">
          <input type="text" id="firstName" placeholder="First Name" class="form-control" autofocus>
        </div>
      </div>
      <div class="form-group row">
        <label for="lastName" class="col-sm-3 control-label">Last Name</label>
        <div class="col-sm-9">
          <input type="text" id="lastName" placeholder="Last Name" class="form-control" autofocus>
        </div>
      </div>
      <div class="form-group row">
        <label for="email" class="col-sm-3 control-label">Email* </label>
        <div class="col-sm-9">
          <input type="email" id="email" placeholder="Email" class="form-control" name="email">
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-sm-3 control-label">Password*</label>
        <div class="col-sm-9">
          <input type="password" id="password" placeholder="Password" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="password" class="col-sm-3 control-label">Confirm Password*</label>
        <div class="col-sm-9">
          <input type="password" id="password" placeholder="Password" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="birthDate" class="col-sm-3 control-label">Date of Birth*</label>
        <div class="col-sm-9">
          <input type="date" id="birthDate" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="phoneNumber" class="col-sm-3 control-label">Phone number </label>
        <div class="col-sm-9">
          <input type="phoneNumber" id="phoneNumber" placeholder="Phone number" class="form-control">
          <span class="help-block">Your phone number won't be disclosed anywhere </span>
        </div>
      </div>
      <div class="form-group row">
        <label for="Height" class="col-sm-3 control-label">Height* </label>
        <div class="col-sm-9">
          <input type="number" id="height" placeholder="Please write your height in centimetres" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label for="weight" class="col-sm-3 control-label">Weight* </label>
        <div class="col-sm-9">
          <input type="number" id="weight" placeholder="Please write your weight in kilograms" class="form-control">
        </div>
      </div>
      <div class="form-group row">
        <label class="control-label col-sm-3">Gender</label>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-4">
              <label class="radio-inline">
                <input type="radio" id="femaleRadio" value="Female">Female
              </label>
            </div>
            <div class="col-sm-4">
              <label class="radio-inline">
                <input type="radio" id="maleRadio" value="Male">Male
              </label>
            </div>
          </div>
        </div>
      </div> <!-- /.form-group -->
      <div class="form-group">
        <div class="col-sm-9 col-sm-offset-3">
          <span class="help-block">*Required fields</span>
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
