// собрать values в древовидной структуре

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        { value: 3 }
      ]
    },
    {
      value: 4,
      children: [
        { value: 5 },
        { value: 6 }
      ]
    }
  ]
};


function getTreeValues(t) {
  const stack = [t];
  const result = [];

  while(stack.length > 0) {
    const node = stack.pop();
    if (node.value !== undefined) {
      result.push(node.value)
    }
    if (node.children?.length) {
      stack.push(...node.children)
    }
  }

  return result;
}

console.log(getTreeValues(tree)); // [1, 2, 3, 4, 5, 6]
