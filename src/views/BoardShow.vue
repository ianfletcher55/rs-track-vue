<template>
  <div class="board-show">

  <h1 class="lead mt-3 mb-50">{{ board.name }}</h1>
    <div class="row stacked">
      <div class="col-md-4">
        <div class="pricing-table bg-inverse dark text-center">
          <div class="pricing-table-price">
            <p class="fs-14 fw-regular opc-5"></p>
            <p><span class="pricing-price fs-28">QUESTS TO DO</span></p>
          </div><!-- / pricing-table-price -->
          <div class="pricing-table-content">
            <div class="promo-big promo-icon-bg circle bg-primary mb-40 ml-auto mr-auto">
              <img src="/assets/images/quests-icon.png" alt="">
            </div><!-- / promo-big -->
            <ul class="list-group mb-20 p-x-40">
              <li class="list-group-item bt-0 bl-0 br-0 pl-0 bg-transparent border-inverse"><i class="ti-check mr-10 text-success va-middle"></i><span>{{quest.name}}</span></li>
              <li class="list-group-item bt-0 bl-0 br-0 pl-0 bg-transparent border-inverse"><i class="ti-close mr-10 text-danger va-middle"></i><span>Components</span></li>
              <li class="list-group-item bt-0 bl-0 br-0 pl-0 bg-transparent border-inverse"><i class="ti-close mr-10 text-danger va-middle"></i><span>Sections</span></li>
            </ul><!-- / list-group -->
            <div class="pricing-table-button">
              <a href="#x" class="btn btn-primary pill"><i class="ti-download va-middle mr-5"></i> <span class="va-middle">ADD QUEST</span></a>
            </div><!-- / pricing-table-button -->
          </div><!-- / pricing-table-content -->
        </div><!-- / pricing-table -->
      </div><!-- / column -->

      <div class="col-md-4">
        <div class="pricing-table bg-inverse dark text-center featured-2x move">
          <div class="pricing-table-price">
            <p class="fs-14 fw-regular opc-5"></p>
            <p><span class="pricing-price fs-28">ITEM WISHLIST</span></p>
          </div><!-- / pricing-table-price -->
          <div class="pricing-table-content">
            <div class="promo-big promo-icon-bg circle bg-success mb-40 ml-auto mr-auto">
              <img src="/assets/images/items-icon.png" alt="">
            </div><!-- / promo-big -->
            <ul class="list-group mb-20 p-x-40">
              <li class="list-group-item bt-0 bl-0 br-0 pl-0 bg-transparent border-inverse"><i class="ti-check mr-10 text-success va-middle"></i><span>UI Kit</span></li>
              <li class="list-group-item bt-0 bl-0 br-0 pl-0 bg-transparent border-inverse"><i class="ti-check mr-10 text-success va-middle"></i><span>Components</span></li>
              <li class="list-group-item bt-0 bl-0 br-0 pl-0 bg-transparent border-inverse"><i class="ti-close mr-10 text-danger va-middle"></i><span>Sections</span></li>
            </ul><!-- / list-group -->
            <div class="pricing-table-button">
              <a href="#x" class="btn btn-success pill"><i class="ti-shopping-cart va-middle mr-5"></i> <span class="va-middle">ADD ITEM</span></a>
            </div><!-- / pricing-table-button -->
          </div><!-- / pricing-table-content -->
        </div><!-- / pricing-table -->
      </div><!-- / column -->

      <div class="col-md-4">
        <div class="pricing-table bg-inverse dark text-center">
          <div class="pricing-table-price">
            <p class="fs-14 fw-regular opc-5"></p>
            <p><span class="pricing-price fs-28">NOTES TO SELF</span></p>
          </div><!-- / pricing-table-price -->
          <div class="pricing-table-content">
            <div class="promo-big promo-icon-bg circle bg-warning mb-40 ml-auto mr-auto">
              <img src="/assets/images/notes-icon.png" alt="">
            </div><!-- / promo-big -->
            <ul class="list-group mb-20 p-x-40">
              <li class="list-group-item bt-0 bl-0 br-0 pl-0 bg-transparent border-inverse"><i class="ti-check mr-10 text-success va-middle"></i><span>UI Kit</span></li>
              <li class="list-group-item bt-0 bl-0 br-0 pl-0 bg-transparent border-inverse"><i class="ti-check mr-10 text-success va-middle"></i><span>Components</span></li>
              <li class="list-group-item bt-0 bl-0 br-0 pl-0 bg-transparent border-inverse"><i class="ti-check mr-10 text-success va-middle"></i><span>Sections</span></li>
            </ul><!-- / list-group -->
            <div class="pricing-table-button">
              <a href="#x" class="btn btn-warning pill"><i class="ti-shopping-cart va-middle mr-5"></i> <span class="va-middle">ADD NOTE</span></a>
            </div><!-- / pricing-table-button -->
          </div><!-- / pricing-table-content -->
        </div><!-- / pricing-table -->
      </div><!-- / column -->
    </div><!-- / row -->
  </div><!-- / container -->

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
      apiQuestResults: []
    };
  },
  created: function() {
    axios.get(`/api/boards/${this.$route.params.id}`).then(response => {
      console.log(response.data);
      this.board = response.data;
    });
  },
  methods: {
    destroyNote: function(note, list) {
      axios.delete(`/api/notes/${note.id}`).then(response => {
        console.log("Successfully deleted note", response.data);
        var index = list.notes.indexOf(note);
        list.notes.splice(index, 1);
      });
    },
    updateNote: function(note) {
      var updateParams = {
        text: note.text
      };

      axios
        .patch(`/api/notes/${note.id}`, updateParams)
        .then(response => {
          console.log("Successfully updated note", response.data);
        })
        .catch(error => {
          console.log(error.response.data.errors);
        });
    },
    createNote: function(list) {
      var params = {
        list_id: list.id,
        text: this.newNoteText
      };
      axios
        .post("/api/notes", params)
        .then(response => {
          console.log("Successfully created new note.", response.data);
          list.notes.push(response.data);
          this.newNoteText = "";
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    itemKeywordSearch: function() {
      axios.get(`api/items?name=${this.itemKeyword}`).then(response => {
        console.log(response.data);
        this.apiItemResults = response.data;
      });
    },
    createListItem: function(list, item) {
      var params = {
        list_id: list.id,
        item_id: item.id
      };
      axios
        .post("/api/list_items", params)
        .then(response => {
          console.log("Successfully created new list_item.", response.data);
          list.items.push(response.data);
          this.itemKeyword = "";
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    destroyListItem: function(item, list) {
      axios
        .delete(`/api/list_items?list_id=${list.id}&item_id=${item.id}`)
        .then(response => {
          console.log("Successfully deleted list_item", response.data);
          var index = list.items.indexOf(item);
          list.items.splice(index, 1);
        });
    },
    questKeywordSearch: function() {
      axios.get(`api/quests?name=${this.questKeyword}`).then(response => {
        console.log(response.data);
        this.apiQuestResults = response.data;
      });
    },
    createListQuest: function(list, quest) {
      var params = {
        list_id: list.id,
        quest_id: quest.id
      };
      axios
        .post("/api/list_quests", params)
        .then(response => {
          console.log("Successfully created new list_quest.", response.data);
          list.quests.push(response.data);
          this.questKeyword = "";
        })
        .catch(error => {
          console.log(error.response.data.errors);
          this.errors = error.response.data.errors;
        });
    },
    destroyListQuest: function(quest, list) {
      axios
        .delete(`/api/list_quests?list_id=${list.id}&quest_id=${quest.id}`)
        .then(response => {
          console.log("Successfully deleted list_quest", response.data);
          var index = list.quests.indexOf(quest);
          list.quests.splice(index, 1);
        });
    }
  }
};
</script>