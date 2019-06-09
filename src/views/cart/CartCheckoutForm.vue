<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-card bg-variant="light">
        <b-form-group label="Leverans">
          <b-row>
            <b-col cols="2">
              <b-form-group label="Datum & Tid">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Gatuaddress">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="Postnummer">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="Ort">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Fakturaanmärkning">
                <b-form-textarea placeholder="Faktura beskrivning..." rows="5"/>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
      </b-card>
      <b-card bg-variant="light" style="margin-top: 60px">
        <b-form-group label="Kontaktperson">
          <b-row>
            <b-col>
              <b-form-group label="Namn">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="E-post">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <b-form-group label="Telefon">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
      </b-card>
      <b-card bg-variant="light" style="margin-top: 60px">
        <b-form-group label="Fakturainformation">
          <b-row>
            <b-col>
              <b-form-group label="Företagsnamn">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Organisationsnummer">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Postaddress">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="Postnummer">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="3">
              <b-form-group label="Ort">
                <b-form-input></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
      </b-card>
      <br/>
      <b-form-checkbox
          id="checkbox-1"
          v-model="status"
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
  import Vue from 'vue';

  export default Vue.extend({

    data() {
      return {};
    },

    methods: {
      onSubmit(e: Event) {
        e.preventDefault();
      },

      onReset(e: Event) {
        e.preventDefault();
      }
    }

  });
</script>
<style scoped>
</style>
