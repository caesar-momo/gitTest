<template>
  <div>
    <div class="container">
      <div class="avatar">
        <img class="avatar-img" src="https://avatars1.githubusercontent.com/u/40041578?s=460&amp;v=4" alt="avatar">
        <h2>linmomo</h2>
        <p>caesar-momo</p>
      </div>
      <div class="repository-content">
        <div class="user-profile-nav">
          <nav class="UnderlineNav-body">
            <a href="#" class="Underline-item selected" title="Overview">Overview</a>
            <a href="#" class="Underline-item" title="Repository">Repository</a>
            <a href="#" class="Underline-item" title="Star">Star</a>
            <a href="#" class="Underline-item" title="Follower">Follower</a>
            <a href="#" class="Underline-item" title="Following">Following</a>
          </nav>
        </div>
        <div class="position-relative">
          <pinned-repositories></pinned-repositories>
          <!-- <repositories></repositories> -->
        </div>
      </div>
    </div>
    <!-- <p>{{data}}</p> -->
  </div>
</template>
  <!-- <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Box"
            box
            v-model="userID"
            :rules="[rules.required]"
            placeholder="Github username"
          ></v-text-field>
        </v-flex>
        <div class="text-xs-center">
          <div>
            <v-btn
             color="warning"
             dark
             @click="sort()"
             >
             Search
            </v-btn>
          </div>
        </div>
        <v-data-table
            :items="reposArr"
            class="elevation-1"
            hide-actions
            hide-headers
          >
            <template slot="items" slot-scope="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.full_name }}</td>
            </template>
          </v-data-table>

      </v-layout>
      
    </v-slide-y-transition>
  </v-container> -->

<script>
import GitHub from "github-api";
const ghPinnedRepos = require('gh-pinned-repos')

import {bus} from '../main'

import PinnedRepositories from "./PinnedRepositories"
import Repositories from "./Repositories"

export default {
  name: "HelloWorld",
  components:{
    PinnedRepositories,
    Repositories
  },
  data: function() {
    return {
      data:{},
      pinnedrepositories:[{
        name:'',
        description:'',
        typelanguage:''
      }],
      repositories:[{
        
      }]

      // userID: "" ,
      // reposArr: [],
      // rules: {
      //   required: value => !!value || 'Required.',
      // },
      // headers:[
      //   {
      //     text:'Repository Name',
      //     align: 'center',
      //     value:'name'
      //   },
      //   {
      //     text: 'Full_Name',
      //     value: 'full_name'
      //   }
      // ],
    };
  },
  methods: {
    // sort: function() {
    //   // console.log("Click!!!");
    //   const vmmethod = this;
    //   if(this.userID=='')
    //     return;
    //   const gh = new GitHub();
    //   const me = gh.getUser(this.userID);
    //   me
    //     .listRepos()
    //     .then(function({ data: resposJson }) {
    //       // console.log(resposJson);
    //       vmmethod.reposArr = resposJson;
    //       // console.log(vmmethod.reposArr);
    //     })
    //     .catch((status,error) => {
    //       // console.log(error)
    //       throw error
    //     });
    // }
  },
  props: {
    msg: String
  },
  created(){
    // var vm = this;
    bus.$on('seachinfo',function(v){
      const vmmethod = this;
      // console.log(v);
      if(v=='')
        return;

      console.log(typeof v);
      
      ghPinnedRepos(v)
      .then((resonse) => {
        console.log(response.data)
      })

      const gh = new GitHub();
      const me = gh.getUser(v);
      // console.log(me);
      me
      .getProfile()
      .then(response => {
        // vmmethod.data=response.data;

        console.log(response.data);
      })
      .catch(error =>{
        throw error;
      })
    }.bind(this))
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.avatar-img{
  border-radius: 6px;
  width: 230px;
  height: 230px;
}
.user-profile-nav{
  /* background-color: #fff; */
  border-bottom: solid 1px #d1d5da;
  position: static;
}
.avatar{
  float: left;
  width: 260px;
}
.Underline-item{
  padding: 16px 8px;
  margin-right: 16px;
  font-size: 14px;
  color: #586069;
  line-height: 1.5;
  text-align: center;
  text-decoration: unset;
  border-bottom: 2px solid transparent;
}
.Underline-item.selected{
  font-weight: 600;
  color: #24292e;
  border-bottom-color: #e36209;
}
.UnderlineNav-body{
  height: 36px;
}

.repository-content{
  padding-left: 8px !important;
  float: left;
  width: 75%;
}


li{
  display: list-item;
  text-align: -webkit-match-parent;
}

.py-3{
  padding-top: 16px !important;
  padding-bottom: 16px !important;
}
.border-gray-dark{
  border-color: #d1d5da !important;
}
</style>
