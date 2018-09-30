<template>

<div class="content">
      	    
				<p>Ім'я:
					<input type="text" id="username">  
				</p>
				<p>Пароль:
					<input type="password" id="pass">  
				</p>
				<button  id="login-btn" @click="users_login()">Ok</button>
			 
			
	    </div>
</template>
<script>
	export default {
 	data (){
  	},
 	methods: {
  
  		
  users_login(){
  	
  	var login = document.querySelector("#username").value;
	var password = document.querySelector("#pass").value;
	var data = new FormData();
	data.append('login', login);
	data.append('password', password);
	this.$http.post('http://cartridges/auth', data).then(function(response){
			
			let resp = JSON.parse(response.body);
			
		
			
			if (resp == "1") {
				  this.$emit('loginOk');
				 
			} else if (resp == "0") {
				alert('Користйвач з таким ім\'ям не зареєстрований в системі.'); 

			} else if (resp == "2") {
				alert('Не вірний пароль.'); 

			} else {
				alert('Сталася якась помилка.');
				alert(resp);
			}
			
		}, function(error){alert(error)});
 }
 }	
}


</script>
<style>
	
</style>
