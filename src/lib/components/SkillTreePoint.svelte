<script lang="ts">
  export let src = "/img/guide/skills/1.png";
  export let top = 0;
  export let left = 0;
</script>

<div
  class="point border-4 rounded w-16 h-16"
  style="background-image: url('{src}'); top: {top}px; left: {left}px;"
>
  <div class="card hide fade-in-line">
    <h3>Expertise</h3>
    <div class="card-foot">
      <span
        >At 1st level, choose two of your skill Proficiencies, or one of your
        skill Proficiencies and your proficiency with Thieves' Tools. Your
        Proficiency Bonus is doubled for any ability check you make that uses
        either of the chosen Proficiencies.</span
      >
    </div>
  </div>
</div>

<style>
  .point {
    box-shadow: 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 8px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(245, 175, 25, 0.5), 0 0 30px rgba(245, 175, 25, 0.5),
      0 0 40px rgba(245, 175, 25, 0.5), 0 0 50px rgba(245, 175, 25, 0.2),
      0 0 80px rgba(245, 175, 25, 0.2);
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
  }

  /*skills*/
  .hide {
    display: none;
  }
  .point:hover .hide {
    display: block;
    z-index: 3;
    overflow-y: auto;
  }
  .card {
    width: 215px;
    height: auto;
    min-height: 260px;
    background: rgb(var(--color-base-100));
    position: relative;
    border-radius: 12px;
    margin-left: 45px;
  }
  .card h3 {
    padding: 0 8px;
    margin: -28px 0 0 0;
    font-size: 14px;
    position: relative;
  }
  .card-foot {
    padding: 8px;
  }
  .card-foot span {
    font-size: 12px;
  }
</style>
