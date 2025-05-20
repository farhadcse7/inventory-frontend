<script setup>
/* All Library Import */
import { ref, reactive, inject, onMounted, watch } from 'vue';
import { useCategoryStore } from '@/stores/category';
import { useRouter } from 'vue-router';
import _ from 'lodash';

/* All Instance */
const categoryStore = useCategoryStore();
const router = useRouter();
const swal = inject('$swal');

categoryStore.swal = swal;
categoryStore.router = router;

/* All Variables */
const searchKeyWord = ref('');

/* All Methods */
const DeleteCategory = (id, name) => {
    swal({
        title: `Do you want to delete this data: ${name} ${id}`,
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if(result.isConfirmed){
            categoryStore.deleteCategory(id, (status) => {
                if(status == 'success'){
                    categoryStore.getCategories(categoryStore.pagination.current_page, categoryStore.dataLimit)
                }
            })
        }
    })
}

/* Hooks and Computed */
onMounted(() => {
    categoryStore.getCategories(categoryStore.pagination.current_page, categoryStore.dataLimit);
})

watch(
    searchKeyWord,
    _.debounce((current, previous) => {
        categoryStore.getCategories(categoryStore.pagination.current_page, categoryStore.dataLimit, current);
    }, 500)
)

</script>

<template>
    <div class="page-content">
        <div class="container-fluid">
            <div class="row">
                <!-- Header Part -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <h4 class="card-title">Category Index</h4>
                                <router-link :to="{ name: 'category-create' }" class="btn btn-success">
                                    <i class="fas fa-plus-circle"></i> Create New</router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Statistics Part -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <!-- Search Bar & Count -->
                            <div class="row">
                                <div class="col-md-8">
                                    Total Count: <span class="text-primary fw-bold">{{ categoryStore.getTotalCount }}</span>
                                </div>
                                <div class="col-md-4">
                                    <input type="search" name="" class="form-control" placeholder="Search ..."
                                        v-model="searchKeyWord">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <!-- Table -->
                <div class="row my-4">
                    <div class="col-md-12">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Code</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(category,index) in categoryStore.categories" :key="category.id">
                                        <th scope="row">{{ (categoryStore.pagination.current_page*categoryStore.dataLimit) - categoryStore.dataLimit+index+1 }}</th>
                                        <td>{{ category.name }}</td>
                                        <td>{{ category.code }}</td>
                                        <td>{{ category.file }}</td>
                                        <td>
                                            <div class="form-check form-switch d-flex justify-content-center">
                                                <input type="checkbox" class="form-check-input fs-5" role="switch" id="changeStatus" :checked="category.is_active" 
                                                @change.prevent="categoryStore.changeStatus(category.id)">
                                            </div>
                                        </td>
                                        <td>
                                            <router-link :to="{name: 'category-edit', params: {id: category.id }}" class="btn btn-info btn-sm"><i class="fas fa-edit"></i></router-link>
                                            <a @click.prevent="DeleteCategory(category.id, category.name)" class="btn btn-danger btn-sm ms-2"><i class="fas fa-trash"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="d-flex justify-content-end my-4">
                    <v-pagination
                        v-model="categoryStore.pagination.current_page"
                        :pages="categoryStore.pagination.last_page"
                        :range-size="1"
                        active-color ="#776acF"
                        @update:modelValue="categoryStore.getCategories(categoryStore.pagination.current_page, categoryStore.dataLimit)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>