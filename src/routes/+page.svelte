<script>
    import Card from '$lib/components/Card.svelte'
    import { Mail } from 'lucide-svelte';
    import { cards } from '$lib/data/cards';
</script>

<div class="flex flex-col gap-16 items-end">
    <div id="presentation" class="flex flex-row w-2/5 justify-between pb-16 border-b border-white">
        <div class="relative overflow-hidden">
            <img class="picture float-right w-2/5 ml-8 mb-4 border border-white rounded-xl" src="images/me.jpg" alt="">
            
            <h1 class="text-2xl mb-8">
                Hi, just another web developer here!
            </h1>

            <p class="text-justify font-thin">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </div>

    <div id="projects" class="flex flex-col w-2/5 justify-between pb-8 border-b border-white">
        <h1 class="text-2xl mb-8 text-right">
            An overview of what I've created so far...
        </h1>

        {#each cards as card}
            <Card classes="mb-8 hover:-translate-x-8 transition-all duration-200" date={card.date} title={card.title} technologies={card.technologies}/>
        {/each}
    </div>

    <div id="contact" class="flex flex-col w-2/5 justify-between">
        <h1 class="text-2xl mb-8 text-center">
            Let's build something together!
        </h1>

        <button class="flex flex-row gap-4 border border-white rounded-lg m-auto px-4 py-2 transition-all duration-200 hover:bg-white/10 active:bg-white/15">Send me an email
            <Mail size={24}/>
        </button>
    </div>
</div>

<style>
    .picture {
        filter: saturate(1.0) contrast(0.95) brightness(1.5);
    }
</style>