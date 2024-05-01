<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { useRouter } from "vue-router";

    const randIndex = (i:number):number => {return Math.floor(Math.random() * i)}
    const router = useRouter();
    const alphabet: string[] = ['A', 'B', "C", 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K']
        
    onMounted(() => {
        const        top = alphabet[randIndex(11)];
        const      mouth = alphabet[randIndex(7)];
        const    glasses = alphabet[randIndex(3)];
        const       eyes = alphabet[randIndex(5)];
        const   eyebrows = alphabet[randIndex(6)];
        const       body = alphabet[randIndex(6)];
        const background = alphabet[randIndex(3)];
        const        pet = alphabet[randIndex(4)];

        router.push(top + mouth + glasses + eyes + eyebrows + body + background + pet)
    })
</script>

<template>
    <h1 class="title slidein">Загрузка</h1>
</template>

<style scoped>
    .title{
        font-family: "ALS Hauss", 'Arial Narrow Bold', sans-serif;
        font-weight: 400;
        font-size: 40px;
        text-align: center;

        color: azure;
        animation: 3s linear 1s infinite alternate slidein;
    }

    @keyframes slidein {
        from {opacity: 0;}
        to { opacity: 1; }
    }
</style>