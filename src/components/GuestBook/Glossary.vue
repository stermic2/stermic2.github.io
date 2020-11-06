<template>
  <div class="card mt-3">
    <header class="card-header">
      <div class="row">
        <div class="col-12 col-lg-12">
          <h3>Guest Book: Uses an API that sleeps, so you might have to wait for the first response.</h3>
        </div>
      </div>
    </header>

    <table class="table">
      <thead>
      <tr>
        <th>
          Guest Name
        </th>
        <th>
          Company
        </th>
        <th>
          Position
        </th>
        <th>
          Message
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="guest in guests" v-bind:key="guest.name">
        <td>{{guest.name}}</td>
        <td>{{guest.company}}</td>
        <td>{{guest.postition}}</td>
        <td class="w-50">{{guest.message}}</td>
      </tr>
      </tbody>
    </table>
    <footer class="card-footer">
      <div class="float-right">
        <button class="btn btn-primary">Working on this button</button>
      </div>
      <pagination></pagination>
    </footer>
  </div>
</template>

<script>
import Pagination from "@/components/Common/pagination";
export default {
  name: "Glossary",
  components: {Pagination},
  props: {
    guests: {
      type: Array,
      required: true
    },
  },
  created() {
    this.$api.get('guests').then(response => {
      this.guests = response.data;
      this.numberOfGuests = this.guests.filter(guest => {
        return guest.name
      })
    })
  }
}
</script>

<style scoped>

</style>
