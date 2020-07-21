import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Note(props) {
  return (
    <Svg height={512} viewBox="0 0 511.958 511.958" width={512} {...props}>
      <Path d="M56.732 415.97a7.501 7.501 0 007.494-7.944c-6.469-109.157-5.302-219.857 3.469-329.025C69 62.773 81.755 49.756 98.026 48.048c7.877-.833 15.844-1.608 23.777-2.314v13.001c0 13.973 11.368 25.341 25.342 25.341s25.342-11.368 25.342-25.341V42.069c7.237-.405 14.546-.761 21.871-1.062v17.728c0 13.973 11.368 25.341 25.341 25.341 13.974 0 25.342-11.368 25.342-25.341V39.788c7.28-.056 14.59-.056 21.871 0v18.948c0 13.973 11.368 25.341 25.342 25.341s25.342-11.368 25.342-25.341V41.007c7.325.301 14.634.656 21.87 1.062v16.667c0 13.973 11.368 25.341 25.342 25.341s25.342-11.368 25.342-25.341V45.735c7.912.705 15.878 1.479 23.777 2.314 16.266 1.707 29.021 14.724 30.326 30.953a2364.052 2364.052 0 013.27 46.452 7.5 7.5 0 0014.972-.906 2371.707 2371.707 0 00-3.291-46.749c-1.885-23.423-20.269-42.208-43.707-44.667-8.42-.89-16.916-1.71-25.348-2.453v-5.337C390.15 11.368 378.781 0 364.808 0s-25.342 11.368-25.342 25.341v1.703c-7.239-.401-14.549-.75-21.87-1.048v-.655C317.596 11.368 306.228 0 292.254 0c-13.788 0-25.031 11.07-25.328 24.787-7.29-.055-14.609-.055-21.899 0C244.73 11.07 233.487 0 219.699 0c-13.973 0-25.341 11.368-25.341 25.341v.655c-7.321.298-14.632.647-21.871 1.048v-1.703C172.487 11.368 161.119 0 147.146 0s-25.342 11.368-25.342 25.341v5.337c-8.456.745-16.954 1.566-25.349 2.453-23.443 2.46-41.827 21.246-43.712 44.668-8.826 109.861-10.001 221.264-3.492 331.115a7.5 7.5 0 007.481 7.056zM354.466 25.341c0-5.702 4.64-10.341 10.342-10.341s10.342 4.639 10.342 10.341v33.395c0 5.702-4.64 10.341-10.342 10.341s-10.342-4.639-10.342-10.341zm-72.554 0c0-5.702 4.64-10.341 10.342-10.341s10.342 4.639 10.342 10.341v33.395c0 5.702-4.64 10.341-10.342 10.341s-10.342-4.639-10.342-10.341zm-72.553 0c0-5.702 4.639-10.341 10.341-10.341s10.342 4.639 10.342 10.341v33.395c0 5.702-4.64 10.341-10.342 10.341s-10.341-4.639-10.341-10.341zm-72.555 0c0-5.702 4.64-10.341 10.342-10.341s10.342 4.639 10.342 10.341v33.395c0 5.702-4.64 10.341-10.342 10.341s-10.342-4.639-10.342-10.341zM464.09 153.957a7.483 7.483 0 00-7.854-7.128 7.5 7.5 0 00-7.128 7.854c4.869 100.5 3.236 202.466-4.854 303.065-1.307 16.223-14.061 29.236-30.328 30.943-104.805 11.023-211.089 11.023-315.903 0-16.267-1.707-29.021-14.721-30.327-30.946-.482-5.963-.965-12.304-1.516-19.954a7.492 7.492 0 00-8.02-6.941 7.5 7.5 0 00-6.941 8.02 2238.86 2238.86 0 001.525 20.083c1.885 23.416 20.269 42.196 43.711 44.657a1525.465 1525.465 0 00159.523 8.349c53.291 0 106.599-2.784 159.514-8.349 23.444-2.459 41.828-21.24 43.713-44.658 8.142-101.24 9.785-203.855 4.885-304.995z" />
      <Path d="M403.367 139.486H180.35c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h223.018a7.5 7.5 0 10-.001-15zM141.084 139.486h-33.798c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h33.798c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM131.685 124.834v-13.538c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v13.538a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5zM403.367 210.773H180.35c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h223.018a7.5 7.5 0 10-.001-15zM141.084 210.773h-33.798c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h33.798c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM131.685 196.121v-13.538c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v13.538a7.5 7.5 0 0015 0zM403.367 282.06H180.35c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h223.018a7.5 7.5 0 10-.001-15zM141.084 282.06h-33.798c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h33.798c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM131.685 267.408v-13.537c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v13.537a7.5 7.5 0 0015 0zM403.367 353.347H180.35c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h223.018a7.5 7.5 0 10-.001-15zM141.084 353.347h-33.798c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h33.798c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5zM131.685 338.694v-13.537c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v13.537a7.5 7.5 0 0015 0zM403.367 424.633H180.35c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h223.018a7.5 7.5 0 10-.001-15zM99.786 432.133a7.5 7.5 0 007.5 7.5h33.798c4.143 0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5h-33.798a7.5 7.5 0 00-7.5 7.5zM131.685 409.981v-13.538c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v13.538a7.5 7.5 0 007.5 7.5 7.5 7.5 0 007.5-7.5z" />
    </Svg>
  );
}

export default Note;
