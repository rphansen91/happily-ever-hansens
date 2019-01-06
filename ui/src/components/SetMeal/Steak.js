import React from "react";

export default ({ style, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    version="1.1"
    style={{ height: "1em", ...style }}
    {...props}
  >
    <path d="M 25.15625 -0.03125 C 24.851563 -0.0351563 24.578125 -0.0234375 24.3125 0 C 24.300781 0 24.292969 0 24.28125 0 C 22.59375 0.191406 21.152344 1.261719 19.875 2.71875 C 18.597656 4.175781 17.449219 6.066406 16.4375 8.15625 C 14.414063 12.335938 12.894531 17.296875 12.03125 21.0625 C 10.792969 26.300781 8.003906 28.789063 5.3125 31.40625 C 2.621094 34.023438 0 36.875 0 42.1875 C 0 44.074219 1.007813 45.660156 2.46875 46.78125 C 3.929688 47.902344 5.835938 48.679688 7.96875 49.1875 C 12.234375 50.203125 17.371094 50.195313 21.375 49.46875 L 21.375 49.5 C 31.167969 47.808594 41.402344 42.359375 46.625 35.59375 C 49.234375 32.210938 50.601563 28.414063 49.75 24.625 C 48.921875 20.933594 45.988281 17.453125 40.65625 14.46875 C 39.351563 8.46875 36.367188 4.695313 33.15625 2.5625 C 30.273438 0.648438 27.277344 -0.0117188 25.15625 -0.03125 Z M 25.15625 1.96875 C 26.847656 1.996094 29.523438 2.554688 32.03125 4.21875 C 34.910156 6.132813 37.65625 9.460938 38.8125 15.28125 C 38.867188 15.574219 39.050781 15.824219 39.3125 15.96875 C 44.605469 18.835938 47.125 21.996094 47.8125 25.0625 C 48.5 28.128906 47.40625 31.296875 45.03125 34.375 C 40.277344 40.535156 30.335938 45.890625 21.03125 47.5 C 21.03125 47.511719 21.03125 47.519531 21.03125 47.53125 C 17.335938 48.203125 12.347656 48.152344 8.4375 47.21875 C 6.480469 46.753906 4.808594 46.078125 3.6875 45.21875 C 2.566406 44.359375 2 43.402344 2 42.1875 C 2 37.5 4.0625 35.425781 6.71875 32.84375 C 9.375 30.261719 12.605469 27.292969 13.96875 21.53125 C 14.804688 17.898438 16.324219 13.003906 18.25 9.03125 C 19.210938 7.046875 20.28125 5.28125 21.375 4.03125 C 22.457031 2.792969 23.515625 2.117188 24.46875 2 C 24.476563 2 24.492188 2 24.5 2 C 24.699219 1.984375 24.914063 1.964844 25.15625 1.96875 Z M 25.125 4.96875 C 24.867188 4.96875 24.636719 4.976563 24.40625 5 C 22.890625 5.136719 21.730469 6.1875 20.84375 7.53125 C 19.957031 8.875 19.246094 10.601563 18.65625 12.46875 C 17.476563 16.203125 16.722656 20.558594 16.03125 23.5625 C 14.996094 27.890625 12.296875 31.199219 9.78125 33.875 C 8.523438 35.210938 7.296875 36.398438 6.375 37.5 C 5.460938 38.59375 4.746094 39.652344 4.8125 40.9375 C 4.8125 40.953125 4.84375 40.953125 4.84375 40.96875 C 4.886719 41.585938 5.214844 42.121094 5.625 42.46875 C 6.046875 42.824219 6.542969 43.089844 7.125 43.3125 C 8.289063 43.761719 9.785156 44.050781 11.46875 44.25 C 14.835938 44.648438 18.941406 44.59375 22.28125 43.96875 L 22.28125 44 C 30.4375 42.613281 38.621094 38.65625 42.8125 33.5625 C 44.90625 31.015625 46.015625 28.054688 45.3125 25.09375 C 44.632813 22.226563 42.285156 19.5625 38.15625 17.1875 C 37.101563 12.136719 34.609375 8.921875 31.90625 7.125 C 29.46875 5.503906 26.941406 4.960938 25.125 4.96875 Z M 25.125 6.96875 C 26.496094 6.972656 28.710938 7.40625 30.78125 8.78125 C 33.144531 10.351563 35.40625 13.101563 36.3125 17.96875 C 36.359375 18.273438 36.542969 18.539063 36.8125 18.6875 C 40.917969 20.957031 42.847656 23.339844 43.375 25.5625 C 43.902344 27.785156 43.09375 30.042969 41.25 32.28125 C 37.566406 36.761719 29.679688 40.683594 21.9375 42 C 21.925781 42.011719 21.917969 42.019531 21.90625 42.03125 C 18.847656 42.605469 14.875 42.65625 11.71875 42.28125 C 10.140625 42.09375 8.746094 41.785156 7.84375 41.4375 C 7.394531 41.261719 7.066406 41.070313 6.90625 40.9375 C 6.839844 40.882813 6.820313 40.863281 6.8125 40.84375 C 6.8125 40.8125 6.808594 40.796875 6.8125 40.8125 C 6.808594 40.453125 7.140625 39.734375 7.9375 38.78125 C 8.753906 37.804688 9.925781 36.625 11.21875 35.25 C 13.804688 32.5 16.804688 28.902344 17.96875 24.03125 C 18.679688 20.9375 19.472656 16.605469 20.59375 13.0625 C 21.152344 11.292969 21.789063 9.734375 22.5 8.65625 C 23.210938 7.578125 23.910156 7.0625 24.59375 7 C 24.753906 6.984375 24.929688 6.96875 25.125 6.96875 Z M 27.3125 11 C 25.726563 10.929688 24.15625 11.875 23.40625 13.46875 C 22.402344 15.601563 22.996094 18.265625 25 19.46875 C 25.011719 19.46875 25.019531 19.46875 25.03125 19.46875 C 27.039063 20.539063 29.5 19.566406 30.5 17.4375 C 31.503906 15.304688 30.910156 12.640625 28.90625 11.4375 C 28.894531 11.425781 28.886719 11.417969 28.875 11.40625 C 28.375 11.140625 27.839844 11.023438 27.3125 11 Z M 27.15625 12.96875 C 27.410156 12.984375 27.664063 13.0625 27.90625 13.1875 C 28.875 13.800781 29.277344 15.308594 28.6875 16.5625 C 28.089844 17.835938 26.960938 18.25 25.96875 17.71875 C 25 17.105469 24.628906 15.566406 25.21875 14.3125 C 25.519531 13.675781 25.925781 13.285156 26.40625 13.09375 C 26.640625 13 26.902344 12.953125 27.15625 12.96875 Z M 36.90625 23.78125 C 36.820313 23.800781 36.734375 23.832031 36.65625 23.875 L 20.9375 29.75 C 20.417969 29.949219 20.160156 30.527344 20.359375 31.046875 C 20.558594 31.566406 21.136719 31.824219 21.65625 31.625 L 37.34375 25.75 C 37.867188 25.636719 38.210938 25.128906 38.117188 24.601563 C 38.023438 24.070313 37.53125 23.710938 37 23.78125 C 36.96875 23.78125 36.9375 23.78125 36.90625 23.78125 Z M 36.90625 29.09375 C 36.820313 29.105469 36.738281 29.125 36.65625 29.15625 L 17.5625 36.25 C 17.207031 36.359375 16.941406 36.652344 16.871094 37.015625 C 16.800781 37.382813 16.9375 37.753906 17.226563 37.984375 C 17.515625 38.21875 17.910156 38.273438 18.25 38.125 L 37.34375 31.03125 C 37.820313 30.863281 38.097656 30.363281 37.984375 29.867188 C 37.875 29.375 37.410156 29.042969 36.90625 29.09375 Z " />
  </svg>
);
