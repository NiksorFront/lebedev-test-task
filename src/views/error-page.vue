<script setup lang="ts">
    import { RouterLink } from "vue-router"
</script>

<template>
    <main class="main">
        <h1 class="title">Ошибка 404</h1>
        <RouterLink to="./">
            <p class="subtitle">перейти на главную</p>
        </RouterLink>
    </main>
</template>


<style>
.main{
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    
    background-color: rgb(25, 25, 25);
}


.title{
    font-family: 'Arial Narrow Bold', sans-serif;
    font-weight: 600;
    font-size: 40px;
    text-align: center;

    color: azure;
}

.subtitle{
    font-family: 'Arial Narrow Bold', sans-serif;
    font-weight: 400;
    font-size: 20px;
    text-align: center;

    margin: 0;
    padding: 0 10px;
    color: azure;

    border-radius: 7px;
    border: solid 2px white;
    background-color: black;
}

.subtitle:hover{
    cursor: pointer;
}
</style>