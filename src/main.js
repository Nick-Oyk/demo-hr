import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { definePreset } from '@primevue/themes'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import FloatLabel from 'primevue/floatlabel'
import Menubar from 'primevue/menubar'
import Carousel from 'primevue/carousel'
import Slider from 'primevue/slider'
import Card from 'primevue/card'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import ToggleSwitch from 'primevue/toggleswitch'
import Dialog from 'primevue/dialog'

const app = createApp(App)

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{orange.50}',
            100: '{orange.100}',
            200: '{orange.200}',
            300: '{orange.300}',
            400: '{orange.400}',
            500: '{orange.500}',
            600: '{orange.600}',
            700: '{orange.700}',
            800: '{orange.800}',
            900: '{orange.900}',
            950: '{orange.950}',
        },
    },
})

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
    },
})

app.component('Button', Button)
app.component('Card', Card)
app.component('Splitter', Splitter)
app.component('SplitterPanel', SplitterPanel)
app.component('InputText', InputText)
app.component('FloatLabel', FloatLabel)
app.component('Menubar', Menubar)
app.component('Carousel', Carousel)
app.component('Slider', Slider)
app.component('ToggleSwitch', ToggleSwitch)
app.component('Dialog', Dialog)

app.mount('#app')
