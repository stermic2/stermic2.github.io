<template>
  <div id="app">
    <div class="container">
      <h1 class="title text-center">Add Guest</h1>
      <div class="row mt-5">
        <div class="col-12">
          <dynamic-form :id="testForm.id" :fields="testForm.fields" @change="valuesChanged"/>
          <div class="row d-flex justify-content-end p-4">
            <button v-on:click="Post" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  FormField,
} from "@asigloo/vue-dynamic-forms";

const data = () => ({
  formData: {},
  testForm: {
    id: "test-form",
    fields: [
      new FormField({
        type: "text",
        label: "Guest Name",
        name: "name"
      }),
      new FormField({
        type: "text",
        label: "Company",
        name: "company"
      }),
      new FormField({
        type: "text",
        label: "Position",
        name: "postition"
      }),
      new FormField({
        type: "textarea",
        label: "Message",
        name: "message",
        cols: 30,
        rows: 5
      })
    ]
  }
});

const methods = {
  Post: function () {
    this.$api.post("guests", this.formData).then(
        () => this.$router.push("GuestBook?page=0&perPage=10")
    );
  },
  valuesChanged(values) {
    this.$forceUpdate(); // this is only to refresh the fields on the <pre> tags, not necessary for other purpouses
    this.formData = {
      ...this.formData,
      ...values
    };
  }
};

export default {
  name: "AddGuest",
  data,
  methods
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
