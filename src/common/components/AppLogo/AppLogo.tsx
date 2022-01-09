import React from 'react';

export type AppLogoProps = {} & React.SVGProps<SVGSVGElement>;

const AppLogo = (props: AppLogoProps) => {
  return (
    <svg {...props} viewBox="0 0 142 41" aria-label="Market logo">
      <path
        d="M5.78402 20.928C5.78402 21.696 5.97602 22.448 6.36002 23.184C6.77602 23.888 7.33602 24.24 8.04002 24.24C8.77602 24.24 9.33602 24.16 9.72002 24C10.136 23.808 10.376 23.712 10.44 23.712C10.632 23.712 10.728 23.84 10.728 24.096C10.728 24.352 10.536 24.608 10.152 24.864C9.80002 25.088 9.14402 25.2 8.18402 25.2C7.25602 25.2 6.48802 24.816 5.88002 24.048C5.27202 23.28 4.92002 22.432 4.82402 21.504V36H0.0720215V13.776H4.82402V20.784C4.95202 18.768 5.94402 17.024 7.80002 15.552C9.65602 14.048 11.592 13.296 13.608 13.296C15.656 13.296 17.112 13.92 17.976 15.168C18.872 16.384 19.432 18.144 19.656 20.448C19.784 18.528 20.776 16.864 22.632 15.456C24.52 14.016 26.456 13.296 28.44 13.296C30.552 13.296 32.104 14.032 33.096 15.504C34.12 16.944 34.632 20.032 34.632 24.768V36H29.832V26.016C29.832 22.24 29.624 19.424 29.208 17.568C28.824 15.712 28.072 14.784 26.952 14.784C25.544 14.784 24.136 15.44 22.728 16.752C21.32 18.064 20.616 19.456 20.616 20.928C20.616 21.696 20.808 22.448 21.192 23.184C21.608 23.888 22.264 24.24 23.16 24.24C23.704 24.24 24.168 24.16 24.552 24C24.968 23.808 25.208 23.712 25.272 23.712C25.464 23.712 25.56 23.84 25.56 24.096C25.56 24.352 25.368 24.608 24.984 24.864C24.632 25.088 24.008 25.2 23.112 25.2C22.248 25.2 21.512 24.896 20.904 24.288C20.296 23.648 19.912 22.832 19.752 21.84C19.784 22.448 19.8 23.424 19.8 24.768V36H15V26.016C15 22.24 14.792 19.424 14.376 17.568C13.992 15.712 13.24 14.784 12.12 14.784C10.712 14.784 9.30402 15.44 7.89602 16.752C6.48802 18.064 5.78402 19.456 5.78402 20.928Z"
        fill="white"
      />
      <path
        d="M47.3411 36.48C45.0371 36.48 42.9891 35.84 41.1971 34.56C39.4371 33.248 38.5571 31.44 38.5571 29.136C38.5571 27.792 38.8771 26.624 39.5171 25.632C40.1891 24.64 41.0371 23.904 42.0611 23.424C43.9491 22.464 45.7891 21.984 47.5811 21.984C49.3731 21.984 51.4051 22.464 53.6771 23.424C53.6451 19.712 53.1811 17.248 52.2851 16.032C51.4212 14.784 50.0771 14.16 48.2531 14.16C46.4291 14.16 44.8451 14.496 43.5011 15.168C42.1891 15.84 41.5331 16.736 41.5331 17.856C41.5331 18.24 41.3571 18.432 41.0051 18.432C40.6851 18.432 40.5251 18.256 40.5251 17.904C40.5251 16.56 41.2611 15.456 42.7331 14.592C44.2371 13.696 46.4451 13.248 49.3571 13.248C55.4371 13.248 58.4771 16.832 58.4771 24V36H53.6771V32.208C53.4531 33.456 52.7331 34.48 51.5171 35.28C50.3011 36.08 48.9091 36.48 47.3411 36.48ZM51.5651 27.504C52.7171 28.304 53.4211 29.408 53.6771 30.816V24.288C51.3731 23.36 49.4851 22.896 48.0131 22.896C46.5731 22.896 45.4371 23.504 44.6051 24.72C43.7731 25.936 43.3571 27.424 43.3571 29.184C43.3571 30.944 43.6931 32.448 44.3651 33.696C45.0691 34.912 46.1091 35.52 47.4851 35.52C48.8931 35.52 50.1251 35.168 51.1811 34.464C52.2371 33.728 52.7651 32.864 52.7651 31.872C52.7651 30.144 52.1891 28.96 51.0371 28.32C50.5571 28.032 50.3171 27.76 50.3171 27.504C50.3171 27.248 50.4291 27.12 50.6531 27.12C50.8771 27.12 51.1811 27.248 51.5651 27.504Z"
        fill="white"
      />
      <path
        d="M80.0816 15.6C80.0816 15.952 79.9377 16.224 79.6497 16.416C79.3937 16.608 79.0576 16.704 78.6416 16.704C78.2256 16.704 77.8896 16.592 77.6336 16.368C77.3776 16.112 77.2016 15.84 77.1056 15.552C77.0416 15.264 76.8496 15.008 76.5296 14.784C76.2096 14.528 75.7616 14.4 75.1856 14.4C73.7776 14.4 72.4657 15.424 71.2496 17.472C70.0336 19.52 69.3297 21.84 69.1376 24.432V36H64.3376V13.776H69.1376V19.44C69.9056 17.584 70.8976 16.048 72.1136 14.832C73.3616 13.584 74.6096 12.96 75.8577 12.96C77.1057 12.96 78.1136 13.184 78.8816 13.632C79.6816 14.048 80.0816 14.704 80.0816 15.6Z"
        fill="white"
      />
      <path
        d="M101.669 40.32C99.9413 40.32 98.5973 39.744 97.6373 38.592C96.7093 37.472 96.1013 36.08 95.8133 34.416C95.5573 32.752 95.3333 31.072 95.1413 29.376C94.7253 25.184 93.4773 22.896 91.3973 22.512L87.6533 27.456V36H82.8533V0H87.6533V25.872L93.7013 17.856C94.9173 16.224 96.3413 14.896 97.9733 13.872C99.6053 12.848 101.285 12.336 103.013 12.336C103.621 12.336 103.925 12.48 103.925 12.768C103.925 13.152 103.733 13.344 103.349 13.344C102.453 13.344 101.669 13.408 100.997 13.536C100.357 13.632 99.3973 14.096 98.1173 14.928C96.8373 15.76 95.5893 16.976 94.3733 18.576L92.0213 21.648C92.7253 21.584 93.1893 21.552 93.4133 21.552C95.0453 21.552 96.3573 22 97.3493 22.896C98.3733 23.76 99.0293 24.848 99.3173 26.16C99.6373 27.472 99.8773 28.912 100.037 30.48C100.229 32.016 100.341 33.44 100.373 34.752C100.437 36.064 100.677 37.152 101.093 38.016C101.509 38.912 102.101 39.36 102.869 39.36C103.637 39.36 104.309 39.136 104.885 38.688C105.461 38.272 105.909 37.84 106.229 37.392C106.549 36.976 106.773 36.768 106.901 36.768C107.029 36.768 107.093 36.832 107.093 36.96C107.093 37.12 107.045 37.296 106.949 37.488C105.989 39.376 104.229 40.32 101.669 40.32Z"
        fill="white"
      />
      <path
        d="M112.436 34.32C112.884 34.64 113.444 34.912 114.116 35.136C114.82 35.36 115.668 35.472 116.66 35.472C117.652 35.472 118.708 35.248 119.828 34.8C120.948 34.32 121.732 33.616 122.18 32.688H123.572C122.324 35.216 119.7 36.48 115.7 36.48C112.628 36.48 110.02 35.392 107.876 33.216C105.764 31.008 104.708 28.256 104.708 24.96C104.708 21.632 105.828 18.864 108.068 16.656C110.308 14.416 112.74 13.296 115.364 13.296C118.02 13.296 120.1 14.032 121.604 15.504C123.14 16.944 123.908 18.656 123.908 20.64C123.908 22.624 123.092 24.384 121.46 25.92C119.828 27.456 117.684 28.224 115.028 28.224C112.372 28.224 110.516 27.088 109.46 24.816C109.492 25.04 109.524 25.52 109.556 26.256C109.62 26.992 109.668 27.568 109.7 27.984C109.732 28.4 109.812 28.976 109.94 29.712C110.1 30.448 110.26 31.04 110.42 31.488C110.612 31.936 110.884 32.448 111.236 33.024C111.588 33.568 111.988 34 112.436 34.32ZM119.78 20.4C119.78 16.272 118.212 14.208 115.076 14.208C113.54 14.208 112.276 14.96 111.284 16.464C110.324 17.936 109.78 19.728 109.652 21.84C110.036 20.944 110.612 20.224 111.38 19.68C112.18 19.136 112.996 18.864 113.828 18.864C114.692 18.864 115.124 19.024 115.124 19.344C115.124 19.632 114.932 19.776 114.548 19.776C113.076 19.872 111.988 20.24 111.284 20.88C110.612 21.52 110.276 22.384 110.276 23.472C110.276 24.56 110.66 25.488 111.428 26.256C112.228 26.992 113.156 27.36 114.212 27.36C115.94 27.36 117.3 26.672 118.292 25.296C119.284 23.888 119.78 22.256 119.78 20.4Z"
        fill="white"
      />
      <path
        d="M125.438 14.736V13.776H129.854V7.2H134.654V13.776H139.694V14.736H134.654V29.568C134.654 33.536 135.518 35.52 137.246 35.52C137.918 35.52 138.542 35.312 139.118 34.896C139.694 34.448 140.142 34.016 140.462 33.6C140.782 33.152 141.006 32.928 141.134 32.928C141.262 32.928 141.326 33.008 141.326 33.168C141.326 33.296 141.278 33.456 141.182 33.648C140.222 35.536 138.462 36.48 135.902 36.48C133.854 36.48 132.334 35.696 131.342 34.128C130.35 32.56 129.854 30.464 129.854 27.84V14.736H125.438Z"
        fill="white"
      />
    </svg>
  );
};

AppLogo.displayName = 'AppLogo';

export default AppLogo;
