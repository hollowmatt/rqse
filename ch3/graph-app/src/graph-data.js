export const myGraphData = {
  nodes: [
    { id: 'UserA', name: 'Alice', color: '#ff6961' },
    { id: 'UserB', name: 'Bob', color: '#77dd77' },
    { id: 'Post1', name: 'Intro to GraphQL', color: '#add8e6' },
    { id: 'Post2', name: 'Why graph databases?', color: '#add8e6' },
    { id: 'Comment1', name: 'Great post!', color: '#c0c0c0' },
  ],
  links: [
    { source: 'UserA', target: 'Post1', label: 'Authored' },
    { source: 'UserB', target: 'Post2', label: 'Authored' },
    { source: 'UserA', target: 'Post2', label: 'Liked' },
    { source: 'UserB', target: 'Post1', label: 'Commented on' },
    { source: 'UserB', target: 'Comment1', label: 'Authored' },
    { source: 'Comment1', target: 'Post1', label: 'Belongs to' },
  ],
};

export const myGraphData2 = {
  nodes: [
    { path: 'd3', leaf: 'd3', module: '', level: 0, color: '#ff6961' },
    { path: 'd3/d3-array', leaf: 'd3-array', module: 'd3-array', level: 1, color: '#ff6961' },
    { path: 'd3/d3-array/threshold', leaf: 'threshold', module: 'threshold', level: '2', color: '#ff6961' },
    { path: 'd3/d3-axis', leaf: 'd3-axis', module: 'd3-axis', level: 1, color: '#ff6961' }, 
    { path: 'd3/d3-brush', leaf: 'd3-brush', module: 'd3-brush', level: 1, color: '#ff6961' },
    { path: 'd3/d3-color', leaf: 'd3-color', module: 'd3-color', level: 1, color: '#ff6961'} 
  ],
  links: [
    { source: 'd3', target: 'd3/d3-array'},
    { source: 'd3', target: 'd3/d3-axis' },
    { source: 'd3', target: 'd3/d3-brush' },
    { source: 'd3', target: 'd3/d3-color' },
    { source: 'd3/d3-array', target: 'd3/d3-array/threshold'}
  ],
}
