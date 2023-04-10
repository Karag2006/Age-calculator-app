import {defineStore} from 'pinia';
import {ref, computed} from 'vue'

export const useAppStore = defineStore('app', () => {
    const date = ref({
        day: '',
        month: '',
        year: ''
    })
    const classes = ref({
        day: '',
        month: '',
        year: ''
    })

    const errors = ref({
        day: '',
        month: '',
        year: ''
    })


    return {date, classes, errors}
})