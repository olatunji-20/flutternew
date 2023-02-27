<template>
  <div>
    
    <div class="formcontainer">
          <div class="container">
            <label for="uname">
              <strong>Full Name</strong>
            </label><br />
            <input placeholder="Your name" v-model="paymentData.customer.name" required type="text" name="uname" /><br />

            <label for="email">
              <strong>Email Address</strong>
            </label><br />
            <input v-model="paymentData.customer.email" required type="text" placeholder="you@email.com" name="email" /><br />

            <label for="phone">
              <strong>Phone number</strong>
            </label><br />
            <input v-model="paymentData.customer.phone_number" required type="tel" placeholder="080****" name="email" /><br />

            <label for="amount">
              <strong>Amount</strong>
            </label><br />
            <input v-model.number="paymentData.amount" type="number" placeholder="1000" name="amount" required />
            <br />
            <br />
            
            <!-- <h1>{{ paymentData.customer.name }}</h1>
            <h1>{{ paymentData.customer.email }}</h1>
            <h1>{{ paymentData.customer.phone_number }}</h1>            
            <h1>{{ paymentData.amount }}</h1> -->

            <br />
          </div>
        </div>
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
        amount: 1000,
        currency: 'NGN',
        payment_options: 'card,ussd',
        redirect_url: '',
        meta: {
          'counsumer_id': '7898',
          'consumer_mac': 'kjs9s8ss7dd'
        },
        customer: {
          name: '',
          email: '',
          phone_number: ''
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