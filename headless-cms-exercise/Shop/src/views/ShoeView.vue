<template>
    <h1>Shoes</h1>
    <DataView :value="shoes">
        <template #list="slotProps">
            <div class="flex flex-col">
                <div v-for="(item, index) in slotProps.items" :key="index">
                    <div class="flex flex-col sm:flex-row sm:items-center p-6 gap-4"
                        :class="{ 'border-t border-surface-200 dark:border-surface-700': index !== 0 }">
                        <div class="flex flex-col md:flex-row justify-between md:items-center flex-1 gap-6">
                            <div class="flex flex-row md:flex-col justify-between items-start gap-2">
                                <div>
                                    <span class="font-medium text-surface-500 dark:text-surface-400 text-sm">{{
                                        item.brand.name }} <span v-if="item.brandCollaborator">x {{
                                            item.brandCollaborator.name }}</span></span>
                                    <div class="text-lg font-medium mt-2">{{ item.name }}</div>
                                </div>
                                <div class="flex flex-row">
                                    <ShoeVariationPreview :shoe-id="item.id"></ShoeVariationPreview>
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
import { ref, defineProps, onMounted } from 'vue';
import DataView from 'primevue/dataview';
import ShoeVariationPreview from './ShoeVariationPreview.vue';

const props = defineProps<{
    brand?: string
}>();
const shoes = ref([]);
onMounted(async () => {
    var apiClient = new CmsApiClient();
    const result = await apiClient.GetShoes(props.brand);
    shoes.value = result.data;
    console.log(shoes.value);
});
</script>