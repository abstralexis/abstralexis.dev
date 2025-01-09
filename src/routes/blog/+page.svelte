<script>
    import PagePreviewButton from "../../components/PagePreviewButton.svelte";
</script>

<svelte:head>
    <title>Alexis' Blog</title>
    <meta charset="UTF-8">
    <meta name="description" content="The Developer Portfolio/Blog Site for Alexis (abstralexis)">
    <meta name="author" content="Alexis Williams (abstralexis)"/>
</svelte:head>

<div class=" bg-mantle space-y-2 text-center">
    <h1 class="text-lavender landing-page-title">
        Alexis' Blog
    </h1>
    <h2 class="text-text">
        Welcome to my blog index page! Here you can find
        all of my blog posts (when I can be bothered to write,
        that is!)
    </h2>
    <br>
</div>

<br>

<div class="px-4 grid grid-cols-4 gap-3">
    <PagePreviewButton 
        title="My Switch To Nix" 
        description="I got tired of Windows. How did my switch to Nix go?" 
        endpoint="/blog/my-switch-to-nix" 
        assetPath="/ctp-nix.png"
        alt="The NixOS logo with the Catppuccin colour theme."    
    />
</div>