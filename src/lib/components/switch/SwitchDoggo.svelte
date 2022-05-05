<script lang="ts">
	export let id: string;
	export let onSwitch: () => void;
</script>

<div class="switch dog-rollover">
	<input class="doggo" {id} type="checkbox" />
	<label class="toggle-item bg-base-100" for={id} on:click={onSwitch}>
		<div class="dog">
			<div class="ear" />
			<div class="ear right" />
			<div class="face">
				<div class="eyes" />
				<div class="mouth" />
			</div>
		</div>
	</label>
</div>

<style>
	label.toggle-item {
		width: 7em;
		height: 3em;
		display: inline-block;
		border-radius: 50px;
		position: relative;
		transition: all 0.3s ease;
		transform-origin: 20% center;
		cursor: pointer;
		padding-top: 4px;
	}

	.dog-rollover label .dog {
		display: inline-block;
		position: absolute;
		width: 2.5em;
		height: 2.5em;
		left: 0.2em;
		transition: 0.6s ease;
	}
	.dog-rollover label .eyes {
		position: absolute;
		width: 8px;
		height: 8px;
		background: #222;
		border-radius: 50%;
		transform: translate(8px, 14px);
		box-shadow: 16px 0 0 #222, 22px -4px 0 12px #e4ac04;
	}
	.dog-rollover label .ear {
		width: 18px;
		height: 20px;
		position: absolute;
		left: -4px;
		bottom: 80%;
		background: #f9bb00;
		margin-bottom: -5px;
		border-radius: 50% 50% 0 0 / 100% 100% 0 0;
		box-shadow: inset 4px 0 0 0px #fff, inset -4px 0 0 0px #fff;
		transform: rotate(-40deg);
	}
	.dog-rollover label .ear.right {
		transform: rotate(60deg) scaleX(-1);
		left: auto;
		transform-origin: center bottom;
		transition: 0.4s ease-in-out;
		right: 0px;
	}
	.dog-rollover label .face {
		overflow: hidden;
		border-radius: 50%;
		width: 2.5em;
		height: 2.5em;
		position: absolute;
		background: #fff;
		z-index: 8;
	}
	.dog-rollover label .mouth {
		position: absolute;
		background: #222;
		width: 14px;
		height: 7px;
		left: 50%;
		margin-left: -7px;
		bottom: 12px;
		border-radius: 2px 2px 20px 20px;
		bottom: 8px;
		transform: scale(0);
		transition: 0.1s ease;
	}
	.dog-rollover label .mouth:before {
		width: 8px;
		height: 8px;
		background: #ec788d;
		border-radius: 0 0 50% 50%;
		transform: translate(3px, 5px);
	}
	.dog-rollover label:before {
		border-color: white;
		background: white;
	}
	input.doggo {
		display: none;
	}
	input.doggo:checked + label .dog {
		left: 68px;
		transform: rotate(360deg);
	}
	input.doggo:checked + label .mouth {
		transform: scale(1);
		transition-delay: 0.7s;
	}
	input.doggo:checked + label .ear.right {
		transform: scaleX(-1) rotate(-35deg);
		transition-delay: 0.6s;
	}
</style>
