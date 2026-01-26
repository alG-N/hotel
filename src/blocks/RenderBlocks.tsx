import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
// Hotel blocks
import { HeroBlockComponent } from '@/blocks/HeroBlock/Component'
import { DescriptionBlockComponent } from '@/blocks/DescriptionBlock/Component'
import { RoomsGridBlockComponent } from '@/blocks/RoomsGridBlock/Component'
import { ServicesBlockComponent } from '@/blocks/ServicesBlock/Component'
import { OffersBlockComponent } from '@/blocks/OffersBlock/Component'
import { GalleryBlockComponent } from '@/blocks/GalleryBlock/Component'
import { LocationBlockComponent } from '@/blocks/LocationBlock/Component'
import { MomentBlockComponent } from '@/blocks/MomentBlock/Component'
import { OurServicesBlockComponent } from '@/blocks/OurServicesBlock/Component'
import { LocalLifeBlockComponent } from '@/blocks/LocalLifeBlock/Component'
import { ContentImageBlockComponent } from '@/blocks/ContentImageBlock/Component'

const blockComponents = {
  // Default blocks
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  // Hotel blocks
  hero: HeroBlockComponent,
  description: DescriptionBlockComponent,
  'rooms-grid': RoomsGridBlockComponent,
  services: ServicesBlockComponent,
  offers: OffersBlockComponent,
  gallery: GalleryBlockComponent,
  location: LocationBlockComponent,
  moment: MomentBlockComponent,
  'our-services': OurServicesBlockComponent,
  'local-life': LocalLifeBlockComponent,
  'content-image': ContentImageBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                // @ts-expect-error there may be some mismatch between the expected types here
                <Block key={index} {...block} disableInnerContainer />
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
