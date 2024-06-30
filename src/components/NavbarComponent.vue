<template>
    <div class="card">
        <Menubar class="navigation-bar">
            <template #start>
                <div class="start-content">
                    <img
                        src="../assets/TDCX.svg"
                        alt="My Happy SVG"
                        class="logo-svg"
                    />
                    <h3>Welcome to TDCX!</h3>
                </div>
            </template>
            <!-- <template #end>
                <div class="end-content">
                    <ToggleSwitch
                        class="dark-mode-toggle"
                        v-model="darkModeEnabled"
                        @change="toggleDarkMode"
                    />
                </div>
            </template> -->
        </Menubar>
    </div>
</template>

<script setup></script>

<style scoped>
.logo-svg {
    width: 40px; /* Adjust width as needed */
    height: auto; /* Maintain aspect ratio */
    margin-right: 20px;
}

.card {
    padding: 20px;
}

.p-menubar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.start-content {
    display: flex;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
}

/* .end-content {
    margin-left: auto;  Pushes ToggleSwitch to the right 
} */
</style>
