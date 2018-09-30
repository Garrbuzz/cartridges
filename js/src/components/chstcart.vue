<template>
	<div class ="edit">
		
		<div class="title-statuses">
			<p>Для картриджу {{cart_name}} з серійним номером {{cart_id}} доступні такі статуси:</p>
	  			
			

		</div>
	    <div class = "statuses" v-for="nextstatus in nextstatuses">
	  		<div class = "radio-change-st">
	    		<label>
                   <input class="radio" type="radio" name="radio-test" @click="setNextSt(nextstatus.id)">
                   <span class="radio-custom" ></span>
                   <span class="label">{{ nextstatus.name }}</span>
    			</label>
			</div>
	 	</div>
		
		
		<div class="button-change"><button @click="chStatus(cart_id, cart_name, cart_status)">Змінити статус</button></div>
		<div class="button-cancel"><button @click="back(cart_oldSt)">Повернутися</button></div>
	
				
	</div>	
</template>
<script>
	export default {
		mounted:function(){
			let data = new FormData();
			data.append('cid', this.cart_id);
			this.$http.post('http://cartridges/changestatuscart', data).then(function(response){
				let resp = JSON.parse(response.bodyText);
				console.log(resp);
				resp[0].state = 'editCartridge';
				
				this.$emit('changeStatusCartridge', resp);
				this.nextstatuses=resp;
							
			}, function(error){alert('error')});
			
		},
		props: ['cart_id', 'cart_name', 'cart_status', 'cart_date', 'cart_oldSt'],
		data (){
			return{
				nextstatuses:'',
				st:''
				
			}
		},
		methods: {
			back(oldState){
				
 			this.$emit(oldState);
 			},
 			setNextSt(nextst){
 				this.$data.st = nextst;			
			},
			chStatus(cart_id, cart_name, cart_status){
			 let data = new FormData();
				data.append('newStatus', this.$data.st);
				data.append('name', cart_name);
				data.append('cartridge_id', cart_id);
				this.$http.post('http://cartridges/writenewstatus', data).then(function(response){
				let resp = JSON.parse(response.bodyText);
				console.log(resp);
				if (resp === 'ok'){
					alert('Статус успішно змінено.');
				}
				this.$emit('editCartridge');
			}, function(error){alert('error')});

				
			},
			
		} 
	}
</script>
<style scoped>
	.edit{
		display: grid;
		grid-template-columns:  10em repeat(10, 1fr) 10em;
		padding: 1em 0;
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
	.title-statuses{
		grid-column-start: 2;
		grid-column-end: 12;
		text-align: center;
		margin-bottom: 1em;
		color: #0f335b;
		font-size: 2em;
	}
	.statuses{
		grid-column-start: 4;
		grid-column-end: 9;
		padding-left: 3em;
		margin:  0.25em 0;
	}



.radio-change-st{
	margin: 0.25em 0;
}
.checkbox,
.radio {
	display: none;
}
.checkbox-custom,
.radio-custom {
	width: 1.2em;
	height: 1.2em;
	border: 2px solid #0f335b;
	/* border-radius: 3px; */
	position: relative;
	
}
.checkbox-custom,
.radio-custom,
.label {
	display: inline-block;
	vertical-align: middle;
}
.checkbox:checked + .checkbox-custom::before,
.radio:checked + .radio-custom::before {
	content: "";
	display: block;
	position: absolute;
	top: 2px;
	right: 2px;
	bottom: 2px;
	left: 2px;
	background: #f67d08;
	/* border-radius: 12px; */

}
.radio-custom,
.radio:checked + .radio-custom::before {
	border-radius: 50%;
}
</style>