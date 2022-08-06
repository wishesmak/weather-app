import React from 'react';

const WindSvg = ({ isNight }: { isNight: boolean }) => {
  let color = isNight ? '#ffdb64' : '#203752';
  return (
    <svg
      style={{ width: 20, marginRight: 5 }}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512">
      <path
        fill={color}
        d="M86.814,305.815H14.583C6.53,305.815,0,299.286,0,291.232s6.53-14.583,14.583-14.583h72.231
	c8.053,0,14.583,6.529,14.583,14.583S94.868,305.815,86.814,305.815z"
      />
      <circle fill={isNight ? '#1e2935' : '#4be2e3'} cx="427.624" cy="361.023" r="69.79" />
      <g>
        <path
          fill={color}
          d="M427.626,276.648c-0.639,0-1.272,0.034-1.908,0.048c-0.318-0.02-0.634-0.048-0.958-0.048H148.071
		c-8.053,0-14.583,6.529-14.583,14.583s6.53,14.583,14.583,14.583h215.833c-12.848,14.809-20.65,34.107-20.65,55.206
		c0,46.523,37.849,84.373,84.371,84.373c46.523,0,84.373-37.849,84.373-84.373S474.151,276.648,427.626,276.648z M427.626,416.228
		c-30.441,0-55.205-24.765-55.205-55.206s24.764-55.206,55.205-55.206s55.206,24.765,55.206,55.206S458.067,416.228,427.626,416.228
		z"
        />
        <path
          fill={color}
          d="M426.809,247.1H78.545c-8.053,0-14.583-6.529-14.583-14.583s6.53-14.583,14.583-14.583h348.264
		c30.893,0,56.024-25.131,56.024-56.024s-25.131-56.024-56.024-56.024c-30.892,0-56.023,25.131-56.023,56.024
		c0,8.054-6.53,14.583-14.583,14.583c-8.053,0-14.583-6.529-14.583-14.583c0-46.974,38.215-85.191,85.189-85.191
		S512,114.935,512,161.909S473.783,247.1,426.809,247.1z"
        />
        <path
          fill={color}
          d="M134.959,188.981H14.583C6.53,188.981,0,182.452,0,174.398s6.53-14.583,14.583-14.583h120.376
		c8.053,0,14.583,6.529,14.583,14.583S143.012,188.981,134.959,188.981z"
        />
        <path
          fill={color}
          d="M243.693,188.981h-47.484c-8.053,0-14.583-6.529-14.583-14.583s6.53-14.583,14.583-14.583h47.484
		c19.515,0,35.394-15.877,35.394-35.392s-15.878-35.392-35.394-35.392s-35.392,15.877-35.392,35.392
		c0,8.054-6.53,14.583-14.583,14.583c-8.053,0-14.583-6.529-14.583-14.583c0-35.598,28.959-64.559,64.559-64.559
		s64.56,28.961,64.56,64.559S279.292,188.981,243.693,188.981z"
        />
        <path
          fill={color}
          d="M256.187,452.136c-32.241,0-58.471-26.229-58.471-58.471c0-8.054,6.53-14.583,14.583-14.583
		s14.583,6.529,14.583,14.583c0,16.158,13.147,29.305,29.305,29.305s29.305-13.147,29.305-29.305s-13.147-29.305-29.305-29.305
		H78.545c-8.053,0-14.583-6.529-14.583-14.583s6.53-14.583,14.583-14.583h177.641c32.241,0,58.471,26.229,58.471,58.471
		S288.427,452.136,256.187,452.136z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export default WindSvg;