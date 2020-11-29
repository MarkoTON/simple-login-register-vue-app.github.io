var loginTemplate = `
<div class="col-6 offset-3">
  <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
    </div>
    <div class="form-group">
      <a href="#" v-on:click="newRegistration">Registrate</a> - 
      <a href="#" v-on:click="newPassword">Forgot password</a>
    </div>

    <button v-on:click="changeData" class="btn btn-primary">Sign in</button>
  </form>
</div>
`;

var newUser = `
<div class="col-6 offset-3">
  <form>
    <div class="form-group">
      <label for="userName">Name:</label>
      <input type="text" v-model="name" class="form-control" id="userName">
    </div>
    <div class="form-group">
      <label for="newEmail">Email address</label>
      <input type="email" v-model="email" class="form-control" id="newEmail" aria-describedby="emailHelp">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="newPassword">Password</label>
      <input type="password" v-model="password" class="form-control" id="newPassword">
    </div>
    <div class="form-group">
      <label for="ageUser">Age:</label>
      <input type="text" v-model="age" class="form-control" id="ageUser">
    </div>

    <button v-on:click="addNewUser" class="btn btn-primary">Register</button>
  </form>
</div>
`;

var newPassword = `
<div class="col-6 offset-3">
  <form>
    <div class="form-group">
      <label for="newEmail">Email address</label>
      <input type="email" v-model="email" class="form-control" id="newEmail" aria-describedby="emailHelp">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="newPassword">New Password</label>
      <input type="password" v-model="password" class="form-control" id="newPassword">
    </div>
    <div class="form-group">
      <label for="repNewPassword">Repeat new Password</label>
      <input type="password" v-model="rep_password" class="form-control" id="repNewPassword">
    </div>

    <button v-on:click="setNewPassword" class="btn btn-primary">Register</button>
  </form>
</div>
`;

Vue.component('login',{
  props: ['postTitle','userArray','loginComp','registerComp','forgotPassword','successComp'],
  data(){
    return {
      email:'',
      password:'',
      title: this.postTitle,
      users: this.userArray,
      login: this.loginComp,
      register: this.registerComp,
      forgot_password: this.forgotPassword,
      success: this.successComp
    }
  },
  template: loginTemplate,
  methods:{
    changeData(){
      // console.log(this.email);
      if(this.email == '' || this.password == ''){
        alert("Please enter email and password")
        return
      }
      this.$emit('check-user',{emailEnter: this.email, password: this.password})
    },
    newRegistration(){
      this.$emit('register-new-user')
    },
    newPassword(){
      this.$emit('user-forgot-password')
    }

  },
  mounted(){
    console.log(this.title);
    console.log(this.users);
  }
})

Vue.component('register-new-user',{
  data(){
    return {
      name:'',
      email:'',
      password:'',
      age:''
    }
  },
  template: newUser,
  methods:{
    addNewUser(){
      if(this.email == '' || this.name == '' || this.password == '' || this.age == ''){
        alert('Please fill in all the fields')
        return
      }
      this.$emit('add-new-user',{user: {name: this.name, email: this.email, password: this.password, age: this.age}})
    }
  }
})

Vue.component('new-password',{
  props: ['userArray'],
  data(){
    return {
      users: this.userArray,
      email:'',
      password:'',
      rep_password: ''
    }
  },
  template: newPassword,
  methods:{
    setNewPassword(){
      this.users.forEach(element => {
        if(element.email == this.email){
          this.$emit('change-old-password-user',{user: {email: this.email, password: this.password}})
        }
      })
      
    }
  }
})

Vue.component('success-login',{
  template: '<h1>Success login component</h1>'
})