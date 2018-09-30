<template>
<div>	
<header class="head-cart">
	<p>Облік картриджів</p>
</header>
<div class="serial">
	<p>Знайти картридж за серійним номером</p>
</div>	
<div class="serial" id="input-serial">
	<input  id = "cart-serial" type="search" name = "cartridgeSerial" placeholder="Введіть серійний номер картриджу">
</div>
<div class="serial" id="btn-search">
	<button class="btn-search" @click="searchBySerial()">Шукати</button>
</div>

<div class="or" id="or">
	<p>або:</p>
</div>
<div class="serial" id="by-brand-title">
	<p>За брендом</p>
</div>
<div class="serial" id="by-brand">
	<select name="bbb" id="br1" v-on:change="choiceBrandOfCartridge">
		<p><option disabled selected value>Оберіть бренд</option></p>
		<p><option value="samsung"  >Samsung</option></p>
		<p><option value="hp">Hewlett Packard</option></p>
		<p><option value="canon">Canon</option></p>
		<p><option value="oki">Oki</option></p>
		<p><option value="panasonic">panasonic</option></p>
	</select>
</div>
<div class="serial">
	<div id="choice-cartr-id"></div>
</div>
</div>
</template>
<script>
	export default {
 	data (){
 		return {};
  	},
 	methods: {

 		searchBySerial(){

 			let serial = document.querySelector("#cart-serial").value;
 			let data = new FormData();
			data.append('serial', serial);
			this.$http.post('http://cartridges/byserial', data).then(function(response){
					
					let resp = JSON.parse(response.bodyText);
					if (resp){
					resp.state = 'choiceCartridges';
					this.$emit('editCartridge', resp);
				} else {
					alert('Картриджу з таким серійним номером не існує.');
				}
					
					
						
			}, function(error){alert('error')});
			
		},
		choiceBrandOfCartridge(e){
			alert(e.target.value);
			
		}

 		
 }

 }
</script>
<style scoped>
.head-cart, .serial, .or{
	display: flex;
	flex-wrap:wrap;	
	justify-content:center;
	margin:0;
}

.head-cart p{
	margin:0;
	padding:0;
	font-family: verdana;
	font-size: 2em;
	color: #f78907;
	}
	/*=========Пошук за серійним номером==============*/

.serial p{
	margin: 2em 0 1.2em 0;
	font-family: verdana;
	font-size: 1.1em;
	color: #2662a6;
}
.serial input{
	font-family: verdana;
	font-size: 2em;
	padding: 0.5em 1em;
	background: #e1e5e2;
	/* border-radius: 0.3em; */
	color: #444 ;
	box-shadow: none;
}
.serial input:focus{
	/* border-radius: 0.3em; */
	background: #e5e5e5;
	box-shadow: none;
}
input[type="search"]::-webkit-input-placeholder {
    color: #b2bcb6;
    font-size: 0.69em;
   
} 
input[type="search"]::-moz-placeholder {
    color: #b2bcb6;
    font-size: 0.69em;
    
}
input[type="search"]::placeholder {
    color: #b2bcb6;
    font-size: 0.69em;
    
}
.btn-search{
	background: #59a;
	color: #fff;
	opacity: 0.7;
	font-family:verdana;
	font-size: 1.2em;
	padding: 0.3em 2em;
	margin: 1.2em;
	border-radius: 0.3em;
}   
/*============OR================*/
.or{
	margin: 0;
}
.or p{
	color: #2662a6;
	font-family:verdana;
	font-size: 1.7em;
}
/*========================================*/
/*==============Вибір за брендом==================*/
#by-brand select{
	font-family: verdana;
	font-size: 1.5em;
	padding: 0.2em 2.5em;
	background: #58A;
	border-radius: 0.3em;
	color: #fff ;
}
#by-brand select > option{
	font-size: 0.8em;
	background: #368;
}

#choice-cartr-id select{
	margin: 2em;
	font-family: verdana;
	font-size: 1.5em;
	background: #58A;
	border-radius: 0.3em;
	color: #fff ;
}
#choice-cartr-id select > option{
	font-size: 1.2em;
	background: #368;
	padding:0.5em;

}
/*========================================*/
#cart-Name-nema{
	font-family: verdana;
	color: #fff;
	
}
/*========================================*/
.row-g{
	font-family: verdana;
	background: #eef6f5;
	display:grid;
	max-width: 1000px;
	grid-template-columns: 50px repeat(10, 1fr) 50px;
	margin:0;
}

</style>