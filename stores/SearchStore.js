import { defineStore } from 'pinia'
import axios from 'axios'

// You can name the return value of `defineStore()` anything you want, 
// but it's best to use the name of the store and surround it with `use` 
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useSearchStore = defineStore('search',
    {
        state: () => ({
            searchText: 'searchText',
            data: {},
        }),
        getters: {
            getResults: (state) => state.data.results,
            getSearchText: (state) => state.searchText,
        },
        actions: {
            logSearchText() {
                console.log(this.searchText)
            },
            updateSearchText(searchText) {
                this.searchText = searchText
            },
            async searchBooks() {
                this.data = await $fetch('http://localhost:3001/v1/book/search?searchText=star&page=2',{
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*',
                    }
              })
            }
        }
    })