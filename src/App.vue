<template>
  <div>
    <flutterwave-pay-button   v-bind="paymentData" > Click To Pay </flutterwave-pay-button>
 </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      paymentData: {
        tx_ref: this.generateReference(),
        amount: 10,
        currency: 'NGN',
        payment_options: 'card,ussd',
        redirect_url: '',
        meta: {
          'counsumer_id': '7898',
          'consumer_mac': 'kjs9s8ss7dd'
        },
        customer: {
          name: 'Demo Customer  Name',
          email: 'customer@mail.com',
          phone_number: '0818450***44'
        } ,
        customizations: {
          title: 'Customization Title',
          description: 'Customization Description',
          logo: 'https://flutterwave.com/images/logo-colored.svg'
        },
        callback: this.makePaymentCallback,
        onclose: this.closedPaymentModal
      }
    }
  } ,
  methods: {
    makePaymentCallback(response) {
      console.log("Pay", response)
    },
    closedPaymentModal() {
      console.log('payment is closed');
    },
    generateReference(){
      let date = new Date()
      return date.getTime().toString();
    }
  }
}
</script>