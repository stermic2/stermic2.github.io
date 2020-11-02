<template>
  <div class="card mt-3">
    <header class="card-header">
      <div class="row">
        <div class="col-12 col-lg-12">
          <h3>Guest Book</h3>
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
      <tr v-for="term in currentPage" v-bind:key="term.word">
        <td>{{term.word}}</td>
        <td class="w-75">{{term.definition}}</td>
      </tr>
      </tbody>
    </table>
    <footer class="card-footer">
      <div class="input-group-append">
        <button class="btn btn-primary">Add New</button>
      </div>
      <pagination total-items=></pagination>
    </footer>
  </div>
</template>

<script>
import Pagination from "@/components/Common/pagination";
export default {
  name: "Glossary",
  components: {Pagination},
  data(){
    return{
      guests: []
    }
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
