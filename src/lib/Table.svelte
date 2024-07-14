<script lang="ts">
  import { Toggle } from '$lib/components/ui/toggle/index';
  import { Check, Pencil } from 'lucide-svelte';

  export let names;
  let id: number;
  let changeId = (i: number) => {
    id = i;
  };
</script>

<div
  class="mx-auto mt-10 w-full max-w-xl rounded-lg bg-white/30 p-12 pt-10 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg dark:bg-white/10"
>
  <div class="mb-4 flex items-center justify-between">
    <div class="space-y-1">
      <h2 class="text-xl font-semibold">List of Users</h2>
      <p class="text-sm text-gray-500">
        Fetched {names.length} users
      </p>
    </div>
  </div>
  <div class="divide-y divide-gray-900/5">
    {#each names as user (user.id)}
      <div class="flex items-center justify-between py-3">
        <div class="flex items-center space-x-4">
          <div class="flex">
            <!-- <p class="pt-1 font-medium leading-none">{user.name}</p>
            <p class="pl-5 pt-0 font-medium text-gray-500">{user.email}</p> -->
            <form method="POST" action="/profiles?/updateUser">
              <input type="hidden" name="id" id="id" value={user.id} />
              <input
                disabled={user.id !== id}
                class="max-w-[25%]"
                type="text"
                name="name"
                value={user.name}
              />
              <input
                disabled={user.id !== id}
                class="max-w-[55%]"
                name="email"
                type="text"
                value={user.email}
              />
              <button class:hidden={user.id !== id} type="submit">
                <Check class="mx-2 size-4" />
              </button>
            </form>
          </div>
          <Toggle
            class={user.id == id ? 'text-foreground' : 'text-muted-foreground'}
            on:click={() => changeId(user.id)}
            aria-label="toggle edit"
          >
            <Pencil class="h-4 w-4" />
          </Toggle>
        </div>
        <form method="POST" action="/profiles?/deleteUser">
          <input type="hidden" name="id" id="id" value={user.id} />
          <button type="submit">
            <img class="float-right w-4" src="./trash-can.svg" alt="delete" />
          </button>
        </form>
      </div>
    {/each}
  </div>
</div>
