<template>
  <div>
    <div class="mt-4 js-pinned-repos-reorder-container">
      <h2 class="j4 mb-2 textnormal">Pinned repositories</h2>
    </div>
    <ol class="pinned-repos-list mb-4 js-pinned-repos-reorder-list">
      <li class='pinned-repo-item p-3 mb-3 border border-gray-dark rounded-1 
      js-pinned-repo-list-item public source reorderabel sortable-button-item'>
        <div class="pinned-repo-item-content __web-inspector-hide-shortcut__">
          <a href="#" class="text-bold">
            <span class="repo js-repo" title="Editfiddle-Vue">Editfiddle-Vue</span>
          </a>
          <p class="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
            Editfiddle-Vue
          </p>
          <p class="mb-0 f6 text-gray">JavaScript</p>
        </div>
      </li>
      <li class='pinned-repo-item p-3 mb-3 border border-gray-dark rounded-1 
      js-pinned-repo-list-item public source reorderabel sortable-button-item'>
        <div class="pinned-repo-item-content __web-inspector-hide-shortcut__">
          <a href="#" class="text-bold">
            <span class="repo js-repo" title="Editfiddle-Vue">Editfiddle-Vue</span>
          </a>
          <p class="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
            Editfiddle-Vue
          </p>
          <p class="mb-0 f6 text-gray">JavaScript</p>
        </div>
      </li>
      <li class='pinned-repo-item p-3 mb-3 border border-gray-dark rounded-1 
      js-pinned-repo-list-item public source reorderabel sortable-button-item'>
        <div class="pinned-repo-item-content __web-inspector-hide-shortcut__">
          <a href="#" class="text-bold">
            <span class="repo js-repo" title="Editfiddle-Vue">Editfiddle-Vue</span>
          </a>
          <p class="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
            Editfiddle-Vue
          </p>
          <p class="mb-0 f6 text-gray">JavaScript</p>
        </div>
      </li>
      <li class='pinned-repo-item p-3 mb-3 border border-gray-dark rounded-1 
      js-pinned-repo-list-item public source reorderabel sortable-button-item'>
        <div class="pinned-repo-item-content __web-inspector-hide-shortcut__">
          <a href="#" class="text-bold">
            <span class="repo js-repo" title="Editfiddle-Vue">Editfiddle-Vue</span>
          </a>
          <p class="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
            Editfiddle-Vue
          </p>
          <p class="mb-0 f6 text-gray">JavaScript</p>
        </div>
      </li>
      <li class='pinned-repo-item p-3 mb-3 border border-gray-dark rounded-1 
      js-pinned-repo-list-item public source reorderabel sortable-button-item'>
        <div class="pinned-repo-item-content __web-inspector-hide-shortcut__">
          <a href="#" class="text-bold">
            <span class="repo js-repo" title="Editfiddle-Vue">Editfiddle-Vue</span>
          </a>
          <p class="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
            Editfiddle-Vue
          </p>
          <p class="mb-0 f6 text-gray">JavaScript</p>
        </div>
      </li>
      <li class='pinned-repo-item p-3 mb-3 border border-gray-dark rounded-1 
      js-pinned-repo-list-item public source reorderabel sortable-button-item'>
        <div class="pinned-repo-item-content __web-inspector-hide-shortcut__">
          <a href="#" class="text-bold">
            <span class="repo js-repo" title="Editfiddle-Vue">Editfiddle-Vue</span>
          </a>
          <p class="pinned-repo-desc text-gray text-small d-block mt-2 mb-3">
            Editfiddle-Vue
          </p>
          <p class="mb-0 f6 text-gray">JavaScript</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props:{
    pinnnedrepository:[
      {
        name:String,
        description:String,
        typelanguage:String
      }
    ]
  }
};
</script>

<style>
.pinned-repos-list {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  justify-content: space-between;
}
.p-3 {
  padding: 16px;
}
ol {
  display: block;
  list-style-type: decimal;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  -webkit-padding-start: 40px;
}
.d-block {
  display: block !important;
}
.py-4 {
  padding-top: 24px !important;
  padding-bottom: 24px !important;
}
.width-full {
  width: 100% !important;
}
.border-bottom {
  border-bottom: 1px #e1e4e8 solid !important;
}
.col-12 {
  width: 100%;
}
.border{
  border: 1px #e1e4e8 solid !important;
}
</style>


