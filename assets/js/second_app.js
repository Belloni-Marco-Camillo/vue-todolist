const app = new Vue({
    el: '#app',
    data: {
        newTask: "",
        index: 0,
        i: 0,
        doneTasks: [],
        trashTasks: [],
        tasks: [{
                text: 'learn 1',
                done: false
            },
            {
                text: 'learn 2',
                done: false
            },
            {
                text: 'learn 3',
                done: false
            }
        ]
    },

    methods: {
        addTask() {
            console.log('add new task')
            console.log(this.newTask)
            if (this.newTask === '') {
                console.log("devi inserire il valore");
            } else {
                this.tasks.unshift({ text: this.newTask, done: false })
                alert('complimenti, hai inserito la nuova task' + this.newTask)
            }
        },

        removeTask(index) {
            console.log("hai cliccato" + index)
            this.trashTasks.push(this.tasks[index])
            this.tasks.splice(index, 1)
        },


        doneTask(index) {
            if (this.tasks[index].done === false) {
                this.tasks[index].done = true;
                this.doneTasks.push(this.tasks[index]);
                console.log(this.doneTasks);
                this.tasks.splice(index, 1);
            } else if (this.tasks[index].done === true) {
                this.tasks[index].done = false;
            }
        },
    },
});