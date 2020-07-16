<template>
  <div class="gallery-modal-component">
    <div v-on:click="closeGallery"></div>
    <div>
      <h3>
        {{title}}
      </h3>
      <a v-on:click="closeGallery" class="pod-close-button"></a>
      <ul>
        <li v-for="(item, i) in items" :key="'items-' + i.toString()">
          <a :href="item.link" target="_blank">
            <h4>{{item.title}}</h4>
            <img :src="item.preview" />
            <p>{{item.text}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['items', 'title'],
  data () {
    return {
    }
  },
  methods: {
    closeGallery: function () {
      this.$emit('close', {})
    }
  }
}
</script>
<style lang="scss" scoped>
div.gallery-modal-component{
  
  > div:first-child{
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background-color: rgba(0,0,0,.7);
    z-index:500;
    
  }
  > div:first-child + div{
    border-radius: 8px;
    max-width: 1400px;
    margin:0 auto;
    > h3{
      margin:0;
      padding: 6px 20px;
    }
    position:fixed;
    left:30px;
    top:50px;
    bottom:50px;
    right:30px;
    background-color: #ffffff;
    z-index:500;
    > ul {
      position: absolute;
      top: 38px;
      bottom:0;
      left:0;
      right:0;
      overflow: auto;
      padding:0;
      margin:0;
      
      > li{
        border-radius: 5px;
        box-shadow: 0 0 0 1px rgba(0,0,0,.3);
        display:block;
        margin:8px;
        padding: 10px 20px;
        max-width: 625px;
        float: left;
        img{
          width:100%;
        }
      }
    }
  }
}
</style>