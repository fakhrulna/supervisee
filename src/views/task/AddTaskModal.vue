<template>
    <div v-if="isVisible" class="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
        <div class="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 class="text-xl font-bold mb-4 text-gray-600">Add New Task</h2>

            <div>
                <label class="block mb-2 text-gray-600" for="taskTitle">Task Title</label>
                <input v-model="taskTitle" type="text" id="taskTitle" class="w-full p-2 border border-gray-300 rounded-md text-gray-600"
                    placeholder="Enter task title" />
            </div>

            <div class="mt-4">
                <label class="block mb-2 text-gray-600" for="taskDescription">Task Description</label>
                <textarea v-model="taskDescription" id="taskDescription"
                    class="w-full p-2 border border-gray-300 rounded-md text-gray-600" placeholder="Enter task description"></textarea>
            </div>

            <div>
                <label class="block mb-2 text-gray-600" for="taskTitle">Point</label>
                <input v-model="taskPoint" type="number" id="taskTitle" class="w-full p-2 border border-gray-300 rounded-md text-gray-600"
                    placeholder="Enter task point" />
            </div>

            <div class="mt-6 flex justify-end">
                <button @click="closeModal" class="px-4 py-2 bg-gray-500 text-white rounded-md mr-2">Cancel</button>
                <button @click="addTask" class="px-4 py-2 bg-blue-500 text-white rounded-md">Add Task</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isVisible: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            taskTitle: '',
            taskDescription: '',
            taskPoint: '',
        };
    },
    methods: {
        closeModal() {
            this.$emit('update:isVisible', false);
        },
        addTask() {
            if (this.taskTitle && this.taskDescription && this.taskPoint) {
                // Handle task adding logic here
                console.log('Task added:', this.taskTitle, this.taskDescription, this.taskPoint);
                this.closeModal(); // Close modal after adding task
            }
        },
    },
};
</script>
