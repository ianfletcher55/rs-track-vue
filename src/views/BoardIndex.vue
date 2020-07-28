<template>
  <div class="board-index">

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <div>
      Name: <input type="text" v-model="newBoardName"> <br>
      <button v-on:click="createBoard()">Add Board</button>
    </div>

    <div v-for="board in boards">
      <p>{{ board.name }}</p>
      <router-link :to="`/boards/${board.id}`">View Board</router-link> <br>
      <p v-if="currentBoard == board">Name: <input type="text" v-model="currentBoard.name"><button v-on:click="updateBoard(currentBoard)">Update</button></p>
      <button v-on:click="currentBoard = board">Edit Board</button> <br>
      <button v-on:click="destroyBoard(currentBoard)">Delete Board</button>
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
      errors: [],
      boards: [],
      currentBoard: {},
      newBoardName: ""
    };
  },
  created: function() {
    axios.get("/api/boards").then(response => {
      console.log("All Boards", response.data);
      this.boards = response.data;
    });
    console.log("index");
  },
  methods: {
    updateBoard: function(board) {
      var updateParams = {
        name: board.name
      };

      axios
        .patch(`/api/boards/${board.id}`, updateParams)
        .then(response => {
          console.log("Successfully updated board", response.data);
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    },
    destroyBoard: function(board) {
      axios.delete(`/api/boards/${board.id}`).then(respone => {
        console.log("Successfully deleted board", respone.data);
        var index = this.boards.indexOf(board);
        this.boards.splice(index, 1);
      });
    },
    createBoard: function() {
      var params = {
        name: this.newBoardName
      };
      axios
        .post("/api/boards", params)
        .then(response => {
          console.log("Successfully created new board.", response.data);
          this.boards.push(response.data);
          this.newBoardName = "";
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>