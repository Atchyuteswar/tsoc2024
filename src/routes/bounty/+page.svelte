<script>
  export let form;
</script>

<div class="flex items-center">
  <div
    class="mx-auto mt-10 w-full max-w-xl rounded-lg bg-white/30 p-5 pt-10 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg dark:bg-white/10"
  >
    <form method="POST" action="?/deploy">
      <div class="-mx-3 mb-2">
        <div class="mb-6 w-full px-3 md:mb-6">
          <label
            class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            for="bounty"
          >
            Bounty
          </label>
          <input
            class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="bounty"
            type="number"
            placeholder="Enter bounty amount"
            name="bounty"
          />
        </div>
        <div class="mb-6 w-full px-3 md:mb-0">
          <label
            class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            for="square"
          >
            Enter the square
          </label>
          <input
            class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="square"
            type="number"
            placeholder="Enter square number"
            name="square"
          />
        </div>
        <!-- <div class="mb-6 w-full px-3 md:mb-0">
            <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-state">
              Email
            </label>
          </div> -->
        <button
          type="submit"
          class="ml-2 mt-5 rounded bg-green-500 px-2 py-2 font-bold text-white hover:bg-blue-700"
        >
          Deploy bounty
        </button>
      </div>
    </form>
    {#if form?.deployed}
      <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
      <p class="pt-2 font-semibold text-green-400">
        Bounty was deployed successfully: <a
          class="font-semibold text-indigo-500 underline"
          target="_blank"
          href={`https://whatsonchain.com/tx/${form?.txid}`}>Trasaction Link</a
        >!
      </p>
    {:else if form?.deployed === false}
      <p>{form?.txid}</p>
    {/if}
  </div>

  <!-- UNLOCK -->

  <div
    class="mx-auto mt-10 w-full max-w-xl rounded-lg bg-white/30 p-5 pt-10 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg dark:bg-white/10"
  >
    <form method="POST" action="?/unlock">
      <div class="-mx-3 mb-2">
        <div class="mb-6 w-full px-3 md:mb-0">
          <label
            class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
            for="square"
          >
            Enter the root
          </label>
          <input
            class="block w-full appearance-none rounded border border-gray-200 bg-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
            id="root"
            type="number"
            placeholder="Enter root answer"
            name="root"
          />
        </div>
        <!-- <div class="mb-6 w-full px-3 md:mb-0">
            <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-state">
              Email
            </label>
          </div> -->
        <button
          type="submit"
          class="ml-2 mt-5 rounded bg-red-500 px-2 py-2 font-bold text-white hover:bg-blue-700"
        >
          Unlock bounty
        </button>
      </div>
    </form>
    {#if form?.unlock}
      <!-- this message is ephemeral; it exists because the page was rendered in
		   response to a form submission. it will vanish if the user reloads -->
      <p class="pt-2 font-semibold text-green-600">
        Bounty was unlocked successfully: <a
          class="font-semibold text-indigo-500 underline"
          target="_blank"
          href={`https://whatsonchain.com/tx/${form?.txid}`}>Trasaction Link</a
        >!
      </p>
    {:else if form?.unlock === false}
      <p class="pt-2 font-semibold text-red-600">
        {form?.txid}
      </p>
    {/if}
  </div>
</div>
