<script lang="ts">
    interface Props {
        title: string,
        description: string,
        endpoint: string,
        assetPath: string,
        alt: string,
        bg: string, 
    } 

    let { title, description, endpoint, assetPath, alt, bg }: Props = $props();
</script>

<a href={endpoint}>
    <div class="outerdiv">
        <div class="w-full h-full">
            <!-- pray the image is square -->
            <img class="object-fill size-128 {bg}" src={assetPath} {alt} width="128" height="128">
        </div>
        <div class="right-0">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
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
            @apply bg-mantle border-2 border-lavender grid grid-cols-2 p-1;
            width: 512;
        }

        .outerdiv:hover {
            @apply border-blue;
        }
    }
</style>