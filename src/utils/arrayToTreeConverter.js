import * as _ from 'lodash'

export function createTree (array, parentIdProperty, idProperty, parentIdValue, childrenProperty, fieldMappings) {
  return  deleteEmpty(generate(array, parentIdProperty, idProperty, parentIdValue, childrenProperty, fieldMappings))
}

export function generate (array, parentIdProperty, idProperty, parentIdValue, childrenProperty, fieldMappings) {
  const tree = []
  const nodes = _.filter(array, [parentIdProperty, parentIdValue])
  _.forEach(nodes, node => {
    const newNode = {
      data: node
    }
    mapFields(node, newNode, fieldMappings)
    newNode[childrenProperty] = generate(
      array,
      parentIdProperty,
      idProperty,
      node[idProperty],
      childrenProperty,
      fieldMappings
    )

    tree.push(newNode)
  })
  return tree
}

export function deleteEmpty (arr) {
  if (arr.length) {
    for (const i in arr) {
      if (arr[i].children.length) {
        deleteEmpty(arr[i].children)
      } else {
        delete arr[i].children
      }
    }
  }
  return arr
}

export function mapFields (node, newNode, fieldMappings) {
  _.forEach(fieldMappings, fieldMapping => {
    if (!fieldMapping['target']) {
      return
    }

    if (fieldMapping.hasOwnProperty('value')) {
      newNode[fieldMapping['target']] = fieldMapping['value']
    } else if (fieldMapping['source']) {
      newNode[fieldMapping['target']] = node[fieldMapping['source']]
    } else if (fieldMapping['targetFunction']) {
      newNode[fieldMapping['target']] = fieldMapping['targetFunction'](node)
    }
  })
}

