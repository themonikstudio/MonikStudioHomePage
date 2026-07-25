import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Layers, Lightbulb, Sparkles, RefreshCw } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ThreeCanvasProps {
  lang: Language;
}

const FILAMENT_COLORS = [
  { name: 'Matte Black', hex: 0x1a1d24 },
  { name: 'Monik Orange', hex: 0xf97316 },
  { name: 'Cyber Cyan', hex: 0x06b6d4 },
  { name: 'Translucent Amber', hex: 0xd97706 },
];

export const ThreeCanvas: React.FC<ThreeCanvasProps> = ({ lang }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExploded, setIsExploded] = useState(false);
  const [ledsOn, setLedsOn] = useState(true);
  const [selectedColorIndex, setSelectedColorIndex] = useState(1); // Monik Orange default

  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const shellMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const ledLightsRef = useRef<THREE.PointLight[]>([]);

  // Meshes for exploded animation
  const topShellMesh = useRef<THREE.Mesh | null>(null);
  const pcbGroup = useRef<THREE.Group | null>(null);
  const oledMesh = useRef<THREE.Mesh | null>(null);
  const knobMesh = useRef<THREE.Mesh | null>(null);

  const t = translations[lang].viewer;

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x0a0c10);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(3.5, 2.8, 4.5);
    camera.lookAt(0, 0, 0);

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(5, 8, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0x38bdf8, 0.6);
    fillLight.position.set(-5, 2, -5);
    scene.add(fillLight);

    // Circuit LED point lights inside
    const ledLight1 = new THREE.PointLight(0x06b6d4, 2, 4);
    ledLight1.position.set(0, 0.1, 0);
    scene.add(ledLight1);

    const ledLight2 = new THREE.PointLight(0xf97316, 2, 4);
    ledLight2.position.set(0.6, 0.1, 0.4);
    scene.add(ledLight2);

    ledLightsRef.current = [ledLight1, ledLight2];

    // 5. Build Gadget 3D Model
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Filament Shell Material
    const shellMat = new THREE.MeshStandardMaterial({
      color: FILAMENT_COLORS[selectedColorIndex].hex,
      roughness: 0.35,
      metalness: 0.1,
    });
    shellMaterialRef.current = shellMat;

    // Base / Bottom Enclosure
    const bottomGeo = new THREE.BoxGeometry(2.2, 0.4, 1.6);
    const bottomMesh = new THREE.Mesh(bottomGeo, shellMat);
    bottomMesh.position.y = -0.3;
    bottomMesh.castShadow = true;
    bottomMesh.receiveShadow = true;
    rootGroup.add(bottomMesh);

    // Rubber Feet
    const footGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 16);
    const footMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
    const positions = [
      [-0.8, -0.53, -0.6],
      [0.8, -0.53, -0.6],
      [-0.8, -0.53, 0.6],
      [0.8, -0.53, 0.6],
    ];
    positions.forEach(([x, y, z]) => {
      const foot = new THREE.Mesh(footGeo, footMat);
      foot.position.set(x, y, z);
      rootGroup.add(foot);
    });

    // Custom PCB Board
    const pcbG = new THREE.Group();
    pcbGroup.current = pcbG;
    const pcbGeo = new THREE.BoxGeometry(1.9, 0.08, 1.3);
    const pcbMat = new THREE.MeshStandardMaterial({
      color: 0x064e3b, // Emerald green PCB
      roughness: 0.2,
      metalness: 0.5,
    });
    const pcbMesh = new THREE.Mesh(pcbGeo, pcbMat);
    pcbG.add(pcbMesh);

    // ESP32 Chip & Microcontroller components
    const chipGeo = new THREE.BoxGeometry(0.5, 0.1, 0.4);
    const chipMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.2 });
    const chip = new THREE.Mesh(chipGeo, chipMat);
    chip.position.set(-0.4, 0.08, 0);
    pcbG.add(chip);

    // USB-C Connector
    const usbcGeo = new THREE.BoxGeometry(0.25, 0.08, 0.3);
    const usbcMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af, metalness: 0.9 });
    const usbc = new THREE.Mesh(usbcGeo, usbcMat);
    usbc.position.set(-0.95, 0.05, 0);
    pcbG.add(usbc);

    pcbG.position.y = 0.0;
    rootGroup.add(pcbG);

    // OLED Screen Module
    const oledGlassGeo = new THREE.BoxGeometry(0.9, 0.04, 0.6);
    const oledMat = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.1,
      emissive: 0x0284c7,
      emissiveIntensity: 0.6,
    });
    const oledM = new THREE.Mesh(oledGlassGeo, oledMat);
    oledM.position.set(0.2, 0.12, -0.1);
    oledMesh.current = oledM;
    rootGroup.add(oledM);

    // Top Shell Cover
    const topGeo = new THREE.BoxGeometry(2.2, 0.4, 1.6);
    const topM = new THREE.Mesh(topGeo, shellMat);
    topM.position.y = 0.4;
    topM.castShadow = true;
    topShellMesh.current = topM;
    rootGroup.add(topM);

    // Rotary Knob
    const knobGeo = new THREE.CylinderGeometry(0.25, 0.25, 0.35, 32);
    const knobMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.8,
      roughness: 0.2,
    });
    const knobM = new THREE.Mesh(knobGeo, knobMat);
    knobM.position.set(0.7, 0.75, 0.3);
    knobMesh.current = knobM;
    rootGroup.add(knobM);

    // Grid Floor
    const grid = new THREE.GridHelper(10, 20, 0xf97316, 0x1e293b);
    grid.position.y = -0.55;
    scene.add(grid);

    // 6. Interactive Drag Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      rootGroup.rotation.y += deltaX * 0.01;
      rootGroup.rotation.x += deltaY * 0.01;

      // Limit pitch
      rootGroup.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, rootGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const domElem = renderer.domElement;
    domElem.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Touch support for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      rootGroup.rotation.y += deltaX * 0.01;
      rootGroup.rotation.x += deltaY * 0.01;

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    domElem.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // 7. Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Auto slow rotation when idle
      if (!isDragging) {
        rootGroup.rotation.y += 0.005;
      }

      // Knob subtle spin
      if (knobMesh.current) {
        knobMesh.current.rotation.y += 0.01;
      }

      // Smooth interpolation for exploded view
      const targetTopY = isExploded ? 1.5 : 0.4;
      const targetPcbY = isExploded ? 0.6 : 0.0;
      const targetOledY = isExploded ? 1.0 : 0.12;
      const targetKnobY = isExploded ? 2.1 : 0.75;

      if (topShellMesh.current) {
        topShellMesh.current.position.y += (targetTopY - topShellMesh.current.position.y) * 0.1;
      }
      if (pcbGroup.current) {
        pcbGroup.current.position.y += (targetPcbY - pcbGroup.current.position.y) * 0.1;
      }
      if (oledMesh.current) {
        oledMesh.current.position.y += (targetOledY - oledMesh.current.position.y) * 0.1;
      }
      if (knobMesh.current) {
        knobMesh.current.position.y += (targetKnobY - knobMesh.current.position.y) * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      domElem.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      domElem.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);

      if (rendererRef.current && rendererRef.current.domElement) {
        containerRef.current?.removeChild(rendererRef.current.domElement);
      }
    };
  }, [isExploded]);

  // Handle filament color change
  const handleColorChange = (index: number) => {
    setSelectedColorIndex(index);
    if (shellMaterialRef.current) {
      shellMaterialRef.current.color.setHex(FILAMENT_COLORS[index].hex);
    }
  };

  // Handle LED toggle
  const handleLedToggle = () => {
    const nextState = !ledsOn;
    setLedsOn(nextState);
    ledLightsRef.current.forEach((light) => {
      light.intensity = nextState ? 2 : 0;
    });
  };

  return (
    <div className="relative w-full h-[480px] lg:h-[540px] rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden group">
      {/* Three.js Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs text-orange-400 font-mono">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-orange-400" />
        <span>{t.badge}</span>
      </div>

      {/* Bottom Interactive Control Panel */}
      <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-800 shadow-lg text-white">
        {/* Exploded View Toggle */}
        <button
          onClick={() => setIsExploded(!isExploded)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
            isExploded
              ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>{isExploded ? t.normalView : t.explodedView}</span>
        </button>

        {/* LED Toggle */}
        <button
          onClick={handleLedToggle}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
            ledsOn
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-400'
          }`}
        >
          <Lightbulb className={`w-4 h-4 ${ledsOn ? 'text-amber-400 fill-amber-400' : ''}`} />
          <span>{t.toggleLED}</span>
        </button>

        {/* Filament Colors Picker */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <span className="hidden sm:inline">{t.colorSelect}</span>
          <div className="flex items-center gap-1.5">
            {FILAMENT_COLORS.map((c, i) => (
              <button
                key={c.name}
                onClick={() => handleColorChange(i)}
                title={c.name}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColorIndex === i
                    ? 'border-orange-500 scale-110 shadow-md shadow-orange-500/50'
                    : 'border-slate-700 opacity-80 hover:opacity-100'
                }`}
                style={{ backgroundColor: `#${c.hex.toString(16).padStart(6, '0')}` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Exploded Component Tooltip Cards overlay */}
      {isExploded && (
        <div className="absolute top-16 right-4 z-10 flex flex-col gap-2 max-w-[220px] pointer-events-none">
          <div className="p-2.5 rounded-lg bg-slate-900/90 backdrop-blur border border-orange-500/40 text-[11px] text-slate-200 shadow-md">
            <span className="font-semibold text-orange-400 block">{t.specs.knob}</span>
            <span className="text-slate-400">QMK/VIA Rotary Controller</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/90 backdrop-blur border border-cyan-500/40 text-[11px] text-slate-200 shadow-md">
            <span className="font-semibold text-cyan-400 block">{t.specs.display}</span>
            <span className="text-slate-400">I2C Blue SSD1306 Display</span>
          </div>
          <div className="p-2.5 rounded-lg bg-slate-900/90 backdrop-blur border border-emerald-500/40 text-[11px] text-slate-200 shadow-md">
            <span className="font-semibold text-emerald-400 block">{t.specs.pcb}</span>
            <span className="text-slate-400">Custom 2-Layer PCB + ESP32</span>
          </div>
        </div>
      )}
    </div>
  );
};
