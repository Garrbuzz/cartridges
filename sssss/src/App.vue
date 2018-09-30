<template>
  <div class="content">
  
      <app-login v-if="state == 'login'" @loginOk="onLogin"></app-login>
      <app-accounting v-else-if="state == 'accounting'" @choiceCartridges="cart" @choicePrinters="print"></app-accounting>
      <app-cartridges v-else-if="state == 'cartridges'"></app-cartridges>
      <app-printers v-else-if="state == 'printers'"></app-printers>
      <div v-else>Чьортішо</div>
        
  </div>


</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        state: 'login'
      }
    },
    methods : {
      onLogin(){
        this.state = 'accounting';
      },
      cart(){
        alert('Картриджі');
        debugger
        this.state = 'cartridges';
      },
      print(){
        alert('Принтери');
        this.state = 'printers';
      }
    }
  }
</script>

<style scoped>

</style>
