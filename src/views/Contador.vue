<template>
  <div>
    <v-row>
      <v-col cols="10">
        <v-card elevation="10" class="pa-5">
          <v-card-title>Quantidade de pessoas: {{ pessoas }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="10">
        <v-btn block color="pink" dark @click="incremento">
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="10">
        <v-btn block color="pink" dark @click="decremento">
          <v-icon> mdi-minus </v-icon>
        </v-btn>
      </v-col>
      <v-col cols="10">
        <v-btn block color="blue" dark @click="zerar">
          <v-icon> mdi-heart </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    pessoas: 0,
  }),
  methods: {
    incremento() {
      this.pessoas = this.pessoas + 1;
    },

    decremento() {
      if (this.pessoas > 0) this.pessoas = this.pessoas - 1;
    },
    zerar() {
      this.pessoas = 0;
    },
  },
};
</script>

<style>
</style>