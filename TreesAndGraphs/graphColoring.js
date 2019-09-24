/*
Given an undirected graph  with maximum degree ↴ D, find a legal graph coloring ↴ using at most D+1 D+1 colors.

Degree = D = number of neighbors for each node
legal graph coloring here = coloring such that each node that touches always has a diff color

Graphs are represented by an array of N node objects, each with a label, a set of neighbors, and a color:
*/

class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);
a.neighbors.add(c);
c.neighbors.add(a);

const graph = [a, b, c];

const colors = ['red', 'green', 'blue'];

colorGraph(graph, colors);

//answer below here:

function colorGraph(graph, colors) {
  graph.forEach(node => {
    //get the nodes existing neighbors and store their colors on illegalcolors SET
    const illegalColors = new Set();
    node.neighbors.forEach(neighbor => {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    });

    // assign the first legal color to the node
    for (let i = 0; i < colors.length; i++) {
      const curColor = colors[i];
      if (!illegalColors.has(curColor)) {
        node.color = curColor;
      }
    }
  });
}

console.log('expect legally colored graph:', graph);
