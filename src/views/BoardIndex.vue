<template>
  <div class="board-index">
    <div
      class="full-height bg-image"
      style='background-image: url("../../assets/images/flat-steel.png");'
    >
      <div class="container">
        <section id="portfolio8" class="big">
          <div class="container">
            <div class="section-heading text-center">
              <h2 class="text-muted mb-15">ALL BOARDS</h2>
              <div class="spacer-line border-muted mb-20">&nbsp;</div>
            </div>
            <!-- / section-heading -->
            <ul class="row portfolio lightbox list-unstyled mb-0">
              <!-- project -->
              <li
                class="col-md-6 col-lg-4 project"
                data-groups='["skill3"]'
                v-for="board in boards"
              >
                <div class="card card-inverse mb-0">
                  <div class="project m-0">
                    <figure class="portfolio-item">
                      <div class="hovereffect">
                        <img
                          class="img-responsive full-width v-center"
                          src="assets/images/boards-index.jpeg"
                          alt=""
                        />
                        <div class="overlay">
                          <div class="hovereffect-title project-icons">
                            <a :href="`/boards/${board.id}`"
                              ><i class="ti-eye"></i
                            ></a>
                          </div>
                          <!-- / project-icons -->
                        </div>
                        <!-- / overlay -->
                      </div>
                      <!-- / hovereffect -->
                    </figure>
                    <!-- / portfolio-item -->
                  </div>
                  <!-- / project -->
                  <div class="card-body p-y-30 text-center">
                    <a
                      :href="`/boards/${board.id}`"
                      class="card-title title-link fs-20 fw-regular"
                      >{{ board.name }}</a
                    >
                    <br />
                    <p v-if="currentBoard == board">
                      <input type="text" v-model="currentBoard.name" /><a
                        class="btn btn-xs btn-success m-1"
                        v-on:click="updateBoard(currentBoard)"
                      >
                        SUBMIT
                      </a>
                    </p>
                    <a
                      v-on:click="currentBoard = board"
                      class="btn btn-primary m-1 fas fa-edit"
                    ></a>
                    <a
                      v-on:click="
                        (currentBoard = board), destroyBoard(currentBoard)
                      "
                      class="btn btn-danger m-1 fas fa-trash-alt"
                    ></a>
                  </div>
                  <!-- / card-body -->
                </div>
                <!-- / card -->
              </li>
              <!-- / project -->

              <!-- / project -->
            </ul>
            <!-- / portfolio -->
          </div>
          <div>
            <input type="text" placeholder="New board" v-model="newBoardName" />
            <br />
            <a class="btn btn-sm btn-primary" v-on:click="createBoard()"
              >ADD BOARD</a
            >
          </div>
          <!-- / container -->
        </section>
        <!-- / portfolio -->

        <!-- <ul>
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
      <button v-on:click="currentBoard = board, destroyBoard(currentBoard)">Delete Board</button>
    </div> -->
      </div>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      errors: [],
      boards: [],
      currentBoard: {},
      newBoardName: "",
    };
  },
  created: function() {
    axios.get("/api/boards").then((response) => {
      console.log("All Boards", response.data);
      this.boards = response.data;
    });
  },
  methods: {
    updateBoard: function(board) {
      var updateParams = {
        name: board.name,
      };

      axios
        .patch(`/api/boards/${board.id}`, updateParams)
        .then((response) => {
          console.log("Successfully updated board", response.data);
          this.currentBoard = {};
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    destroyBoard: function(currentBoard) {
      axios.delete(`/api/boards/${currentBoard.id}`).then((response) => {
        console.log("Successfully deleted board", response.data);
        var index = this.boards.indexOf(currentBoard);
        this.boards.splice(index, 1);
      });
    },
    createBoard: function() {
      var params = {
        name: this.newBoardName,
      };
      axios
        .post("/api/boards", params)
        .then((response) => {
          console.log("Successfully created new board.", response.data);
          this.boards.push(response.data);
          this.newBoardName = "";
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
