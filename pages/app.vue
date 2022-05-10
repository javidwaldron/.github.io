<template>
  <section class="container">
    Hello
  </section>
</template>

<script>
export default {
  
asyncData ({ params }) {
     return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then( res => res.json() )
    .then( res => {
      return { post: res }
    })
    .catch((e) => {
      error({ statusCode: 404, message: 'Billets non trouvé' })
    });
  }
    
}
</script>

<style scoped>
.title
{
  margin: 50px 0;
}
</style>