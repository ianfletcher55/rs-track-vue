<template>
  <div class="board-show">
      <div
      class="full-height bg-image"
      style='background-image: url("../../assets/images/flat-steel.png");'
    >
      <div class="container">
        <section class="big">
        <div class="section-heading text-center">
          <h2 class="text-muted mb-30">{{ board.name }}</h2>
          <div class="spacer-line border-muted mb-20"></div>
        </div>
        <!-- / section-heading -->
        <div class="row">
          <div class="col-md-4" v-for="list in board.lists">
            <div class="pricing-table bg-inverse text-center raised">
              <div class="pricing-table-price">
                <p class="title-color">
                  <span class="text-muted mb-0 pricing-price fs-28">{{ list.name }}</span>
                  <div v-if="list.name == 'Quests'">
                    <img src="/assets/images/quests-icon.png" alt="">
                  </div>
                  <div v-if="list.name == 'Item Wishlist'">
                    <img src="/assets/images/items-icon.png" alt="">
                  </div>
                  <div v-if="list.name == 'Notes'">
                    <img src="/assets/images/notes-icon.png" alt="">
                  </div>
                </p>
              </div>
              <!-- / pricing-table-price -->
              <div class="pricing-table-content raised">
                <!-- <div
                  class="promo-big promo-icon-bg circle border-grey mb-40 ml-auto mr-auto"
                >
                  <i class="ti-layers promo-icon text-grey"></i>
                </div> -->
                <!-- / promo-big -->
                <ul class="list-group mb-20" v-if="list.quests.length > 0">
                  <li
                    class="list-group-item bt-0 bl-0 br-0 bg-transparent raised"
                    v-for="quest in list.quests"
                  >
                    <span class="text-muted mb-0">{{ quest.name }}</span
                    ><i
                      v-on:click="destroyListQuest(quest, list)"
                      class="btn btn-sm ti-close mr-10 text-danger va-middle"
                    ></i
                    ><br />
                    <a
                      target="_blank"
                      :href="
                        `https://oldschool.runescape.wiki/w/${quest.name
                          .replace(/ /g, '_')
                          .replace(/&/g, '%26')
                          .replace(/'/g, '%27')}`
                      "
                      >Wiki Link</a
                    ><br />
                  </li>
                </ul>
                <ul class="list-group mb-20" v-if="list.items.length > 0">
                  <li
                    class="list-group-item bt-0 bl-0 br-0 bg-transparent"
                    v-for="item in list.items"
                  >
                    <span
                      class="text-muted mb-0"
                      >{{ item.name }}
                      <img :src="`data:image/jpeg;base64,${item.icon}`"/></span
                    ><i
                      v-on:click="destroyListItem(item, list)"
                      class="btn btn-sm ti-close text-danger"
                    ></i
                    ><br />
                    <a
                      target="_blank"
                      :href="
                        `https://oldschool.runescape.wiki/w/${item.name
                          .replace(/ /g, '_')
                          .replace(/&/g, '%26')
                          .replace(/'/g, '%27')}`
                      "
                      >Wiki Link</a
                    ><br />
                  </li>
                </ul>
                <ul class="list-group mb-20">
                  <li
                    class="list-group-item bt-0 bl-0 br-0  bg-transparent"
                    v-for="note in list.notes"
                  >
                    <span class="text-muted mb-0">{{note.text}}</span>
                    <i
                      v-on:click="destroyNote(note, list)"
                      class="btn btn-sm ti-close text-danger va-middle"
                    ></i
                    >
                    <p v-if="currentNote == note">Text: <input type="text" v-model="currentNote.text"><a v-on:click="updateNote(currentNote)" class="btn btn-xs btn-success m-1">Update</a></p> <br>
                    <a v-on:click="currentNote = note" class="btn btn-sm fas fa-edit"></a>
                  </li>
                </ul>
                <!-- / list-group -->

                
                <div class="pricing-table-button" v-if="list.name == 'Quests'">
                  <div class="input-group mb-0 pl-10 pr-10">
                    <input
                      type="text"
                      class="form-control rounded"
                      placeholder="Quest Search"
                      v-model="questKeyword"
                    />
                    <span class="input-group-btn v-center">
                      <a
                        v-on:click="questKeywordSearch(); currentList = list"
                        class="btn btn-icon b-0 rounded btn-primary ml-10"
                        data-toggle="modal" data-target="#questSearchModal"
                        ><span class="fas fa-search"></span
                      ></a>
                    </span>
                  </div>

                
                </div>

                <div
                  class="pricing-table-button"
                  v-if="list.name == 'Item Wishlist'"
                >
                  <div class="input-group mb-0 pl-10 pr-10">
                    <input
                      type="text"
                      class="form-control rounded"
                      placeholder="Item Search"
                      v-model="itemKeyword"
                    />
                    <span class="input-group-btn v-center">
                      <a
                        v-on:click="itemKeywordSearch(); currentList = list"
                        class="btn btn-icon b-0 rounded btn-primary ml-10"
                        data-toggle="modal" data-target="#itemSearchModal"
                        ><span class="fas fa-search"></span
                      ></a>
                    </span>
                  </div>

                </div>
                <div class="pricing-table-button" v-if="list.name == 'Notes'">
                  <div class="input-group mb-0 pl-10 pr-10">
                    <textarea
                    type="text"
                    class="form-control rounded"
                    placeholder="Note To Self"
                    v-model="newNoteText"
                  />
                  <span class="input-group-btn v-center">
                    <a
                      v-on:click="createNote(list)"
                      class="btn btn-icon b-0 rounded btn-primary ml-10"
                      ><span class="fas fa-plus-circle"></span
                    ></a>
                  </span>
                  </div>
                </div>
                <!-- / pricing-table-button -->
              </div>
              <!-- / pricing-table-content -->
            </div>    

            <!-- default-modal -->
            <!-- modal -->
            <div class="modal fade default-modal" tabindex="-1" role="dialog" id="questSearchModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title">Quest Search</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div><!-- / modal-header -->
                        <div class="modal-body">    
                          <div v-if="apiQuestResults">
                            <div v-for="result in apiQuestResults">
                              <p>
                                {{ result.name
                                }}<a class="btn btn-xs btn-success m-1"
                                  v-on:click="
                                    createListQuest(currentList, result),
                                      (apiQuestResults = [])
                                  "
                                >
                                  Add Quest
                                </a>
                              </p>
                            </div>
                          </div>
                        </div><!-- / modal-body -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                        </div><!-- / modal-footer -->
                    </div><!-- / modal-content -->
                </div><!-- / modal-dialog -->
            </div><!-- / modal -->
            <!-- / default-modal -->

            <!-- default-modal -->
            <!-- modal -->
            <div class="modal fade default-modal" tabindex="-1" role="dialog" id="itemSearchModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h6 class="modal-title">Item Search</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div><!-- / modal-header -->
                        <div class="modal-body">    
                          <div v-if="apiItemResults">
                            <div v-for="result in apiItemResults">
                              <p>
                                {{ result.name
                                }}<a class="btn btn-xs btn-success m-1" data-dismiss="modal"
                                  v-on:click="
                                    createListItem(currentList, result),
                                      (apiItemResults = [])
                                  "
                                >
                                  Add Item
                                </a>
                              </p>
                            </div>
                          </div>
                        </div><!-- / modal-body -->
                        <div class="modal-footer">
                            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Close</button>
                        </div><!-- / modal-footer -->
                    </div><!-- / modal-content -->
                </div><!-- / modal-dialog -->
            </div><!-- / modal -->
            <!-- / default-modal -->

            <!-- / pricing-table -->
          </div>          
          <!-- / column -->
        </div>
        <!-- / row -->        
        </section>
      </div>
      <!-- / container -->
      </div>
    <!-- / pricing -->

    <!-- <h1>{{ board.name }}</h1>
  <div v-for="list in board.lists">
  <h2>{{ list.name }}</h2>
  <div v-if="list.name == 'Quests'">
    <input type="text" v-model="questKeyword"><button v-on:click="questKeywordSearch()">Search for Quest</button> <br>
    <div v-if="apiQuestResults">
    <div v-for="result in apiQuestResults">
      <p>{{ result.name }}<button v-on:click="createListQuest(list, result), apiQuestResults = []">Add Quest</button></p>
    </div>
    </div>
  </div>
  <div v-if="list.name == 'Item Wishlist'">
    <input type="text" v-model="itemKeyword"><button v-on:click="itemKeywordSearch()">Search for Item</button> <br>
    <div v-if="apiItemResults">
    <div v-for="result in apiItemResults">
      <p>{{ result.name }}<button v-on:click="createListItem(list, result), apiItemResults = []">Add Item</button></p>
    </div>
    </div>
  </div>
  <div v-if="list.name == 'Notes'">
    <input type="text" v-model="newNoteText"><button v-on:click="createNote(list)">Add Note</button> <br>
  </div>

  <div v-for="quest in list.quests">
    {{ quest.name }} <br>
    <a target="_blank" :href="`https://oldschool.runescape.wiki/w/${quest.name.replace(/ /g, '_').replace(/&/g, '%26').replace(/'/g, '%27')}`">Wiki Link</a> <br>
    <button v-on:click="destroyListQuest(quest, list)">Delete Quest</button>
  </div>
  <div v-for="item in list.items">
    <h3>{{ item.name }} <img :src="`data:image/jpeg;base64,${item.icon}`"></h3> <br>
    <a target="_blank" :href="`https://oldschool.runescape.wiki/w/${item.name.replace(/ /g, '_').replace(/&/g, '%26').replace(/'/g, '%27').replace('+', '%2B')}`">Wiki Link</a> <br>
    <button v-on:click="destroyListItem(item, list)">Delete Item</button>
  </div>
  <div v-for="note in list.notes">
    {{ note.text }} <br>
    <p v-if="currentNote == note">Text: <input type="text" v-model="currentNote.text"><button v-on:click="updateNote(currentNote)">Update</button></p>
    <button v-on:click="currentNote = note">Edit Note</button> <br>
    <button v-on:click="destroyNote(note, list)">Delete Note</button>
  </div>
  </div> -->
  </div>
</template>

<style>
img {
  padding: 5px;
  width: 60px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      board: {},
      quest_name: "",
      item_name: "",
      currentNote: {},
      newNoteText: "",
      itemKeyword: "",
      questKeyword: "",
      apiItemResults: [],
      apiQuestResults: [],
      currentList: {}
    };
  },
  created: function() {
    axios.get(`/api/boards/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.board = response.data;
    });
  },
  methods: {
    destroyNote: function(note, list) {
      axios.delete(`/api/notes/${note.id}`).then((response) => {
        console.log("Successfully deleted note", response.data);
        var index = list.notes.indexOf(note);
        list.notes.splice(index, 1);
      });
    },
    updateNote: function(note) {
      var updateParams = {
        text: note.text,
      };

      axios
        .patch(`/api/notes/${note.id}`, updateParams)
        .then((response) => {
          console.log("Successfully updated note", response.data);
          this.currentNote = {};
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
    createNote: function(list) {
      var params = {
        list_id: list.id,
        text: this.newNoteText,
      };
      axios
        .post("/api/notes", params)
        .then((response) => {
          console.log("Successfully created new note.", response.data);
          list.notes.unshift(response.data);
          this.newNoteText = "";
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    itemKeywordSearch: function() {
      axios.get(`api/items?name=${this.itemKeyword}`).then((response) => {
        console.log(response.data);
        this.apiItemResults = response.data;
      });
    },
    createListItem: function(list, item) {
      var params = {
        list_id: list.id,
        item_id: item.id,
      };
      axios
        .post("/api/list_items", params)
        .then((response) => {
          console.log("Successfully created new list_item.", response.data);
          list.items.unshift({id: response.data.item_id, name: response.data.name, icon: response.data.icon});
          this.itemKeyword = "";
          $('#itemSearchModal').modal("toggle");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    destroyListItem: function(item, list) {
      axios
        .delete(`/api/list_items?list_id=${list.id}&item_id=${item.id}`)
        .then((response) => {
          console.log("Successfully deleted list_item", response.data);
          var index = list.items.indexOf(item);
          list.items.splice(index, 1);
        });
    },
    questKeywordSearch: function() {
      axios.get(`api/quests?name=${this.questKeyword}`).then((response) => {
        console.log(response.data);
        this.apiQuestResults = response.data;
      });
    },
    createListQuest: function(list, quest) {
      var params = {
        list_id: list.id,
        quest_id: quest.id,
      };
      axios
        .post("/api/list_quests", params)
        .then((response) => {
          console.log("Successfully created new list_quest.", response.data);
          list.quests.unshift({id: response.data.quest_id, name: response.data.name});
          this.questKeyword = "";
          $('#questSearchModal').modal("toggle");
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    destroyListQuest: function(quest, list) {
      axios
        .delete(`/api/list_quests?list_id=${list.id}&quest_id=${quest.id}`)
        .then((response) => {
          console.log("Successfully deleted list_quest", response.data);
          var index = list.quests.indexOf(quest);
          list.quests.splice(index, 1);
        });
    },
  },
};
</script>
