export interface Workflow {
  name: string,
  id: string, // 流程主键
  flowId: string, // flowId的用途类似于flowCode, 用来关联节点实例和定义
  itemId: string, // 关联该流程的业务id, 正常情况下应该是业务端新增的时候才会有，也就是流程启动前关联一个就行,现在这里的做法是在新增的时候写了一个假的关联
  memo: string,
  nodes: any[],
  connections: string
  isStart: 0 | 1,
  // form
  formName?: string
  formVersion?: number
  formId?: string
  formTable?: string 
}

