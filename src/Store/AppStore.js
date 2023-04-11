import {defineStore} from 'pinia';
import {ref} from 'vue'
import {
    differenceInDays, 
    differenceInMonths, 
    differenceInYears, 
    subYears, 
    subMonths,
    isFuture,
    getDaysInMonth
} from 'date-fns'

export const useAppStore = defineStore('app', () => {
    const items = ['day', 'month', 'year'];
    const currentDate = ref(new Date());
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

    const result = ref({
        days: '--',
        months: '--',
        years: '--'
    })

    const checkPresence = function(){
        let state = true;
        items.forEach((item) => {
            if(!date.value[item]) {
                errors.value[item] = "This field is required";
                classes.value[item] = 'error'
                state = false;
            }
        })
        return state;
    }


    const checkNumbers = function(){
        let state = true;
        items.forEach((item) => {
            if(isNaN(date.value[item])) {
                errors.value[item] = "Must be a valid " + item;
                classes.value[item] = 'error'
                state = false;
            } else if (item == 'year') {
                console.log(currentDate.value.getFullYear())
                if (date.value[item] > currentDate.value.getFullYear()) {
                errors.value[item] = "Must be in the past";
                classes.value[item] = 'error'
                state = false;
                }
            }
            else if (item == 'month'){
                if (date.value[item] > 12 || date.value[item] < 1) {
                errors.value[item] = "Must be a valid Month";
                classes.value[item] = 'error'
                state = false;
                }
            }
            else if (item == 'day') {
                if (date.value.day < 1 || date.value.day > getDaysInMonth(new Date(date.value.year, date.value.month -1))) {
                    errors.value[item] = "Must be a valid Day";
                    classes.value[item] = 'error'
                    state = false;
                }
            }
        })
        return state;
    }

    const validateDate = function(){
        if(!checkPresence()) 
            return false
        
        if(!checkNumbers())
            return false;

        let validationDate = new Date(date.value.year, date.value.month -1, date.value.day);
        if(isFuture(validationDate)){
            errors.value.year = "Must be in the past";
            classes.value.year = 'error'
            return false;
        }

        return validationDate;
    }

    const calculateTimeSince = function() {
        const validatedDate = validateDate()
        if (validatedDate){
            let temp;
            result.value.years = differenceInYears(currentDate.value, validatedDate);
            temp = subYears(currentDate.value, result.value.years);
            result.value.months = differenceInMonths(temp, validatedDate);
            temp = subMonths(temp, result.value.months);
            result.value.days = differenceInDays(temp, validatedDate)
        }
        
    }

    const formElementFocus = function(name) {
         if(name){
            classes.value[name] = 'active';
            errors.value[name] = '';
         }
    }
    const formElementBlur = function(name) {
         if(name){
            if(date.value[name] == ''){
                classes.value[name] = '';
            }
         }
    }

    return {
        date, 
        classes, 
        errors, 
        result, 
        calculateTimeSince, 
        formElementFocus, 
        formElementBlur
    }
})