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
import { FoodDrinkBlockComponent } from '@/blocks/FoodDrinkBlock/Component'
import { OffersBlockComponent } from '@/blocks/OffersBlock/Component'
import { GalleryBlockComponent } from '@/blocks/GalleryBlock/Component'
import { LocationBlockComponent } from '@/blocks/LocationBlock/Component'
import { OurServicesBlockComponent } from '@/blocks/OurServicesBlock/Component'
import { ContentImageBlockComponent } from '@/blocks/ContentImageBlock/Component'
import { AccommodationsType2Component } from '@/blocks/AccommodationsType2Block/Component'
import { PhotoGalleryBlockComponent } from '@/blocks/PhotoGalleryBlock/Component'
import { TheSpaceBlockComponent } from '@/blocks/TheSpaceBlock/Component'
import { SpecialOffersBlockComponent } from '@/blocks/SpecialOffersBlock/Component'
import { VisionBlockComponent } from '@/blocks/VisionBlock/Component'
import { DesignedBlockComponent } from '@/blocks/DesignedBlock/Component'
import { CollaborationBlockComponent } from '@/blocks/CollaborationBlock/Component'
import { DescriptionType2BlockComponent } from '@/blocks/DescriptionType2Block/Component'

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
  'accommodations-type2': AccommodationsType2Component,
  'food-drink': FoodDrinkBlockComponent,
  offers: OffersBlockComponent,
  gallery: GalleryBlockComponent,
  'photo-gallery': PhotoGalleryBlockComponent,
  location: LocationBlockComponent,
  'our-services': OurServicesBlockComponent,
  'content-image': ContentImageBlockComponent,
  'the-space': TheSpaceBlockComponent,
  'special-offers': SpecialOffersBlockComponent,
  vision: VisionBlockComponent,
  designed: DesignedBlockComponent,
  collaboration: CollaborationBlockComponent,
  'description-type2': DescriptionType2BlockComponent,
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
