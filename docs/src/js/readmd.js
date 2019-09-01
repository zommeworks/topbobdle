$.get('posts/example.md',{},function(content){
      let lines=content.split('\n');

       console.log(`"example.md" contains ${lines.length} lines`)
      console.log(`First line : ${lines[0]}`)

});
