export default [  // the order matters for rendering the <NavBar>
    { path: '/', name: 'Home • Necessity Of A Global Democracy' },
    { path: '/structure-of-terra/', name: 'Structure Of Terra' },
    { path: '/roadmap/', name: 'Roadmap' },
    { path: '', name: 'A New Economic System' },
    { path: '/join/', name: 'Join' },
    { path: '', name: 'FAQ' },
    { path: '/about/', name: 'About' },
    { path: '/disclaimer/', name: 'Disclaimer', noNavBar: true },           // << shall be excluded from <NavBar>
    { path: '/privacy-policy/', name: 'Privacy Policy', noNavBar: true },   // <<
];
