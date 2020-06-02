<!-- SectionTitle -->
<script>
    export let text
            , italic=false
            , bold=false
            , center=true
            ;

function thisStyle() {
    let s = "";
    s += center ? "text-align:center;" : "";
    s += italic ? "font-style:italic;" : "";
    s += bold ? "font-style:bold;" : "";
    return s;
}


</script>

<style>
    p {
        font-size: 1.3em;
        font-variant: small-caps;
    }
</style>

<p style={thisStyle()}>{text}</p>