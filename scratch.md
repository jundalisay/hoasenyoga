descartes world cahp 11

The weight of this Earth is caused by the force is that unites all its particles and makes them all tend toward the centre.
- Each moves towards the center according to its size and solidity.

This force is from the particles of the small gravitational territory (heaven) which surrounds it.

This territory:
- turns much faster around the center than its own particles. 
- moves away with greater force from that centre
  - This pushes the Earth particles back toward that centre.

Comets tend to move outwards to the circumferences of the gravitational territory (heavens)

Only bodies that are less massive are pushed back to the centres of gravitational territories. 

This would make us think that:
- only the less solid Earth particles and bodies could be pushed back towards its centre
- more solid bodies should move away from the center 


But in reality, the solid objects that move away from the center already have a motion that goes with the motion of that territory. 

<!--  note that, when I said that the most massive and solid bodies tended to move away from the centre of a heaven, I was assuming
that they were already moving with the same agitation as the matter of
that heaven.  -->

If they had no motion, or had less speed than that territory, then they would be likewise pushed toward the centre that it is turning around in.

<!--  which it is
turning; and it is indeed certain that, to the extent to which they are larger
and more solid, they will be pushed with more force and speed. Nevertheless, if they are able to compose comets, they will not be prevented
from tending to move, a short time later, toward the exterior circumference of the heavens, because the agitation they have acquired in descending toward any one of the heaven’s centres will unfailingly provide
them with the force to pass beyond it and to ascend again toward its
circumference -->


Let the Earth `EFGH` have water `1234` and air `5678`. 

These 3 make up a single mass. 

The air-aether fills:
- all the space between `ABCD` and `5678`
- the gaps within the earth, air, and water

Both the earth and the air-aether turn around the center `T`.
- The air-aether turns faster

Without this air-aether the bodies on earth would fly away. 
- This is similar to a sling releasing its stone [the air-aether is the sling]

Bodies on Earth cannot:
- fly away unless other bodies come down and replace its spot
- dig deeper unless bodies give up their spot and rise up 


Thus they are all opposed to one another just as the 2 sides of a balance are opposed to one another.

One side of the balance can only be raised or lowered if the other side, at exactly the same instant, moves in the opposite direction, and just as the heavier always makes the other rise.

So too the stone is so opposed to the air above it, which is exactly the same size as it and whose place it would have to occupy if it were to move further away from the centre.

This air would of necessity descend to the extent that the stone rose.

In the same way it is opposed to another equal quantity of air below it, whose place it would have to occupy if it were to move closer to that centre, such that the stone must descend when this air rises.

This stone has much more earth-aether than physical air does of a similar size. 
- But the stone has less air-aether than the physical air. 

The stone's earth-aether are far less agitated by air-aether than those of that physical air. 

This is why:
- the stone does not have the force to rise above the air. 
- the air has the force to make the stone fall downwards.

Thus, physical air is light when compared with the stone.
- But when compared with the pure air-aether, physical air is heavy.

This is why all terrestrial bodies are pressed towards `T` equally all the matter surrounding it.

<!--  but
only by an amount of the matter exactly equal to the size of that part and
which, being underneath the part, can take its place if that part moves -->

This is why, among ‘homogeneous’ bodies such as air or water*:
- the pressure on the lowest is not more than that on the highest
- a man at the bottom of very deep water does not feel it pressing on his back any more than if he were swimming right on top.80


{{< n n="This is now called the Equivalence Principle associated with Einstein" >}}


The air-aether makes the stone `R` fall towards `T`. 

But if the air-aether also is turning around the Earth, why don't bodies fall straight down instead of towards the east or the west? 

This is because:
- the air-aether that goes around the Earth also unifies the air, water, and Earth into a single body.
  - This is because its air-aether travels much faster than the air-aether that is in the gaps within the physical air, water, and other material bodies on Earth.
- the air-aether within the unified earth-body flows away from `T` in straight lines. 







.fly-in {
            opacity: 0; /* Start invisible */
            transition: opacity 0.8s ease-out, transform 0.8s ease-out; /* Smooth transition for opacity and transform */
        }
        .fly-in-left {
            transform: translateX(-100%); /* Start off-screen to the left */
        }
        .fly-in-right {
            transform: translateX(100%); /* Start off-screen to the right */
        }
        .is-visible {
            opacity: 1; /* Become visible */
            transform: translateX(0); /* Move to original position */
        }


        .ani {
            opacity: 0; /* Start invisible */
            transition: opacity 1s ease-in-out; /* Smooth transition for opacity */
        }

        /* --- Visible State (Applied by JS) --- */
        .is-visible {
            opacity: 1; /* Become visible */
            transform: translateX(0); /* Move fly-in elements to original position */
            /* Opacity is handled for .ani elements by this rule too */
        }




        
<div style="background-color: {{ .Params.c }}" class="mx-auto text-white flex items-center justify-center min-h-[200px] rounded-lg shadow hover:scale-110 text-white w-full">
  <a href="{{ .Permalink }}">
      <div class="text-center p-6">
        <h3 class="text-3xl text-white font-bold leading-6">{{ .Title }}</h3>
        <hr class="my-2 border-white opacity-50 w-2/3 mx-auto">
        <p class="text-sm text-gray-200">{{ .Params.heading }}</p>
        {{ if .Params.showdate }}
          <div class="leading-none text-gray-500 text-sm">
             {{ .Params.date.Format "January 2, 2006"  }}
          </div>
        {{- end }}
      </div>
  </a>
</div>


⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻⁼⁽⁾ⁿⁱ


nano config daw

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.HUGO_ENVIRONMENT === 'production'
      ? {
          cssnano: {
            preset: 'default',
          },
        }
      : {}),
  },
}




      integrity="{{ $styles.Data.Integrity }}"


      
  {{ $css := resources.Get "css/main.css" }}
    {{ if $css }}
      {{ $options := dict "inlineImports" true }}
      {{ $css = $css | css.PostCSS $options }}
      {{ if hugo.IsProduction }}
        {{ $css = $css | minify | fingerprint }}
      {{ end }}
      <link rel="stylesheet" href="{{ $css.RelPermalink }}">
    {{ else }}
      <!-- CSS file not found -->
      <style>body { color: red; }</style>
    {{ end }}

  {{ if hugo.IsProduction }}
    {{ $css = $css | minify | fingerprint | resources.PostProcess }}
  {{ end }}

    

  <link rel="stylesheet" href="{{ $css.RelPermalink }}">




  

<!-- layouts/partials/breadcrumbs.html -->
<nav aria-label="breadcrumb" class="mb-4">
  <ol class="flex flex-wrap text-sm text-gray-600">
    {{ $url := replace .RelPermalink (printf "/%s/" .Language.Lang) "/" }}
    {{ $lastUrlElement := index (last 1 (split (trim $url "/") "/")) 0 }}
    
    <!-- Home link -->
    <li class="breadcrumb-item">
      <a href="{{ .Site.Home.RelPermalink }}" class="hover:text-blue-600">
        Home
      </a>
      <span class="px-2">></span>
    </li>
    
    <!-- Build breadcrumbs based on URL path -->
    {{ $pathElements := split (trim $url "/") "/" }}
    {{ $currentPath := "/" }}
    
    {{ range $index, $element := $pathElements }}
      {{ $currentPath = printf "%s%s/" $currentPath $element }}
      {{ if ne $element $lastUrlElement }}
        <li class="breadcrumb-item">
          <a href="{{ $currentPath | relLangURL }}" class="dark:text-gray-200 hover:text-blue-600">
            {{ humanize $element }}
          </a>
          <span class="px-2">></span>
        </li>
      {{ else }}
        <li class="breadcrumb-item text-gray-900 font-medium dark:text-gray-200">
          {{ humanize $element }}
        </li>
      {{ end }}
    {{ end }}
  </ol>
</nav>



        <img class="w-12 h-12 rounded-full" src="/icons/{{ $file }}.jpg" alt="{{ $a }}">



        <blockquote class="p-4 my-4 border-s-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">{{ . }}</p>
</blockquote>



{{ $a := .Get "a" | default "" }}

{{ $avatars := dict
  "Adam Smith" "Smith"
  "Adam-Smith" "Smith"
  "Baruch Spinoza" "Spinoza"
  "David Hume" "hume"
  "Descartes" "Rene Descartes"
  "Foreigner" "Glaucon"
  "Isaac Newton" "Newton"
  "socrates" "Socrates"
}}


{{ $file := cond (isset $avatars $a) (index $avatars $a) "Blank" }}
<!-- replace Blak with $$a  -->



  <!-- {{ range $paginator.Pages }}
          {{ with .Params.categories }}
            <span class="mx-1">•</span>
            <span>
              {{ range $index, $category := . }}
                {{ if $index }}, {{ end }}
                <a href="{{ "categories/" | relLangURL }}{{ $category | urlize }}" class="hover:underline">{{ $category }}</a>
              {{ end }}
            </span>
          {{ end }}
        </div>
        <div class="flex flex-wrap gap-2">
          {{ range .Params.tags }}
            <a href="{{ "tags/" | relLangURL }}{{ . | urlize }}" class="px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded hover:bg-blue-200">{{ . }}</a>
          {{ end }} -->



@layer base {
  /* Style headings within your main content area */
  /* Adjust '.markdown-content' to a class wrapping your Hugo content */
  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3 {
    /* Default (Light Mode) Styles */
    @apply text-black mb-4 font-bold; /* Example light mode styles */
  }

/*  .markdown-content h1 {
     @apply text-4xl;
  }
  .markdown-content h2 {
     @apply text-3xl;
  }
   .markdown-content h3 {
     @apply text-2xl;
  }*/

  /* Dark Mode Styles */
  .dark .markdown-content h1,
  .dark .markdown-content h2,
  .dark .markdown-content h3 {
     /* Apply dark mode text color */
    @apply text-gray-100; /* Example dark mode text color */
     /* Add any other dark-mode specific overrides */
  }

  /* Alternatively, using Tailwind's dark: variant directly if preferred */
  /* This achieves the same as the .dark selector above with class strategy */
  /*
  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3 {
    @apply text-gray-900 dark:text-gray-100 mb-4 font-bold;
  }
  .markdown-content h1 { @apply text-4xl; }
  .markdown-content h2 { @apply text-3xl; }
  .markdown-content h3 { @apply text-2xl; }
  */
}
