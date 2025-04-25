<script lang="ts">
  import { InlineSvg } from '@usesvelte/inline-svg'
  import type { IconProps } from '@/components/types'

  type Decoration = {
    label: string
    icon?: IconProps
    background?: string
  }

  interface Props {
    rows: number
    label?: string
    spacing: number
    iconSize: number
    blockSize: number
    decorations?: Array<Decoration>
    emptyBlockProbability?: number
    greenBlockProbability?: number
  }

  const blockClasses = 'bg-graph-level-0/50 grid size-8 place-items-center rounded-lg'
  const colorClasses = [
    'bg-graph-level-1',
    'bg-graph-level-2',
    'bg-graph-level-3',
    'bg-graph-level-4',
  ]
  const {
    rows,
    label,
    spacing,
    iconSize,
    blockSize,
    decorations = [],
    emptyBlockProbability = 0.4,
    greenBlockProbability = 0.5
  }: Props = $props()

  let containerWidth = $state<number>()
  let mutableDecorations = [...decorations]
  let countArray = $state(Array.from({ length: getTotalColumns() }))

  function getTotalColumns () {
    return Math.floor(((containerWidth ?? 0) + spacing) / (blockSize + spacing))
  }

  function cryptoRandomInt(max: number) {
    if (max <= 0 || !Number.isInteger(max)) return 0

    const range = 2 ** 32
    const array = new Uint32Array(1)
    const threshold = range - (range % max)

    let value: number

    do {
      crypto.getRandomValues(array)
      value = array[0]
    } while (value >= threshold)

    return (value % max) + 1
  }

  function pickRandomDecoration() {
    if (mutableDecorations.length === 0) return null

    const index = cryptoRandomInt(mutableDecorations.length)
    return mutableDecorations[index]
  }

  function removeDecoration(decoration: Decoration | null) {
    if (mutableDecorations.length === 0 || decoration == null) return

    const index = mutableDecorations.findIndex(({ label }) => decoration.label === label)
    if (index !== -1) mutableDecorations.splice(index, 1)
  }

  $effect(() => {
    const itemsPerRow = getTotalColumns()
    const additionalRows = itemsPerRow <= rows * 2 ? 1 : 0
    const totalBlocks = itemsPerRow  * (rows + additionalRows)

    countArray = Array.from({ length: totalBlocks })
  })
</script>

{#if label}<span class="font-primary inline-block w-full pb-3 text-right font-semibold">{label}</span>{/if}
<article
  bind:offsetWidth={containerWidth}
  class="flex flex-wrap justify-end overflow-hidden"
  style:gap="{spacing}px"
>
  {#each countArray}
    {@const emptyBlock = Math.random() < emptyBlockProbability}
    {@const greenBlock = Math.random() < greenBlockProbability}

    {#if !emptyBlock}
      {@render blockSnippet(greenBlock)}
    {:else}
      {@render emptyBlockSnippet()}
    {/if}
  {/each}
</article>


<!-- Snippets -->


{#snippet emptyBlockSnippet()}
  <span class={blockClasses}></span>
{/snippet}

{#snippet blockSnippet(greenBlock: boolean)}
  {#if greenBlock}
    {@const bgIndex = cryptoRandomInt(colorClasses.length)}
    <span class={['grid size-8 place-items-center rounded-lg', colorClasses[bgIndex - 1]]}></span>
  {:else}
    {@const decoration = pickRandomDecoration()}
    {removeDecoration(decoration)}

    {#if decoration}
      <span title={decoration.label} class={blockClasses} style:background={decoration.background}>
        {#if decoration.icon}
          <InlineSvg
            width={iconSize}
            height={iconSize}
            name={decoration.icon.name}
            style="color: {decoration.icon.color}"
          />
        {/if}
      </span>
    {:else}
      {@render emptyBlockSnippet()}
    {/if}
  {/if}
{/snippet}
