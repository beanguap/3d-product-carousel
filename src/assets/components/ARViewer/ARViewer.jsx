// ARViewer.jsx (Example)
import '@google/model-viewer';

function ARViewer() {
  return (
    <model-viewer
      src="/models/product.glb"         // .glb for Android/Web
      ios-src="/models/product.usdz"    // .usdz for iOS Quick Look
      alt="3D model of the product"
      ar
      camera-controls
      auto-rotate
      ar-modes="webxr scene-viewer quick-look"
      style={{ width: '100%', height: '500px' }}
    >
    </model-viewer>
  );
}

export default ARViewer;
