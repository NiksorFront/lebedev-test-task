 <script setup lang="ts">
    import head from "../../assets/images/Head.svg";
    import topA from "../../assets/images/top/Styled.svg"; import topB from "../../assets/images/top/Smooth.svg"; import topC from "../../assets/images/top/Bun.svg"; import topD from "../../assets/images/top/Curly.svg"; import topE from "../../assets/images/top/Crazy.svg"; import topF from "../../assets/images/top/Ninja.svg"; import topG from "../../assets/images/top/Cap.svg"; import topH from "../../assets/images/top/Mullet.svg"; import topI from "../../assets/images/top/Ponytail.svg"; import topJ from "../../assets/images/top/Mohawk.svg"; import topK from "../../assets/images/top/Long.svg";
    import mouthA from "../../assets/images/mouth/Smile.svg"; import mouthB from "../../assets/images/mouth/Open-Smile.svg"; import mouthC from "../../assets/images/mouth/Lips.svg"; import mouthD from "../../assets/images/mouth/Beard.svg"; import mouthE from "../../assets/images/mouth/Line.svg"; import mouthF from "../../assets/images/mouth/Original.svg";  import mouthG from "../../assets/images/mouth/Beard-2.svg"; 
    import glassesA from "../../assets/images/glasses/Plain.svg"; import glassesB from "../../assets/images/glasses/Sunnies.svg"; import glassesC from "../../assets/images/glasses/Reading.svg";
    import eyesA from "../../assets/images/eyes/Normal.svg"; import eyesB from "../../assets/images/eyes/Tired.svg"; import eyesC from "../../assets/images/eyes/Nice.svg"; import eyesD from "../../assets/images/eyes/Lashes.svg"; import eyesE from "../../assets/images/eyes/Original.svg";
    import eyebrowsA from "../../assets/images/eyebrows/Thick.svg"; import eyebrowsB from "../../assets/images/eyebrows/Thin.svg"; import eyebrowsC from "../../assets/images/eyebrows/Round.svg"; import eyebrowsD from "../../assets/images/eyebrows/Formed.svg"; import eyebrowsE from "../../assets/images/eyebrows/Unsure.svg"; import eyebrowsF from "../../assets/images/eyebrows/Angry.svg";
    import bodyA from "../../assets/images/body/Plain.svg"; import bodyB from "../../assets/images/body/Super-hero.svg"; import bodyC from "../../assets/images/body/Necklace.svg"; import bodyD from "../../assets/images/body/Muscle-shirt.svg"; import bodyE from "../../assets/images/body/Sweater.svg"; import bodyF from "../../assets/images/body/Print.svg"
    import backgroundA from "../../assets/images/background/Solid-0.svg"; import backgroundB from "../../assets/images/background/Bricks.svg"; import backgroundC from "../../assets/images/background/Boom.svg"; import backgroundD from "../../assets/images/background/Solid-1.svg"; import backgroundE from "../../assets/images/background/Solid-2.svg";
    import petA from "../../assets/images/pet/Raptor.svg"; import petB from "../../assets/images/pet/Cat.svg"; import petC from "../../assets/images/pet/Fish.svg"; import petD from "../../assets/images/pet/Dog.svg";
    
    type Ttops = {[key: string]: string}
    const        tops:Ttops = {A:topA,        B:topB,         C:topC,       D:topD,        E:topE,      F:topF,   G:topG, H:topH, I:topI, J:topJ, K:topK}
    const      mouths:Ttops = {A:mouthA,      B:mouthB,       C:mouthC,     D:mouthD,      E:mouthE,    F:mouthF, G:mouthG}
    const     glasses:Ttops = {A:glassesA,    B:glassesB,     C:glassesC};
    const        eyes:Ttops = {A:eyesA,       B:eyesB,        C:eyesC,      D:eyesD,       E:eyesE};
    const    eyebrows:Ttops = {A:eyebrowsA,   B:eyebrowsB,    C:eyebrowsC,  D:eyebrowsD,   E:eyebrowsE, F:eyebrowsF};
    const       bodys:Ttops = {A:bodyA,       B:bodyB,        C:bodyC,      D:bodyD,       E:bodyE,     F:bodyF};
    const backgrounds:Ttops = {A:backgroundA, B:backgroundB,  C:backgroundC,D:backgroundD, E:backgroundE};
    const        pets:Ttops = {A:petA,        B:petB,         C:petC,       D:petD}
    //{A:, B:, C:, D:, E:, F:, G:, H:}  Оставил на будущее, чтобы было легче объекты добавлять
    import updateSvg from "../../assets/images/Update.svg";
    import likeSvg from "../../assets/images/like.svg";
    import errorImg from "../../assets/images/Error.svg";
    import mergeImages from 'merge-images';
    import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
    import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from "vue-router";
    //import Shader from "../../components/shader/shader.vue";
    
    let img = ref()
    let img2 = ref()

    function setImg(){
        //top - 0, mouth - 1, glasses - 2, eyes - 3, eyebrows - 4, body - 5, background - 6, pet - 7
        const data:string[] = window.location.pathname.split("").slice(1); //Из пути получаем буквы. Используя каждую мы получаем Svg картинку
        
        const top = tops[data[0]];
        const muth = mouths[data[1]];
        const glses = glasses[data[2]];
        const eys = eyes[data[3]];
        const eybrws = eyebrows[data[4]];
        const body = bodys[data[5]];
        const pet = pets[data[7]];

        /*Код ниже проверяет загрузились ли все картинки и расчитывает X и Y координаты для каждой из них*/
        const mouthYcord:number = muth===mouthG ? 170 : 225;
        const bodyYcord:number = (body===bodyB)||(body===bodyD) ? 290 : 297;
        const glsesYcord:number = (glses===glassesC) ? 195 : 190;
        let        crds = [[0, 58], [0, mouthYcord], [0, glsesYcord], [0, 200], [0, 176], [0, bodyYcord]]; //crds - coordinates или координаты соответсвкющие каждому имени списком ниже
        const allImages = [top,     muth,            glses,           eys,      eybrws,   body          ];
        const loadingImg = new Promise((resolve, reject) => {
            let count:number = 0;                                       //Счётчик количесвта зарузившихся картинок
            allImages.forEach((img, index) => {
                var image = new Image();
                image.src = img;
                image.onload = () => {
                    count+=1
                    crds[index][0] = Math.round((440 -image.width)/2);  //Записваем координаты X для рендера ровно по центру
                    (count === allImages.length) && resolve('');        //Когда все картинки зарузились, говорим, чтор всё успешно, возвращая resolve('')
                }
            })
        })

        loadingImg
        .then(() => {       //Когда все картинки загрузились
            mergeImages([   //Объединяем их в одну большую
                backgrounds[data[6]], 
                {src: head,   x: 141, y: 125 }, 
                {src: muth,   x: crds[1][0], y: crds[1][1] },
                {src: glses,  x: crds[2][0], y: crds[2][1] },  
                {src: eys,    x: crds[3][0], y: crds[3][1] }, 
                {src: eybrws, x: crds[4][0], y: crds[4][1] },
                {src: body,   x: crds[5][0], y: crds[5][1] },
                {src: top,    x: crds[0][0], y: crds[0][1] },
                {src: pet,    x: -75,        y: 264        }
            ])
            .then(b64 => {img.value = b64})     //Отображем на холсте

            generateNewAvatar() //Генерим нрвый аватар
        })
        .catch(err => {    
            console.log(err); 
            img.value = errorImg    //Устанавливаем картинку с надписью: "ошибка"
        })
    }

    onMounted(() => setImg()); //Устанавливаем картинку при самой загрузке
    onUpdated(() => setImg()); //Как обновился роут, обновляем картинку в соотвествии с ним

    const randIndex = (i:number):number => {return Math.floor(Math.random() * i)}
    const router = useRouter();
    const alphabet: string[] = ['A', 'B', "C", 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
    function generateNewAvatar(){
        const        top = alphabet[randIndex(11)];
        const      mouth = alphabet[randIndex(7)];
        const    glasses = alphabet[randIndex(3)];
        const       eyes = alphabet[randIndex(5)];
        const   eyebrows = alphabet[randIndex(6)];
        const       body = alphabet[randIndex(6)];
        const background = alphabet[randIndex(3)];
        const        pet = alphabet[randIndex(4)];

        img2.value = top + mouth + glasses + eyes + eyebrows + body + background + pet;
    }

    const setNewImg = () => {
        router.push(img2.value); //Загружаем сгенерированный URL
    };

</script>

<template>
    <section class="container">
        <!-- <Shader img1="" img2="" /> -->
        <img class="image" :src="img" alt="Лего аватар"/>
        <button class="button text" :onClick="setNewImg">
            <img class="icon" :src="updateSvg"/>
            обновить 
        </button>
        <!-- Тут должна быть кнопка избранного и релизация через куки, но я не успел -->
    </section>
</template>

<style scoped>
    @import url("./avatar-page.module.css");
</style>