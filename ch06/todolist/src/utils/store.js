import { ref, watchEffect } from 'vue'

// fixme 报错，待修复
export function useStorage(name, value='[]'){ 
    let data = ref(JSON.parse(localStorage.getItem(name)|| value)) 
    watchEffect(()=>{
        localStorage.setItem(name,JSON.stringify(data.value)) 
    }) 
    return data
}