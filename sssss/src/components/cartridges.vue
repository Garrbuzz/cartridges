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
	<button class="btn-search" onClick="searchBySerial()">Шукати</button>
</div>

<div class="or" id="or">
	<p>або:</p>
</div>
<div class="serial" id="by-brand-title">
	<p>За брендом</p>
</div>
<div class="serial" id="by-brand">
	<select name="bbb" id="br1" onchange="choiceBrandOfCartridge(value)">
		<p><option disabled selected value>Оберіть бренд</option></p>
		<p><option value="samsung">Samsung</option></p>
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
  	},
 	methods: {
 		
 	}
 }
</script>
<style>
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
/*=================Вибір картриджу========================*/
.choice-cartridge{
	grid-column-start: 2;
	grid-column-end: 6;
	grid-row-start: 1;
	grid-row-end: 2;
	padding-top:10px;

}

.brand select{
	font-size: 16px
}
.by-serial{
	grid-column-start: 5;
	grid-column-end: 8;
	grid-row-start: 2;
	grid-row-end: 3; 
	font-family: verdana;
	margin:-20px 0 20px 0;
 
}
.p-title{
	font-family: verdana;
	font-size: 16px;
	padding:0;
	margin:0 0 10px 0;
	color:#0f4109;
}
.cartridge{
	grid-column-start: 2;
	grid-column-end: 6;
	grid-row-start: 3;
	grid-row-end: 4; 
	margin:0 0 20px 0;
}
.new-cartridge{
	grid-column-start: 10;
	grid-column-end: 13;
	grid-row-start: 1;
	grid-row-end: 2; 
	font-family: verdana;
	margin:10px 0 20px 0;
}
.btn-success{

	font-family: verdana;
	font-size: 16px;
	padding:4px 12px;
	background: #37b;
	color:#bbb;
	border-radius: 4px;


}
.btn-success:hover{
background: #366;
color:#fff;
}
#choice-cartr-id select{
	font-size: 16px;
}

#new{

}
</style>