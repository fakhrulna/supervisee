<!-- src/components/Content.vue -->
<template>
	<BaseLayout>
		<main class="py-8 px-4">
			<div class="flex justify-between pb-2">
				<button class="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md" @click="openModal">
					<PlusIcon class="h-6 w-6 text-white mr-2" />
					Add Task
				</button>
			</div>
			<AddTaskModal :isVisible="isModalVisible" @update:isVisible="isModalVisible = $event" />
			<div class="px-2 bg-gray-100 drop-shadow-md">
				<div class="w-full">
					<div class="grid grid-cols-12 customTable">
						<div class="col-span-6 taskColumn ml-[11%]">Title</div>
						<div class="col-span-2 taskColumn">Assign To</div>
						<div class="col-span-2 taskColumn">Priority</div>
						<div class="col-span-1 taskColumn">Point</div>
						<div class="col-span-1 taskColumn"></div>
					</div>
					<div class="grid grid-cols-12 customTable">
						<div class="col-span-6 taskRow flex">
							<input type="checkbox" class="h-6 w-4 text-gray-300 mr-[3%]" />
							<UserIcon class="taskIcon mr-[2%]" />
							Test 1
						</div>
						<div class="col-span-2 taskRow">Test2</div>
						<div class="col-span-2 taskRow">Test2</div>
						<div class="col-span-1 taskRow">Test2</div>
						<div class="col-span-1 taskRow py-2 px-6 flex flex-row">
							<div class="opacity-100 hover:opacity-100 flex">
								<ArrowTopRightOnSquareIcon class="taskIcon mr-2" />
								<TrashIcon class="taskIcon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	</BaseLayout>
</template>
	
<script>
	import { UserIcon, TrashIcon, ArrowTopRightOnSquareIcon, PlusIcon } from '@heroicons/vue/24/outline';
	import AddTaskModal from './AddTaskModal.vue';
	export default {
		components: {
			UserIcon,
			TrashIcon,
			ArrowTopRightOnSquareIcon,
			PlusIcon,
			AddTaskModal
		},
		data() {
			return {
				isModalVisible: false,
			};
		},
		methods: {
			openModal() {
				this.isModalVisible = true;
			},
		},
	};
</script>
	