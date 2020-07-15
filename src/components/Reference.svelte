<!-- Reference -->
<script>
    export let text;
    import {titleCase} from 'title-case';

  function myTitleCase(s) {
    if (typeof s === 'string' || s instanceof String) return titleCase(s);
    return "";
  }


</script>

<style>
    span {
        font-size: 0.8;
        float: right;
        margin-right: 0em;
    }
</style>

<span> ({myTitleCase(text)})</span>
<br>