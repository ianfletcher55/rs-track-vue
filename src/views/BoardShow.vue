<template>
  <div class="board-show">
    <h1>{{ board.name }}</h1>
    <div v-for="list in board.lists">
      <h2>{{ list.name }}</h2>
      <div v-for="quest in list.quests">
        {{ quest.name }} <br>
        <button v-on:click="quest_name = quest.name, openLink()">Wiki Link</button>
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
      quest_name: "",
      linkName: ""
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
      this.linkName = this.quest_name
        .replace(/ /g, "_")
        .replace(/&/g, "%26")
        .replace(/'/g, "%27");
      window.open(`https://oldschool.runescape.wiki/w/${this.linkName}`);
    }
  }
};
</script>