<!-- src/components/Content.vue -->
<template>
    <BaseLayout>
        <main class="py-8 px-4">
            <div class="px-2 bg-gray-100 drop-shadow-md">
                <div class="w-full">
                    <div class="flex text-gray-800 border-b-2 border-gray-200">
                        <div class="flex-1 text-left p-2 font-bold">Test1</div>
                        <div class="flex-1 text-left p-2 font-bold">Test2</div>
                        <div class="flex-1 text-left p-2 font-bold">Test3</div>
                    </div>
                    <div class="flex text-gray-800 border-b border-gray-200">
                        <div class="flex-1 text-left p-2 flex">
                            <UserIcon class="h-6 w-6 text-gray-300 mr-2" />
                            Test1
                        </div>
                        <div class="flex-1 text-left p-2">Test2</div>
                        <div class="flex-1 text-left p-2 flex flex-row">
                            <div class="flex-1">Test3</div>
                            <div class="text-left opacity-100 hover:opacity-100 flex">
                                <ArrowTopRightOnSquareIcon class="h-6 w-6 text-gray-300 mr-2" />
                                <TrashIcon class="h-6 w-6 text-gray-300" />
                            </div>
                        </div>
                    </div>
                    <div class="flex text-gray-800">
                        <div class="flex-1 text-left p-2 flex">
                            <UserIcon class="h-6 w-6 text-gray-300 mr-2" />
                            Test1
                        </div>
                        <div class="flex-1 text-left p-2">Test2</div>
                        <div class="flex-1 text-left p-2 flex flex-row">
                            <div class="flex-1">Test3</div>
                            <div class="text-left opacity-100 hover:opacity-100 flex">
                                <ArrowTopRightOnSquareIcon class="h-6 w-6 text-gray-300 mr-2" />
                                <TrashIcon class="h-6 w-6 text-gray-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </BaseLayout>
</template>
  
<script>
    import { UserIcon ,TrashIcon, ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline';
    export default {
        components: {
            UserIcon,
            TrashIcon,
            ArrowTopRightOnSquareIcon
        }
    };
</script>
  