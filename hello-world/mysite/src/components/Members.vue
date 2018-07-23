<template>
  <div id="members">
      <ul>
        <!-- everytime the name is clicked, the show property is toggled on or off -->
        <li v-for="member in members" v-on:click="member.show =! member.show">
          <h2>{{ member.name }}</h2>
          <!-- remember that v-show can either show or hide elements based on what its boolean value is
          set to; in this case, its set equal to the member's show property -->          
          <!-- this syntax for the img src is weird; I'm not exactly sure why I need to write it like this;
          an error from terminal taught me how to do it -->
          <img :src="member.picture" height="50"> <!-- you're NOT suppose to do it like img src="{{ member.picture }}" -->
          <h3 v-show="member.show">{{ member.position }}</h3>
          <p v-show="member.show">{{ member.description }}</p>
        </li>
      </ul>
  </div>
</template>

<script>

export default {

 //this is where Members receives the prop from App; make sure you pass it back to its parent though if you want the parent to use it
  props: ['members'],

  data() {
    return {

    }
  },

}

</script>

<style scoped>
  #members{
      width: 100%;
      max-width: 1200px;
      margin: 40px auto; /* this creates a margin of 40px around this container */
      padding: 0 20px; /* this creates space to the right of each box;
      how padding works: say the padding: 10px 15px 20px 25px, the four numbers represent padding of the
      top, right, bottom, and left respectively (so there would be 20px padding to the left in this example)*/
      box-sizing: border-box; /* this makes the width and height apply to all parts of the element, such
      as the content, padding, and border */
  }
  ul{
      display: flex; /* this allows the element to move or be stacked in different ways/directions */
      flex-wrap: wrap; /* property specifies whether the flexible items should wrap or not; wrapping something automatically adds line breaks
      so that it fits in a certain area; this is super important because it allows you to change the shape of window and the container will automatically shape itself to fit it */
      list-style-type: none; /* this property allows you to customize the bullet-points */
      padding: 0;
  }
  li{
      flex-grow: 1; /* this specifies that flew grow factor of a flew item;
      essentially that specifies how much room it takes up relative to the other flew items
      in the same container */
      flex-basis: 300px; /* this specifies the initial main size of a flew item */
      text-align: center;
      padding: 30px;
      border: 1px solid #222;
      margin: 10px;
      max-width: 300px;
  }
</style>