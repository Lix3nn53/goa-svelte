<script>
    export let tableData;
    export let customClass;

    const styleClass = `relative overflow-x-auto shadow rounded text-center mt-12 bg-base-50 px-4 py-8 self-center ${customClass}`;
</script>


<div class={styleClass}>
    <table class="w-full">
        <thead class="text-sm text-primary-600 uppercase pt-16">
            <tr>
                {#each Object.keys(tableData[0]) as columnHeading}
                    <th scope="col" class="p-4">{columnHeading}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
        {#each Object.values(tableData) as row}
            <tr class="border-b-8 border-base-50 bg-base-100 hover:bg-primary-200">
                {#each Object.values(row) as cell}
                    <td class="px-6 py-2 text-base-900 whitespace-nowrap">{cell}</td>
                {/each}
            </tr>
        {/each}
        </tbody>
    </table>
</div>
