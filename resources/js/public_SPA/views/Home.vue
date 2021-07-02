<template>
    <section id="home">
        <div class="container">
            <title-component>Hello It's me!</title-component>
            <div v-for="task in tasks" :key="task.id">
                <task-component :task-title="task.title" :task-description="task.description"></task-component>
            </div>
        </div>
    </section>
</template>

<script>
import TitleComponent from "../components/TitleComponent"
import TaskComponent from "../components/TaskComponent"

export default {
    components: {
        TitleComponent,
        TaskComponent,
    },
    data() {
            return {
              tasks: {},
            }
        },
    methods: {
        getTasks(){
            axios.get('/api/tasks')
                 .then((response)=>{
                   this.tasks = response.data
                 })
        }
    },
    created() {
        this.getTasks()
    }
}
</script>

<style>

</style>