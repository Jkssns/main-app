<template>
	<div class="unlock-container">
	  <canvas ref="canvas" width="300" height="300" @mousedown="handleMouseDown" @mousemove="handleMouseMove" @mouseup="handleMouseUp"></canvas>
	</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const canvas = ref(null);
  const context = ref(null);
  const points = ref([]);
  const selectedPoints = ref([]);
  const isDrawing = ref(false);
  
  const initPoints = () => {
	const radius = 15;
	const offset = 75;
	for (let row = 0; row < 3; row++) {
	  for (let col = 0; col < 3; col++) {
		points.value.push({
		  x: col * offset + offset,
		  y: row * offset + offset,
		  radius: radius,
		  selected: false,
		});
	  }
	}
  };
  
  const drawPoints = () => {
	context.value.clearRect(0, 0, 300, 300);
	points.value.forEach(point => {
	  context.value.beginPath();
	  context.value.arc(point.x, point.y, point.radius, 0, Math.PI * 2, true);
	  context.value.fillStyle = point.selected ? 'blue' : 'gray';
	  context.value.fill();
	  context.value.closePath();
	});
  };
  
  const handleMouseDown = (event) => {
	isDrawing.value = true;
	handleMouseMove(event);
  };
  
  const handleMouseMove = (event) => {
	if (!isDrawing.value) return;
	const rect = canvas.value.getBoundingClientRect();
	const mouseX = event.clientX - rect.left;
	const mouseY = event.clientY - rect.top;
	points.value.forEach(point => {
	  if (
		!point.selected &&
		Math.sqrt((mouseX - point.x) ** 2 + (mouseY - point.y) ** 2) < point.radius
	  ) {
		point.selected = true;
		selectedPoints.value.push(point);
		drawPoints();
	  }
	});
	drawLines();
  };
  
  const handleMouseUp = () => {
	isDrawing.value = false;
	verifyPattern();
	resetPoints();
  };
  
  const drawLines = () => {
	if (selectedPoints.value.length < 2) return;
	context.value.beginPath();
	context.value.moveTo(selectedPoints.value[0].x, selectedPoints.value[0].y);
	for (let i = 1; i < selectedPoints.value.length; i++) {
	  context.value.lineTo(selectedPoints.value[i].x, selectedPoints.value[i].y);
	}
	context.value.strokeStyle = 'blue';
	context.value.stroke();
	context.value.closePath();
  };
  
  const verifyPattern = () => {
	const correctPattern = '012345678';
	const inputPattern = selectedPoints.value.map(point => points.value.indexOf(point)).join('');
	if (inputPattern === correctPattern) {
	  alert('Unlock successful!');
	} else {
	  alert('Unlock failed. Try again.');
	}
  };
  
  const resetPoints = () => {
	points.value.forEach(point => {
	  point.selected = false;
	});
	selectedPoints.value = [];
	drawPoints();
  };
  
  onMounted(() => {
	context.value = canvas.value.getContext('2d');
	initPoints();
	drawPoints();
  });
  </script>
  
  <style scoped>
  .unlock-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
  }
  canvas {
	border: 1px solid #ccc;
  }
  </style>
  