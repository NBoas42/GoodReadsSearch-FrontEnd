<template>
    <div class="flex-col items-center bg-slate-800 h-screen">
        <NuxtLink to="/" class="text-center text-5xl p-4 block mb-2  font-medium text-gray-900 dark:text-white ">Home
        </NuxtLink>
        <div class = "flex items-center justify-center bg-slate-800">
            <div class="grid grid-cols-4 gap-5 p-5 bg-slate-800 w-fit">
                <SearchBookCard v-for="book in searchStore.getResults" v-bind:key="book.title" :book="book" />

            </div>
        </div>
        <div class=" flex justify-center bg-slate-800">
            <button v-if="searchStore.getNextPage" @click="searchStore.fetchNextPage()" class="p-2 rounded font-mono text-white bg-blue-800">Load More</button>
        </div>

    </div>
</template>

<script setup>
import { useSearchStore } from '@/stores/SearchStore'

const searchStore = useSearchStore()
await searchStore.searchBooks()
</script>

<style lang="scss" scoped>

</style>