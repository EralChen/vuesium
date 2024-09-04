import { ThreeRenderer } from '@vuesri/three'
import type { ArcLayer } from './core'
import { ReturnVoid } from '@vunk/core'
import { __VathEntityLayerEvents } from '@vuesri/three/components/entity-layer-events'


export interface ArcEntityProperties {
  layer: ArcLayer
  graphic: __esri.Graphic
}

export interface LoadEvent {
  renderer: ThreeRenderer
  view: __esri.SceneView
  layer: ArcLayer
}

export type OnLoad = (e: LoadEvent) => ReturnVoid


export interface ClikEvent extends __VathEntityLayerEvents.ClickEvent {
  layer: ArcLayer
}

export type OnClick = (e: ClikEvent) => ReturnVoid

export interface PointerMoveEvent extends __VathEntityLayerEvents.PointerMoveEvent {
  layer: ArcLayer
}

export type OnPointerMove = (e: PointerMoveEvent) => ReturnVoid


export {}
