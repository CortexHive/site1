"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

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

function createDesktopSiteTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 1024, 640);

    // Top bar
    ctx.fillStyle = "#08182E";
    ctx.fillRect(0, 0, 1024, 54);
    ctx.fillStyle = "#D4AF37";
    ctx.font = "700 15px monospace";
    ctx.fillText("DIGITAL EXPERIENCES • UK CONVERSION ARCHITECTURE", 32, 33);

    // Nav
    ctx.fillStyle = "#0A1628";
    ctx.font = "800 22px sans-serif";
    ctx.fillText("CORTEXHIVE WEB", 48, 106);

    drawRoundedRect(ctx, 804, 78, 172, 42, 21);
    ctx.fillStyle = "#C69B3A";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "700 16px sans-serif";
    ctx.fillText("Book Call →", 844, 104);

    // Main split
    ctx.fillStyle = "#143A6B";
    ctx.font = "700 15px monospace";
    ctx.fillText("CORE WEB VITALS 99/100", 48, 178);
    ctx.fillStyle = "#0A1628";
    ctx.font = "800 46px sans-serif";
    ctx.fillText("Websites Built", 48, 234);
    ctx.fillStyle = "#143A6B";
    ctx.fillText("For Real Enquiries.", 48, 288);

    // CTA
    drawRoundedRect(ctx, 48, 326, 214, 52, 12);
    ctx.fillStyle = "#143A6B";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "700 17px sans-serif";
    ctx.fillText("Start From £99 →", 80, 358);

    // Right conversion panel
    drawRoundedRect(ctx, 548, 152, 428, 260, 18);
    ctx.fillStyle = "#F4F7FB";
    ctx.fill();
    ctx.strokeStyle = "#D6E3F0";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = "#0A1628";
    ctx.font = "800 22px sans-serif";
    ctx.fillText("Enquiry Flow Active", 580, 198);

    const rows = [
      ["Google Local SEO", "Top 3 Ready"],
      ["Mobile Speed", "0.7s First Paint"],
      ["WhatsApp Routing", "Instant Alert"],
    ];
    rows.forEach(([k, v], i) => {
      const y = 228 + i * 54;
      drawRoundedRect(ctx, 580, y, 364, 42, 10);
      ctx.fillStyle = "#FFFFFF";
      ctx.fill();
      ctx.fillStyle = "#33475F";
      ctx.font = "600 15px sans-serif";
      ctx.fillText(k, 598, y + 26);
      ctx.fillStyle = "#143A6B";
      ctx.font = "700 15px monospace";
      ctx.fillText(v, 796, y + 26);
    });

    // Bottom metric banner
    drawRoundedRect(ctx, 48, 456, 928, 132, 18);
    ctx.fillStyle = "#08182E";
    ctx.fill();
    const stats = [
      ["£99", "STARTER SITE"],
      ["£349", "5-PAGE BUSINESS"],
      ["£699", "GROWTH PLATFORM"],
      ["100%", "CLIENT OWNED"],
    ];
    stats.forEach(([val, lbl], idx) => {
      const sx = 94 + idx * 224;
      ctx.fillStyle = idx === 1 ? "#D4AF37" : "#FFFFFF";
      ctx.font = "800 36px sans-serif";
      ctx.fillText(val, sx, 518);
      ctx.fillStyle = "#9AB8DA";
      ctx.font = "600 13px monospace";
      ctx.fillText(lbl, sx, 550);
    });
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function createSideDeviceTexture(title: string, badge: string): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 480;
  canvas.height = 680;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 480, 680);

    ctx.fillStyle = "#08182E";
    ctx.fillRect(0, 0, 480, 128);
    ctx.fillStyle = "#D4AF37";
    ctx.font = "700 16px monospace";
    ctx.fillText(badge, 32, 54);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "800 28px sans-serif";
    ctx.fillText(title, 32, 96);

    for (let i = 0; i < 3; i++) {
      const y = 166 + i * 136;
      drawRoundedRect(ctx, 32, y, 416, 112, 16);
      ctx.fillStyle = i === 0 ? "#EDF3FA" : "#F4F7FB";
      ctx.fill();
      ctx.strokeStyle = i === 0 ? "#3B82F6" : "#D6E3F0";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#143A6B";
      ctx.font = "800 22px sans-serif";
      ctx.fillText(
        i === 0 ? "99/100 Performance" : i === 1 ? "Instant Quote Form" : "Direct WhatsApp CTA",
        56,
        y + 52
      );
      ctx.fillStyle = "#3F5570";
      ctx.font = "500 16px sans-serif";
      ctx.fillText(
        i === 0
          ? "Engineered for UK mobile visitors"
          : i === 1
          ? "Zero friction customer capture"
          : "Replies routed in seconds",
        56,
        y + 84
      );
    }

    drawRoundedRect(ctx, 32, 584, 416, 62, 14);
    ctx.fillStyle = "#C69B3A";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "800 20px sans-serif";
    ctx.fillText("View Live Preview →", 136, 622);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export default function DigitalExperiences3DVideo() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [webglError, setWebglError] = useState(false);

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
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      36,
      (container.clientWidth || 640) / (container.clientHeight || 420),
      0.1,
      100
    );
    camera.position.set(0, 0.7, 9.2);

    // Lighting
    scene.add(new THREE.AmbientLight(0xdbeafe, 0.95));
    const dirLight = new THREE.DirectionalLight(0xfff4d9, 2.2);
    dirLight.position.set(5, 7, 6);
    scene.add(dirLight);
    const emeraldLight = new THREE.PointLight(0x3b82f6, 4.0, 20);
    emeraldLight.position.set(-5, 2, 4);
    scene.add(emeraldLight);
    const goldLight = new THREE.PointLight(0xd4af37, 3.6, 20);
    goldLight.position.set(5, -1, 4);
    scene.add(goldLight);

    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.22,
    });
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x0b2242,
      metalness: 0.6,
      roughness: 0.3,
    });
    const desktopTex = createDesktopSiteTexture();
    const tabletTex = createSideDeviceTexture("Tablet Web App", "RESPONSIVE UI");
    const mobileTex = createSideDeviceTexture("Mobile Site", "MOBILE-FIRST");

    const disposables: Array<{ dispose: () => void }> = [
      goldMat,
      chassisMat,
      desktopTex,
      tabletTex,
      mobileTex,
    ];

    const stage = new THREE.Group();
    scene.add(stage);

    // Center Desktop Display
    const desktopGroup = new THREE.Group();
    const dFrameGeo = new THREE.BoxGeometry(4.45, 2.82, 0.14);
    const dScreenGeo = new THREE.PlaneGeometry(4.28, 2.66);
    const dScreenMat = new THREE.MeshBasicMaterial({ map: desktopTex });
    const dScreen = new THREE.Mesh(dScreenGeo, dScreenMat);
    dScreen.position.z = 0.076;
    desktopGroup.add(new THREE.Mesh(dFrameGeo, goldMat), dScreen);
    desktopGroup.position.set(0, 0.25, 0);
    stage.add(desktopGroup);
    disposables.push(dFrameGeo, dScreenGeo, dScreenMat);

    // Left Angled Tablet
    const tabletGroup = new THREE.Group();
    const tFrameGeo = new THREE.BoxGeometry(1.75, 2.42, 0.12);
    const tScreenGeo = new THREE.PlaneGeometry(1.62, 2.28);
    const tScreenMat = new THREE.MeshBasicMaterial({ map: tabletTex });
    const tScreen = new THREE.Mesh(tScreenGeo, tScreenMat);
    tScreen.position.z = 0.066;
    tabletGroup.add(new THREE.Mesh(tFrameGeo, chassisMat), tScreen);
    tabletGroup.position.set(-2.95, -0.1, 0.9);
    tabletGroup.rotation.y = 0.44;
    stage.add(tabletGroup);
    disposables.push(tFrameGeo, tScreenGeo, tScreenMat);

    // Right Floating Mobile
    const mobileGroup = new THREE.Group();
    const mFrameGeo = new THREE.BoxGeometry(1.22, 2.15, 0.11);
    const mScreenGeo = new THREE.PlaneGeometry(1.1, 2.02);
    const mScreenMat = new THREE.MeshBasicMaterial({ map: mobileTex });
    const mScreen = new THREE.Mesh(mScreenGeo, mScreenMat);
    mScreen.position.z = 0.06;
    mobileGroup.add(new THREE.Mesh(mFrameGeo, goldMat), mScreen);
    mobileGroup.position.set(2.85, -0.15, 1.05);
    mobileGroup.rotation.y = -0.46;
    stage.add(mobileGroup);
    disposables.push(mFrameGeo, mScreenGeo, mScreenMat);

    // Orbiting Core Web Vitals Gold Ring
    const orbitGeo = new THREE.TorusGeometry(3.2, 0.025, 16, 100);
    const orbitRing = new THREE.Mesh(orbitGeo, goldMat);
    orbitRing.rotation.x = Math.PI * 0.46;
    orbitRing.position.y = -0.75;
    stage.add(orbitRing);
    disposables.push(orbitGeo);

    // Subtle Studio Reflection Floor Grid
    const grid = new THREE.GridHelper(14, 20, 0xc69b3a, 0x1d4b85);
    grid.position.y = -1.75;
    const gridMat = grid.material as THREE.Material;
    gridMat.transparent = true;
    gridMat.opacity = 0.25;
    scene.add(grid);

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

      stage.rotation.y = Math.sin(t * 0.45) * 0.16 + pointer.x * 0.18;
      desktopGroup.position.y = 0.25 + Math.sin(t * 1.1) * 0.07;
      tabletGroup.position.y = -0.1 + Math.cos(t * 1.3) * 0.09;
      mobileGroup.position.y = -0.15 + Math.sin(t * 1.5 + 1.2) * 0.09;
      orbitRing.rotation.z = t * 0.22;

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

  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[420px] rounded-xl overflow-hidden bg-gradient-to-br from-[#07162B] via-[#0E2A4F] to-[#040D1B] border border-[#0A1628]/15">
      <div className="absolute top-3.5 left-3.5 z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#051122]/80 backdrop-blur-md border border-[#C69B3A]/40 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#F4E3B2]">
        <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
        <span>Live 3D Digital Experiences Reel</span>
      </div>

      {webglError ? (
        <div className="w-full h-full flex items-center justify-center p-8 text-center text-white/85 text-sm">
          Interactive 3D Multi-Device Showcase — Desktop, Tablet &amp; Mobile UK Websites
        </div>
      ) : (
        <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      )}

      <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between gap-2 px-3.5 py-2 rounded-lg bg-[#051122]/85 backdrop-blur-md border border-white/10 font-mono text-[10px] text-blue-100/85">
        <span>Desktop + Tablet + Mobile 3D Stage</span>
        <span className="text-[#D4AF37] font-semibold">Core Web Vitals 99</span>
      </div>
    </div>
  );
}
