/**
 * @file Provides a custom css variable '--reactive-vh',
 *       that, in contrast to the real css 'vh' unit, actually depicts the true viewport height
 *       (vh unit does not account for mobile browser's navigation bar height)
 */

export function install_reactive_vh() {
    function update_reactive_vh() {
        console.log('update_reactive_vh');
        window.document.documentElement.style.setProperty('--reactive-vh', `${window.innerHeight * 0.01}px`);
    }
    update_reactive_vh();  // initial hydration
    window.addEventListener('resize', update_reactive_vh);
}
