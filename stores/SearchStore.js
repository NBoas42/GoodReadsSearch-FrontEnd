import { defineStore } from 'pinia'
import VueToast from 'vue-toast'
import axios from 'axios'

export const useSearchStore = defineStore('search',
    {
        state: () => ({
            searchText: 'searchText',
            data: {},
        }),
        getters: {
            getResults: (state) => state.data.results,
            getSearchText: (state) => state.searchText,
            getNextPage:(state)=> state.data.results.nextPage
        },
        actions: {
            updateSearchText(searchText) {
                this.searchText = searchText
            },
            async searchBooks() {
                const response = await $fetch(`http://localhost:3001/v1/book/search?searchText=${this.searchText}`,{
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    }
              })
              this.data = response.data
            },
            async fetchNextPage(){
                const response = await $fetch(`http://localhost:3001/v1/book/search?searchText=${this.searchText}&page=${this.data.nextPage}`,{
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    }
              })
              this.data.results = [...this.data.results,...response.data.results]
              this.data = {
                ...this.data,
                nextPage: response.data.nextPage
              }
            }
        }
    })