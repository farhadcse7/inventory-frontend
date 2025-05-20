<script setup>
/* All Library Import */
import { ref, reactive, inject, onMounted } from 'vue';
import { useCategoryStore } from '@/stores/category';
import { useRouter } from 'vue-router';

/* All Instance */
const categoryStore = useCategoryStore();
const router = useRouter();
const swal = inject('$swal');

categoryStore.swal = swal;
categoryStore.router = router;

/* All Variables */
const searchKeyWord = ref('');

/* All Methods */

/* Hooks and Computed */
onMounted(() => {
    categoryStore.getCategories(1, 5 ,'');
})


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
                                    Total Count: <span class="text-primary fw-bold">{{ categoryStore.getTotalCount
                                        }}</span>
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
                                    <tr>
                                        <th></th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>