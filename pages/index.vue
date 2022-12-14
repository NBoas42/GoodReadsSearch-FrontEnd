<template>
    <div class="flex items-center justify-center h-screen bg-slate-900">
        <div>
            <div class="flex justify-center">
                <h1 class="text-center text-5xl p-4 block mb-2  font-medium text-gray-900 dark:text-white">Search Books</h1>
            </div>
            <div class="flex justify-center">
                <input type="text" v-model="text" class=" rounded p-5  font-mono">
                <NuxtLink @click="searchStore.updateSearchText(text)"  to="/search" class=" btn p-5 rounded font-mono text-white bg-blue-800">Search</NuxtLink>
            </div>
            <div>
                <p class="text-sm text-center p-2 font-medium text-gray-900 dark:text-white">Search by ISBN, Title, or Author</p>
            </div>

        </div>
    </div>
</template>

<script setup>
import {useSearchStore} from '@/stores/SearchStore'
const searchStore = useSearchStore()

</script>

<style scoped>

</style>