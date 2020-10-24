<script>
export default {
    functional: true,
    props: {
        vnode: {},
    },
    render: (h, { props }) => props.vnode,
};
</script>