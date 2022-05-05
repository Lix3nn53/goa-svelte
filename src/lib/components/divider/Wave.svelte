<div class="wave-container">
	<div class="wave" />
	<div class="wave" />
	<div class="wave" />
</div>

<style>
	.wave-container {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
	}

	.wave {
		position: absolute;
		height: 500px;
		width: 500px;
		opacity: 0.6;
		border-radius: 40%;
		background: linear-gradient(#353535, #383737);
		animation: wave 14s infinite linear;
	}

	@keyframes wave {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.wave:nth-child(2) {
		animation-delay: 0.8s;
	}

	.wave:nth-child(3) {
		animation-delay: 0.5s;
	}
</style>
