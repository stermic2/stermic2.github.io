<template>
  <div class="container">
    <div id="app">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/Glossary">Glossary</router-link>
        </li>
        <li>
          <router-link to="/DynamicFormExample">Dynamic Form Example</router-link>
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
