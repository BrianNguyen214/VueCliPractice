<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>

export default {

  data() {
    return {
        copyright: 'Copyright 2018 Udana'
    }
  },

}

</script>

<style scoped>
    footer{
        background: #222;
        padding: 6px;
    }
    p{
        color: dodgerblue;
        text-align: center;
    }

</style>