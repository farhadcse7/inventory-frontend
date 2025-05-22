<script setup>
/* All Imports */
import { ref, reactive, inject } from 'vue';
import { useCategoryStore } from '@/stores/category';
import { useRouter } from 'vue-router';

/* All Instance */
const categoryStore = useCategoryStore();
const swal = inject("$swal");
const router = useRouter();

categoryStore.swal = swal;
categoryStore.router = router;
/* All Variables and Constants */
const formData = reactive({
  name: null,
  code: null,
  file: null,
});

const schema = reactive({
  name: 'required',
  code: 'required',
});

/* All Methods */
const saveCategory = () => {
  categoryStore.storeCategory(formData);
}
const onFileChange = (e) => {
  formData.file = e.target.files[0];
};

/* Hooks and OnMounted */


</script>

<template>
  <div class="page-content">
    <div class="container-fluid">
      <div class="row">

        <div class="col-md-12">
          <div class="card border-primary">
            <div class="card-body">
              <div class="d-flex align-items-center justify-content-between">
                <h4 class="card-title text-primary fw-bold">Category Create</h4>
                <router-link :to="{ name: 'category-index' }" class="btn btn-primary text-white fw-bold">
                  <i class="fas fa-arrow-left"></i> Category List</router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-12">
          <div class="card border-primary">
            <div class="card-body">
              <vee-form :validation-schema="schema" @submit="saveCategory" class="mt-4 pt-2" enctype="multipart/form-data">
                <div class="row">
                  <!-- Category Name -->
                  <div class="col-md-6 mb-4">
                   <label for="category-name">Category Name</label>
                    <vee-field type="text" class="form-control" name="name" v-model="formData.name" placeholder="Enter Category Name" />
                    <ErrorMessage class="text-danger" name="name" />
                  </div>
                  <!-- Category Name -->

                  <!-- Category code -->
                  <div class="col-md-6 mb-4">
                   <label for="category-code">Category Code</label>
                    <vee-field type="text" class="form-control" name="code" v-model="formData.code" placeholder="Enter Category Code" />
                    <ErrorMessage class="text-danger" name="code" />
                  </div>
                  <!-- Category Name -->

                  <!-- Category Image -->
                  <div class="col-md-12 mb-4">
                    <label for="name" class="form-label text-shuttle">Upload Attachment</label>
                    <vee-field id="uploadFile" @change="onFileChange" type="file" class="form-control" name="file"
                      accept="image/*,.pdf" />
                    <ErrorMessage class="text-danger" name="file" />
                  </div>
                  <!-- Category Image -->
                </div>

                <div class="d-flex justify-content-center align-items-center mt-3">
                  <button type="submit" class="btn btn-primary fw-bold">Submit</button>
                </div>
              </vee-form>

            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>