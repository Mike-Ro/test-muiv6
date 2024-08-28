// app/layout.js

import '@mui/material-pigment-css/styles.css';

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    {children}
    </body>
    </html>
  );
}
