import { Entity, EntityLayer, ThreeContext } from '@vuesri/three/shared'
import { MaterialManager } from '@vuesri/three/components/manager'
import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators'
import { CatmullRomCurve3, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshPhongMaterial, RepeatWrapping, Texture, TextureLoader, TubeGeometry, Vector3 } from 'three'

import { ArcEntityProperties } from './types'
import { _VathEntityLayerUtils } from '@vuesri/three/components/entity-layer'
import { defaultTextureUrl } from './const'

export class ArcEntity implements Entity {
  layer: ArcLayer
  group = new Group()
  graphic: __esri.Graphic
  /**
   * a path is a pipe
   */
  private paths: __esri.Point[][] = []
  constructor (e: ArcEntityProperties) {
    this.layer = e.layer
    this.graphic = e.graphic
  }

  setup (): void {
    this.paths = this.pathsFromGraphic()
    const threeGeometries = this.paths.map(path => this.createThreeGeomety(path))
    const userData = {
      graphic: this.graphic,
    }
  
    const subgroups = threeGeometries.map((geometry) => {

      // 一根管道
      const g = new Group()

      // 中间的管道
      const mesh = new Mesh(geometry, this.layer.getMaterial())
      mesh.renderOrder = 0
      mesh.userData = userData
      // 外壳管道
      const shellGeometry = new TubeGeometry(
        geometry.parameters.path,
        geometry.parameters.tubularSegments,
        geometry.parameters.radius + 20,
        geometry.parameters.radialSegments,
        geometry.parameters.closed,
      )

      const shellMesh = new Mesh(
        shellGeometry,
        this.layer.shellMaterial,
      )
      shellMesh.renderOrder = 1
      shellMesh.userData = userData
 

      g.add(shellMesh)
      g.add(mesh)
 
      return g
    })

    this.group.add(...subgroups)
    this.layer.group.add(this.group)
  }
  render (): void {}
  dispose (): void {
    this.group.clear()
    this.layer.group.remove(this.group)
  }

  private createThreeGeomety (pipe: __esri.Point[]) {
    const renderTransform = this.layer.getRenderTransform()

    const renderCoordinates = renderTransform.createRenderCoordinatesSync(
      pipe,
    )

    const v3List = renderTransform.unflat(renderCoordinates, 3).map(
      item => new Vector3(item[0], item[1], item[2]),
    )

    const curve = new CatmullRomCurve3(
      v3List,
      false,
    )
    /**
     * path 管道的形状 曲线
     * tubularsSegements    管道分成多少段
     * radius   管道的半径
     * radialSegments   管道口是几边形 分为多少段
     * closed 收尾是否相连 封闭
     * @type {TubeGeometry}
     */
    const geometry = new TubeGeometry(curve, 20, 100, 8, false)

    return geometry
    
  }



  private pathsFromGraphic (): __esri.Point[][] {
    const geometry = this.graphic.geometry as __esri.Polyline
    if (!geometry) {
      throw new TypeError('geometry is not a polyline')
    }
    return _VathEntityLayerUtils.pathsFromGeometry(geometry)
  }
  
}


@subclass('vuesri.three.ArcLayer')
export class ArcLayer extends MaterialManager(EntityLayer) {

  @property({
    type: Texture,
  })
  public texture: Texture = (function () {
      const texture = new TextureLoader().load(defaultTextureUrl)
      texture.wrapS = RepeatWrapping
      texture.wrapT = RepeatWrapping
      texture.repeat.set(20, 4)
      // texture.needsUpdate = true
      return texture
    })()

  protected init () {

    this.material = new MeshBasicMaterial({
      color: 0x85A9A9,
      side: DoubleSide,
      transparent: true,
      depthWrite: false,
      map: this.texture,
      opacity: 1,
    })
    // this.material.needsUpdate = true

    this.handles.push(
      this.watch('texture', () => {
        this.getMaterial().map = this.texture
      }),
    )

    this.entities = this.source.map(item => {
      return new ArcEntity({
        graphic: item,
        layer: this,
      })
    })
    
  }

  animate (ctx: ThreeContext): void {
    if (!this.visible) return
    const texture = this.getMaterial().map
    if (!texture) return
    texture.offset.x += 0.01
    ctx.renderNode?.requestRender()
  }

  getMaterial () {
    return this.material as MeshBasicMaterial
  }

  /* 外壳材质 */
  private sShellMaterial = Symbol('sShellMaterial')
  private defaultShellMaterial = new MeshPhongMaterial({
    color: 0xaaaaaa,
    transparent: true,
    opacity: 0.25,  
  })

  get shellMaterial () {
    const material = this
      .materialMap
      .get(this.sShellMaterial) as MeshPhongMaterial
    return  material || this.defaultShellMaterial
  }

  set shellMaterial (e: MeshPhongMaterial) {
    this.materialMap.set(this.sShellMaterial, e)
  }
  /* end of 外壳材质 */
  
}
