<template>
    <b>{{count}} * 2 = {{ double }}</b>
    <br>
    <button @click="add">add</button>
    <br>
    <button @click="decr">decr</button>
    <br>
    <button @click="asyncAdd">asyncAdd</button>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '../store/gvuex'

let store = useStore()
let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)

function add() {
    store.commit('add')
}

function decr() {
    store.commit('decr')
}

function asyncAdd() {
    store.dispatch('asyncAdd')
}

</script>

<style scoped>
button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}

</style>