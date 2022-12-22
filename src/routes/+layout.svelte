<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import 'nprogress/nprogress.css';
	NProgress.configure({
		minimum: 0.16
	});
	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
	import '../app.scss';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />

<slot />

<Footer />
