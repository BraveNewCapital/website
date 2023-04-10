const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			'xs': '370px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},	  
		extend: {}
	},

	plugins: []
};

module.exports = config;
