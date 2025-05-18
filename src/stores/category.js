import { defineStore } from "pinia";
import { inventoryAxiosClient } from '@/utils/systemaxios';
import config from '@/utils/config';

export const useCategoryStore = defineStore('category', {
    state: () => ({
        rawData: [],
        dataLimit: config.defaultDataLimit || 10,
        categories: [],
        category: null, 
        is_loading: false,
        pagination: {
            current_page: 1,
            last_page: 0,
            totalCount: 0,
        }
    }),

    getters: {
        getTotalCount(state){
            return state.pagination.totalCount;
        },
    },

    actions: {
        async getAllCategories(){
            
        },
        async getCategories(){

        },
        async getCategory(){

        },
        async storeCategory(){

        },
        async updateCategory(){

        },
        async deleteCategory(){

        },
        async changeStatus(){

        },
    }


}); 