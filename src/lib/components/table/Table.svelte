<script>
  export let tableData;
  export let customClass = "";

  const styleClass = `relative overflow-x-auto shadow-md sm:rounded-lg ${customClass}`;
</script>

<div class={styleClass}>
  <table class="w-full text-sm text-left text-base-500">
    <thead class="text-xs text-base-700 uppercase bg-base-50">
      <tr>
        {#each Object.keys(tableData[0]) as columnHeading}
          <th scope="col" class="px-6 py-3">{columnHeading}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each Object.values(tableData) as row}
        <tr class="bg-base-100 hover:bg-base-50">
          {#each Object.values(row) as cell}
            <td class="px-6 py-4">{cell}</td>
          {/each}
        </tr>
      {/each}
    </tbody>
  </table>
</div>
