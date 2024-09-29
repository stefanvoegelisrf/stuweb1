<template>
    <div v-for="shoeVariation in shoeVariations" :key="shoeVariation.id">
        <h2>{{ shoeVariation.color.name }}</h2>
        <Galleria :value="shoeVariation.productImages" container-style="max-width:10rem" :circular="true" :show-item-navigators="true" :show-thumbnails="false">
            <template #item="slotProps">
                <img :src="`http://localhost:1337/${slotProps.item.url}`" :alt="slotProps.item.alternativeText" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="`http://localhost:1337/${slotProps.item.url}`" :alt="slotProps.item.alternativeText" />
            </template>
        </Galleria>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Galleria from 'primevue/galleria';
import { CmsApiClient } from '@/services/cms-api-client';
const props = defineProps<{
    shoeId: number
}>();
const shoeVariations = ref([]);
(async () => {
    console.log(props.shoeId)
    var apiClient = new CmsApiClient();
    var result = await apiClient.GetShoeVariations(props.shoeId);
    shoeVariations.value = result.data;
    console.log(shoeVariations.value)
})();
</script>