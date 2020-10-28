<template>
  <div class="container">
    <div class="card mt-3">
      <header class="card-header">
        <div class="row">
          <div class="col-12 col-lg-8">
            <h3>Terms</h3>
          </div>
          <div class="col-12 col-lg-4">
            <div class="input-group">
              <input class="form-control" type="text" v-model="search" placeholder="Search"/>
              <div class="input-group-append">
                <button class="btn btn-primary">Submit</button>
              </div>
            </div>
            <div class="form-group">
              <select class="form-control" v-model="orderBy">
                <option value="alpha">Alphabetical</option>
                <option value="alpha-desc">Alphabetical Descending</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <table class="table">
        <thead>
        <tr>
          <th>
            Word
          </th>
          <th>
            Definition
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
        <button :disabled="pageNumber === 0" @click="prevPage">
          Previous
        </button>
        <button :disabled="pageNumber >= pageCount -1" @click="nextPage">
          Next
        </button>
        <a class="btn btn-primary float-right">Add New</a>
      </footer>
    </div>
    <div id="app">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      users: []
    }
  },
  mounted() {
    this.$api.get('resume-bodies').then(response => {
      this.users = response.data
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
