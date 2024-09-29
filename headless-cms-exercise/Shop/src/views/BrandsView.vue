<template>
    <h1 class="text-xl mb-8">Brands</h1>
    <DataView :value="manufacturers">
        <template #list="slotProps">
            <div class="flex flex-col">
                <div v-for="(item, index) in slotProps.items" :key="index">
                    <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                        :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                        <div class="md:w-40 relative">
                            <img class="block xl:block mx-auto rounded w-full bg-gray-500 p-2"
                                :src="`http://localhost:1337${item.logo.url}`" :alt="item.name" />
                        </div>
                        <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                            <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                <div>
                                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">Based in {{
                                        item.headquarters }}, founded in {{ item.foundingYear }} by {{ item.founder }}</span>
                                    <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                                    <div class="mt-2">{{ item.description }}</div>
                                </div>
                            </div>
                            <div class="flex flex-col md:items-end gap-8">
                                <div class="flex flex-row-reverse md:flex-row gap-2">
                                    <Button label="View Shoes" as="router-link" :to="`/shoes/${item.name}`" class="flex-auto md:flex-initial whitespace-nowrap">
                                        <template #icon>
                                            <img src="/icons/sneaker.svg" alt="Sneaker icon" class="w-8 h-8 min-w-8" />
                                        </template></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </DataView>
</template>
<script setup lang="ts">
import { CmsApiClient } from '@/services/cms-api-client';
import { ref } from 'vue';
import DataView from 'primevue/dataview';
import Button from 'primevue/button';

const manufacturers = ref([]);
(async () => {
    var apiClient = new CmsApiClient();
    var result = await apiClient.GetBrands();
    manufacturers.value = result.data;
})();
</script>