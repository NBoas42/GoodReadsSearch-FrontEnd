<template>
    <div class="flex justify-center items-center w-80">
        <div class="w-24  h-32 flex justify-center items-center bg-slate-500 p-2">
            <img class=""
                :src="book.image"
                alt="ThumbNail">
        </div>

        <div class=" h-full w-60 flex-col bg-slate-500 ">
            <p class="text-center p-3 font-mono text-white truncate text-sm underline">{{book.title}}</p>
            <p class="text-center p-3 font-mono text-white truncate text-sm">{{book.author}}</p>
            <div class="flex justify-between  m-0">
                <p class="text-center p-2 font-mono text-white text-xs truncate">Rating:{{book.rating}}</p>
                <p class="text-center p-2 font-mono text-white text-xs truncate">Pages:{{book.pages}}</p>
            </div>

        </div>
    </div>
</template>

<script setup>
const {book} = defineProps(['book'])
console.log(book)
</script>

<style lang="scss" scoped>

</style>