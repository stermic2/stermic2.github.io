<template>
  <div class="card mt-3">
    <header class="card-header">
      <div class="row">
        <div class="col-12 col-lg-12">
          <h3>Guest Book: Uses a free VM that sleeps, so you might have to wait for the first response.</h3>
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
        <button class="btn btn-primary" @click="$router.push('/AddGuest')">Add</button>
      </div>
      <pagination @total-items="this.numberOfGuests" @current-page="this.$route.query.page"></pagination>
    </footer>
  </div>
</template>

<script>
import Pagination from "@/components/Common/pagination";
export default {
  name: "Glossary",
  components: {Pagination},
  data() {
    return {
      guests: [],
      numberOfGuests: Number
    }
  },
  created() {
    //this.$router.push({ query: Object.assign({}, this.$route.query, { page: '0', perPage: '10' }) });
    this.$api.get('guests/count').then(response => {
      this.numberOfGuests = response.data;
    })
    this.$api.get('guests?_start=' + (this.$route.query.page * this.$route.query.perPage) + '&_limit=' + this.$route.query.perPage).then(response => {
      this.guests = response.data;
    })
  }
}
</script>

<style scoped>

</style>
