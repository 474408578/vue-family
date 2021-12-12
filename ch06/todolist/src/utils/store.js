// import { ref, watchEffect } from 'vue'

// // fixme 报错，待修复
// export function useStorage(name, vaule=[]) {
//     let data = ref(JSON.parse(localStorage.getItem(name)|| vaule))
//     watchEffect(() => {
//         console.log(name);
//         localStorage.setItem(name, JSON.stringify(data.vaule))
//     })
//     return data
// }