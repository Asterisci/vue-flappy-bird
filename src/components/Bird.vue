<template>
  <div ref="three"></div>
</template>

<script>
export default {
  name: "bird",
  data() {
    return {
      scene: "",
      camera: "",
      renderer: "",
      cube: "",
    };
  },
  mounted() {
    this.initThree();
    this.demo();
  },
  methods: {
    initThree() {
      this.scene = new this.$three.Scene();
      this.camera = new this.$three.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.renderer = new this.$three.WebGLRenderer();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.three.appendChild(this.renderer.domElement);
    },
    animate() {
      requestAnimationFrame(this.animate);

      this.cube.rotation.x += 0.01;
      this.cube.rotation.y += 0.01;

      this.renderer.render(this.scene, this.camera);
    },
    demo() {
      let geometry = new this.$three.BoxGeometry();
      let material = new this.$three.MeshBasicMaterial({ color: 0x00ff00 });
      this.cube = new this.$three.Mesh(geometry, material);
      this.scene.add(this.cube);

      this.camera.position.z = 5;
      this.animate();
    },
  },
};
</script>

<style>
</style>