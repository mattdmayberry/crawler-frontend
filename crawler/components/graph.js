
var crawler = cytoscape({
  container: document.getElementById('crawler'),
  elements: [
    { data: { id: 'a' } },
    { data: { id: 'b' } },
    {
      data: {
        id: 'ab',
        source: 'a',
        target: 'b'
      }
    }],
  style: [
    {
      selector: 'node',
      style: {
        shape: 'circle',
        'background-color': '#1b24d1',
        label: 'data(id)'
      }
    }]
});
for (var i = 0; i < 10; i++) {
    crawler.add({
        data: { id: 'node' + i }
        }
    );
    var source = 'node' + i;
    crawler.add({
        data: {
            id: 'edge' + i,
            source: source,
            target: (i % 2 == 0 ? 'a' : 'b')
        }
    });
}
crawler.layout({
    name: 'circle'
});