<template>
  <div class="board-show">
    <h1>{{ board.name }}</h1>
    <div v-for="list in board.lists">
      <h2>{{ list.name }}</h2>
      <div v-for="quest in list.quests">
        {{ quest.name }} <br>
        <button v-on:click="openLink()">Wiki Link</button>
      </div>
      <div v-for="item in list.items">
        {{ item.name }}
      </div>
      <div v-for="note in list.notes">
        {{ note.text }}
      </div>
    </div>



  </div>
</template>

<style>
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      board: {},
      linkName: "Rag_and_Bone_Man"
    };
  },
  created: function() {
    axios.get(`/api/boards/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.board = response.data;
    });
  },
  methods: {
    openLink: function() {
      window.open(`https://oldschool.runescape.wiki/w/${this.linkName}`);
    }
  }
};
</script>