import React from 'react';
import nodeBackground from './node-background.svg';

export const Edge = () => {};

export const Node = ({x, y, label, ...attrs }) => (
  <g {...attrs}>
    <image href={nodeBackground} x={x - 10} y={y - 20} />
    <text y={y} x={x}>{label}</text>
  </g>
);

const center = 500;

const getCirlceRadius = (circleNum) => {
  return circleNum * 150;
}

const MindMap = ({nodes, edges, ...attrs }) => {
  let circleNum = 0;
  let mindMapNodes = [];
  const edgeElements = [];
  const nodePositions = [];

  const renderLevel = (node, nodesRenderedOnThisCircle=0) => {
    nodesRenderedOnThisCircle = 0;
    const levelNodes = edges
      .filter(e => e.props.from === node.props.id)
      .map(e => nodes.find(n => e.props.to === n.props.id));

    if (levelNodes.length) {
      circleNum++;
    }

    const parent = node;
    const parentPosition = nodePositions.find(p => p.id == parent.props.id);

    let firstNodePosition;
    const levelNodeElements = levelNodes
      .map((n, i) => {
        const r = getCirlceRadius(circleNum);
        let φ = (i + nodesRenderedOnThisCircle) * 3.14 / 4 + (parentPosition?.φ || 0);
        if (parentPosition?.φ) {
          φ += 3.14 / Math.pow(circleNum + 1, 2);
        }
        const c = center;
        const y = center + r * Math.sin(φ);
        const x = center + r * Math.cos(φ)
        nodePositions.push({ id: n.props.id, x, y, φ });
        mindMapNodes.push(<circle r={r} cx={center} cy={center} fill="none" stroke="#ddd" strokeWidth="1" strokeDasharray="4" />);
        const path = <path d={`
          M ${parentPosition?.x || c} ${parentPosition?.y || c}
          L ${firstNodePosition?.x || x } ${firstNodePosition?.y || y}
          Q ${firstNodePosition?.x + 10 || x } ${firstNodePosition?.y + 30 || y } ${x} ${y}`}
          stroke={`rgb(${circleNum*50 % 255}, ${circleNum*100*3.14 % 255}, ${circleNum*150 % 255})`}
          strokeWidth="2" fill="none"
        />;

        edgeElements.push(path);
        if (i == 0) {
          firstNodePosition = { x, y };
        }
        return React.cloneElement(n, { x, y });
      });

    mindMapNodes.push(levelNodeElements);

    levelNodes.forEach(levelNode => {
      renderLevel(levelNode, nodesRenderedOnThisCircle + levelNodes.length);
    });
  }

  mindMapNodes.push(React.cloneElement(nodes[0], {x: center, y: center}));
  renderLevel(nodes[0]);

  const svgSize = getCirlceRadius(circleNum + 1) * 2;
  return (
    <svg
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      width={svgSize}
      height={svgSize}
      {...attrs}
    >
      {edgeElements}
      {mindMapNodes}
    </svg>
  );
}

export default MindMap;
