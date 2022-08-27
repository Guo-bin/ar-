import React, { useRef } from "react";

function Arjs({ nftUrl, model, light, position }) {
  const assetRef = useRef(null);
  console.log(light);
  console.log(position);
  return (
    <a-scene
      mindar-image='imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/examples/image-tracking/assets/band-example/band.mind;'
      color-space='sRGB'
      renderer='colorManagement: true, physicallyCorrectLights'
      vr-mode-ui='enabled: false'
      device-orientation-permission-ui='enabled: false'>
      <a-assets>
        <a-asset-item
          id='bearModel'
          src='https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/examples/image-tracking/assets/band-example/bear/scene.gltf'></a-asset-item>
        <a-asset-item
          id='raccoonModel'
          src='https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.5/examples/image-tracking/assets/band-example/raccoon/scene.gltf'></a-asset-item>
      </a-assets>

      <a-camera position='0 0 0' look-controls='enabled: false'></a-camera>

      <a-entity mindar-image-target='targetIndex: 0'>
        <a-gltf-model
          rotation='0 0 0 '
          position='0 -0.25 0'
          scale='0.05 0.05 0.05'
          src='#raccoonModel'
          animation-mixer
        />
      </a-entity>
      <a-entity mindar-image-target='targetIndex: 1'>
        <a-gltf-model
          rotation='0 0 0 '
          position='0 -0.25 0'
          scale='0.05 0.05 0.05'
          src='#bearModel'
          animation-mixer
        />
      </a-entity>
    </a-scene>
  );
}

export default Arjs;