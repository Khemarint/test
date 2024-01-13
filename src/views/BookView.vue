<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h1 class="text-3xl font-bold mb-4">Book Management</h1>
        <div class="field flex items-center">
            <div class="control mr-2">
                <input v-model="name" class="input bg-gray-200 focus:bg-white focus:border-purple-500 border-2 p-2 rounded-md" type="text" placeholder="Text input">
            </div>
            <button @click="addName" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Book</button>
        </div>
        <div v-for="(name, index) in names" :key="index" class="mt-3">
            {{ name }}
        </div>
        <div class="mt-3">
            I have {{ names.length }} Book(s)
        </div>
    </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const names = ref([]);

const addName = () => {
    names.value.push(name.value);
    name.value = '';
};
</script>
