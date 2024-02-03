<template>
    <div id="app">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Michael Sterner's Demo Page</a>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/GuestBook?page=0&perPage=10">Guest Book</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/DynamicFormExample">Dynamic Form Example</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/USGSsearch">USGSsearch</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/DynamicCQ">DynamicCQ</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <main role="main">
        <router-view></router-view>
      </main>
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
