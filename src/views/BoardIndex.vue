<template>
  <div class="board-index">
    <div class="full-height v-center">
      <div class="container">
        <section id="portfolio8" class="big">
          <div class="container">
            <div class="section-heading text-center">
              <h2 class="mb-15">ALL BOARDS</h2>
              <div class="spacer-line border-primary mb-20">&nbsp;</div>
              <p class="w50 mb-20 m-x-auto">
                Aenean luctus, quam eget elementum scelerisque, risus lectus
                auctor lorem, aliquam interdum ex risus.
              </p>
            </div>
            <!-- / section-heading -->
            <ul class="row portfolio lightbox list-unstyled mb-0">
              <!-- project -->
              <li
                class="col-md-6 col-lg-4 project"
                data-groups='["skill3"]'
                v-for="board in boards"
              >
                <div class="card mb-0">
                  <div class="project m-0">
                    <figure class="portfolio-item">
                      <div class="hovereffect">
                        <img
                          class="img-responsive"
                          src="assets/images/placeholder.jpg"
                          alt=""
                        />
                        <div class="overlay">
                          <div class="hovereffect-title project-icons">
                            <a href="#x"><i class="ti-eye"></i></a>
                            <a
                              href="assets/images/placeholder.jpg"
                              class="image-lightbox"
                              title="PROJECT TITLE"
                              ><i class="ti-arrows-corner"></i
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
                    <button>EDIT</button> <br />
                    <button>DELETE</button>
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
