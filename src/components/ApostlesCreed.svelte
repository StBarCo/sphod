<!-- ApostlesCreed -->
<script>
    import Rubric from './Rubric.svelte';
    import Line from './Line.svelte';

    let indent = true;
</script>

<h3>The Apostles’ Creed</h3>
<Rubric text={"Officiant and People together, all standing"} />
<Line text={"I believe in God, the Father almighty,"} />
<Line {indent} text={"creator of heaven and earth."} />
<Line text={"I believe in Jesus Christ, his only Son, our Lord."} />
<Line text={"He was conceived by the Holy Spirit"} />
<Line {indent} text={"and born of the Virgin Mary."} />
<Line {indent} text={"He suffered under Pontius Pilate,"} />
<Line {indent} text={"was crucified, died, and was buried."} />
<Line {indent} text={"He descended to the dead."} />
<Line {indent} text={"On the third day he rose again."} />
<Line {indent} text={"He ascended into heaven,"} />
<Line {indent} text={"and is seated at the right hand of the Father."} />
<Line {indent} text={"He will come again to judge the living and the dead."} />
<Line text={"I believe in the Holy Spirit,"} />
<Line {indent} text={"the holy catholic Church,"} />
<Line {indent} text={"the communion of saints,"} />
<Line {indent} text={"the forgiveness of sins,"} />
<Line {indent} text={"the resurrection of the body,"} />
<Line {indent} text={"and the life everlasting. Amen."} />