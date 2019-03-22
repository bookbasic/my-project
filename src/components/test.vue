<template>
<div class="container" id="app">
  <div class="pt-3">
    <form class="form-inline mt-2 mt-md-0">
      <span class="mr-sm-2">Index</span>
      <input id="num" class="form-control mr-sm-2" type="text" placeholder="Index" aria-label="Index">
      <b-button v-b-modal.modal1 id="calc" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" > Calculate </b-button>
    </form>
  </div>
  <div class="pt-3">
    <form class="form-inline mt-2 mt-md-0">
      <span class="mr-sm-2">Place</span>
      <b-button v-b-modal.modal1 id="search" type="button" class="btn btn-secondary" data-toggle="modal" data-target="#exampleModal" > Search </b-button>
    </form>
  </div>

  <b-modal id="modal1" title="Result">
    <p class="my-4" id="result">Hello from modal!</p>
  </b-modal>

</div>
</template>
<script src="../test.js"></script>
