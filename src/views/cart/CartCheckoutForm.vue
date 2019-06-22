<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-card>
        <b-form-group label="Leverans">
          <b-row>
            <b-col cols="2">
              <b-form-group label="Datum & Tid">
                <b-form-input v-model="order.customer.delivery.expectedDate"/>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Gatuaddress">
                <b-form-input v-model="order.customer.delivery.street"/>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="Postnummer">
                <b-form-input v-model="order.customer.delivery.postalCode"/>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="Ort">
                <b-form-input v-model="order.customer.delivery.city"/>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Fakturaanmärkning">
                <b-form-textarea v-model="order.customer.delivery.invoiceComment" placeholder="Faktura beskrivning..." rows="5"/>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
      </b-card>
      <b-card style="margin-top: 60px">
        <b-form-group label="Kontaktperson">
          <b-row>
            <b-col>
              <b-form-group label="Namn">
                <b-form-input v-model="order.customer.name"/>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="E-post">
                <b-form-input v-model="order.customer.email"/>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <b-form-group label="Telefon">
                <b-form-input v-model="order.customer.phone"/>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
      </b-card>
      <b-card style="margin-top: 60px">
        <b-form-group label="Fakturainformation">
          <b-row>
            <b-col>
              <b-form-group label="Företagsnamn">
                <b-form-input v-model="order.customer.company.name"/>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Organisationsnummer">
                <b-form-input v-model="order.customer.company.organisationNumber"/>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Gatuaddress">
                <b-form-input v-model="order.customer.company.street"/>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="Postnummer">
                <b-form-input v-model="order.customer.company.postalCode"/>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="Ort">
                <b-form-input v-model="order.customer.company.city"/>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
      </b-card>
      <br/>
      <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
      >
        Jag har läst och godkänner Ambrosia almänna villkor
      </b-form-checkbox>
      <br/>
      <b-form-group>
        <b-button type="submit" variant="primary">Bekräfta köp</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { orderInitialState } from '@/model/model-initialstate';
  import { Meal, Order } from '@/model/model';

  @Component
  export default class CartCheckoutForm extends Vue {
    order!: Order;

    @Prop() private meals!: Array<Meal>;

    created() {
      this.order = orderInitialState();
    }

    onSubmit(e: Event) {
      e.preventDefault();
    }


    onReset(e: Event) {
      e.preventDefault();
    }

  }
</script>
<style scoped>
</style>
