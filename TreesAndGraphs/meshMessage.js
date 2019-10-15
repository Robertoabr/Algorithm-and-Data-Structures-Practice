/*
You wrote a trendy new messaging app, MeshMessage, to get around flaky cell phone coverage.Instead of routing texts through cell towers, your app sends messages via the phones of nearby users, passing each message along from one phone to the next until it reaches the intended recipient.

Some friends have been using your service, and they're complaining that it takes a long time for messages to get delivered. After some preliminary debugging, you suspect messages might not be taking the most direct route from the sender to the recipient.

Given information about active users on the network, find the shortest route for a message from one user (the sender) to another (the recipient). Return an array of users that make up this route.

There might be a few shortest delivery routes, all with the same length. For now, let's just return any shortest route.

Your network information takes the form of an object where keys are usernames and values are arrays of other users nearby:

  const network = {
  'Min'     : ['William', 'Jayden', 'Omar'],
  'William' : ['Min', 'Noam'],
  'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
  'Ren'     : ['Jayden', 'Omar'],
  'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
  'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
  'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
  'Noam'    : ['Nathan', 'Jayden', 'William'],
  'Omar'    : ['Ren', 'Min', 'Scott'],
  ...
};

For the network above, a message from Jayden to Adam should have this route:
  ['Jayden', 'Amelia', 'Adam']
*/

// This is my queue with two stacks implementation fo queue , that I am using for the problem above

const network = {
  Min: ['William', 'Jayden', 'Omar'],
  William: ['Min', 'Noam'],
  Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
  Ren: ['Jayden', 'Omar'],
  Amelia: ['Jayden', 'Adam', 'Miguel'],
  Adam: ['Amelia', 'Miguel'],
  Miguel: ['Amelia', 'Adam'],
  Noam: ['Jayden', 'William'],
  Omar: ['Ren', 'Min']
};

// I did the below with an array , but it would have been more efficient with a queue class where taking from the start of the line is constant time , with a javascript array implementation below , taking from the start of an array (shifting or dequeueing is O(n) as we need to re-index the whole array when we shidt everything over one)

function bfsGetPath(graph, startNode, endNode) {
  const nodesToVisit = [];
  nodesToVisit.push(startNode);

  // Keep track of what nodes we've already seen
  // so we don't process them twice
  const nodesAlreadySeen = new Set([startNode]);

  // Keep track of how we got to each node
  // we'll use this to reconstruct the shortest path at the end
  const howWeReachedNodes = {};
  howWeReachedNodes[startNode] = null;

  while (nodesToVisit.length > 0) {
    const currentNode = nodesToVisit.shift();

    // Stop when we reach the end node
    if (currentNode === endNode) {
      // Somehow reconstruct the path here
      return reconstructPath(howWeReachedNodes, startNode, currentNode);
    }

    graph[currentNode].forEach(neighbor => {
      if (!nodesAlreadySeen.has(neighbor)) {
        nodesAlreadySeen.add(neighbor);
        nodesToVisit.push(neighbor);

        // Keep track of how we got to this node
        howWeReachedNodes[neighbor] = currentNode;
      }
    });
  }
}

// function to reconstruct the path to the end node after the Breath first search has found the right node (Breath first always gives you the shortest route first)
function reconstructPath(howWeReachedNodes, startNode, endNode) {
  const shortestPath = [];

  // Start from the end of the path and work backwards
  let currentNode = endNode;

  while (currentNode !== null) {
    shortestPath.push(currentNode);
    currentNode = howWeReachedNodes[currentNode];
  }
  // reverse the path to be from the start to end
  return shortestPath.reverse();
}

console.log(
  bfsGetPath(network, 'Jayden', 'Adam'),
  'expect - Jayden - Amelia - Adam'
);

console.log(
  bfsGetPath(network, 'Min', 'Adam'),
  'expect - Min - Jayden - Amelia - Adam'
);

console.log(bfsGetPath(network, 'Min', 'Omar'), 'expect - Min - Omar');

/*
One thing that stands out is that we have two data structures— nodesAlreadySeen and howWeReachedNodes—that are updated in similar ways. In fact, every time we add a node to nodesAlreadySeen, we also add it to howWeReachedNodes. Do we need both of them?

We definitely need howWeReachedNodes in order to reconstruct our path. What about nodesAlreadySeen?Every node that appears in nodesAlreadySeen also appears in our object. So, instead of keeping a separate set tracking nodes we've already seen, we can just use the keys in howWeReachedNodes. This lets us get rid of nodesAlreadySeen:

Solution
We treat the input user network as a graph in adjacency list format. Then we do a breadth-first search from the sender, stopping once we reach the recipient.

In order to recover the actual shortest path from the sender to the recipient, we do two things:

1. during our breadth-first search, we keep track of how we reached each node, and
2. after our breadth-first search reaches the end node, we use our object to backtrack from the recipient to the sender.

To make sure our breadth-first search terminates, we're careful to avoid visiting any node twice. We could keep track of the nodes we've already seen in a set, but, to save space, we reuse the object we've already set up for recovering the path.

What We Learned
The tricky part was backtracking to assemble the path we used to reach our endNode. In general, it's helpful to think of backtracking as two steps:

1. Figuring out what additional information we need to store in order to rebuild our path at the end (howWeReachedNodes, in this case).
2. Figuring out how to reconstruct the path from that information.
*/
