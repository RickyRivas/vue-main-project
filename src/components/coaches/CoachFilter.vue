<template>
  <base-card>
    <h2>Find your coach</h2>
    <span class="filter-option">
      <!-- @change will trigger when one of the checkboxes have been checked/unchecked -->
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">frontend</label>
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="frontend">backend</label>
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="frontend">career</label>
    </span>
  </base-card>
</template>
<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true
      }
    };
  },
  methods: {
    setFilter(event) {
      // the event.target.id is taking the id from the input event and assigning it to inputId
      const inputId = event.target.id;
      // takes the event to see if it has been checked
      const isActive = event.target.checked;
      const updatedFilters = {
        // this copies the filters array in data() and will then be overrided by one of these properties
        // will take the inputid and create a new array and determine which input ids are true
        ...this.filters,
        [inputId]: isActive
      };
      // will then update the current filters array to an updated array with the new checked inputs
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
};
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
