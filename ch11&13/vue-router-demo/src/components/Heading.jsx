import { defineComponent, h } from 'vue'

export default defineComponent({
    props: {
        level: {
            type: Number,
            required: true
        }
    },

    setup(props, { slots }) {
        // 使用H函数
        // return () => h(
        //     'h' + props.level,
        //     {},
        //     slots.default()
        // )

        // 使用Jsx
        const tag = 'h' + props.level
        return () => <tag>{ slots.default() } </tag>
    }
})