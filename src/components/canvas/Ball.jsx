import React, { useEffect, useRef } from "react";
import * as THREE from "https://cdn.skypack.dev/three@0.130.0";
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.130.0/examples/jsm/controls/OrbitControls.js';
import { SVGLoader } from 'https://cdn.skypack.dev/three@0.130.0/examples/jsm/loaders/SVGLoader.js';

const SvgRenderer = ({ svg }) => {
  const containerRef = useRef(null);
  const extrusionInputRef = useRef(null);
  const scene = useRef(null);
  const object = useRef(null);
  const updateFunction = useRef(null);

  useEffect(() => {
    const fillMaterial = new THREE.MeshBasicMaterial({ color: "#F3FBFB" });
    const stokeMaterial = new THREE.LineBasicMaterial({
      color: "#00A5E6",
    });

    const renderSVG = (extrusion, svg) => {
      const loader = new SVGLoader();
      const svgData = loader.parse(svg);
      const svgGroup = new THREE.Group();
      const updateMap = [];

      svgGroup.scale.y *= -1;
      svgData.paths.forEach((path) => {
        const shapes = SVGLoader.createShapes(path);

        shapes.forEach((shape) => {
          const meshGeometry = new THREE.ExtrudeBufferGeometry(shape, {
            depth: extrusion,
            bevelEnabled: false,
          });
          const linesGeometry = new THREE.EdgesGeometry(meshGeometry);
          const mesh = new THREE.Mesh(meshGeometry, fillMaterial);
          const lines = new THREE.LineSegments(linesGeometry, stokeMaterial);

          updateMap.push({ shape, mesh, lines });
          svgGroup.add(mesh, lines);
        });
      });

      // Rest of the rendering logic...

      return {
        object: svgGroup,
        update(extrusion) {
          // Update function logic...
        },
      };
    };

    const setupScene = (container) => {
      // Rest of your scene setup logic...
    };

    scene.current = setupScene(containerRef.current);
    const { object: svgObject, update: svgUpdate } = renderSVG(defaultExtrusion, svg);

    scene.current.add(svgObject);
    updateFunction.current = svgUpdate;
  }, [svg]);

  const handleExtrusionChange = () => {
    const extrusion = Number(extrusionInputRef.current.value);
    if (updateFunction.current) {
      updateFunction.current(extrusion);
    }
  };

  return (
    <div
      id="app"
      style={{
        height: "100%",
        margin: 0,
        overflow: "hidden",
      }}
      ref={containerRef}
    >
      <input
        id="input"
        type="range"
        min="0"
        max="10"
        step="0.1"
        defaultValue="1"
        style={{ position: "absolute", bottom: "10px", left: "10px" }}
        ref={extrusionInputRef}
        onChange={handleExtrusionChange}
      />
    </div>
  );
};

export default SvgRenderer;
