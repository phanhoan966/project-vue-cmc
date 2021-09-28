<template>
  <div class="container">
    <h2>List user</h2>
    <table class="table table-bordered">
      <thead class="table-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Adress</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in listUser" :key="index">
          <th scope="row">{{index + 1}}</th>
          <td>{{user.nameUser}}</td>
          <td>{{user.emailUser}}</td>
          <td>{{user.phoneUser}}</td>
          <td>{{user.adressUser}}</td>
          <td>
            <i class="fas fa-user-plus text-success" style="cursor:pointer"></i>
            &nbsp;
            <i class="fas fa-user-edit text-primary" style="cursor:pointer"></i>
            &nbsp;
            <i class="fas fa-user-minus text-danger" style="cursor:pointer"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// nameUser: '',
// emailUser: '',
// phneUser: '',
// adressUser: ''

// const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDQFehzdEuRumzKzzzrtM7cFDqrBzEI1Pg`, {
//     method: 'POST',
//     body: JSON.stringify({
//         email: payload.email,
//         password: payload.password,
//         returnSecureToken: true
//     })
// })
export default {
  data() {
    return {
      listUser: null,
    };
  },
  async created() {
    // const response = await fetch(`https://manager-user-faf76-default-rtdb.firebaseio.com/listUser.json`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         nameUser: "Phan Văn Hoan",
    //         emailUser: "phanhoan.vnu@gmail.com",
    //         password: "phanvanhoan",
    //         phoneUser: "0387776506",
    //         adressUser: "Cổ Nhuế 2"
    //     })
    // })
    // const response = await fetch(`https://manager-user-faf76-default-rtdb.firebaseio.com/listUser.json`);
    const response = await fetch('https://manager-user-faf76-default-rtdb.firebaseio.com/listUser.json')
    .then(response => response.json())
    let arr = []
    for (const key in response) {
        let user = {
            nameUser: response[key].nameUser,
            emailUser: response[key].emailUser,
            phoneUser: response[key].phoneUser,
            adressUser: response[key].adressUser,
        }
        arr.unshift(user);
    }
    this.listUser = arr;
  },
  computed: {},
  methods: {},
};
</script>
<style>
</style>