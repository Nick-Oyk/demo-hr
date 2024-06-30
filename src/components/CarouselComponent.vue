<template>
    <div class="carousel-wrapper">
        <div class="title">
            <h2>News and Updates</h2>
        </div>
        <Carousel
            :value="carouselItems"
            :numVisible="2"
            :numScroll="1"
            :responsiveOptions="responsiveOptions"
            :circular="true"
            class="news-carousel"
        >
            <template #item="{ data }">
                <div class="carousel-item">
                    <img
                        :src="data.imageUrl"
                        alt="Carousel Slide"
                        class="carousel-image"
                    />
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import imageSrc from '../assets/placeholder.jpeg'

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
    },
])

const carouselItems = ref([
    { imageUrl: imageSrc },
    { imageUrl: imageSrc },
    { imageUrl: imageSrc },
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.carousel-wrapper {
    padding: 30px;
    display: flex;
    flex-direction: column; /* Stack children vertically */
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
    height: 100%; /* Ensure the carousel takes full height of its container */
}

.title {
    text-align: center; /* Center the text horizontally */
    margin-bottom: 20px; /* Add space between title and carousel */
    margin: 0;
    font-family: 'Roboto';
}

.carousel-item {
    padding: 20px;
    text-align: center; /* Center the image within each carousel item */
}

.carousel-image {
    width: 100%; /* Ensure the image fills its container */
    height: 30%; /* Maintain aspect ratio */
    max-height: 100%; /* Ensure image doesn't overflow */
    object-fit: contain; /* Fit the image within its container */
}
</style>
