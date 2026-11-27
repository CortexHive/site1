"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Pause, Play } from "lucide-react";

export interface ProcessStageStep {
  number: string;
  title: string;
  subtitle: string;
  details: string;
}

export const PROCESS_EXPLAINER_STEPS: ProcessStageStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand your business & goals",
    details:
      "We listen to how your business operates, what your customers need, and where practical technology makes the biggest difference.",
  },
  {
    number: "02",
    title: "Plan",
    subtitle: "Clear scope, timeline & fixed pricing",
    details:
      "You receive a clear written scope, fixed price or milestone breakdown, and realistic timeline before any work starts.",
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Design, engineer & test cleanly",
    details:
      "We design, engineer, and test across desktop and mobile devices, sharing real progress for calm, structured review.",
  },
  {
    number: "04",
    title: "Launch",
    subtitle: "Deploy live & hand over ownership",
    details:
      "We deploy live, verify every form, WhatsApp link, and integration, and hand over full ownership of your domain and code.",
  },
];

const STEP_DURATION_MS = 5500;

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function makeStepCardTexture(
  kicker: string,
  title: string,
  line1: string,
  line2: string,
  accent: string
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 720;
  canvas.height = 300;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    drawRoundedRect(ctx, 10, 10, 700, 280, 26);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.strokeStyle = accent;
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(52, 66, 10, 0, Math.PI * 2);
    ctx.fillStyle = accent;
    ctx.fill();

    ctx.fillStyle = accent;
    ctx.font = "700 22px monospace";
    ctx.fillText(kicker, 76, 74);

    ctx.fillStyle = "#0A1628";
    ctx.font = "800 40px sans-serif";
    ctx.fillText(title, 42, 140);

    ctx.fillStyle = "#33475F";
    ctx.font = "500 24px sans-serif";
    ctx.fillText(line1, 42, 194);
    ctx.fillStyle = "#143A6B";
    ctx.font = "700 22px sans-serif";
    ctx.fillText(line2, 42, 240);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

interface Process3DExplainerProps {
  activeStep: number;
  onStepChange: (idx: number) => void;
}

export default function Process3DExplainer({
  activeStep,
  onStepChange,
}: Process3DExplainerProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const stepRef = useRef<number>(activeStep);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    stepRef.current = activeStep;
    setProgress(0);
  }, [activeStep]);

  useEffect(() => {
    if (!isPlaying) return;
    const startedAt = performance.now();
    const timer = window.setInterval(() => {
      const elapsed = performance.now() - startedAt;
      setProgress(Math.min(100, (elapsed / STEP_DURATION_MS) * 100));
      if (elapsed >= STEP_DURATION_MS) {
        onStepChange((stepRef.current + 1) % PROCESS_EXPLAINER_STEPS.length);
      }
    }, 60);
    return () => window.clearInterval(timer);
  }, [isPlaying, activeStep, onStepChange]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      setWebglError(true);
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(container.clientWidth || 640, container.clientHeight || 420);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.18;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      (container.clientWidth || 640) / (container.clientHeight || 420),
      0.1,
      100
    );
    camera.position.set(0, 0.7, 8.4);

    // Metallic Blue + Brushed Gold Studio Lighting
    scene.add(new THREE.AmbientLight(0xdbeafe, 0.95));
    const keyLight = new THREE.DirectionalLight(0xfff4d9, 2.2);
    keyLight.position.set(5, 7, 6);
    scene.add(keyLight);

    const blueRim = new THREE.PointLight(0x3b82f6, 4.5, 22);
    blueRim.position.set(-5.5, 2.2, 4);
    scene.add(blueRim);

    const goldRim = new THREE.PointLight(0xd4af37, 3.8, 22);
    goldRim.position.set(5.5, -1.8, 4);
    scene.add(goldRim);

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.88,
      roughness: 0.2,
    });
    const chromeBlueMat = new THREE.MeshStandardMaterial({
      color: 0x1d4ed8,
      metalness: 0.82,
      roughness: 0.22,
    });
    const deepSteelMat = new THREE.MeshStandardMaterial({
      color: 0x0f2d56,
      metalness: 0.72,
      roughness: 0.26,
    });
    const glassBlueMat = new THREE.MeshPhysicalMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.36,
      roughness: 0.12,
      metalness: 0.2,
    });
    const glowBlueMat = new THREE.MeshStandardMaterial({
      color: 0x60a5fa,
      emissive: 0x2563eb,
      emissiveIntensity: 0.85,
      roughness: 0.2,
    });
    const glowGoldMat = new THREE.MeshStandardMaterial({
      color: 0xf4cf6b,
      emissive: 0xc69b3a,
      emissiveIntensity: 0.85,
      roughness: 0.2,
    });

    const disposables: Array<{ dispose: () => void }> = [
      goldMat,
      chromeBlueMat,
      deepSteelMat,
      glassBlueMat,
      glowBlueMat,
      glowGoldMat,
    ];

    // Subtle studio floor grid
    const grid = new THREE.GridHelper(16, 22, 0xc69b3a, 0x1d4b85);
    grid.position.y = -1.9;
    const gridMat = grid.material as THREE.Material;
    gridMat.transparent = true;
    gridMat.opacity = 0.24;
    scene.add(grid);

    // =========================================================================
    // STEP 01: DISCOVER (Architectural Blueprint Octahedron + Orbiting Scanners)
    // =========================================================================
    const step0 = new THREE.Group();
    const prismGeo = new THREE.OctahedronGeometry(1.15, 0);
    const prism = new THREE.Mesh(prismGeo, glassBlueMat);
    const prismEdgesGeo = new THREE.EdgesGeometry(prismGeo);
    const prismEdgesMat = new THREE.LineBasicMaterial({ color: 0xd4af37 });
    const prismWire = new THREE.LineSegments(prismEdgesGeo, prismEdgesMat);
    const innerCoreGeo = new THREE.IcosahedronGeometry(0.45, 1);
    const innerCore = new THREE.Mesh(innerCoreGeo, glowGoldMat);
    const discoverGroup = new THREE.Group();
    discoverGroup.add(prism, prismWire, innerCore);
    discoverGroup.position.set(-1.35, 0.25, 0);

    const scanRingGeo = new THREE.TorusGeometry(1.68, 0.032, 16, 96);
    const scanRing = new THREE.Mesh(scanRingGeo, chromeBlueMat);
    scanRing.position.set(-1.35, 0.25, 0);
    scanRing.rotation.x = Math.PI * 0.38;

    const card0Tex = makeStepCardTexture(
      "STEP 01 • DISCOVER",
      "Business & Goals",
      "Free 15-min UK consultation",
      "✓ Clear objectives mapped",
      "#143A6B"
    );
    const cardGeo = new THREE.PlaneGeometry(2.75, 1.15);
    const card0Mat = new THREE.MeshBasicMaterial({ map: card0Tex, transparent: true });
    const card0 = new THREE.Mesh(cardGeo, card0Mat);
    card0.position.set(1.5, 0.1, 0.55);
    card0.rotation.y = -0.22;

    step0.add(discoverGroup, scanRing, card0);
    disposables.push(
      prismGeo,
      prismEdgesGeo,
      prismEdgesMat,
      innerCoreGeo,
      scanRingGeo,
      card0Tex,
      cardGeo,
      card0Mat
    );
    scene.add(step0);

    // =========================================================================
    // STEP 02: PLAN (Ascending Isometric Milestone Tiles + Gold Conduit)
    // =========================================================================
    const step1 = new THREE.Group();
    const tileGeo = new THREE.BoxGeometry(1.05, 0.16, 1.05);
    const tileEdgesGeo = new THREE.EdgesGeometry(tileGeo);
    const tileEdgesMat = new THREE.LineBasicMaterial({ color: 0x60a5fa });
    disposables.push(tileGeo, tileEdgesGeo, tileEdgesMat);

    const milestones: THREE.Group[] = [];
    for (let i = 0; i < 3; i++) {
      const g = new THREE.Group();
      const box = new THREE.Mesh(tileGeo, i === 2 ? goldMat : deepSteelMat);
      const wire = new THREE.LineSegments(tileEdgesGeo, tileEdgesMat);
      g.add(box, wire);
      g.position.set(-2.35 + i * 0.95, -0.55 + i * 0.55, -0.3 + i * 0.25);
      g.rotation.set(0.35, -0.45, 0);
      step1.add(g);
      milestones.push(g);
    }

    const railCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.35, -0.35, -0.3),
      new THREE.Vector3(-1.4, 0.2, -0.05),
      new THREE.Vector3(-0.45, 0.75, 0.2),
    ]);
    const railGeo = new THREE.TubeGeometry(railCurve, 36, 0.035, 10, false);
    step1.add(new THREE.Mesh(railGeo, goldMat));
    disposables.push(railGeo);

    const card1Tex = makeStepCardTexture(
      "STEP 02 • PLAN",
      "Fixed Scope & Timeline",
      "Written deliverables before build",
      "✓ Transparent UK pricing",
      "#C69B3A"
    );
    const card1Mat = new THREE.MeshBasicMaterial({ map: card1Tex, transparent: true });
    const card1 = new THREE.Mesh(cardGeo, card1Mat);
    card1.position.set(1.55, 0.1, 0.55);
    card1.rotation.y = -0.22;
    step1.add(card1);
    disposables.push(card1Tex, card1Mat);

    step1.scale.setScalar(0.001);
    scene.add(step1);

    // =========================================================================
    // STEP 03: BUILD (Interlocking Engineering Rings + Rising Data Packets)
    // =========================================================================
    const step2 = new THREE.Group();
    const buildHub = new THREE.Group();
    const gear1Geo = new THREE.TorusGeometry(1.15, 0.09, 16, 48);
    const gear1 = new THREE.Mesh(gear1Geo, chromeBlueMat);
    const gear2Geo = new THREE.TorusGeometry(0.82, 0.06, 16, 48);
    const gear2 = new THREE.Mesh(gear2Geo, goldMat);
    gear2.rotation.x = Math.PI / 2;
    const buildCubeGeo = new THREE.BoxGeometry(0.68, 0.68, 0.68);
    const buildCube = new THREE.Mesh(buildCubeGeo, glowBlueMat);
    buildHub.add(gear1, gear2, buildCube);
    buildHub.position.set(-1.35, 0.2, 0);
    step2.add(buildHub);
    disposables.push(gear1Geo, gear2Geo, buildCubeGeo);

    const card2Tex = makeStepCardTexture(
      "STEP 03 • BUILD",
      "Design, Code & QA",
      "Desktop, mobile & API tested",
      "✓ Calm structured reviews",
      "#2563EB"
    );
    const card2Mat = new THREE.MeshBasicMaterial({ map: card2Tex, transparent: true });
    const card2 = new THREE.Mesh(cardGeo, card2Mat);
    card2.position.set(1.5, 0.1, 0.55);
    card2.rotation.y = -0.22;
    step2.add(card2);
    disposables.push(card2Tex, card2Mat);

    step2.scale.setScalar(0.001);
    scene.add(step2);

    // =========================================================================
    // STEP 04: LAUNCH (Ascending Metallic Beacon + Expanding Live Signal Rings)
    // =========================================================================
    const step3 = new THREE.Group();
    const launchBeacon = new THREE.Group();
    const coneGeo = new THREE.ConeGeometry(0.62, 1.55, 6);
    const cone = new THREE.Mesh(coneGeo, goldMat);
    const baseRingGeo = new THREE.TorusGeometry(1.15, 0.045, 16, 72);
    const baseRing = new THREE.Mesh(baseRingGeo, glowBlueMat);
    baseRing.rotation.x = Math.PI / 2;
    baseRing.position.y = -0.65;
    const pulseRingGeo = new THREE.TorusGeometry(1.45, 0.028, 16, 72);
    const pulseRing = new THREE.Mesh(pulseRingGeo, goldMat);
    pulseRing.rotation.x = Math.PI / 2;
    pulseRing.position.y = -0.65;
    launchBeacon.add(cone, baseRing, pulseRing);
    launchBeacon.position.set(-1.35, 0.25, 0);
    step3.add(launchBeacon);
    disposables.push(coneGeo, baseRingGeo, pulseRingGeo);

    const card3Tex = makeStepCardTexture(
      "STEP 04 • LAUNCH",
      "Live & 100% Owned",
      "Forms, WhatsApp & SEO verified",
      "✓ Full code & domain handover",
      "#C69B3A"
    );
    const card3Mat = new THREE.MeshBasicMaterial({ map: card3Tex, transparent: true });
    const card3 = new THREE.Mesh(cardGeo, card3Mat);
    card3.position.set(1.5, 0.1, 0.55);
    card3.rotation.y = -0.22;
    step3.add(card3);
    disposables.push(card3Tex, card3Mat);

    step3.scale.setScalar(0.001);
    scene.add(step3);

    const stages = [step0, step1, step2, step3];

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    container.addEventListener("pointermove", onPointerMove);

    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth || 640;
      const h = container.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = window.requestAnimationFrame(animate);
      const t = prefersReducedMotion ? 0 : clock.getElapsedTime();
      const target = stepRef.current;

      stages.forEach((group, idx) => {
        const nextScale = THREE.MathUtils.lerp(
          group.scale.x,
          idx === target ? 1 : 0.001,
          0.1
        );
        group.scale.setScalar(nextScale);
        group.visible = nextScale > 0.015;
      });

      // Step 01 motion
      discoverGroup.rotation.y = t * 0.55;
      discoverGroup.position.y = 0.25 + Math.sin(t * 1.4) * 0.08;
      scanRing.rotation.z = -t * 0.65;
      card0.position.y = 0.1 + Math.cos(t * 1.2) * 0.07;

      // Step 02 motion
      milestones.forEach((m, idx) => {
        m.position.y = -0.55 + idx * 0.55 + Math.sin(t * 1.6 + idx * 0.7) * 0.06;
      });
      card1.position.y = 0.1 + Math.sin(t * 1.2) * 0.07;

      // Step 03 motion
      gear1.rotation.z = t * 0.7;
      gear2.rotation.y = -t * 0.9;
      buildCube.rotation.x = t * 0.55;
      buildCube.rotation.y = t * 0.75;
      card2.position.y = 0.1 + Math.cos(t * 1.3) * 0.07;

      // Step 04 motion
      cone.rotation.y = t * 0.7;
      cone.position.y = Math.sin(t * 1.8) * 0.12;
      const pulse = 1 + ((t * 0.6) % 0.6);
      pulseRing.scale.setScalar(pulse);
      card3.position.y = 0.1 + Math.sin(t * 1.2) * 0.07;

      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.5, 0.05);
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        0.65 - pointer.y * 0.3,
        0.05
      );
      camera.lookAt(0, 0.05, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(rafId);
      container.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }, []);

  const current = PROCESS_EXPLAINER_STEPS[activeStep] || PROCESS_EXPLAINER_STEPS[0];

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#07162B] via-[#0E2A4F] to-[#040D1B] border border-[#143A6B]/30 shadow-editorial">
      {/* Top Cinema Header */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#051122]/85 backdrop-blur-md border border-[#C69B3A]/40 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F4E3B2]">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span>3D Process Explainer • 4 Steps</span>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          aria-label={isPlaying ? "Pause 3D process explainer" : "Play 3D process explainer"}
          className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#051122]/85 hover:bg-[#143A6B] backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>

      {/* Real-time Three.js Canvas */}
      <div className="relative w-full h-[320px] sm:h-[380px]">
        {webglError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white">
            <span className="font-mono text-xs text-[#D4AF37] uppercase tracking-[0.14em]">
              Step {current.number} / 04
            </span>
            <p className="text-xl font-bold mt-1">{current.title}</p>
            <p className="text-sm text-blue-100/80 mt-1 max-w-sm">{current.details}</p>
          </div>
        ) : (
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
        )}
      </div>

      {/* Bottom 4-Step Progress Bar */}
      <div className="relative z-20 bg-[#051122]/92 backdrop-blur-md border-t border-white/10 p-4">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D4AF37]">
              Step {current.number} — {current.subtitle}
            </span>
            <div className="text-base font-bold text-white">{current.title}</div>
          </div>
          <span className="font-mono text-[10px] font-semibold text-[#F4E3B2] bg-[#C69B3A]/20 border border-[#C69B3A]/40 px-2.5 py-1 rounded-full">
            {current.number} / 04
          </span>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {PROCESS_EXPLAINER_STEPS.map((s, idx) => {
            const active = idx === activeStep;
            return (
              <button
                key={s.number}
                type="button"
                onClick={() => onStepChange(idx)}
                className={`text-left px-2.5 py-2 rounded-lg border transition-all cursor-pointer ${
                  active
                    ? "bg-white/10 border-[#C69B3A]/60 text-white"
                    : "bg-white/[0.03] border-white/10 text-blue-100/65 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex items-center justify-between text-[10.5px] font-semibold">
                  <span className="truncate">{s.title}</span>
                  <span className="font-mono text-[9.5px] text-[#D4AF37]">{s.number}</span>
                </div>
                <div className="mt-1.5 h-1 w-full rounded-full bg-white/15 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3B82F6] to-[#D4AF37] transition-all duration-75"
                    style={{
                      width: active ? `${progress}%` : idx < activeStep ? "100%" : "0%",
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
