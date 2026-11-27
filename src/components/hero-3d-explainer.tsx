"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Pause, Play } from "lucide-react";

export interface HeroChapter {
  id: string;
  num: string;
  tag: string;
  shortLabel: string;
  title: string;
  description: string;
}

export const HERO_EXPLAINER_CHAPTERS: HeroChapter[] = [
  {
    id: "websites",
    num: "01",
    tag: "01 / DIGITAL",
    shortLabel: "Websites",
    title: "Websites & Web Apps",
    description: "Fast, mobile-first UK sites built for genuine enquiries.",
  },
  {
    id: "ai-voice",
    num: "02",
    tag: "02 / VOICE & AI",
    shortLabel: "AI Receptionists",
    title: "AI Receptionists",
    description: "Polite British call answering & workflow automation.",
  },
  {
    id: "software",
    num: "03",
    tag: "03 / ENGINEERING",
    shortLabel: "Software & SaaS",
    title: "Software & SaaS",
    description: "Bespoke portals, dashboards & scalable products.",
  },
];

const CHAPTER_DURATION_MS = 6500;

function createRoundedRectPath(
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

function makeBrowserTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    // Pure white canvas
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 1024, 640);

    // Top browser chrome
    ctx.fillStyle = "#08182E";
    ctx.fillRect(0, 0, 1024, 58);

    // Window dots
    const dotColors = ["#C69B3A", "#3B82F6", "#60A5FA"];
    dotColors.forEach((c, i) => {
      ctx.beginPath();
      ctx.arc(32 + i * 24, 29, 7, 0, Math.PI * 2);
      ctx.fillStyle = c;
      ctx.fill();
    });

    // URL pill
    createRoundedRectPath(ctx, 130, 14, 480, 30, 15);
    ctx.fillStyle = "rgba(255,255,255,0.12)";
    ctx.fill();
    ctx.fillStyle = "#DBEAFE";
    ctx.font = "600 15px sans-serif";
    ctx.fillText("https://your-uk-business.co.uk", 154, 34);

    // Speed badge
    createRoundedRectPath(ctx, 816, 14, 176, 30, 15);
    ctx.fillStyle = "#C69B3A";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "700 14px sans-serif";
    ctx.fillText("99/100 SPEED", 852, 34);

    // Nav bar
    ctx.fillStyle = "#143A6B";
    createRoundedRectPath(ctx, 56, 86, 36, 36, 8);
    ctx.fill();
    ctx.fillStyle = "#0A1628";
    ctx.font = "800 22px sans-serif";
    ctx.fillText("UK PREMIER SERVICES", 108, 112);

    // CTA pill top right
    createRoundedRectPath(ctx, 814, 86, 154, 38, 19);
    ctx.fillStyle = "#C69B3A";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "700 15px sans-serif";
    ctx.fillText("Get a Quote →", 838, 110);

    // Hero Left copy
    ctx.fillStyle = "#143A6B";
    ctx.font = "700 15px monospace";
    ctx.fillText("MOBILE-FIRST UK WEBSITE", 56, 182);

    ctx.fillStyle = "#0A1628";
    ctx.font = "800 44px sans-serif";
    ctx.fillText("Trusted Local", 56, 236);
    ctx.fillStyle = "#C69B3A";
    ctx.fillText("Enquiries Daily.", 56, 288);

    ctx.fillStyle = "#3F5570";
    ctx.font = "400 19px sans-serif";
    ctx.fillText("Built for speed, UK Google SEO &", 56, 332);
    ctx.fillText("instant WhatsApp customer bookings.", 56, 360);

    // Buttons
    createRoundedRectPath(ctx, 56, 392, 210, 50, 10);
    ctx.fillStyle = "#143A6B";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "700 17px sans-serif";
    ctx.fillText("Request Free Quote", 82, 423);

    createRoundedRectPath(ctx, 280, 392, 168, 50, 10);
    ctx.strokeStyle = "#B9CDE3";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = "#0A1628";
    ctx.fillText("View Services", 308, 423);

    // Hero Right visual card inside browser
    createRoundedRectPath(ctx, 540, 166, 428, 280, 18);
    const grad = ctx.createLinearGradient(540, 166, 968, 446);
    grad.addColorStop(0, "#08182E");
    grad.addColorStop(1, "#153D73");
    ctx.fillStyle = grad;
    ctx.fill();

    // Inner chart bars
    const barHeights = [62, 92, 78, 124, 146, 174];
    barHeights.forEach((h, idx) => {
      createRoundedRectPath(ctx, 584 + idx * 56, 390 - h, 34, h, 8);
      ctx.fillStyle = idx === 5 ? "#C69B3A" : "rgba(59, 130, 246, 0.78)";
      ctx.fill();
    });
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "700 18px sans-serif";
    ctx.fillText("Monthly Enquiries", 584, 208);
    ctx.fillStyle = "#D4AF37";
    ctx.font = "700 15px monospace";
    ctx.fillText("+312% CONVERSION", 772, 208);

    // Bottom 3 feature strips
    const cards = [
      ["From £99", "Fixed UK Pricing"],
      ["< 0.8s Load", "Core Web Vitals"],
      ["WhatsApp Live", "Instant Enquiries"],
    ];
    cards.forEach(([title, sub], idx) => {
      const x = 56 + idx * 310;
      createRoundedRectPath(ctx, x, 484, 290, 104, 14);
      ctx.fillStyle = "#F4F7FB";
      ctx.fill();
      ctx.strokeStyle = "#D6E3F0";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#143A6B";
      ctx.font = "800 22px sans-serif";
      ctx.fillText(title, x + 22, 526);
      ctx.fillStyle = "#49607A";
      ctx.font = "500 16px sans-serif";
      ctx.fillText(sub, x + 22, 558);
    });
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function makeMobileTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 420;
  canvas.height = 760;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 420, 760);

    // Emerald header
    ctx.fillStyle = "#08182E";
    ctx.fillRect(0, 0, 420, 118);
    ctx.fillStyle = "#C69B3A";
    ctx.font = "700 16px monospace";
    ctx.fillText("MOBILE-FIRST UK SITE", 28, 56);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "800 26px sans-serif";
    ctx.fillText("Instant Quote", 28, 92);

    // Green pill
    createRoundedRectPath(ctx, 28, 148, 364, 96, 16);
    ctx.fillStyle = "#EDF3FA";
    ctx.fill();
    ctx.fillStyle = "#143A6B";
    ctx.font = "700 18px sans-serif";
    ctx.fillText("✓ Google Mobile Score: 99", 52, 188);
    ctx.fillStyle = "#33475F";
    ctx.font = "500 15px sans-serif";
    ctx.fillText("Loads cleanly on 4G & 5G", 52, 218);

    // Enquiry form visual
    const labels = ["Your Name", "UK Postcode", "Service Needed"];
    labels.forEach((lbl, i) => {
      const y = 278 + i * 96;
      ctx.fillStyle = "#61758F";
      ctx.font = "600 15px sans-serif";
      ctx.fillText(lbl, 28, y);
      createRoundedRectPath(ctx, 28, y + 14, 364, 52, 10);
      ctx.fillStyle = "#F4F7FB";
      ctx.fill();
      ctx.strokeStyle = "#D6E3F0";
      ctx.lineWidth = 2;
      ctx.stroke();
    });

    // Submit gold button
    createRoundedRectPath(ctx, 28, 594, 364, 66, 14);
    ctx.fillStyle = "#C69B3A";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "800 20px sans-serif";
    ctx.fillText("Send Enquiry Now →", 104, 634);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function makeBadgeCardTexture(
  kicker: string,
  headline: string,
  subline: string,
  accentHex: string
): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 240;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    createRoundedRectPath(ctx, 8, 8, 624, 224, 24);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.strokeStyle = accentHex;
    ctx.lineWidth = 6;
    ctx.stroke();

    // Status dot
    ctx.beginPath();
    ctx.arc(48, 64, 10, 0, Math.PI * 2);
    ctx.fillStyle = accentHex;
    ctx.fill();

    ctx.fillStyle = accentHex;
    ctx.font = "700 22px monospace";
    ctx.fillText(kicker, 74, 72);

    ctx.fillStyle = "#0A1628";
    ctx.font = "800 36px sans-serif";
    ctx.fillText(headline, 38, 134);

    ctx.fillStyle = "#3F5570";
    ctx.font = "500 24px sans-serif";
    ctx.fillText(subline, 38, 184);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function makeSaasDashboardTexture(): THREE.CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#07162B";
    ctx.fillRect(0, 0, 1024, 640);

    // Header strip
    ctx.fillStyle = "#0F2D56";
    ctx.fillRect(0, 0, 1024, 72);
    ctx.fillStyle = "#C69B3A";
    ctx.font = "700 18px monospace";
    ctx.fillText("CORTEXHIVE SAAS ENGINE • LIVE TELEMETRY", 36, 44);

    // Top 3 KPI cards
    const kpis = [
      ["ACTIVE PORTALS", "24,890", "#3B82F6"],
      ["API LATENCY", "18 ms", "#D4AF37"],
      ["UPTIME SLA", "99.98%", "#60A5FA"],
    ];
    kpis.forEach(([label, value, color], idx) => {
      const x = 36 + idx * 324;
      createRoundedRectPath(ctx, x, 104, 300, 148, 18);
      ctx.fillStyle = "rgba(255,255,255,0.06)";
      ctx.fill();
      ctx.strokeStyle = "rgba(198,155,58,0.35)";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = "#9AB8DA";
      ctx.font = "600 16px monospace";
      ctx.fillText(label, x + 26, 148);
      ctx.fillStyle = color;
      ctx.font = "800 44px sans-serif";
      ctx.fillText(value, x + 26, 212);
    });

    // Analytics curve card
    createRoundedRectPath(ctx, 36, 284, 952, 316, 20);
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.fill();
    ctx.strokeStyle = "rgba(59,130,246,0.38)";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Grid lines
    ctx.strokeStyle = "rgba(255,255,255,0.08)";
    ctx.lineWidth = 1;
    for (let y = 340; y <= 540; y += 50) {
      ctx.beginPath();
      ctx.moveTo(72, y);
      ctx.lineTo(950, y);
      ctx.stroke();
    }

    // Gold smooth line chart
    const pts: [number, number][] = [
      [82, 520],
      [210, 488],
      [340, 456],
      [475, 412],
      [615, 384],
      [760, 344],
      [924, 316],
    ];
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(pts[i][0], pts[i][1]);
    }
    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 6;
    ctx.stroke();

    pts.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.arc(px, py, 9, 0, Math.PI * 2);
      ctx.fillStyle = "#3B82F6";
      ctx.fill();
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 3;
      ctx.stroke();
    });
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

interface Hero3DExplainerProps {
  activeChapter: number;
  onChapterChange: (index: number) => void;
}

export default function Hero3DExplainer({
  activeChapter,
  onChapterChange,
}: Hero3DExplainerProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const activeRef = useRef<number>(activeChapter);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    activeRef.current = activeChapter;
    setProgress(0);
  }, [activeChapter]);

  // Auto-advance chapter cinema loop
  useEffect(() => {
    if (!isPlaying) return;
    const start = performance.now();
    const timer = window.setInterval(() => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, (elapsed / CHAPTER_DURATION_MS) * 100);
      setProgress(pct);
      if (elapsed >= CHAPTER_DURATION_MS) {
        onChapterChange((activeRef.current + 1) % HERO_EXPLAINER_CHAPTERS.length);
      }
    }, 60);
    return () => window.clearInterval(timer);
  }, [isPlaying, activeChapter, onChapterChange]);

  // Real-time Three.js WebGL stage
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
    renderer.setSize(container.clientWidth || 640, container.clientHeight || 460);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      38,
      (container.clientWidth || 640) / (container.clientHeight || 460),
      0.1,
      100
    );
    camera.position.set(0, 0.65, 8.6);

    // Cinematic Emerald & Brushed Gold Lighting
    const ambient = new THREE.AmbientLight(0xdbeafe, 0.9);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfff4d9, 2.2);
    keyLight.position.set(5, 7, 6);
    scene.add(keyLight);

    const emeraldRim = new THREE.PointLight(0x3b82f6, 4.2, 22);
    emeraldRim.position.set(-5.5, 2.2, 3.5);
    scene.add(emeraldRim);

    const goldRim = new THREE.PointLight(0xd4af37, 3.8, 22);
    goldRim.position.set(5.5, -1.6, 4.2);
    scene.add(goldRim);

    // Shared Metallic & Glass Materials
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.85,
      roughness: 0.22,
    });
    const darkEmeraldMetal = new THREE.MeshStandardMaterial({
      color: 0x0f2d56,
      metalness: 0.65,
      roughness: 0.28,
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x1e4d8c,
      transparent: true,
      opacity: 0.42,
      roughness: 0.14,
      metalness: 0.15,
    });
    const glowEmeraldMat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.75,
      roughness: 0.25,
    });
    const glowGoldMat = new THREE.MeshStandardMaterial({
      color: 0xf4cf6b,
      emissive: 0xc69b3a,
      emissiveIntensity: 0.85,
      roughness: 0.2,
    });

    const disposables: Array<{ dispose: () => void }> = [
      goldMat,
      darkEmeraldMetal,
      glassMat,
      glowEmeraldMat,
      glowGoldMat,
    ];

    // Subtle floating studio dust motes
    const moteCount = 90;
    const motePositions = new Float32Array(moteCount * 3);
    for (let i = 0; i < moteCount; i++) {
      motePositions[i * 3] = (Math.random() - 0.5) * 14;
      motePositions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      motePositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 1.5;
    }
    const moteGeo = new THREE.BufferGeometry();
    moteGeo.setAttribute("position", new THREE.BufferAttribute(motePositions, 3));
    const moteMat = new THREE.PointsMaterial({
      color: 0xe6c86e,
      size: 0.055,
      transparent: true,
      opacity: 0.55,
    });
    const motes = new THREE.Points(moteGeo, moteMat);
    scene.add(motes);
    disposables.push(moteGeo, moteMat);

    // =========================================================================
    // ACT 0: WEBSITES & WEB APPS (Floating 3D Desktop + Mobile + Enquiry Card)
    // =========================================================================
    const act0 = new THREE.Group();
    const browserTex = makeBrowserTexture();
    const mobileTex = makeMobileTexture();
    const enquiryTex = makeBadgeCardTexture(
      "LIVE ENQUIRY",
      "New Quote Request",
      "Sent straight to WhatsApp & Email",
      "#2563EB"
    );
    disposables.push(browserTex, mobileTex, enquiryTex);

    // Desktop frame
    const desktopGroup = new THREE.Group();
    const bezelGeo = new THREE.BoxGeometry(4.32, 2.74, 0.14);
    const bezelMesh = new THREE.Mesh(bezelGeo, goldMat);
    const screenGeo = new THREE.PlaneGeometry(4.14, 2.56);
    const screenMat = new THREE.MeshBasicMaterial({ map: browserTex });
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.z = 0.075;
    desktopGroup.add(bezelMesh, screenMesh);
    desktopGroup.position.set(0.35, 0.35, 0);
    desktopGroup.rotation.y = -0.18;
    act0.add(desktopGroup);
    disposables.push(bezelGeo, screenGeo, screenMat);

    // Companion mobile device
    const mobileGroup = new THREE.Group();
    const phoneBezelGeo = new THREE.BoxGeometry(1.18, 2.1, 0.12);
    const phoneBezel = new THREE.Mesh(phoneBezelGeo, darkEmeraldMetal);
    const phoneTrimGeo = new THREE.BoxGeometry(1.22, 2.14, 0.08);
    const phoneTrim = new THREE.Mesh(phoneTrimGeo, goldMat);
    const phoneScreenGeo = new THREE.PlaneGeometry(1.06, 1.94);
    const phoneScreenMat = new THREE.MeshBasicMaterial({ map: mobileTex });
    const phoneScreen = new THREE.Mesh(phoneScreenGeo, phoneScreenMat);
    phoneScreen.position.z = 0.066;
    mobileGroup.add(phoneTrim, phoneBezel, phoneScreen);
    mobileGroup.position.set(-2.15, -0.1, 0.95);
    mobileGroup.rotation.y = 0.34;
    act0.add(mobileGroup);
    disposables.push(phoneBezelGeo, phoneTrimGeo, phoneScreenGeo, phoneScreenMat);

    // Floating enquiry card
    const enquiryGeo = new THREE.PlaneGeometry(2.15, 0.8);
    const enquiryMat = new THREE.MeshBasicMaterial({
      map: enquiryTex,
      transparent: true,
    });
    const enquiryCard = new THREE.Mesh(enquiryGeo, enquiryMat);
    enquiryCard.position.set(1.85, -1.05, 1.25);
    enquiryCard.rotation.y = -0.22;
    act0.add(enquiryCard);
    disposables.push(enquiryGeo, enquiryMat);

    // Orbiting brushed gold halo ring
    const halo0Geo = new THREE.TorusGeometry(2.75, 0.025, 16, 96);
    const halo0 = new THREE.Mesh(halo0Geo, goldMat);
    halo0.rotation.x = Math.PI * 0.44;
    halo0.position.y = -0.3;
    act0.add(halo0);
    disposables.push(halo0Geo);
    scene.add(act0);

    // =========================================================================
    // ACT 1: VOICE & AI RECEPTIONISTS (3D Acoustic Sculpture + Call Routing)
    // =========================================================================
    const act1 = new THREE.Group();

    // Central frosted emerald voice core
    const coreGeo = new THREE.IcosahedronGeometry(0.88, 2);
    const coreMesh = new THREE.Mesh(coreGeo, glowEmeraldMat);
    act1.add(coreMesh);
    disposables.push(coreGeo);

    // Dual counter-rotating brushed gold gimbal rings
    const ring1Geo = new THREE.TorusGeometry(1.42, 0.045, 20, 96);
    const ring1 = new THREE.Mesh(ring1Geo, goldMat);
    const ring2Geo = new THREE.TorusGeometry(1.78, 0.032, 20, 96);
    const ring2 = new THREE.Mesh(ring2Geo, goldMat);
    ring2.rotation.x = Math.PI / 2.4;
    act1.add(ring1, ring2);
    disposables.push(ring1Geo, ring2Geo);

    // 24 Animated 3D acoustic frequency bars
    const waveBars: THREE.Mesh[] = [];
    const barGeo = new THREE.BoxGeometry(0.08, 0.5, 0.08);
    disposables.push(barGeo);
    for (let i = 0; i < 24; i++) {
      const angle = (i / 24) * Math.PI * 2;
      const bar = new THREE.Mesh(barGeo, i % 3 === 0 ? glowGoldMat : glowEmeraldMat);
      bar.position.set(Math.cos(angle) * 2.15, 0, Math.sin(angle) * 2.15);
      bar.lookAt(0, 0, 0);
      act1.add(bar);
      waveBars.push(bar);
    }

    // Flanking live telemetry glass cards
    const callInTex = makeBadgeCardTexture(
      "UK CALL ANSWERED",
      "Polite British Voice",
      "Answered in 0.6s • 24/7 Coverage",
      "#C69B3A"
    );
    const leadOutTex = makeBadgeCardTexture(
      "WORKFLOW AUTOMATED",
      "Lead Sent to WhatsApp",
      "Caller details & job summary logged",
      "#2563EB"
    );
    disposables.push(callInTex, leadOutTex);

    const card1Geo = new THREE.PlaneGeometry(2.1, 0.78);
    const card1Mat = new THREE.MeshBasicMaterial({ map: callInTex, transparent: true });
    const cardIn = new THREE.Mesh(card1Geo, card1Mat);
    cardIn.position.set(-2.35, 1.15, 0.75);
    cardIn.rotation.y = 0.25;

    const card2Mat = new THREE.MeshBasicMaterial({ map: leadOutTex, transparent: true });
    const cardOut = new THREE.Mesh(card1Geo, card2Mat);
    cardOut.position.set(2.35, -0.95, 0.75);
    cardOut.rotation.y = -0.25;
    act1.add(cardIn, cardOut);
    disposables.push(card1Geo, card1Mat, card2Mat);

    // Curved data arc + moving gold pulse spheres
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.1, 0.75, 0.5),
      new THREE.Vector3(-0.7, 0.55, 1.0),
      new THREE.Vector3(0.7, -0.35, 1.0),
      new THREE.Vector3(2.1, -0.55, 0.5),
    ]);
    const tubeGeo = new THREE.TubeGeometry(curve, 48, 0.02, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.45,
    });
    act1.add(new THREE.Mesh(tubeGeo, tubeMat));
    disposables.push(tubeGeo, tubeMat);

    const pulseGeo = new THREE.SphereGeometry(0.09, 16, 16);
    const pulses = [0, 0.33, 0.66].map(() => {
      const m = new THREE.Mesh(pulseGeo, glowGoldMat);
      act1.add(m);
      return m;
    });
    disposables.push(pulseGeo);

    act1.scale.setScalar(0.001);
    scene.add(act1);

    // =========================================================================
    // ACT 2: SOFTWARE & SAAS (Isometric 3D Modular Cloud & Dashboard Stack)
    // =========================================================================
    const act2 = new THREE.Group();
    const saasTex = makeSaasDashboardTexture();
    disposables.push(saasTex);

    // 3 Stacked frosted emerald glass architectural slabs
    const slabGeo = new THREE.BoxGeometry(3.4, 0.14, 2.25);
    const slabTrimGeo = new THREE.EdgesGeometry(slabGeo);
    const slabTrimMat = new THREE.LineBasicMaterial({ color: 0xd4af37 });
    disposables.push(slabGeo, slabTrimGeo, slabTrimMat);

    const slabY = [-1.05, -0.1, 0.85];
    const slabs: THREE.Group[] = [];
    slabY.forEach((y, idx) => {
      const g = new THREE.Group();
      const slab = new THREE.Mesh(slabGeo, idx === 2 ? darkEmeraldMetal : glassMat);
      const edges = new THREE.LineSegments(slabTrimGeo, slabTrimMat);
      g.add(slab, edges);

      if (idx === 2) {
        // Live SaaS Dashboard on top layer
        const dashGeo = new THREE.PlaneGeometry(3.2, 2.04);
        const dashMat = new THREE.MeshBasicMaterial({ map: saasTex });
        const dash = new THREE.Mesh(dashGeo, dashMat);
        dash.rotation.x = -Math.PI / 2;
        dash.position.y = 0.075;
        g.add(dash);
        disposables.push(dashGeo, dashMat);
      }
      g.position.y = y;
      act2.add(g);
      slabs.push(g);
    });

    // 4 Brushed gold vertical data conduits + rising light packets
    const conduitGeo = new THREE.CylinderGeometry(0.03, 0.03, 2.1, 12);
    const packetGeo = new THREE.SphereGeometry(0.085, 14, 14);
    disposables.push(conduitGeo, packetGeo);

    const conduitOffsets: [number, number][] = [
      [-1.3, -0.78],
      [1.3, -0.78],
      [-1.3, 0.78],
      [1.3, 0.78],
    ];
    const packets: THREE.Mesh[] = [];
    conduitOffsets.forEach(([cx, cz]) => {
      const pipe = new THREE.Mesh(conduitGeo, goldMat);
      pipe.position.set(cx, -0.1, cz);
      act2.add(pipe);

      const pkt = new THREE.Mesh(packetGeo, glowGoldMat);
      pkt.position.set(cx, -1.0, cz);
      act2.add(pkt);
      packets.push(pkt);
    });

    act2.rotation.set(0.32, -0.45, 0);
    act2.scale.setScalar(0.001);
    scene.add(act2);

    const acts = [act0, act1, act2];

    // Pointer parallax state
    const pointer = { x: 0, y: 0 };
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    container.addEventListener("pointermove", handlePointerMove);

    // ResizeObserver
    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = container.clientWidth || 640;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    // Animation loop
    let rafId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = window.requestAnimationFrame(animate);
      const t = prefersReducedMotion ? 0 : clock.getElapsedTime();
      const targetAct = activeRef.current;

      // Smoothly transition act scales & vertical staging
      acts.forEach((group, idx) => {
        const isCurrent = idx === targetAct;
        const targetScale = isCurrent ? 1 : 0.001;
        const nextScale = THREE.MathUtils.lerp(group.scale.x, targetScale, 0.09);
        group.scale.setScalar(nextScale);
        group.visible = nextScale > 0.015;
      });

      // Act 0 gentle studio choreography
      desktopGroup.position.y = 0.35 + Math.sin(t * 1.1) * 0.08;
      mobileGroup.position.y = -0.1 + Math.cos(t * 1.35) * 0.1;
      enquiryCard.position.y = -1.02 + Math.sin(t * 1.8) * 0.09;
      halo0.rotation.z = t * 0.25;

      // Act 1 acoustic voice wave rhythm
      coreMesh.rotation.y = t * 0.45;
      coreMesh.rotation.x = Math.sin(t * 0.6) * 0.2;
      ring1.rotation.z = t * 0.55;
      ring1.rotation.x = Math.sin(t * 0.4) * 0.4;
      ring2.rotation.y = -t * 0.45;
      waveBars.forEach((bar, idx) => {
        const wave = 0.55 + Math.abs(Math.sin(t * 3.4 + idx * 0.45)) * 1.65;
        bar.scale.y = wave;
      });
      pulses.forEach((p, idx) => {
        const u = (t * 0.35 + idx * 0.33) % 1;
        curve.getPointAt(u, p.position);
      });

      // Act 2 SaaS modular stack breathing & rising data packets
      act2.rotation.y = -0.45 + Math.sin(t * 0.5) * 0.22;
      slabs.forEach((s, idx) => {
        s.position.y = slabY[idx] + Math.sin(t * 1.2 + idx * 0.8) * 0.045;
      });
      packets.forEach((pkt, idx) => {
        const u = (t * 0.55 + idx * 0.25) % 1;
        pkt.position.y = -1.05 + u * 1.9;
      });

      // Ambient gold motes drift
      motes.rotation.y = t * 0.04;

      // Subtle camera parallax
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.55, 0.05);
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        0.55 - pointer.y * 0.35,
        0.05
      );
      camera.lookAt(0, 0.05, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(rafId);
      container.removeEventListener("pointermove", handlePointerMove);
      resizeObserver.disconnect();
      disposables.forEach((d) => d.dispose());
      renderer.dispose();
    };
  }, []);

  const current = HERO_EXPLAINER_CHAPTERS[activeChapter] || HERO_EXPLAINER_CHAPTERS[0];

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#07162B] via-[#0E2A4F] to-[#040D1B] border border-[#0A1628]/15 shadow-editorial">
      {/* Top Cinema HUD */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#051122]/80 backdrop-blur-md border border-[#C69B3A]/35 text-[10.5px] font-mono font-medium uppercase tracking-[0.14em] text-[#F4E3B2]">
          <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
          <span>Interactive 3D Studio Reel</span>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-label={isPlaying ? "Pause 3D explainer" : "Play 3D explainer"}
          className="pointer-events-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#051122]/80 hover:bg-[#143A6B] backdrop-blur-md border border-white/15 text-white text-[11px] font-semibold transition-colors cursor-pointer"
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          <span>{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>

      {/* Real-Time Three.js WebGL Stage */}
      <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[420px]">
        {webglError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-white/90">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[#C69B3A] mb-2">
              {current.tag}
            </span>
            <p className="text-xl font-bold text-white mb-2">{current.title}</p>
            <p className="text-sm text-white/75 max-w-sm">{current.description}</p>
          </div>
        ) : (
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
        )}
      </div>

      {/* Bottom Synced Explainer Overlay & Chapter Switcher */}
      <div className="relative z-20 bg-[#051122]/92 backdrop-blur-md border-t border-white/10 p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5">
          <div>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37] block">
              {current.tag}
            </span>
            <div className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5">
              {current.title}
            </div>
            <p className="text-xs text-blue-100/80 mt-0.5">{current.description}</p>
          </div>
          <span className="font-mono text-[10.5px] font-semibold text-[#F4E3B2] bg-[#C69B3A]/20 border border-[#C69B3A]/40 px-2.5 py-1 rounded-full self-start sm:self-center whitespace-nowrap">
            Act {current.num} / 03
          </span>
        </div>

        {/* Clickable Chapter Progress Tabs */}
        <div className="grid grid-cols-3 gap-2">
          {HERO_EXPLAINER_CHAPTERS.map((chapter, idx) => {
            const isActive = idx === activeChapter;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onChapterChange(idx)}
                className={`text-left px-2.5 py-2 rounded-lg border transition-all cursor-pointer ${
                  isActive
                    ? "bg-white/10 border-[#C69B3A]/60 text-white"
                    : "bg-white/[0.03] border-white/10 text-blue-100/65 hover:text-white hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex items-center justify-between gap-1 text-[10.5px] font-semibold">
                  <span className="truncate">{chapter.shortLabel}</span>
                  <span className="font-mono text-[9.5px] text-[#D4AF37]">{chapter.num}</span>
                </div>
                <div className="mt-1.5 h-1 w-full rounded-full bg-white/15 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#3B82F6] to-[#D4AF37] transition-all duration-75"
                    style={{
                      width: isActive ? `${progress}%` : idx < activeChapter ? "100%" : "0%",
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
