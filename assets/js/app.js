const app = new Vue({
    el: "#app",
    data: {
        newTask: "",
        index: 0,
        doneTasks: [],

        tasks: [{
                text: "fare gli esercizi",
                done: false,
            },
            {
                text: "cucinare",
                done: false,
            },
            {
                text: "pulire casa",
                done: false,
            }

        ]
    },
    methods: {

        removeTask(index) {
            this.tasks.splice(index, 1);
        },

        addTask() {
            if (this.newTask.length > 0) {
                task = { text: this.newTask, done: false }
                this.tasks.unshift(task),
                    this.newTask = ""
            }
        },

        done(index) {
            if (this.tasks[index].done === false) {
                this.tasks[index].done = true;
                this.doneTasks.push(this.tasks[index]);
                console.log(this.doneTasks);
                this.tasks.splice(index, 1);
            } else if (this.tasks[index].done === true) {
                this.tasks[index].done = false;
            }
        },
    }
});