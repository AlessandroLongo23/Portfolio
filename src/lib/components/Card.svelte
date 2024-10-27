<script>
    /** @type {{title?: string, date?: string, technologies?: any, classes?: string}} */
    let {
        title = '',
        date = '',
        technologies = [],
        classes = ''
    } = $props();
</script>

<a href="">
    <div class="card flex flex-col justify-between w-full h-64 border border-white rounded-lg p-8 {classes}">
        <div class="flex flex-row justify-between items-top">
            <p class="text-sm font-thin">{date}</p>
            <h1 class="text-2xl">{title}</h1>
        </div>
        
        <div class="flex flex-row justify-end items-center gap-4">
            {#each technologies as technology}
            <img class="technology size-8" src="images/technologies/{technology}.png" alt="">
            {/each}
        </div>
    </div>
</a>

<style>
    .card {
        background-color: var(--color-bg-dark-1);
        transition: all 0.3s ease;
        filter: grayscale(1.0);
    }

    .card:hover {
        filter: grayscale(0.0);
    }
</style>