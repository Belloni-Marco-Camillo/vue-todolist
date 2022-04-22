const app = new Vue({
    el: '#app',
    data: {
        newTask: '',
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
            }

            //this.newTask = ''
        },
        removeTask(index) {
            console.log("hai cliccato" + index)
            this.tasks.splice(index, 1)
        },
        changeDone(index) {
            if (this.tasks[index].done != true) {
                this.tasks[index].done = true;
                console.log("hai premuto qua");
            } else {
                this.tasks[index].done = false
            }
        }
    },
});