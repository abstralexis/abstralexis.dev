<script>
    import PagePreviewButton from "../components/PagePreviewButton.svelte";
</script>

<svelte:head>
    <title>Alexis' Dev Website</title>
    <meta charset="UTF-8">
    <meta name="description" content="The Developer Portfolio/Blog Site for Alexis (abstralexis)">
    <meta name="author" content="Alexis Williams (abstralexis)"/>
</svelte:head>
 
<div class="space-y-2 text-center">
    <h1 class="text-lavender landing-page-title">
        Welcome!
    </h1>
    <h2 class="text-text">
        My name is Alexis Williams, I'm a 19 year old Software Engineer
        from the UK. 
    </h2>
    <p class="text-subtext0"><i>she/her</i></p>
    
    
    <div class="text-center text-text">
        <pre class="text-rosewater">
   |\---/|---------------------------------------------------------------
   | ,_, |                                                               
    \_`_/-..----.                       Under Construction!              
 ___/ `   ' ,""+ \           <i>kitty from the ascii art archive</i>     
(__...'   __\    |`.___.';                                               
  (_,...'(_,.`__)/'.....+ -----------------------------------------------
        </pre>
    </div>

</div>

<br>

<div class="px-4 grid grid-cols-4 gap-3">
    <PagePreviewButton 
        title="Kitty" 
        description="woag..." 
        endpoint="/kitty" 
        assetPath="/coal.png"
        alt="A cute black cat in an upright pose."    
        bg=""
    />

    <PagePreviewButton
        title="My Blog"
        description="This is where I will post little things when I feel like it!"
        endpoint="/blog"
        assetPath="/ctp-nix.png"
        alt=""
        bg=""
    />
</div>

<div class="space-y-2 text-center">
    <h1 class="text-lavender heading">
        Projects
    </h1>
</div>

<div class="px-4 grid grid-cols-4 gap-3 py-4">
    <PagePreviewButton 
        title="Torc" 
        description="Work-in-progress amnesic IRC platform over the Tor Network." 
        endpoint="/torc" 
        assetPath="/torctemp.png"
        alt="A cute black cat in an upright pose."   
        bg="bg-lavender" 
    />

    <PagePreviewButton
        title="My Blog"
        description="This is where I will post little things when I feel like it!"
        endpoint="/blog"
        assetPath="/ctp-nix.png"
        alt=""
        bg=""
    />
</div>