<template>
    <div class="flex-col items-center bg-slate-800 h-screen">
        <NuxtLink to="/" class="text-center text-5xl p-4 block mb-2  font-medium text-gray-900 dark:text-white">Back To
            Search</NuxtLink>
        <div class="grid grid-cols-4 gap-5 p-5">
                <SearchBookCard v-for="book in searchStore.data.results" v-bind:key="book.title" :book="book"/>

        </div>
        <div class=" flex justify-center">
            <button class="p-2 rounded font-mono text-white bg-blue-800">Load More</button>
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