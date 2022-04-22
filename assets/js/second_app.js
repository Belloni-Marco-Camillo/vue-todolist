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
    taskDone: [],
    trashTasks: [],
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
            this.tasks.splice(index, 1)
        },

        tambahkan: function() {
            keranjang.daftar.push(task);
        },

        changeDone(index) {
            if (this.tasks[index].done != true) {
                let newDone = this.tasks[index].text;
                taskDone.unshift({ text: newDone, done: true })
                console.log(taskDone);
                /* this.taskDone.unshift(newDone) */
                this.tasks[index].done = true;
                //console.log("hai premuto qua");
            } else {
                this.tasks[index].done = false;
            }
        }
    },
});