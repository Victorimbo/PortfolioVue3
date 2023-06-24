<template>
    <div class="loader">
        <span class="loadingElement-1"></span>
        <span class="loadingElement-2"></span>
        <span class="loadingElement-3"></span>
      </div>
</template>

<script>
    export default {
        name: 'Loading'
    };
</script>

<style>
    .loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  z-index: 9999;
}
.loader {
    display: flex;
    height: 200px;
    width: 200px;
    flex-wrap: wrap;
}

.loadingElement-1 {
    height: 50%;
    width: 50%;
    background-color: #EB3D41;
    animation: resize 800ms infinite;
    transform-origin: bottom right;
}
 
.loadingElement-2 {
    height: 50%;
    width: 50%;
    background-color: #F5CF54;
    animation: resize 800ms infinite;
    transform-origin: bottom left;
    animation-delay: 200ms;
}
    
.loadingElement-3 {
    height: 50%;
    width: 50%;
    background-color: #04467F;
    animation: resize 800ms infinite;
    transform-origin: top right;
    animation-delay: 400ms;
}

@keyframes resize {
  0% {
    transform: scale(1) translateX(100%); }
  50% {
    transform: scale(0.5) translateX(50%); }
  100% {
    transform: scaleY(1) translateX(100%); } }

</style>