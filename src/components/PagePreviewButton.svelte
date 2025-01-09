<script lang="ts">
    interface Props {
        title: string,
        description: string,
        endpoint: string,
        assetPath: string,
        alt: string,
    } 

    let { title, description, endpoint, assetPath, alt }: Props = $props();
</script>

<a href={endpoint}>
    <div class="outerdiv flow-text break-words w-300">
        <div class="center-div">
            <img src={assetPath} {alt} class="rounded-3xl" width="300">
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
</a>

<style lang="postcss">
    @tailwind components;

    @layer components {
        h2 {
            @apply text-lavender text-lg;
        }

        p {
            @apply text-text text-wrap;
        }

        .outerdiv {
            @apply rounded-3xl bg-mantle pb-2 border-4 border-transparent text-wrap;
            width: 500;
        }

        .outerdiv:hover {
            @apply rounded-[1.7515rem] border-blue;
        }
    }
</style>