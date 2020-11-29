
new Vue({
  el:'#app1',
  data: {
    title: 'Simple app',
    allUsers:[
      {
        name:'Max',
        email: 'demo@demo.com',
        password:'test1234',
        age: '27'
      }
    ],
    loginComp:true,
    registerComp: false,
    forgotPassword:false,
    successComp: false
  },
  methods: {
    checkUserEmail(email){
      // console.log(email.emailEnter);
      this.allUsers.forEach(element => {
        if(element.email == email.emailEnter && element.password == email.password){
          this.loginComp = false;
          this.successComp = true;
          return
        } 
        // if (element.email == email.emailEnter) {
        //   alert("Please enter correct password")
        // } else if( element.password == email.password ){
        //   alert("Please enter correct email")
        // } else {
        //   alert("Please enter correct email and password")
        // }
      })
    },
    registerNewUser(){
      this.loginComp = false;
      this.registerComp = true;
    },
    addNewUser(data){
      // console.log(data.user);
      this.allUsers.push(data.user);
      this.loginComp = true;
      this.registerComp = false;
    },
    userForgotPassword(){
      this.loginComp = false;
      this.forgotPassword = true;
    },
    updatePassword(data){
      // console.log(data.user);
      this.allUsers.forEach(element =>{
        if(element.email == data.user.email){
          element.password = data.user.password;
        }
      });
      // console.log(this.allUsers);
      this.loginComp = true;
      this.forgotPassword = false;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

