<template>
  <div class="posts-app bg-dark">
    <Header />
    <div class="container m-auto mt-5 pt-5 pb-5">
      <article>
        <div class="card">
          <div class="card-body">
            <h3 class="card-title mb-4">{{ this.post.title }}</h3>
            <h5 class="card-subtitle mb-2 text-muted">Card subtitle</h5>
            <p class="card-text">
              {{ post.body }}{{ post.body }} <br/><br/>
              {{ post.body }}
              <br/><br />
              {{ post.body }}
              {{ post.body }}
              <br/><br/>
              {{ post.body }}
              {{ post.body }}
            </p>
            <a @click.prevent="goHome()" href="#" hclass="card-link">Voltar</a>
          </div>
        </div>
      </article>
    </div>
    <div class="container m-auto ml-5">
      <h2 class="text-white">Comentários</h2>
    </div>
    <div
      class="container ml-5 pr-2 pb-3 m-auto rounded"
      v-for="coment in coments"
      :key="coment.id"
    >
      <article class="coments">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ coment.name }}</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              City: {{ coment.address.city }}
            </h6>
            <p class="card-text">
              {{ coment.company.catchPhrase }}
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import axios from "axios";

export default {
  name: "postblog",
  components: {
    Header,
  },
  mounted() {
    axios({ url: "https://jsonplaceholder.typicode.com/posts" }).then(
      (response) => {
        this.aux = response.data;
        this.post = this.aux
          .filter((e) => e.id == this.$route.params.idPost)
          .shift();
      }
    );
    axios({ url: "https://jsonplaceholder.typicode.com/users" }).then(
      (response) => {
        this.aux2 = response.data;
        this.coments = this.aux2;
        console.log(this.coments);
      }
    );
  },
  data() {
    return {
      aux: null,
      aux2: null,
      post: [],
      coments: null,
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coments:hover {
  transform: scale(1.01);
  transition: transform 0.2s ease-in;
  -webkit-box-shadow: 4px 5px 22px 1px rgba(125, 125, 125, 0.62);
  box-shadow: 4px 5px 22px 1px rgba(125, 125, 125, 0.62);
  cursor: pointer;
}

</style>
