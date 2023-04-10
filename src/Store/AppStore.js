import {defineStore} from 'pinia';
import {ref, computed} from 'vue'

export const useAppStore = defineStore('app', () => {
    const date = ref({
        day: '',
        month: '',
        year: ''
    })

    return {date}
})