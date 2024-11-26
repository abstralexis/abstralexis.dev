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

<div>
    <a href={endpoint}><img src={assetPath} {alt} class="rounded-t-3xl"></a>
    <h2>{title}</h2>
    <p>{description}</p>
</div>

<style lang="postcss">
    @tailwind components;

    @layer components {
        h2 {
            @apply text-lavender text-lg;
        }

        p {
            @apply text-text;
        }

        div {
            @apply rounded-3xl bg-mantle pb-2 border-4 border-transparent;
        }

        div:hover {
            @apply rounded-[1.7515rem] border-blue;
        }
    }
</style>