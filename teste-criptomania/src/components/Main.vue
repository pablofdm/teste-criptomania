<template>
  <div class="main-app bg-dark">
    <Header/>
    <div class="l-cards">
      <article
        class="c-card"
        v-for="(element, index) in posts.slice(0, this.limitNumber)"
        :key="index"
        @click.prevent="goToPost(element.id)"
      >
        <div class="c-card image">
          <img src="../assets/logo.png" width="50%" alt="image-logo" />
          
        </div>

        <div class="c-card content">
          <span class="font-weight-bold" style="width: 30%"
            >Post: {{ element.id }}</span
          >
          <span class="text-truncate font-italic" style="width: 85%"
            ><strong>Tema:</strong> {{ element.title }}</span
          >
        </div>
      </article>
    </div>
    <div>
        <a href="#" @click.prevent="limitNumber += 5" class="rainbow-button m-auto">Show more</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Header";
export default {
  name: "Main",
  props: {
    title: String,
  },
  components: {
    Header
  },
  data() {
    return {
      posts: '',
      limitNumber: 10
    };
  },
  created() {
    axios({ url: "https://jsonplaceholder.typicode.com/posts" }).then(
      (response) => {
        this.posts = response.data;
      }
    )
  },
  methods: {
      goToPost (id) {
          this.$router.push({ name: 'POSTS', params: {idPost: id} }).catch(err => alert(err))
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  filter: invert(0.95);
}

.u-text-placeholder {
  background-color: #a2a8b1;
  display: inline-block;
  height: 9px;
}

.l-cards {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 300px);
  grid-template-columns: repeat(auto-fit, 300px);
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: center;
  justify-items: center;
  padding: 30px;
}

.c-card {
  background-color: #ced4da;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  /* -webkit-box-shadow: 4px 5px 22px 1px rgba(125, 125, 125, 0.62);
  box-shadow: 4px 5px 22px 1px rgba(125, 125, 125, 0.62); */
}

article:hover {
  transform: scale(1.01);
  transition: transform 0.2s ease-in;
    -webkit-box-shadow: 4px 5px 22px 1px rgba(125, 125, 125, 0.62);
  box-shadow: 4px 5px 22px 1px rgba(125, 125, 125, 0.62);
  cursor: pointer;
}

.image {
  align-items: center;
  background-color: black;
  border-top-left-radius: 0.6rem;
  border-top-right-radius: 0.6rem;
  display: flex;
  flex: 5;
  justify-content: center;
  overflow: hidden;
}

.content {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-around;
  padding: 15px;
}

a {
  text-decoration:none;
  color:#FFF;
  background-color: black;
}
.rainbow-button {
  --primary-neon:rgba(131, 222, 243, 0.9);
  --light-neon:rgba(87, 129, 161, 0.7);
  --pulse-neon:rgba(87, 156, 161, 0.5);
  --bright-neon:rgb(87, 161, 156);
  --off-neon:#333;
  
  --neon-shadow:0 0 7px 4px var(--light-neon), 0 0 7px 4px var(--light-neon) inset;
  --neon-shadow-pulse:0 0 8px 5px var(--pulse-neon), 0 0 8px 5px var(--pulse-neon) inset;
  --neon-shadow-bright:0 0 8px 4px var(--bright-neon), 0 0 8px 4px var(--bright-neon) inset;
  --neon-shadow-text:0 0 7px var(--primary-neon);
  
  width:calc(10vw + 3px);
  height:calc(4vw + 3px);
  color:var(--primary-neon);
  text-shadow:var(--neon-shadow-text);
  border:3px solid var(--primary-neon);
  border-radius:5px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-transform:uppercase;
  font-size:1vw;
  font-weight:bold;
  box-shadow:var(--neon-shadow);
  animation:flicker 10s linear infinite;
}

@keyframes flicker {
  0% {
    box-shadow:var(--neon-shadow);
  }
  45% {
    box-shadow:var(--neon-shadow-pulse);
  }
  90% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
    color:var(--primary-neon);
    text-shadow:var(--neon-shadow-text);
  }
  90.01% {
    box-shadow:none;
    border-color:var(--off-neon);
    color:var(--off-neon);
    text-shadow:none;
  }
  94% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  94.01% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  95% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  95.01% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  95.5% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  95.51% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  96% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
  96.01% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  96.5% {
    box-shadow:none;
    border-color:var(--off-neon);
  }
  96.51% {
    box-shadow:var(--neon-shadow-bright);
    border-color:var(--primary-neon);
  }
  100% {
    box-shadow:var(--neon-shadow);
    border-color:var(--primary-neon);
  }
}
</style>
