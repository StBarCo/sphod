<!-- Reference -->
<script>
    export let text;
    import {titleCase} from 'title-case';
</script>

<style>
    span {
        font-size: 0.8;
        float: right;
        margin-right: 0em;
    }
</style>

<span> ({titleCase(text)})</span>
<br>