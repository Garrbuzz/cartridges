<template>
	
	<div class="wrapper">
		<header class="acc-header">
			<p>Система обліку елементів інформаційної інфраструктури</p>
		</header>
		<div class="row-g">
			<div class = "acc-nav">
				<div @click="$emit('choiceCartridges')">
					<p ><a>Картриджі</a></p>
				</div>
				<div @click="$emit('choicePrinters')">
					<p><a>Принтери</a></p>
				</div>
				<div>
					<p><a href="../html/monitors.html">Монітори</a></p>
				</div>
				<div>
					<p><a href="../html/monitors.html">Системні блоки</a></p>
				</div>
			</div>
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
	.acc-header{
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.acc-header p{
	font-family: verdana;
	font-size: 24px;
	margin:10px;
	padding:0;
	color:#0f4109;
}

.acc-nav{
	grid-column-start: 2;
	grid-column-end: 12;
	grid-row-start: 1;
	grid-row-end: 2; 
	display:flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: stretch;
}
.acc-nav div{
	width: 100px;
	font-family: verdana;
	font-size: 16px;
	margin-right: 1px;
	background: #37b;
	padding: 0 10px;
	margin-top: 10px;
	margin-bottom:20px;
}

.acc-nav a{
	color: #ddd;
	text-decoration: none;
	vertical-align: middle;
	text-align: center;
}
a:hover{
	color:#eee;
}
.acc-nav p{
	vertical-align: middle;
	text-align: center;
}
.acc-nav div:hover{
	background:#366;
	margin-top:15px;
	margin-bottom: 15px;
    transition: ease-in .3s;
}

</style>