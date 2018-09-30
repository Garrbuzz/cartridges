<template>
  <div class="content">
  
      <app-login v-if="state == 'login'" @loginOk="onLogin"></app-login>
      <app-accounting v-else-if="state == 'accounting'" @choiceCartridges="cart" @choicePrinters="print"></app-accounting>
      <app-cartridges v-else-if="state == 'cartridges'" @editCartridge="editCart"></app-cartridges>
      <app-edit-cartridge v-bind="{id:cartridge_id, name:cartridgeName, status:status_id, date:date, oldState:oldState }"  v-else-if="state == 'editCartridge'" @choiceCartridges="cart" @changeStatusCartridge="chStCart"></app-edit-cartridge>
      <app-change-status-cartridge  v-bind="{cart_id:cartridge_id, cart_name:cartridgeName, cart_status:status_id, cart_date:date, cart_oldSt:ollll }" v-else-if="state == 'changeStatusCart'" @editCartridge="cart" ></app-change-status-cartridge>
      <app-printers v-else-if="state == 'printers'"></app-printers>
      <div v-else>Чьортішо</div>
        
  </div>


</template>

<script>
  export default {
    name: 'app',
    data () {

      return {
        state:'login',
        cartridge_id:'',
        cartridgeName:'',
        status_id:'',
        date:'',
        ollll:'dasd'

       
        

      }
    },
    methods: {
      onLogin(){
        this.state = 'accounting';
      },
      cart(){
        this.state = 'cartridges';
      },
      print(){
        this.state = 'printers';
      },
      editCart(resp){
        this.cartridge_id = resp.cartridge_id;
        this.cartridgeName = resp.cartridgeName;
        this.status_id = resp.status_id;
        this.date=resp.date;
        this.oldState = resp.state;
        this.state = 'editCartridge';
      },
      chStCart(dataCart){
        this.id = dataCart.id;
        this.name = dataCart.name;
        this.status = dataCart.status;
        this.date=dataCart.date;
        this.ollll = dataCart.ollll;
        this.state = 'changeStatusCart';
        console.log('name');
        console.log(this.name);
      },
   


    }
  }
</script>

<style scoped>

</style>
