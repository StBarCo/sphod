<!-- Text
    for use with non-indented/outdented Text
    it will wrap
-->
<script>
    export let text
             , indent = false
             , bold = false
             , smallcaps = false
             , center = false
             , italic = false
             ;
    let thisClass = indent ? "indent" : "";

    function thisStyle() {
        let s = ""
        s += indent ? "margin-left: 2em; text-indent: 0;" : "";
        s += bold ? "font-weight: bold;" : "";
        s += smallcaps ? "font-variant: small-caps;" : "";
        s += center ? "text-align: center;" : "";
        s += italic ? "font-style: italic;" : "";
        return s;
    }
</script>
<style>
    p {
        line-height: 1.3em;
        margin: 0;
        text-indent: -3em;
        margin-left: 3em;
    }
</style>

<p class={thisClass} style={thisStyle()}>{text}</p>