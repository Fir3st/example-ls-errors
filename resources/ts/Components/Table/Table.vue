<script setup lang="ts">
import { PropType, ref, useSlots } from 'vue';
import {
    ColumnDef,
    getCoreRowModel,
    getExpandedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getSortedRowModel,
    useVueTable,
    FlexRender,
    ColumnFiltersState,
} from '@tanstack/vue-table';
import {DataObject} from "@/Data/Models/DataObject";

const props = defineProps({
    name: {
        type: String as PropType<string>,
        required: true,
        default: () => 'table',
    },
    title: {
        type: String as PropType<string>,
        required: false,
    },
    columns: {
        type: Array as PropType<ColumnDef<DataObject>[]>,
        required: true,
        default: () => [],
    },
    data: {
        type: [Array, Object] as PropType<DataObject[]>,
        required: true,
        default: () => [],
    },
    enablePagination: {
        type: Boolean as PropType<boolean>,
        required: false,
        default: () => false,
    },
    groupActions: {
        type: Object as PropType<DataObject>,
        required: false,
    },
    itemDetail: {
        type: Object as PropType<DataObject>,
        required: false,
    },
    portalContainer: {
        type: String as PropType<string>,
        required: false,
    },
    defaultFilters: {
        type: Array as PropType<ColumnFiltersState>,
        required: false,
        default: () => [],
    },
    defaultSorting: {
        type: Array as PropType<{ id: string; desc: boolean }[]>,
        required: false,
        default: () => [],
    },
    rowClasses: {
        type: Function as PropType<(row: DataObject) => string>,
        required: false,
    },
});

const slots = useSlots();

const hasSlot = (name: string) => {
    return !!slots[name];
};

const showModal = ref(false);

const table = useVueTable({
    get columns() {
        return [];
    },
    get data() {
        return [];
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    autoResetPageIndex: false,
});
</script>

<template>
    <div>
        <div class="w-full bg-white py-2 rounded-md border dark:bg-zinc-800 dark:border-zinc-500">
            <table class="table min-w-full max-w-fit tabular-nums">
                <tbody>
                <template v-if="table.getRowModel().rows.length">
                    <template v-for="(row, index) in table.getRowModel().rows" :key="row.id">
                        <tr
                            class="border-b dark:border-zinc-500"
                            :class="[
                                    index % 2 === 0 ? undefined : 'bg-gray-50 dark:bg-zinc-700/80',
                                    rowClasses ? rowClasses(row) : undefined,
                                    row.getIsExpanded() ? 'border-b-0' : '',
                                    row.getIsExpanded() && !(index % 2 === 0) ? 'bg-gray-50  dark:bg-zinc-700/80' : '',
                                ]"
                        >
                            FOO
                        </tr>
                        <tr
                            v-show="itemDetail && row.getIsExpanded()"
                            class="border-b dark:border-zinc-500"
                            :class="{
                                    'bg-gray-50 dark:bg-zinc-700/80': !(index % 2 === 0),
                                }"
                        >
                            <td colspan="100" :class="['whitespace-nowrap px-2 pb-3 text-sm']">
                                <div
                                    v-if="itemDetail?.displayResponsiveHidden ?? false"
                                    class="flex flex-col gap-y-1 max-w-xs m-auto sm:max-w-none sm:grid sm:grid-cols-2 sm:gap-x-20"
                                >
                                    <div
                                        v-for="cell in row.getVisibleCells().filter((item) => true)"
                                        class="flex flex-row whitespace-pre-wrap gap-1"
                                        :class="
                                            cell.column.columnDef.meta.responsiveFullWidth ? 'col-start-1 col-end-3' : 'justify-between'
                                        "
                                    >
                                        <strong><FlexRender :render="cell.column.columnDef.header" />: </strong>
                                        <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                                    </div>
                                    <template v-if="typeof itemDetail?.contentCallback === 'function'">
                                        {{ itemDetail.contentCallback(row) }}
                                    </template>
                                </div>
                            </td>
                        </tr>
                    </template>
                </template>
                <tr v-else>
                    <td
                        :class="['px-3 py-2 md:py-3 text-sm']"
                        :colspan="columns ? Object.keys(columns).length : 0"
                    >
                        BAR
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
