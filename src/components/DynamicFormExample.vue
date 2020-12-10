<template>
  <div id="app">
      <h1 class="title text-center">Dynamic Forms Example</h1>
    <pre>{{ formData }}</pre>
      <div class="row mt-5">
        <div class="col-6">
          <div v-for="(field, i) in testForm.fields" :key="i">
              <label for="type">type</label>
              <select v-model="testForm.fields[i].type" id="type">
                <option v-for="option in options" v-bind:value="option.value" v-bind:key="option.value">
                  {{option.text}}
                </option>
              </select>
              <p>
                <label for="name">name</label>
                <input v-model="testForm.fields[i].name" id="name"/>
                <label for="label">label</label>
                <input v-model="testForm.fields[i].label" id="label"/>
              </p>
          </div>
        </div>
        <div class="col-6">
          <dynamic-form :id="testForm.id" :fields="testForm.fields" @change="valuesChanged"/>
          <div class="row d-flex justify-content-end p-4">
            <button submit="true" :form="testForm.id" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {
  FormField,
  FormValidation,
  required,
  email,
  pattern
} from "@asigloo/vue-dynamic-forms";



const methods = {
  valuesChanged(values) {
    this.$forceUpdate();
    this.formData = {
      ...values
    };
  }
};

export default {
  name: "App",
  data () { return {
    formData: {},
    options: [
      { text: 'Text', value: 'text' },
      { text: 'Email', value: 'email' },
      { text: 'Password', value: 'password' },
      { text: 'Text Area', value: 'textarea' },
      { text: 'Select', value: 'select' },
      { text: 'Checkbox', value: 'checkbox' },
      { text: 'Radio', value: 'radio' },
      { text: 'Number', value: 'number' }
    ],
    testForm: {
      id: "test-form",
      fields: [
        new FormField({
          type: "text",
          label: "Name",
          name: "name"
        }),
        new FormField({
          type: "email",
          label: "Email",
          name: "email",
          validations: [
            new FormValidation(required, "This field is required"),
            new FormValidation(email, "Format of email is incorrect")
          ]
        }),
        new FormField({
          type: "password",
          label: "Password",
          name: "password",
          validations: [
            new FormValidation(required, "This field is required"),
            new FormValidation(
                pattern(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[#$^+=!*()@%&]).{8,10}$"
                ),
                "Password must contain at least 1 Uppercase, 1 Lowercase, 1 number, 1 special character and min 8 characters max 10"
            )
          ],

          value: "sdsdsd"
        }),
        new FormField({
          type: "textarea",
          label: "Bio",
          name: "bio",
          cols: 30,
          rows: 5
        }),
        new FormField({
          type: "select",
          label: "Category",
          name: "category",
          options: [
            { value: null, text: "Please select an option" },
            { value: "arduino", text: "Arduino" },
            { value: "transistors", text: "Transistors" }
          ]
        }),
        new FormField({
          type: "checkbox",
          label: "Read the conditions",
          name: "conditions",
          inline: false
        }),
        new FormField({
          type: "radio",
          label: "Prefered Animal",
          name: "animal",
          inline: true,
          options: [
            { text: "Dogs", value: "dogs" },
            { text: "Cats", value: "cats" },
            { text: "Others", value: "others" }
          ]
        }),
        new FormField({
          type: "number",
          label: "Number",
          name: "number",
          value: 0
        })
      ]
    }
  }},
  methods
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
