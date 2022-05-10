<template>
  <div>
    <!--
      REQUIRED
      The nuxt component contains the content of your current page.
      Nuxt replace automatically the nuxt component by <router-view></router-view>
    -->
    <nuxt/>
    
    <my-footer/>
  </div>
</template>

<script>
  import MyFooter from '~components/footer.vue';
  
export default {
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', content: "Nuxt.js project" }
    ],
    link: [
      { 
       rel: 'icon', 
       type: 'image/x-icon', 
       href: 'https://cdn.gomix.com/2d2e28d2-e17b-4934-a643-b1c5ba787a0b%2Ffavicon.ico' 
      }
    ]
  },
  components: {
    MyFooter
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}
.button, .button:visited
{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}
.button:hover, .button:focus
{
  color: #fff;
  background-color: #3B8070;
}
.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2em;
  margin: 0;
}
</style>