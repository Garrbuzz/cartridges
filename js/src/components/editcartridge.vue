<template>
	
		
	<div class ="edit">
		
		<div class="title">Знайдено картридж:</div>
		<div class="nameParam">Серійний номер:</div>
		<div class="param">{{ id }}</div>
		<div class="nameParam">Назва:</div>
		<div class="param">{{ name }}</div>
		<div class="nameParam">Поточний статус:</div>
		<div class="param">{{ status }}</div>
		<div class="nameParam">Дата зміни статусу:</div>
		<div class="param">{{ date }}</div>
		<div class="button-change"><button @click="changeStCart(id, name, status, date, 'editCartridge')">Змінити статус</button></div>
		<div class="button-cancel"><button @click="back(oldState)">Повернутися</button></div>
		
				
	</div>	
</template>
<script>
	export default {
	props: ['id', 'name', 'status', 'date', 'oldState'],

 	data (){
 		  return {
 		  	
 		  };
  	},
 	methods: {
 		back(oldState){
 			this.$emit(oldState);
 		},
 		changeStCart(id, name, status, date, ollll){
 			function DataCart(id, name, status, date, ollll){
 				this.id = id;
 				this.name = name;
 				this.status = status;
 				this.date = date;
 				this.ollll = ollll;
 			}
 			let dataCart = new DataCart(id, name, status, date, ollll);
 			this.$emit('changeStatusCartridge', dataCart);
 		}
 	}	
 	
 }
 	
</script>
<style scoped>
	.title{
		/*display: flex;
		flex-wrap:wrap;	*/
		grid-column-start: 4;
		grid-column-end: 10;
		justify-content:center;
		margin:0;
		font-family: verdana;
	}
	.title{
		color: #0f335b;
		font-size: 2em;
		padding-bottom: 2em;
	}
	.edit{
		display: grid;
		grid-template-columns:  10em repeat(10, 1fr) 10em;
		padding: 1em 0;
	}
	.nameParam{
		grid-column-start: 4;
		grid-column-end: 7;
		color: #0f335b;
		
	}
	.param{
		color: #f67d08;
		grid-column-start: 8;
		grid-column-end: 13;
	}
	.nameParam, .param {
		margin: 0.3em 0;
		font-size: 1.3em;
		font-family: verdana;
	}
	.button-change{
		grid-column-start: 4;
		grid-column-end: 7;
		margin: 2em 0;
	}
	.button-cancel{
		margin: 2em 0;
		grid-column-start: 8;
		grid-column-end: 13;
	}
</style>