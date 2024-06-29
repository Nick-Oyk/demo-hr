<template>
    <header>
        <NavbarComponent />
    </header>
    <main>
        <div class="card">
            <Splitter style="height: auto" layout="vertical">
                <SplitterPanel class="splitter-panel">
                    <div class="carousel-container">
                        <CarouselComponent />
                    </div>
                </SplitterPanel>
                <SplitterPanel class="splitter-panel">
                    <div class="title">
                        <h2>Employee Policies and Procedures</h2>
                    </div>
                    <div class="card-container">
                        <CardComponent
                            title="SGS"
                            iconName="pi-building-columns"
                            @view="handleView"
                        />
                        <CardComponent
                            title="Employee Handbook"
                            iconName="pi-book"
                            description="The Employee Handbook, a comprehensive document that outlines company policies, procedures, expectations, and guidelines. It serves as a crucial reference for understanding workplace rules, benefits, codes of conduct, and other essential aspects of employment within the organization."
                            @view="handleView"
                        />
                        <CardComponent
                            title="Employee Onboarding"
                            iconName="pi-users"
                            description="Employee Onboarding, the process of integrating new hires into the organization. It includes orientation, training, and familiarization with company culture, roles, and responsibilities. Effective onboarding ensures a smooth transition and sets the foundation for success in the new role."
                            @view="handleView"
                        />
                    </div>
                    <ModalComponent
                        :visible="modalVisible"
                        @close="handleClose"
                        :title="pdfTitle"
                    />
                </SplitterPanel>
            </Splitter>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import CarouselComponent from './components/CarouselComponent.vue'
import NavbarComponent from './components/NavbarComponent.vue'
import CardComponent from './components/CardComponent.vue'
import ModalComponent from './components/ModalComponent.vue'

const modalVisible = ref(false)
const pdfTitle = ref('')

const handleView = (payload) => {
    console.log('View event received in App.vue:', payload)
    pdfTitle.value = payload.title
    modalVisible.value = true
}

const handleClose = (payload) => {
    console.log('Close event received in App.vue:', payload)
    // Here you can handle the payload as needed, e.g., show modal
    modalVisible.value = false
}
</script>

<style scoped>
.carousel-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-container {
    display: flex;
    flex-wrap: wrap; /* Ensure cards wrap if necessary */
    justify-content: center;
    gap: 20px; /* Adjust spacing between cards as needed */
}
.card {
    padding: 30px;
}

.title {
    text-align: center; /* Center the text horizontally */
    margin-bottom: 20px; /* Add space between title and carousel */
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
}
</style>
