<template>
  <v-dialog
      v-model="show"
  >
    <v-container>
      <v-row align-center justify-center>
        <v-col xs12 sm8 md12>
          <v-card>
            <v-card-text>
              <v-form>
                <v-text-field label="instruktioner"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click.stop="show = false">Lägg till beställning</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-dialog>
</template>
<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      visible: Boolean
    },
    computed: {
      show: {
        get: function() {
          return this.visible;
        },
        set: function(value) {
          if (!value) {
            this.$emit.close();
          }
        }
      }
    }

  });
</script>
<style scoped>
</style>
