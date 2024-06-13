import * as React from 'react';

export const GithubIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
        {...rest}
        className={`w-full h-auto border rounded-full text-dark bg-light border-light dark:text-light dark:border-dark dark:bg-dark ${className}`}
    >
        <path fill="none" d="M0 0h512v512H0z" />
        <path
            fill="currentColor"
            d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
        />
    </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 209"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v209H0z" />
        <path
            fill="#55acee"
            d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
        />
    </svg>
);

export const XIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        className="bi bi-twitter-x text-dark dark:text-light"
        {...props}
    >
        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
    </svg>
);

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <g fill="none">
            <rect width={256} height={256} fill="#fff" rx={60} />
            <rect width={256} height={256} fill="#0A66C2" rx={60} />
            <path
                fill="#fff"
                d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
            />
        </g>
    </svg>
);

export const FacebookIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="126.445 2.281 589 589"
        {...props}
    >
        <circle cx={420.945} cy={296.781} r={294.5} fill="#3c5a9a" />
        <path
            fill="#fff"
            d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
        />
    </svg>
);

export const PinterestIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
            fill="#CB1F27"
            d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
        />
    </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
            fill="#E74D89"
            d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
        />
        <path
            fill="#B2215A"
            d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
        />
    </svg>
);

export const SunIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <g strokeDasharray="2">
                <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
                <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
                    <animate
                        fill="freeze"
                        attributeName="stroke-dashoffset"
                        begin="0.2s"
                        dur="0.2s"
                        values="4;2"
                    />
                </path>
            </g>
            <path
                fill="currentColor"
                d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
                opacity="0"
            >
                <set attributeName="opacity" begin="0.5s" to="1" />
            </path>
        </g>
        <g fill="currentColor" fillOpacity="0">
            <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
                <animate
                    id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
            <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
                    dur="0.4s"
                    values="0;1"
                />
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="22" cy="2" r="3" fill="#fff">
                <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
                <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
                <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" />
            </circle>
            <circle cx="22" cy="2" r="1">
                <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
                <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
                <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10" />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="6"
            fill="currentColor"
            mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
        >
            <set attributeName="opacity" begin="0.5s" to="0" />
            <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" />
        </circle>
    </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...rest}
        className={`w-full h-auto ${className}`}
    >
        <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
        <g
            fill="none"
            stroke="currentColor"
            strokeDasharray="2"
            strokeDashoffset="2"
            strokeLinecap="round"
            strokeWidth="2"
        >
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.2s"
                    dur="0.2s"
                    values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.2s"
                    dur="0.2s"
                    values="2;0"
                />
            </path>
            <path d="M0 0">
                <animate
                    fill="freeze"
                    attributeName="d"
                    begin="1.5s"
                    dur="0.2s"
                    values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                />
                <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="1.5s"
                    dur="1.2s"
                    values="2;0"
                />
            </path>
            <animateTransform
                attributeName="transform"
                dur="30s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
            />
        </g>
        <g fill="currentColor">
            <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
                <animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="1;0" />
            </path>
            <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
                <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.2s"
                    dur="0.4s"
                    values="1;0"
                />
            </path>
        </g>
        <g
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        >
            <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
            <set attributeName="opacity" begin="0.6s" to="0" />
        </g>
        <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
            <circle cx="12" cy="12" r="12" fill="#fff" />
            <circle cx="18" cy="6" r="12" fill="#fff">
                <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
                <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
                <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="12;3" />
            </circle>
            <circle cx="18" cy="6" r="10">
                <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
                <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
                <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;1" />
            </circle>
        </mask>
        <circle
            cx="12"
            cy="12"
            r="10"
            fill="currentColor"
            mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
            opacity="0"
        >
            <set attributeName="opacity" begin="0.6s" to="1" />
            <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;6" />
        </circle>
    </svg>
);

export const CircularText = ({ className, colorClass, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="496"
        height="496"
        viewBox="0 0 496 496"
        xmlSpace="preserve"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <g
            transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            fill={colorClass}
            stroke="none"
        >
            <path
                d="M2645 4366 c-5 -16 -36 -359 -33 -361 2 -1 19 -5 39 -8 l36 -5 12
141 c6 78 14 163 17 188 l4 47 -36 4 c-20 2 -37 0 -39 -6z"
            />
            <path
                d="M2801 4278 c-7 -40 -21 -122 -32 -182 -11 -59 -19 -110 -17 -111 2
-2 19 -6 39 -10 l36 -7 8 59 c3 32 18 113 31 181 14 67 22 127 19 132 -3 6
-21 10 -39 10 l-33 0 -12 -72z"
            />
            <path
                d="M2030 4295 c-63 -18 -114 -37 -114 -42 2 -9 49 -181 73 -268 17 -57
19 -60 47 -57 45 5 50 16 30 78 -10 31 -16 58 -13 60 2 2 37 13 78 23 72 19
74 20 71 47 -2 16 -4 30 -6 31 -1 1 -37 -7 -80 -17 -43 -11 -80 -20 -81 -20
-2 0 -6 12 -9 28 -4 15 -9 35 -12 44 -4 14 11 22 83 44 48 14 89 27 91 29 8 7
-19 55 -30 54 -7 -1 -65 -16 -128 -34z"
            />
            <path
                d="M2470 4186 c0 -87 -2 -96 -22 -110 -52 -37 -98 -3 -98 72 0 26 -3 64
-6 85 -6 34 -9 37 -40 37 -33 0 -34 -1 -34 -42 1 -83 18 -179 36 -199 9 -10
34 -24 55 -30 32 -10 44 -9 78 8 23 12 44 17 47 12 3 -5 21 -9 40 -9 l35 0 -6
73 c-3 39 -8 100 -11 135 l-6 62 -34 0 -34 0 0 -94z"
            />
            <path
                d="M3174 4185 c-28 -19 -48 -69 -40 -99 3 -13 36 -54 72 -90 57 -55 65
-68 54 -81 -26 -32 -80 -16 -140 41 l-35 33 -24 -20 -24 -20 34 -35 c71 -75
178 -101 236 -58 22 17 29 30 31 66 3 43 1 46 -63 106 -67 62 -76 85 -44 105
22 14 69 -6 111 -45 l31 -29 21 21 c27 27 16 45 -54 88 -60 36 -130 43 -166
17z"
            />
            <path
                d="M2916 4113 c-16 -40 -1 -53 85 -72 36 -8 40 -7 45 16 4 13 5 26 2 28
-2 2 -32 13 -65 23 -53 17 -63 17 -67 5z"
            />
            <path
                d="M3486 4014 c-13 -19 -21 -23 -29 -15 -16 16 -25 14 -37 -9 -7 -14 -7
-25 1 -38 10 -16 6 -28 -29 -79 -53 -75 -54 -104 -6 -149 40 -39 70 -43 79
-13 5 15 1 25 -14 35 -29 21 -26 41 15 103 l36 53 25 -24 25 -23 19 24 20 24
-27 22 c-26 21 -27 22 -9 49 10 14 16 28 14 30 -18 13 -54 36 -59 36 -3 0 -13
-12 -24 -26z"
            />
            <path
                d="M1449 3917 c-9 -12 -19 -33 -24 -46 -5 -17 -9 -20 -15 -11 -7 11 -13
10 -34 -4 -14 -9 -26 -21 -26 -26 0 -5 37 -54 82 -108 l83 -99 27 20 c16 12
28 23 28 27 0 3 -22 33 -50 67 -55 68 -61 95 -28 130 l22 24 -25 24 -24 24
-16 -22z"
            />
            <path
                d="M1756 3894 c-21 -20 -20 -37 2 -57 35 -32 82 -15 82 28 0 43 -53 61
-84 29z"
            />
            <path
                d="M3630 3831 c0 -5 -2 -15 -5 -23 -3 -8 9 -21 31 -33 45 -24 68 -57 59
-85 -8 -27 -14 -26 -55 11 -40 37 -96 63 -113 53 -32 -18 -57 -50 -57 -72 0
-49 59 -112 105 -112 13 0 15 -3 6 -13 -8 -11 -5 -19 14 -37 l26 -24 72 72
c70 70 72 74 72 122 0 42 -5 54 -35 85 -50 52 -120 85 -120 56z m4 -165 c47
-39 12 -85 -40 -52 -29 20 -39 39 -30 61 8 22 37 18 70 -9z"
            />
            <path
                d="M1235 3711 c-60 -37 -79 -67 -79 -125 -1 -68 23 -103 88 -130 46 -20
46 -20 93 0 53 22 113 91 113 130 0 20 -5 24 -27 24 -21 0 -32 -8 -43 -32 -21
-45 -63 -74 -90 -62 -20 9 -17 14 44 84 36 41 64 80 63 85 -5 16 -70 45 -102
45 -16 0 -43 -8 -60 -19z m85 -60 c-1 -3 -21 -28 -45 -54 -42 -46 -44 -47 -55
-26 -24 45 30 105 83 91 9 -2 17 -7 17 -11z"
            />
            <path
                d="M3767 3553 c-44 -31 -63 -82 -52 -139 9 -52 80 -124 122 -124 27 0
29 2 25 33 -3 27 -9 35 -35 43 -81 24 -47 144 41 144 28 0 62 -42 62 -77 0
-23 6 -33 27 -42 76 -35 48 114 -32 167 -49 31 -109 30 -158 -5z"
            />
            <path
                d="M1037 3453 c-34 -22 -70 -93 -60 -118 5 -14 3 -17 -9 -13 -17 7 -55
-49 -42 -62 5 -4 78 -47 162 -94 l153 -85 19 31 19 31 -56 35 c-49 31 -53 36
-36 43 26 10 59 55 67 95 9 39 -11 90 -48 123 -35 33 -127 40 -169 14z m116
-73 c36 -28 42 -54 20 -90 -28 -48 -76 -52 -121 -9 -28 25 -28 59 -1 93 25 32
66 34 102 6z"
            />
            <path
                d="M4115 3370 c-22 -10 -92 -41 -155 -70 -63 -28 -118 -55 -123 -59 -7
-7 10 -71 19 -71 3 0 18 7 34 15 23 12 34 13 55 3 14 -6 24 -14 23 -17 -2 -3
-17 -32 -33 -63 l-29 -58 20 -41 20 -40 44 85 c24 47 49 86 55 86 6 0 39 -11
73 -25 34 -14 64 -25 67 -25 3 0 -4 18 -15 40 -20 40 -38 51 -134 89 -27 11
-28 13 -10 25 10 7 54 27 97 45 42 19 77 35 77 36 0 9 -33 65 -38 65 -4 -1
-25 -9 -47 -20z"
            />
            <path
                d="M911 3143 c-50 -26 -74 -64 -79 -126 -7 -92 49 -157 135 -157 88 0
155 90 138 188 -14 85 -117 136 -194 95z m110 -81 c29 -24 30 -75 1 -104 -49
-49 -141 -2 -128 66 4 17 14 37 23 44 25 18 77 15 104 -6z"
            />
            <path
                d="M4135 2852 c-82 -8 -151 -16 -153 -18 -2 -1 2 -46 8 -100 18 -166 70
-234 178 -234 68 0 113 19 144 61 36 48 40 78 32 201 l-7 108 -26 -2 c-14 0
-93 -8 -176 -16z m150 -189 c-11 -63 -84 -98 -163 -77 -28 8 -57 63 -65 126
-8 56 -12 54 128 65 l90 8 8 -45 c4 -25 5 -59 2 -77z"
            />
            <path
                d="M675 2819 c-4 -17 -4 -33 -1 -36 6 -7 312 -63 342 -63 17 0 24 8 29
31 4 17 5 33 2 35 -5 5 -329 63 -354 64 -6 0 -14 -14 -18 -31z"
            />
            <path
                d="M831 2672 c-54 -27 -76 -65 -75 -127 1 -135 149 -194 238 -95 33 37
36 45 36 104 0 48 -5 70 -19 87 -19 23 -19 23 -40 5 -15 -14 -18 -23 -11 -37
24 -44 0 -129 -36 -129 -11 0 -14 20 -14 105 0 102 -1 105 -22 105 -13 0 -38
-8 -57 -18z m39 -127 c0 -71 -15 -85 -44 -43 -21 29 -20 67 1 90 32 35 43 23
43 -47z"
            />
            <path
                d="M4050 2434 c-43 -37 -60 -75 -60 -137 0 -67 17 -95 47 -76 18 11 20
19 16 65 -5 48 -3 55 23 81 l29 28 3 -25 c1 -14 -1 -61 -6 -105 -5 -44 -7 -84
-4 -89 8 -13 83 1 111 21 42 31 63 81 58 137 -4 43 -10 55 -45 88 -36 33 -47
38 -91 38 -39 0 -56 -6 -81 -26z m142 -71 c28 -25 24 -77 -9 -103 l-28 -22 -3
38 c-4 42 5 104 15 104 4 0 15 -7 25 -17z"
            />
            <path
                d="M760 2338 c0 -36 10 -43 95 -62 44 -10 86 -22 93 -25 9 -5 -17 -26
-73 -61 -58 -36 -84 -58 -80 -68 3 -7 5 -22 5 -33 0 -10 5 -19 10 -19 6 0 62
33 125 73 105 66 115 75 115 102 0 17 -4 36 -9 44 -8 12 -142 49 -238 66 -40
6 -43 5 -43 -17z"
            />
            <path
                d="M4057 2106 l-109 -11 -14 -34 c-8 -18 -14 -35 -14 -36 0 -3 179 -158
211 -182 13 -11 17 -8 26 22 l11 35 -74 61 c-40 34 -71 65 -68 70 3 5 38 9 77
9 98 0 112 5 125 46 l10 34 -36 -1 c-21 -1 -86 -7 -145 -13z"
            />
            <path
                d="M1033 2068 c-8 -17 -5 -29 14 -56 26 -39 30 -94 8 -112 -15 -13 -16
-11 -66 118 -13 34 -30 62 -36 62 -7 0 -31 -16 -52 -35 -51 -47 -61 -95 -32
-159 27 -63 70 -88 139 -83 110 8 160 112 106 219 -14 28 -52 68 -64 68 -4 0
-11 -10 -17 -22z m-57 -139 l21 -59 -20 0 c-27 0 -67 38 -67 65 0 24 29 69 38
60 4 -3 16 -33 28 -66z"
            />
            <path
                d="M3882 1862 c-46 -25 -84 -86 -90 -146 -4 -44 -3 -48 12 -43 10 4 24
7 32 7 8 0 14 10 14 25 0 51 46 105 90 105 17 0 12 -14 -35 -99 -25 -45 -45
-86 -45 -91 0 -15 76 -33 113 -26 42 8 92 60 106 111 18 66 -17 133 -85 161
-43 18 -72 17 -112 -4z m136 -111 c13 -36 -3 -71 -42 -90 -45 -21 -50 -1 -15
62 17 31 34 57 39 57 4 0 13 -13 18 -29z"
            />
            <path
                d="M1022 1750 c-68 -49 -91 -115 -68 -193 12 -41 97 -180 118 -193 6 -4
75 39 229 143 l67 45 -52 80 c-28 44 -71 96 -95 114 -38 30 -51 34 -101 34
-47 0 -64 -5 -98 -30z m183 -80 c17 -16 38 -42 47 -58 l18 -30 -43 -27 c-23
-16 -60 -40 -82 -55 -22 -15 -46 -30 -52 -34 -20 -11 -73 80 -73 127 0 51 13
73 58 97 47 25 87 19 127 -20z"
            />
            <path
                d="M3706 1619 c-11 -18 -15 -34 -9 -38 5 -3 53 -40 107 -81 54 -41 116
-88 138 -103 l41 -29 26 27 26 27 -29 21 c-16 12 -64 49 -107 82 -115 88 -165
125 -170 125 -3 0 -13 -14 -23 -31z"
            />
            <path
                d="M3636 1503 c-46 -12 -95 -56 -112 -99 -20 -53 -14 -94 21 -140 52
-68 148 -68 214 0 38 39 51 101 32 157 -18 55 -99 97 -155 82z m72 -96 c44
-40 17 -127 -41 -127 -80 0 -115 115 -44 145 35 15 52 11 85 -18z"
            />
            <path
                d="M3348 1399 l-27 -20 29 -47 29 -47 -39 -13 c-114 -39 -134 -166 -38
-247 28 -24 38 -27 85 -23 42 4 60 11 83 33 17 16 30 35 30 42 0 7 5 13 10 13
6 0 10 -4 10 -10 0 -5 13 -1 30 8 16 9 30 20 30 25 0 4 -26 47 -57 95 -32 48
-62 94 -68 103 -5 9 -23 37 -38 63 -16 25 -32 46 -35 46 -4 0 -19 -10 -34 -21z
m87 -204 c33 -32 34 -87 3 -109 -36 -25 -73 -20 -102 15 -31 37 -33 58 -5 93
27 34 71 35 104 1z"
            />
            <path
                d="M1432 1370 c-62 -38 -91 -125 -61 -183 17 -33 57 -65 90 -72 l30 -7
-37 -51 -37 -51 29 -24 c28 -24 28 -24 43 -4 9 10 50 63 91 117 41 53 87 112
103 130 l28 33 -30 21 c-21 15 -32 18 -37 10 -4 -8 -13 0 -23 22 -34 71 -123
99 -189 59z m129 -80 c36 -35 33 -61 -12 -102 -37 -35 -63 -35 -94 -2 -33 36
-31 69 4 105 37 37 65 37 102 -1z"
            />
            <path
                d="M1730 1197 c0 -31 13 -47 37 -47 52 0 93 -35 93 -81 0 -17 -10 -14
-91 27 -107 53 -114 51 -114 -36 0 -49 4 -63 25 -85 36 -39 73 -55 126 -55 40
0 51 5 84 38 71 70 61 162 -24 218 -49 33 -136 46 -136 21z m109 -183 c2 -2
-2 -11 -9 -19 -21 -25 -79 -15 -103 17 -11 14 -17 33 -14 42 5 13 14 12 64
-11 32 -14 60 -27 62 -29z"
            />
            <path
                d="M3024 1115 c-28 -14 -56 -36 -62 -49 -10 -22 -8 -25 17 -34 23 -8 30
-7 42 9 20 29 71 42 103 28 30 -14 33 -27 9 -35 -10 -4 -52 -20 -94 -37 -77
-30 -77 -30 -67 -59 26 -73 130 -103 203 -58 117 72 68 260 -68 260 -18 0 -56
-11 -83 -25z m144 -142 c-2 -14 -15 -35 -30 -46 -24 -18 -30 -18 -57 -7 -45
18 -38 35 22 58 69 26 69 26 65 -5z"
            />
            <path
                d="M2055 1043 c-11 -21 -50 -93 -88 -161 -38 -68 -67 -125 -65 -127 2
-3 19 -6 37 -7 33 -3 35 -1 95 104 33 59 63 108 66 108 3 0 13 -54 21 -120 9
-67 19 -123 22 -126 3 -3 20 -7 38 -7 31 -2 35 2 89 96 31 53 61 102 66 107 7
7 14 -29 23 -108 7 -65 16 -123 19 -129 4 -5 24 -13 45 -17 l37 -7 -5 38 c-4
21 -16 106 -28 188 l-22 150 -42 6 -42 5 -58 -108 c-32 -59 -60 -108 -63 -108
-3 0 -13 54 -22 121 -9 66 -18 122 -20 124 -2 2 -22 7 -43 10 -38 6 -41 5 -60
-32z"
            />
            <path
                d="M2836 1063 c-16 -4 -17 -10 -10 -46 4 -23 8 -67 8 -97 1 -50 -1 -55
-29 -70 -16 -8 -31 -15 -33 -16 -1 0 1 -15 4 -33 6 -26 10 -30 28 -25 11 3 31
16 44 27 20 18 22 19 22 3 0 -15 6 -16 33 -11 17 4 34 9 36 11 4 3 -13 92 -45
242 -4 22 -18 25 -58 15z"
            />
            <path
                d="M2495 1006 c-30 -45 20 -91 64 -59 23 16 28 52 9 71 -20 20 -56 14
-73 -12z"
            />
        </g>
    </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        className={`w-full h-auto ${className}`}
        {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
        />
    </svg>
);
